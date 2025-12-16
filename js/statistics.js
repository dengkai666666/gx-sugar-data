// 统计分析页面JavaScript逻辑 - 广西糖业专用
// 性能优化版本：分批渲染图表，避免页面卡顿

// 重试计数器
let retryCount = 0;
const maxRetries = 10;

// 等待Chart.js和数据加载完成后再初始化
function initCharts() {
    // 检查Chart.js是否已加载
    if (typeof Chart === 'undefined') {
        retryCount++;
        if (retryCount < maxRetries) {
            console.warn('Chart.js 尚未加载，500ms后重试... (' + retryCount + '/' + maxRetries + ')');
            setTimeout(initCharts, 500);
        } else {
            console.error('Chart.js 加载失败，请检查网络连接后刷新页面');
        }
        return;
    }

    // 检查数据是否已加载
    if (typeof yearlyProductionData === 'undefined' || typeof regionSugarData === 'undefined') {
        retryCount++;
        if (retryCount < maxRetries) {
            console.warn('数据尚未加载，500ms后重试... (' + retryCount + '/' + maxRetries + ')');
            setTimeout(initCharts, 500);
        } else {
            console.error('数据加载失败，请刷新页面');
        }
        return;
    }

    console.log('Chart.js 和数据加载成功，开始渲染图表...');

    // 全局Chart.js配置 - 禁用动画以提升性能
    Chart.defaults.animation = false;
    Chart.defaults.responsive = true;
    Chart.defaults.maintainAspectRatio = false;

    // 先渲染表格（快速）
    calculateStatistics();
    renderYearlyTable();

    // 分批渲染图表，避免阻塞主线程
    renderChartsProgressively();
}

document.addEventListener('DOMContentLoaded', function() {
    // 延迟100ms确保其他脚本加载完成
    setTimeout(initCharts, 100);
});

// 分批渲染图表
function renderChartsProgressively() {
    const chartFunctions = [
        renderYearlyChart,
        renderSectorChart,
        renderRegionChart,
        renderAreaChart,
        renderTechInnovationChart,
        renderValueUpgradingChart,
        renderGreenDevelopmentChart,
        renderIndustrialParkChart
    ];

    let index = 0;

    function renderNext() {
        if (index < chartFunctions.length) {
            chartFunctions[index]();
            index++;
            // 使用 requestAnimationFrame 让浏览器有机会更新UI
            requestAnimationFrame(renderNext);
        }
    }

    // 开始渲染
    requestAnimationFrame(renderNext);
}

// 计算统计数据
function calculateStatistics() {
    // 按产业环节统计
    const sectorStats = {};
    if (typeof industryData !== 'undefined') {
        industryData.forEach(item => {
            if (!sectorStats[item.sector]) {
                sectorStats[item.sector] = {
                    count: 0,
                    totalOutput: 0
                };
            }
            sectorStats[item.sector].count++;
            sectorStats[item.sector].totalOutput += item.annualOutput || 0;
        });
    }

    // 按地区统计（使用regionSugarData）
    const regionStats = {};
    if (typeof regionSugarData !== 'undefined') {
        regionSugarData.forEach(item => {
            regionStats[item.region] = {
                sugarOutput: item.sugarOutput,
                caneVolume: item.caneVolume,
                caneVolumeType: item.caneVolumeType,
                factories: item.factories,
                season: item.season,
                caneArea: item.caneArea
            };
        });
    }

    // 渲染表格
    renderSectorTable(sectorStats);
    renderRegionHistoryTable();
    renderRegionSummary(regionStats);

    return { sectorStats, regionStats };
}

