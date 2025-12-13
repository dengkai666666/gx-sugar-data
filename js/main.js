// 首页JavaScript逻辑 - 广西糖业专用

// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    loadStatistics();
    loadAnnouncements();
    loadLatestResearch();
});

// 加载统计数据
function loadStatistics() {
    // 计算企业/基地总数
    const totalCompanies = industryData.length;
    animateNumber('totalCompanies', 0, totalCompanies, 1000);

    // 产糖量动画 (646.5万吨)
    animateDecimal('totalSugarOutput', 0, 646.5, 1500);

    // 种植面积动画 (1135万亩)
    animateNumber('totalCaneArea', 0, 1135, 1500);

    // 产糖率动画 (13.29%)
    animateDecimal('sugarRate', 0, 13.29, 1500);
}

// 整数动画效果
function animateNumber(elementId, start, end, duration) {
    const element = document.getElementById(elementId);
    if (!element) return;

    const range = end - start;
    const increment = range / (duration / 16);
    let current = start;

    const timer = setInterval(() => {
        current += increment;
        if (current >= end) {
            current = end;
            clearInterval(timer);
        }
        element.textContent = Math.floor(current);
    }, 16);
}

// 小数动画效果
function animateDecimal(elementId, start, end, duration) {
    const element = document.getElementById(elementId);
    if (!element) return;

    const range = end - start;
    const increment = range / (duration / 16);
    let current = start;

    const timer = setInterval(() => {
        current += increment;
        if (current >= end) {
            current = end;
            clearInterval(timer);
        }
        element.textContent = current.toFixed(2);
    }, 16);
}

// 格式化数字（添加千分位分隔符）
function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// 加载公告列表
function loadAnnouncements() {
    const container = document.getElementById('announcementList');

    if (announcementData.length === 0) {
        container.innerHTML = '<p class="text-muted text-center">暂无公告</p>';
        return;
    }

    let html = '';
    announcementData.slice(0, 3).forEach((announcement, index) => {
        html += `
            <div class="announcement-item fade-in" style="animation-delay: ${index * 0.1}s">
                <h6>${announcement.title}</h6>
                <p class="text-muted small mb-1">
                    <i class="bi bi-calendar3"></i> ${announcement.createdAt}
                </p>
                <p class="mb-0">${truncateText(announcement.content, 80)}</p>
            </div>
        `;
    });

    container.innerHTML = html;
}

// 加载最新研究成果
function loadLatestResearch() {
    const container = document.getElementById('researchList');

    if (researchData.length === 0) {
        container.innerHTML = '<p class="text-muted text-center">暂无研究成果</p>';
        return;
    }

    let html = '';
    researchData.slice(0, 3).forEach((research, index) => {
        html += `
            <div class="research-item fade-in" style="animation-delay: ${index * 0.1}s">
                <h6>
                    <a href="research.html?id=${research.id}" class="text-decoration-none text-success">
                        ${research.title}
                    </a>
                </h6>
                <p class="text-muted small mb-1">
                    <i class="bi bi-person"></i> ${research.author} ·
                    <i class="bi bi-calendar3"></i> ${research.createdAt} ·
                    <i class="bi bi-info-circle"></i> 详情
                </p>
                <p class="mb-0">${truncateText(research.abstract, 80)}</p>
            </div>
        `;
    });

    container.innerHTML = html;
}

// 截断文本
function truncateText(text, maxLength) {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
}
