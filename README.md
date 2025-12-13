# 广西糖业业产业链信息管理系统

一个基于纯HTML、CSS、JavaScript构建的糖业产业链信息展示网站。

## 📋 项目简介

本项目旨在整合广西糖业业产业链资源，提供全面的数据展示与分析服务，促进糖业现代化发展。

## ✨ 主要功能

### 1. 首页
- 实时统计数据展示（企业总数、研究成果、覆盖地区、总产值）
- 最新公告动态
- 最新研究成果
- 产业链环节概览

### 2. 产业数据
- 企业信息列表展示
- 多维度筛选（产业环节、地区）
- 关键词搜索功能
- 分页浏览

### 3. 研究成果
- 研究成果列表
- 详情查看（模态框）
- 搜索功能
- 浏览次数统计

### 4. 统计分析
- 按产业环节统计（饼图）
- 按地区统计（柱状图）
- 产业链分布概览（折线图）
- 详细数据表格

## 🛠️ 技术栈

- **前端框架**: 纯HTML5 + CSS3 + JavaScript (ES6+)
- **UI框架**: Bootstrap 5.1.3
- **图标库**: Bootstrap Icons 1.8.1
- **图表库**: Chart.js 3.9.1

## 📁 项目结构

```
agriculture-website/
├── index.html              # 首页
├── industry.html           # 产业数据页
├── research.html           # 研究成果页
├── statistics.html         # 统计分析页
├── css/
│   └── style.css          # 全局样式
├── js/
│   ├── data.js            # 模拟数据
│   ├── main.js            # 首页逻辑
│   ├── industry.js        # 产业数据逻辑
│   ├── research.js        # 研究成果逻辑
│   └── statistics.js      # 统计分析逻辑
└── README.md              # 项目说明
```

## 🚀 快速开始

### 方法1：直接打开
直接用浏览器打开 `index.html` 文件即可。

### 方法2：使用本地服务器（推荐）
为了更好的体验，建议使用本地HTTP服务器：

#### Python
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

#### Node.js
```bash
npx http-server -p 8000
```

#### VS Code
安装 `Live Server` 插件，右键选择 "Open with Live Server"

然后在浏览器中访问：`http://localhost:8000`

## 💡 使用说明

### 数据管理
所有数据存储在 `js/data.js` 文件中，包括：
- `industryData`: 产业企业数据
- `researchData`: 研究成果数据
- `announcementData`: 公告数据

您可以直接编辑此文件来修改、添加或删除数据。

### 自定义样式
主要样式定义在 `css/style.css` 中，可以修改：
- 颜色主题（CSS变量）
- 卡片样式
- 动画效果
- 响应式布局

### 功能扩展
- `js/main.js`: 首页逻辑
- `js/industry.js`: 产业数据页逻辑（搜索、筛选、分页）
- `js/research.js`: 研究成果页逻辑（搜索、详情展示）
- `js/statistics.js`: 统计分析页逻辑（图表渲染）

## 🎨 特色功能

1. **响应式设计**: 完美适配桌面、平板、手机
2. **动画效果**: 流畅的页面加载和交互动画
3. **数据可视化**: 多种图表展示统计数据
4. **搜索筛选**: 强大的数据筛选和搜索功能
5. **分页浏览**: 优化大数据集的浏览体验

## 📊 数据说明

### 产业数据字段
- `companyName`: 企业名称
- `sector`: 产业环节（种植/养殖/加工/物流/销售/其他）
- `region`: 所在地区
- `product`: 主要产品
- `annualOutput`: 年产量（吨）
- `contact`: 联系方式
- `updatedAt`: 更新时间

### 研究成果字段
- `title`: 标题
- `abstract`: 摘要
- `content`: 详细内容
- `author`: 作者
- `views`: 浏览次数
- `createdAt`: 发布时间

## 🌐 浏览器兼容性

- Chrome (推荐)
- Firefox
- Safari
- Edge
- Opera

建议使用最新版本的现代浏览器以获得最佳体验。

## 📝 开发说明

### 添加新数据
在 `js/data.js` 中按照现有格式添加数据对象。

### 修改样式
编辑 `css/style.css`，使用CSS变量可以快速修改主题颜色。

### 添加新功能
在对应的JS文件中添加函数，并在HTML中绑定事件。

## 🔄 未来计划

- [ ] 添加数据导出功能（CSV、Excel）
- [ ] 实现数据持久化（LocalStorage）
- [ ] 添加用户登录和权限管理
- [ ] 集成真实的后端API
- [ ] 添加地图可视化功能
- [ ] 支持多语言切换

## 📄 许可证

本项目仅供学习和演示使用。

## 👥 联系方式

如有问题或建议，欢迎反馈。

---

**广西糖业产业链信息管理系统** - 推动糖业现代化发展