// 渲染产业环节统计表
function renderSectorTable(stats) {
    const tbody = document.getElementById('sectorStatsTable');

    // 按产业链顺序排列：种植→制糖→贸易→科研
    const sectorOrder = ['种植', '制糖', '贸易', '科研'];
    const sorted = sectorOrder
        .filter(sector => stats[sector]) // 只保留存在的环节
        .map(sector => [sector, stats[sector]]);

    let html = '';
    sorted.forEach(([sector, data]) => {
        // 根据产业环节标注不同的单位和说明
        let outputLabel = '';
        let note = '';

        if (sector === '制糖') {
            outputLabel = formatNumber(data.totalOutput) + ' <small class="text-muted">(食糖)</small>';
            note = '<small class="text-info">10家龙头</small>';
        } else if (sector === '种植') {
            outputLabel = formatNumber(data.totalOutput) + ' <small class="text-muted">(糖料蔗)</small>';
            note = '<small class="text-info">代表区域</small>';
        } else {
            outputLabel = formatNumber(data.totalOutput);
            note = '';
        }

        html += `
            <tr>
                <td><strong>${sector}</strong> ${note}</td>
                <td>${data.count}</td>
                <td>${outputLabel}</td>
            </tr>
        `;
    });
    tbody.innerHTML = html;
}

// 渲染地区统计表
function renderRegionHistoryTable() {
    const tbody = document.getElementById('regionStatsTable');
    if (!tbody) return;

    const rows = (typeof regionSugarHistoryData !== 'undefined' && Array.isArray(regionSugarHistoryData) && regionSugarHistoryData.length)
        ? regionSugarHistoryData
        : (typeof regionSugarData !== 'undefined' ? regionSugarData : []);

    const seasonKey = (season) => {
        const match = (season || '').match(/^(\d{4})/);
        return match ? Number(match[1]) : -1;
    };

    const typeBadge = (type) => {
        if (!type) return '';
        if (type.includes('入榨')) return '入榨';
        if (type.includes('进厂')) return '进厂';
        if (type.includes('产量')) return '产量';
        return type.length > 6 ? type.slice(0, 6) : type;
    };

    const sorted = [...rows].sort((a, b) => {
        const bySeason = seasonKey(b.season) - seasonKey(a.season);
        if (bySeason !== 0) return bySeason;
        return (b.sugarOutput || 0) - (a.sugarOutput || 0);
    });

    let html = '';
    sorted.forEach((row) => {
        const sugarOutputWanTon = (typeof row.sugarOutput === 'number') ? (row.sugarOutput / 10000).toFixed(2) : '—';
        const caneValueWanTon = (typeof row.caneVolume === 'number') ? (row.caneVolume / 10000).toFixed(2) : '—';
        const caneType = typeBadge(row.caneVolumeType);
        const caneCell = caneType ? `${caneValueWanTon} <small class="text-muted">${caneType}</small>` : caneValueWanTon;
        const factoriesText = (typeof row.factories === 'number') ? row.factories : '—';
        const seasonText = row.season || '—';

        html += `
            <tr>
                <td><strong>${row.region}</strong></td>
                <td>${sugarOutputWanTon}</td>
                <td>${caneCell}</td>
                <td>${factoriesText}</td>
                <td>${seasonText}</td>
            </tr>
        `;
    });

    tbody.innerHTML = html;
}

