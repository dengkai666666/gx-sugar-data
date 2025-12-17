  // Guangxi sugar market brief page (workday factory ex-warehouse price range, with median)

  let gxPriceChart = null;

  document.addEventListener('DOMContentLoaded', () => {
    if (typeof gxSugarMarketBrief === 'undefined' || !gxSugarMarketBrief?.prices?.length) {
      renderEmptyState('No market data available.');
      return;
    }

    document.getElementById('seasonLabel').textContent = gxSugarMarketBrief.season || '—';
    document.getElementById('seasonStartLabel').textContent = gxSugarMarketBrief.seasonStart || '—';

    setupMonthFilter();
    bindExport();

    renderAll();
  });

  function setupMonthFilter() {
    const select = document.getElementById('monthFilter');
    const months = getAllMonths(gxSugarMarketBrief.prices);

    months.forEach((month) => {
      const option = document.createElement('option');
      option.value = month;
      option.textContent = month;
      select.appendChild(option);
    });

    select.addEventListener('change', () => renderAll());
  }

  function bindExport() {
    const btn = document.getElementById('exportCsvBtn');
    btn.addEventListener('click', () => {
      const rows = getFilteredPrices();
      downloadCsv(rows);
    });
  }

  function renderAll() {
    const rows = getFilteredPrices();
    renderSnapshot(rows);
    renderChart(rows);
    renderTable(rows);
  }

  function getFilteredPrices() {
    const month = document.getElementById('monthFilter').value;
    const prices = [...gxSugarMarketBrief.prices].sort((a, b) => a.date.localeCompare(b.date));
    if (!month) return prices;
    return prices.filter((p) => p.date.startsWith(month));
  }

  function renderSnapshot(prices) {
    const latestRangeEl = document.getElementById('latestRange');
    const latestDateEl = document.getElementById('latestDate');
    const latestMedianEl = document.getElementById('latestMedian');
    const latestDeltaEl = document.getElementById('latestDelta');
    const latestSourceEl = document.getElementById('latestSource');

    if (!prices.length) {
      latestRangeEl.textContent = '—';
      latestDateEl.textContent = '—';
      latestMedianEl.textContent = '—';
      latestDeltaEl.textContent = '—';
      latestSourceEl.textContent = '—';
      return;
    }

    const latest = prices[prices.length - 1];
    const prev = prices.length > 1 ? prices[prices.length - 2] : null;

    const latestMedian = getMedian(latest);
    const prevMedian = prev ? getMedian(prev) : null;
    const delta = prevMedian === null ? null : latestMedian - prevMedian;

    latestRangeEl.textContent = `${formatNumber(latest.low)}–${formatNumber(latest.high)}`;
    latestDateEl.textContent = `Updated: ${latest.date}`;
    latestMedianEl.textContent = formatNumber(latestMedian);

    if (delta === null) {
      latestDeltaEl.textContent = '—';
      latestDeltaEl.className = 'fs-4 fw-bold';
    } else {
      const sign = delta > 0 ? '+' : '';
      latestDeltaEl.textContent = `${sign}${formatNumber(delta)}`;
      latestDeltaEl.className = `fs-4 fw-bold ${delta > 0 ? 'text-success' : delta < 0 ? 'text-danger' : 'text-muted'}`;
    }

    latestSourceEl.innerHTML = latest.sourceUrl
      ? `<a class="link-light text-decoration-underline" href="${escapeAttr(latest.sourceUrl)}" target="_blank" rel="noopener noreferrer">${escapeHtml(latest.sourceName ||
  'Source')}</a>`
      : escapeHtml(latest.sourceName || 'Source');
  }

  function renderChart(prices) {
    const canvas = document.getElementById('gxSugarPriceChart');
    if (!canvas) return;

    const labels = prices.map((p) => p.date.slice(5)); // MM-DD
    const medians = prices.map((p) => getMedian(p));

    if (gxPriceChart) {
      gxPriceChart.destroy();
      gxPriceChart = null;
    }

    gxPriceChart = new Chart(canvas.getContext('2d'), {
      type: 'line',
      data: {
        labels,
        datasets: [
          {
            label: 'Median (CNY/ton)',
            data: medians,
            borderColor: '#198754',
            backgroundColor: 'rgba(25, 135, 84, 0.12)',
            borderWidth: 2,
            pointRadius: 3,
            pointHoverRadius: 5,
            tension: 0.25,
            fill: true,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: true },
          tooltip: {
            callbacks: {
              label: (ctx) => `Median: ${formatNumber(ctx.parsed.y)} CNY/ton`,
            },
          },
        },
        scales: {
          y: {
            ticks: {
              callback: (v) => formatNumber(v),
            },
          },
        },
      },
    });
  }

  function renderTable(prices) {
    const tbody = document.getElementById('priceTableBody');
    if (!tbody) return;

    if (!prices.length) {
      tbody.innerHTML = `
        <tr>
          <td colspan="4" class="text-center text-muted py-4">
            <p class="mb-0">No data for current filter.</p>
          </td>
        </tr>
      `;
      return;
    }

    tbody.innerHTML = prices
      .slice()
      .reverse()
      .map((p) => {
        const median = getMedian(p);
        const source = p.sourceUrl
          ? `<a href="${escapeAttr(p.sourceUrl)}" target="_blank" rel="noopener noreferrer">${escapeHtml(p.sourceName || 'Source')}</a>`
          : escapeHtml(p.sourceName || 'Source');

        return `
          <tr>
            <td>${escapeHtml(p.date)}</td>
            <td>${formatNumber(p.low)}–${formatNumber(p.high)}</td>
            <td>${formatNumber(median)}</td>
            <td>${source}</td>
          </tr>
        `;
      })
      .join('');
  }

  function renderEmptyState(message) {
    const tbody = document.getElementById('priceTableBody');
    if (!tbody) return;

    tbody.innerHTML = `
      <tr>
        <td colspan="4" class="text-center text-muted py-4">
          <p class="mb-0">${escapeHtml(message)}</p>
        </td>
     </tr>
     `;
  }

 function getAllMonths(prices) {
    return Array.from(new Set(prices.map((p) => p.date.slice(0, 7)))).sort();
  }

  function getMedian(p) {
    return Math.round((Number(p.low) + Number(p.high)) / 2);
  }

  function downloadCsv(prices) {
    const header = ['date', 'low', 'high', 'median', 'sourceName', 'sourceUrl'];
    const lines = [header.join(',')];

    prices.forEach((p) => {
      const row = [p.date, p.low, p.high, getMedian(p), csvCell(p.sourceName || ''), csvCell(p.sourceUrl || '')];
      lines.push(row.join(','));
    });

    const blob = new Blob([lines.join('\n')], { type: 'text/csv;charset=utf-8' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = `gx_sugar_price_${gxSugarMarketBrief.season || 'season'}_${new Date().toISOString().slice(0, 10)}.csv`;
    document.body.appendChild(a);
    a.click();
    a.remove();

    URL.revokeObjectURL(url);
  }

  function csvCell(value) {
    const str = String(value ?? '');
    if (/["\n,]/.test(str)) return `"${str.replace(/"/g, '""')}"`;
    return str;
  }

  function formatNumber(num) {
    return Number(num).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  function escapeHtml(str) {
    return String(str ?? '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function escapeAttr(str) {
    return escapeHtml(str);
  }
