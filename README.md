# 广西糖业产业链信息管理系统

本项目为纯静态网站（HTML + CSS + JavaScript），用于展示广西糖业相关的公告、研究成果、统计分析与糖市行情参考信息。

## 页面导航

- `index.html`：首页（Hero 背景 + 轮播图、核心指标、最新公告/最新研究成果预览）
- `announcement.html`：公告列表/详情页（支持 `announcement.html?id=...`）
- `research.html`：研究成果列表/详情（弹窗）页（支持 `research.html?id=...`）
- `statistics.html`：统计分析页（图表 + 表格）
- `industry.html`：糖市行情与产销快报（车板价区间/中位数走势、明细表、CSV 导出）

## 项目结构

```
agriculture-website/
├── index.html
├── announcement.html
├── research.html
├── statistics.html
├── industry.html
├── css/
│   └── style.css
├── js/
│   ├── data.js
│   ├── main.js
│   ├── announcement.js
│   ├── research.js
│   ├── statistics.js
│   └── industry.js
├── images/
│   └── carousel/
└── vendor/
    ├── bootstrap/
    ├── bootstrap-icons/
    └── chart.js/
```

## 本地运行

- 方式 1：直接双击打开 `index.html`（可用，但建议用方式 2）
- 方式 2：本地启动静态服务器（推荐）

Python 3：

```bash
python -m http.server 8000
```

然后访问：`http://localhost:8000/index.html`

## 数据维护（重要）

- 站点展示数据集中在 `js/data.js`。
- 公告/研究成果数据建议保留 `sourceName` / `sourceUrl` 字段，便于核验来源，避免“看起来像真的但无法验证”的内容。
- 若存在“估算/目标/规划”口径，建议在页面显著标注，避免用户误认为已核验实绩。

## 图片与性能

- 首页轮播与 Hero 背景已支持 WebP：浏览器优先加载 `.webp`，不支持时回退 `.jpg`。
- 若替换轮播/背景图，建议同时生成 `.webp` 与 `.jpg` 两个版本，并保持文件名一致（例如 `slide-1.webp` + `slide-1.jpg`）。

## 部署说明（必看）

本项目为静态站点，部署时将整个目录上传到服务器即可。

- `vendor/` 目录为本地依赖（Bootstrap / Chart.js 等），需要随项目一起上传；否则页面样式/图表会缺失。
- 代码中资源引用均为相对路径，部署到 GitHub Pages 或任意静态服务器时通常无需改路径（只要目录结构不变）。