function renderRegionSummary(stats) {
    const seasonLabelEl = document.getElementById('regionSeasonLabel');
    const gxTotalSugarEl = document.getElementById('gxTotalSugarWanTon');
    const regionShareEl = document.getElementById('regionSharePct');
    const regionNoteEl = document.getElementById('regionCaneVolumeNote');

    if (!seasonLabelEl && !gxTotalSugarEl && !regionShareEl && !regionNoteEl) return;

    const entries = Object.entries(stats || {});
    const seasons = [...new Set(entries.map(([, d]) => d.season).filter(Boolean))];
    const season = seasons.length === 1 ? seasons[0] : (seasons.length === 0 ? '—' : '混合口径');

    if (seasonLabelEl) seasonLabelEl.textContent = season;

    // 全区总产糖（万吨）：优先从 yearlyProductionData 中取同榨季口径
    let gxTotalSugarWanTon = null;
    if (typeof yearlyProductionData !== 'undefined' && season && season !== '—' && season !== '混合口径') {
        const hit = yearlyProductionData.find(x => x.season === season);
        if (hit && typeof hit.sugarOutput === 'number') gxTotalSugarWanTon = hit.sugarOutput;
    }

    if (gxTotalSugarEl) gxTotalSugarEl.textContent = (gxTotalSugarWanTon === null) ? '—' : gxTotalSugarWanTon.toFixed(2);

    const selectedCitiesSugarWanTon = entries
        .map(([, d]) => (typeof d.sugarOutput === 'number' ? d.sugarOutput / 10000 : 0))
        .reduce((a, b) => a + b, 0);

    if (regionShareEl) {
        if (gxTotalSugarWanTon === null || gxTotalSugarWanTon <= 0) {
            regionShareEl.textContent = '—';
        } else {
            regionShareEl.textContent = ((selectedCitiesSugarWanTon / gxTotalSugarWanTon) * 100).toFixed(2) + '%';
        }
    }

    if (regionNoteEl) {
        const noteParts = entries
            .map(([, d]) => d.caneVolumeType)
            .filter(Boolean);
        const uniqueNotes = [...new Set(noteParts)];
        regionNoteEl.textContent = uniqueNotes.length ? `糖料蔗量口径：${uniqueNotes.join(' / ')}` : '';
    }
}

// 渲染历年数据表格
function renderYearlyTable() {
    const tbody = document.getElementById('yearlyStatsTable');
    if (!tbody || typeof yearlyProductionData === 'undefined') return;

    let html = '';
    yearlyProductionData.forEach(item => {
        const isLatest = item.season === '2024/25';
        // 统一小数位格式：产糖量2位，入榨量2位，产糖率2位
        const sugarOutput = item.sugarOutput.toFixed(2);
        const caneInput = item.caneInput.toFixed(2);
        const sugarRate = item.sugarRate.toFixed(2);
        html += `
            <tr class="${isLatest ? 'table-success' : ''}">
                <td><strong>${item.season}</strong>${isLatest ? ' <span class="badge bg-success">最新</span>' : ''}</td>
                <td>${sugarOutput}</td>
                <td>${caneInput}</td>
                <td>${sugarRate}%</td>
            </tr>
        `;
    });
    tbody.innerHTML = html;
}

// 渲染历年产量趋势图
function renderYearlyChart() {
    const ctx = document.getElementById('yearlyChart');
    if (!ctx || typeof yearlyProductionData === 'undefined') return;

    const labels = yearlyProductionData.map(item => item.season);
    const sugarOutput = yearlyProductionData.map(item => item.sugarOutput);
    const sugarRate = yearlyProductionData.map(item => item.sugarRate);

    new Chart(ctx.getContext('2d'), {
        type: 'line',
        data: {
            labels: labels,
            datasets: [
                {
                    label: '产糖量(万吨)',
                    data: sugarOutput,
                    borderColor: 'rgba(25, 135, 84, 1)',
                    backgroundColor: 'rgba(25, 135, 84, 0.2)',
                    fill: true,
                    tension: 0.4,
                    yAxisID: 'y',
                    pointRadius: 6,
                    pointBackgroundColor: 'rgba(25, 135, 84, 1)',
                    pointBorderColor: '#fff',
                    pointBorderWidth: 2
                },
                {
                    label: '产糖率(%)',
                    data: sugarRate,
                    borderColor: 'rgba(255, 193, 7, 1)',
                    backgroundColor: 'rgba(255, 193, 7, 0.2)',
                    fill: false,
                    tension: 0.4,
                    yAxisID: 'y1',
                    pointRadius: 6,
                    pointBackgroundColor: 'rgba(255, 193, 7, 1)',
                    pointBorderColor: '#fff',
                    pointBorderWidth: 2
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            interaction: {
                mode: 'index',
                intersect: false
            },
            scales: {
                y: {
                    type: 'linear',
                    display: true,
                    position: 'left',
                    title: {
                        display: true,
                        text: '产糖量(万吨)'
                    },
                    min: 500,
                    max: 700
                },
                y1: {
                    type: 'linear',
                    display: true,
                    position: 'right',
                    title: {
                        display: true,
                        text: '产糖率(%)'
                    },
                    min: 11,
                    max: 14,
                    grid: {
                        drawOnChartArea: false
                    }
                }
            },
            plugins: {
                legend: {
                    position: 'top'
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const label = context.dataset.label || '';
                            const value = context.parsed.y;
                            if (label.includes('产糖率')) {
                                return `${label}: ${value}%`;
                            }
                            return `${label}: ${value}万吨`;
                        }
                    }
                }
            }
        }
    });
}

