// 研究成果页面JavaScript逻辑

let currentPage = 1;
const itemsPerPage = 6;
let filteredData = [...researchData];

document.addEventListener('DOMContentLoaded', function() {
    displayResearchList();
    
    // 绑定搜索表单事件
    document.getElementById('searchForm').addEventListener('submit', function(e) {
        e.preventDefault();
        filterData();
    });

    // 检查是否需要直接打开详情
    const urlParams = new URLSearchParams(window.location.search);
    const researchId = urlParams.get('id');
    if (researchId) {
        showResearchDetail(parseInt(researchId));
    }
});

// 筛选数据
function filterData() {
    const searchText = document.getElementById('searchInput').value.toLowerCase();

    filteredData = researchData.filter(item => {
        return !searchText || 
            item.title.toLowerCase().includes(searchText) ||
            item.abstract.toLowerCase().includes(searchText);
    });

    currentPage = 1;
    displayResearchList();
}

// 显示研究成果列表
function displayResearchList() {
    const container = document.getElementById('researchList');
    
    // 计算分页
    const totalPages = Math.ceil(filteredData.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const pageData = filteredData.slice(startIndex, endIndex);

    // 显示数据
    if (pageData.length === 0) {
        container.innerHTML = `
            <div class="text-center text-muted py-5">
                <i class="bi bi-inbox" style="font-size: 4rem;"></i>
                <p class="mt-3">未找到符合条件的研究成果</p>
            </div>
        `;
    } else {
        let html = '';
        pageData.forEach((item, index) => {
            html += `
                <div class="card mb-3 shadow-sm research-card fade-in" style="animation-delay: ${index * 0.1}s" onclick="showResearchDetail(${item.id})">
                    <div class="card-body">
                        <h5 class="card-title text-success">${item.title}</h5>
                        <p class="text-muted small mb-2">
                            <i class="bi bi-person"></i> ${item.author} · 
                            <i class="bi bi-calendar3"></i> ${item.createdAt}
                        </p>
                        <p class="card-text">${item.abstract}</p>
                        <a href="#" class="btn btn-sm btn-outline-success" onclick="event.stopPropagation(); showResearchDetail(${item.id})">
                            查看详情 <i class="bi bi-arrow-right"></i>
                        </a>
                    </div>
                </div>
            `;
        });
        container.innerHTML = html;
    }

    // 更新分页
    renderPagination(totalPages);
}

// 显示研究详情
function showResearchDetail(id) {
    const research = researchData.find(item => item.id === id);
    if (!research) return;

    // 填充模态框内容
    document.getElementById('modalTitle').textContent = research.title;
    document.getElementById('modalAuthor').textContent = research.author;
    document.getElementById('modalDate').textContent = research.createdAt;
    document.getElementById('modalAbstract').textContent = research.abstract;
    document.getElementById('modalContent').innerHTML = formatContent(research.content);

    // 显示模态框
    const modal = new bootstrap.Modal(document.getElementById('researchModal'));
    modal.show();
}

// 格式化内容（将换行转换为段落）
function formatContent(content) {
    const paragraphs = content.split('\n').filter(p => p.trim());
    return paragraphs.map(p => `<p>${p}</p>`).join('');
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
    for (let i = 1; i <= totalPages; i++) {
        html += `
            <li class="page-item ${i === currentPage ? 'active' : ''}">
                <a class="page-link" href="#" onclick="changePage(${i}); return false;">${i}</a>
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
    displayResearchList();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
