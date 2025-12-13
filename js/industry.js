// 产业数据页面JavaScript逻辑

let currentPage = 1;
const itemsPerPage = 10;
let filteredData = [...industryData];

document.addEventListener('DOMContentLoaded', function() {
    loadRegionFilter();
    displayIndustryData();
    
    // 绑定搜索表单事件
    document.getElementById('filterForm').addEventListener('submit', function(e) {
        e.preventDefault();
        filterData();
    });
});

// 加载地区筛选选项
function loadRegionFilter() {
    const regions = [...new Set(industryData.map(item => item.region))].sort();
    const select = document.getElementById('regionFilter');
    
    regions.forEach(region => {
        const option = document.createElement('option');
        option.value = region;
        option.textContent = region;
        select.appendChild(option);
    });
}

// 筛选数据
function filterData() {
    const searchText = document.getElementById('searchInput').value.toLowerCase();
    const sector = document.getElementById('sectorFilter').value;
    const region = document.getElementById('regionFilter').value;

    filteredData = industryData.filter(item => {
        const matchSearch = !searchText || 
            item.companyName.toLowerCase().includes(searchText) ||
            item.product.toLowerCase().includes(searchText);
        
        const matchSector = !sector || item.sector === sector;
        const matchRegion = !region || item.region === region;

        return matchSearch && matchSector && matchRegion;
    });

    currentPage = 1;
    displayIndustryData();
}

// 显示产业数据
function displayIndustryData() {
    const tbody = document.getElementById('industryTableBody');
    const resultCount = document.getElementById('resultCount');
    
    // 更新结果数量
    resultCount.textContent = filteredData.length;

    // 计算分页
    const totalPages = Math.ceil(filteredData.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const pageData = filteredData.slice(startIndex, endIndex);

    // 显示数据
    if (pageData.length === 0) {
        tbody.innerHTML = `
            <tr>
                <td colspan="7" class="text-center text-muted py-4">
                    <i class="bi bi-inbox" style="font-size: 3rem;"></i>
                    <p class="mt-2">未找到符合条件的数据</p>
                </td>
            </tr>
        `;
    } else {
        let html = '';
        pageData.forEach(item => {
            html += `
                <tr class="fade-in">
                    <td><strong>${item.companyName}</strong></td>
                    <td><span class="badge bg-success">${item.sector}</span></td>
                    <td>${item.region}</td>
                    <td>${item.product}</td>
                    <td>${item.annualOutput ? formatNumber(item.annualOutput) : '-'}</td>
                    <td>${item.contact}</td>
                    <td>${item.updatedAt}</td>
                </tr>
            `;
        });
        tbody.innerHTML = html;
    }

    // 更新分页
    renderPagination(totalPages);
}

// 渲染分页
function renderPagination(totalPages) {
    const pagination = document.getElementById('pagination');
    
    if (totalPages <= 1) {
        pagination.innerHTML = '';
        return;
    }

    let html = '';

    // 上一页按钮
    if (currentPage > 1) {
        html += `
            <li class="page-item">
                <a class="page-link" href="#" onclick="changePage(${currentPage - 1}); return false;">
                    <i class="bi bi-chevron-left"></i>
                </a>
            </li>
        `;
    }

    // 页码按钮
    const maxVisiblePages = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    if (endPage - startPage < maxVisiblePages - 1) {
        startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    if (startPage > 1) {
        html += `
            <li class="page-item">
                <a class="page-link" href="#" onclick="changePage(1); return false;">1</a>
            </li>
        `;
        if (startPage > 2) {
            html += `<li class="page-item disabled"><span class="page-link">...</span></li>`;
        }
    }

    for (let i = startPage; i <= endPage; i++) {
        html += `
            <li class="page-item ${i === currentPage ? 'active' : ''}">
                <a class="page-link" href="#" onclick="changePage(${i}); return false;">${i}</a>
            </li>
        `;
    }

    if (endPage < totalPages) {
        if (endPage < totalPages - 1) {
            html += `<li class="page-item disabled"><span class="page-link">...</span></li>`;
        }
        html += `
            <li class="page-item">
                <a class="page-link" href="#" onclick="changePage(${totalPages}); return false;">${totalPages}</a>
            </li>
        `;
    }

    // 下一页按钮
    if (currentPage < totalPages) {
        html += `
            <li class="page-item">
                <a class="page-link" href="#" onclick="changePage(${currentPage + 1}); return false;">
                    <i class="bi bi-chevron-right"></i>
                </a>
            </li>
        `;
    }

    pagination.innerHTML = html;
}

// 切换页码
function changePage(page) {
    currentPage = page;
    displayIndustryData();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// 格式化数字
function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