// 渲染产业环节图表
function renderSectorChart() {
    const ctx = document.getElementById('sectorChart');
    if (!ctx) return;

    // 计算产业环节统计
    const stats = {};
    if (typeof industryData !== 'undefined') {
        industryData.forEach(item => {
            if (!stats[item.sector]) {
                stats[item.sector] = { count: 0, totalOutput: 0 };
            }
            stats[item.sector].count++;
            stats[item.sector].totalOutput += item.annualOutput || 0;
        });
    }

    const labels = Object.keys(stats);
    const data = labels.map(sector => stats[sector].count);

    const colors = [
        'rgba(25, 135, 84, 0.8)',
        'rgba(40, 167, 69, 0.8)',
        'rgba(32, 201, 151, 0.8)',
        'rgba(23, 162, 184, 0.8)',
        'rgba(0, 123, 255, 0.8)',
        'rgba(255, 193, 7, 0.8)',
        'rgba(108, 117, 125, 0.8)'
    ];

    new Chart(ctx.getContext('2d'), {
        type: 'doughnut',
        data: {
            labels: labels,
            datasets: [{
                label: '企业数量',
                data: data,
                backgroundColor: colors,
                borderWidth: 2,
                borderColor: '#fff'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        padding: 15,
                        font: {
                            size: 12
                        }
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const label = context.label || '';
                            const value = context.parsed || 0;
                            const total = context.dataset.data.reduce((a, b) => a + b, 0);
                            const percentage = ((value / total) * 100).toFixed(1);
                            return `${label}: ${value} 家 (${percentage}%)`;
                        }
                    }
                }
            }
        }
    });
}

// 渲染地区产糖量图表
function renderRegionChart() {
    const ctx = document.getElementById('regionChart');
    if (!ctx) return;

    // 计算地区统计
    const stats = {};
    if (typeof regionSugarData !== 'undefined') {
        regionSugarData.forEach(item => {
            stats[item.region] = {
                sugarOutput: item.sugarOutput,
                caneVolume: item.caneVolume,
                caneVolumeType: item.caneVolumeType,
                factories: item.factories,
                season: item.season,
                caneArea: item.caneArea
            };
        });
    }

    const sorted = Object.entries(stats)
        .sort((a, b) => b[1].sugarOutput - a[1].sugarOutput);

    const labels = sorted.map(item => item[0].replace('市', ''));
    const data = sorted.map(item => item[1].sugarOutput / 10000); // 转换为万吨
    const meta = sorted.map(item => item[1]);

    new Chart(ctx.getContext('2d'), {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: '产糖量(万吨)',
                data: data,
                backgroundColor: [
                    'rgba(25, 135, 84, 0.9)',
                    'rgba(40, 167, 69, 0.85)',
                    'rgba(32, 201, 151, 0.8)',
                    'rgba(23, 162, 184, 0.75)',
                    'rgba(0, 123, 255, 0.7)',
                    'rgba(102, 126, 234, 0.65)',
                    'rgba(118, 75, 162, 0.6)',
                    'rgba(255, 193, 7, 0.55)',
                    'rgba(253, 126, 20, 0.5)',
                    'rgba(220, 53, 69, 0.45)'
                ],
                borderColor: 'rgba(25, 135, 84, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            indexAxis: 'y',
            scales: {
                x: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: '产糖量(万吨)'
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const idx = context.dataIndex;
                            const d = meta[idx] || {};
                            const sugarText = `${context.parsed.x.toFixed(2)} 万吨`;
                            const caneText = (typeof d.caneVolume === 'number')
                                ? `；${d.caneVolumeType || '糖料蔗'} ${(d.caneVolume / 10000).toFixed(2)} 万吨`
                                : '';
                            const factoriesText = (typeof d.factories === 'number')
                                ? `；制糖企业/糖厂 ${d.factories} 家`
                                : '';
                            const seasonText = d.season ? `（${d.season} 榨季）` : '';
                            return `食糖 ${sugarText}${caneText}${factoriesText}${seasonText}`;
                        }
                    }
                }
            }
        }
    });
}

// 渲染种植面积分布图
function renderAreaChart() {
    const ctx = document.getElementById('areaChart');
    if (!ctx || typeof regionSugarData === 'undefined') return;

    const sorted = [...regionSugarData].sort((a, b) => b.caneArea - a.caneArea);
    const labels = sorted.map(item => item.region.replace('市', ''));
    const data = sorted.map(item => item.caneArea);

    new Chart(ctx.getContext('2d'), {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: '种植面积(万亩)',
                data: data,
                backgroundColor: 'rgba(32, 201, 151, 0.8)',
                borderColor: 'rgba(32, 201, 151, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: '种植面积(万亩)'
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return `种植面积: ${context.parsed.y} 万亩`;
                        }
                    }
                }
            }
        }
    });
}

// 格式化数字
function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// 渲染科技创新化趋势图
function renderTechInnovationChart() {
    const ctx = document.getElementById('techInnovationChart');
    if (!ctx || typeof techInnovationData === 'undefined') return;

    const years = techInnovationData.map(item => item.year);

    new Chart(ctx.getContext('2d'), {
        type: 'line',
        data: {
            labels: years,
            datasets: [
                {
                    label: '机械化率(%)',
                    data: techInnovationData.map(item => item.mechanizationRate),
                    borderColor: 'rgba(25, 135, 84, 1)',
                    backgroundColor: 'rgba(25, 135, 84, 0.1)',
                    fill: true,
                    tension: 0.4,
                    yAxisID: 'y'
                },
                {
                    label: '良种覆盖率(%)',
                    data: techInnovationData.map(item => item.varietyCoverage),
                    borderColor: 'rgba(13, 110, 253, 1)',
                    backgroundColor: 'rgba(13, 110, 253, 0.1)',
                    fill: true,
                    tension: 0.4,
                    yAxisID: 'y'
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            interaction: {
                mode: 'index',
                intersect: false
            },
            scales: {
                y: {
                    beginAtZero: true,
                    min: 0,
                    max: 100,
                    title: {
                        display: true,
                        text: '百分比(%)'
                    }
                }
            },
            plugins: {
                legend: {
                    position: 'top'
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return `${context.dataset.label}: ${context.parsed.y}%`;
                        }
                    }
                }
            }
        }
    });
}

// 渲染价值高端化图表
function renderValueUpgradingChart() {
    const ctx = document.getElementById('valueUpgradingChart');
    if (!ctx || typeof valueUpgradingData === 'undefined' || valueUpgradingData.length === 0) return;

    const years = valueUpgradingData.map(item => item.year);

    new Chart(ctx.getContext('2d'), {
        type: 'bar',
        data: {
            labels: years,
            datasets: [
                {
                    label: '崇左循环经济产值(亿元)',
                    data: valueUpgradingData.map(item => item.chongzuoCircularValue),
                    backgroundColor: 'rgba(25, 135, 84, 0.8)',
                    borderColor: 'rgba(25, 135, 84, 1)',
                    borderWidth: 1,
                    yAxisID: 'y'
                },
                {
                    label: '来宾环保餐具产能(万吨)',
                    data: valueUpgradingData.map(item => item.laibinEcoCapacity),
                    backgroundColor: 'rgba(13, 110, 253, 0.8)',
                    borderColor: 'rgba(13, 110, 253, 1)',
                    borderWidth: 1,
                    yAxisID: 'y1'
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            layout: {
                padding: {
                    left: 10,
                    right: 10
                }
            },
            scales: {
                y: {
                    type: 'linear',
                    display: true,
                    position: 'left',
                    title: {
                        display: true,
                        text: '产值(亿元)',
                        font: {
                            size: 11
                        }
                    },
                    beginAtZero: true,
                    max: 80
                },
                y1: {
                    type: 'linear',
                    display: true,
                    position: 'right',
                    title: {
                        display: true,
                        text: '产能(万吨)',
                        font: {
                            size: 11
                        }
                    },
                    beginAtZero: true,
                    max: 40,
                    grid: {
                        drawOnChartArea: false
                    }
                }
            },
            plugins: {
                legend: {
                    position: 'top'
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const year = context.label;
                            const value = context.parsed.y;
                            const label = context.dataset.label;
                            let suffix = year >= 2025 ? ' (目标)' : '';
                            return `${label}: ${value}${suffix}`;
                        }
                    }
                }
            }
        }
    });
}

// 渲染绿色生态化图表
function renderGreenDevelopmentChart() {
    const ctx = document.getElementById('greenDevelopmentChart');
    if (!ctx || typeof greenDevelopmentData === 'undefined') return;

    const labels = greenDevelopmentData.map(item => item.label);
    const values = greenDevelopmentData.map(item => item.caneLeafUtilization);
    const colors = greenDevelopmentData.map(item =>
        item.isTarget ? 'rgba(255, 193, 7, 0.8)' : 'rgba(25, 135, 84, 0.8)'
    );
    const borderColors = greenDevelopmentData.map(item =>
        item.isTarget ? 'rgba(255, 193, 7, 1)' : 'rgba(25, 135, 84, 1)'
    );

    new Chart(ctx.getContext('2d'), {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [
                {
                    label: '蔗叶离田综合利用率(%)',
                    data: values,
                    backgroundColor: colors,
                    borderColor: borderColors,
                    borderWidth: 2,
                    borderRadius: 6,
                    barThickness: 60
                }
            ]
        },
        options: {
            indexAxis: 'x',
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    max: 50,
                    ticks: {
                        callback: function(value) {
                            return value + '%';
                        }
                    },
                    title: {
                        display: true,
                        text: '利用率(%)'
                    }
                }
            },
            plugins: {
                legend: {
                    position: 'top'
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const index = context.dataIndex;
                            const dataPoint = greenDevelopmentData[index];
                            const suffix = dataPoint.isTarget ? ' (规划目标)' : ' (实际值)';
                            return `蔗叶离田利用率: ${context.parsed.y}%${suffix}`;
                        },
                        afterLabel: function(context) {
                            return '蔗渣/糖蜜/滤泥利用率: 100%';
                        }
                    }
                }
            }
        },
    });
}

// 渲染产业园发展图表
function renderIndustrialParkChart() {
    const ctx = document.getElementById('industrialParkChart');
    if (!ctx || typeof industrialParkData === 'undefined') return;

    const years = industrialParkData.map(item => item.year);
    const values = industrialParkData.map(item => item.industrialOutput);

    new Chart(ctx.getContext('2d'), {
        type: 'bar',
        data: {
            labels: years,
            datasets: [{
                label: '工业产值(亿元)',
                data: values,
                backgroundColor: [
                    'rgba(25, 135, 84, 0.7)',
                    'rgba(13, 110, 253, 0.7)',
                    'rgba(32, 201, 151, 0.7)',
                    'rgba(255, 193, 7, 0.7)',
                    'rgba(220, 53, 69, 0.7)'
                ],
                borderColor: 'rgba(25, 135, 84, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: '工业产值(亿元)'
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const year = context.label;
                            const value = context.parsed.y;
                            let suffix = '';
                            if (year >= 2025) {
                                suffix = ' (目标值)';
                            }
                            return `工业产值: ${value}亿元${suffix}`;
                        }
                    }
                }
            }
        }
    });
}

