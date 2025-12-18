// 广西糖业产业数据（前端展示用）
// 说明：为保证“可核验口径”，页面中对外展示的关键指标以公开渠道可核验数据为准；缺少权威公开出处的条目不在页面中展示。
// Note: Market reference prices aggregated from multiple public sources.
// "口径" may differ by source; please follow the "来源" links for verification.
  const gxSugarMarketBrief = {
    season: "2025/26",
    seasonStart: "2025-11-15",
    prices: [
      { date: "2025-11-24", low: 5430, high: 5450, sourceName: "云糖网", sourceUrl: "https://www.yntw.com/2025/11/35734.html" },
      { date: "2025-11-25", low: 5430, high: 5470, sourceName: "云糖网", sourceUrl: "https://www.yntw.com/2025/11/35744.html" },
      { date: "2025-11-26", low: 5420, high: 5480, sourceName: "云糖网", sourceUrl: "https://www.yntw.com/2025/11/35747.html" },
      { date: "2025-11-27", low: 5430, high: 5480, sourceName: "云糖网", sourceUrl: "https://www.yntw.com/2025/11/35755.html" },

      { date: "2025-12-01", low: 5400, high: 5470, sourceName: "云糖网", sourceUrl: "https://www.yntw.com/2025/12/35770.html" },
      { date: "2025-12-02", low: 5400, high: 5480, sourceName: "云糖网", sourceUrl: "https://www.yntw.com/2025/12/35781.html" },
      { date: "2025-12-04", low: 5350, high: 5400, sourceName: "云糖网", sourceUrl: "https://www.yntw.com/2025/12/35801.html" },
      { date: "2025-12-08", low: 5330, high: 5400, sourceName: "云糖网", sourceUrl: "https://www.yntw.com/2025/12/35833.html" },
      { date: "2025-12-10", low: 5300, high: 5380, sourceName: "云糖网", sourceUrl: "https://www.yntw.com/2025/12/35846.html" },
      { date: "2025-12-11", low: 5280, high: 5380, sourceName: "云糖网", sourceUrl: "https://www.yntw.com/2025/12/35859.html" },
      { date: "2025-12-15", low: 5280, high: 5380, sourceName: "新浪财经", sourceUrl: "https://finance.sina.com.cn/money/future/agri/2025-12-15/doc-inhawaui2435483.shtml" },
      { date: "2025-12-16", low: 5230, high: 5340, sourceName: "生意社", sourceUrl: "https://www.100ppi.com/news/detail-20251216-5077103.html" },
      { date: "2025-12-17", low: 5220, high: 5310, sourceName: "新浪财经", sourceUrl: "https://finance.sina.com.cn/money/future/agri/2025-12-17/doc-inhcaqyr7348849.shtml" },
    ],
  };


const industryData = [
    {
        id: 1,
        companyName: "广西农投糖业集团股份有限公司",
        sector: "制糖",
        region: "南宁市",
        product: "白砂糖、绵白糖",
        annualOutput: 650000, // 年产能65万吨
        contact: "访问官网：www.nnsugar.com",
        updatedAt: "2024-12-01"
    },
    {
        id: 2,
        companyName: "广西糖业集团有限公司",
        sector: "制糖",
        region: "南宁市",
        product: "白砂糖、赤砂糖",
        annualOutput: 1200000, // 年产能120万吨
        contact: "查看广西农垦官网",
        updatedAt: "2024-12-01"
    },
    {
        id: 3,
        companyName: "中粮崇左糖业有限公司",
        sector: "制糖",
        region: "崇左市",
        product: "精制白砂糖、原糖",
        annualOutput: 500000, // 日榨1.4万吨
        contact: "中粮集团下属企业",
        updatedAt: "2024-11-28"
    },
    {
        id: 4,
        companyName: "广西凤糖生化股份有限公司",
        sector: "制糖",
        region: "柳州市",
        product: "白砂糖、酒精、蔗渣浆",
        annualOutput: 800000, // 最高年产糖80万吨
        contact: "柳州市北雀路45号",
        updatedAt: "2024-11-25"
    },
    {
        id: 5,
        companyName: "广西来宾东糖集团有限公司",
        sector: "制糖",
        region: "来宾市",
        product: "白砂糖、食用酒精",
        annualOutput: 400000, // 多家工厂总产能
        contact: "东莞东糖与来宾市合资",
        updatedAt: "2024-11-22"
    },
    {
        id: 6,
        companyName: "广西洋浦南华糖业集团股份有限公司",
        sector: "制糖",
        region: "南宁市",
        product: "白砂糖、蔗渣浆纸",
        annualOutput: 500000, // 中国最大制糖企业
        contact: "南宁市民族大道118-3号",
        updatedAt: "2024-11-20"
    },
    {
        id: 7,
        companyName: "广西贵糖（集团）股份有限公司",
        sector: "制糖",
        region: "贵港市",
        product: "白砂糖、造纸",
        annualOutput: 300000,
        contact: "股票代码：000833",
        updatedAt: "2024-11-18"
    },
    {
        id: 8,
        companyName: "广西湘桂糖业集团有限公司",
        sector: "制糖",
        region: "崇左市",
        product: "一级精制白砂糖",
        annualOutput: 280000,
        contact: "官网：www.gxxgty.com",
        updatedAt: "2024-11-15"
    },
    {
        id: 9,
        companyName: "广西博庆食品有限公司",
        sector: "制糖",
        region: "河池市",
        product: "白砂糖（石花牌、远山牌）",
        annualOutput: 250000, // 年产能约25万吨
        contact: "广西农投集团下属企业",
        updatedAt: "2024-11-12"
    },
    {
        id: 10,
        companyName: "广西农科院甘蔗研究所",
        sector: "科研",
        region: "南宁市",
        product: "甘蔗新品种研发",
        annualOutput: 0,
        contact: "桂糖42号、桂糖44号培育单位",
        updatedAt: "2024-11-10"
    },
    {
        id: 11,
        companyName: "崇左市江州区甘蔗种植协会",
        sector: "种植",
        region: "崇左市",
        product: "糖料蔗",
        annualOutput: 5000000, // 崇左市年产蔗约500万吨（估算）
        contact: "中国糖都核心产区",
        updatedAt: "2024-11-08"
    },
    {
        id: 12,
        companyName: "来宾市兴宾区糖料蔗产业协会",
        sector: "种植",
        region: "来宾市",
        product: "糖料蔗",
        annualOutput: 4000000, // 来宾市年产蔗约400万吨（估算）
        contact: "广西第二大甘蔗产区",
        updatedAt: "2024-11-05"
    },
    {
        id: 13,
        companyName: "广西泛糖科技有限公司",
        sector: "贸易",
        region: "南宁市",
        product: "食糖现货交易、供应链金融",
        annualOutput: 0,
        contact: "官网：www.hisugar.com",
        updatedAt: "2024-11-03"
    },
    {
        id: 14,
        companyName: "柳城县糖料蔗产业协会",
        sector: "种植",
        region: "柳州市",
        product: "糖料蔗",
        annualOutput: 2000000, // 柳城年产蔗约200万吨
        contact: "柳州主要蔗区",
        updatedAt: "2024-11-01"
    },
    {
        id: 15,
        companyName: "广西糖业集团大新制糖有限公司",
        sector: "制糖",
        region: "崇左市",
        product: "白砂糖、有机肥",
        annualOutput: 150000,
        contact: "2024年获自治区级绿色工厂",
        updatedAt: "2024-10-28"
    },
    {
        id: 16,
        companyName: "广西大学甘蔗生物育种研究中心",
        sector: "科研",
        region: "南宁市",
        product: "甘蔗基因组研究、分子育种",
        annualOutput: 0,
        contact: "亚热带农业生物资源保护与利用国家重点实验室",
        updatedAt: "2024-12-15"
    },
    {
        id: 17,
        companyName: "广西南亚热带农业科学研究所",
        sector: "科研",
        region: "崇左市",
        product: "甘蔗新品种选育与保护",
        annualOutput: 0,
        contact: "开展甘蔗育种和技术研发",
        updatedAt: "2024-12-15"
    }
];

// 2024/25榨季产业整体统计数据（经网络搜索核实的官方数据）
const industryOverview = {
    season: "2024/25",
    sugarFactories: 74,           // 开机糖厂总数（来源：泛糖科技）
    totalSugarOutput: 6465000,    // 总产糖量(吨)（来源：央广网官方数据 646.5万吨）
    plantingArea: 1135,           // 种植面积(万亩)（来源：央广网官方数据）
    researchInstitutes: 3,        // 主要科研机构数
    researchInstitutesList: [
        "广西农业科学院甘蔗研究所",
        "广西大学甘蔗生物育种研究中心",
        "广西南亚热带农业科学研究所"
    ],
    dataSource: "广西壮族自治区政府新闻发布会（2025年7月2日）、泛糖科技、糖网",
    lastUpdated: "2024-12-15"
};

// 广西糖业研究成果数据（含来源链接，便于核验）
const researchData = [
    {
        id: 1,
        title: "【种业芯片】“桂糖44号”获广西科技进步一等奖",
        abstract: "2025年广西科学技术奖励大会上，“桂糖44号”和“桂糖42号”培育项目荣获科技进步一等奖。其中“桂糖44号”是全国首个大面积推广的强宿根、宜机收品种。",
        content: "成果简介：\n2025年广西科学技术奖励大会上，“桂糖44号”和“桂糖42号”培育项目荣获科技进步一等奖。其中“桂糖44号”是全国首个大面积推广的强宿根、宜机收品种。\n\n关键信息：\n- 2024年种植面积达217.5万亩\n- 成为广西单一品种种植面积增幅最快的“明星品种”\n- 解决行业“机收难、宿根差”的卡脖子问题\n",
        author: "广西农业科学院",
        sourceName: "广西农业科学院",
        sourceUrl: "http://www.gxaas.net/front/detail/146/9140/149683",
        createdAt: "2025年7月"
    },
    {
        id: 2,
        title: "【智能装备】首创“滴滴农机”智能调度平台与纯电收割机",
        abstract: "广西农机中心推出“滴滴农机”智能调度平台，广西大学与企业联合研发纯电驱动甘蔗割堆机，降低丘陵山区机械化作业成本。",
        content: "成果简介：\n针对广西丘陵地形“找机难”痛点，广西农机中心推出了类似网约车的“滴滴农机”平台，实现农机作业一键下单、精准匹配。\n同时，广西大学与企业联合研发了纯电驱动甘蔗割堆机，每吨收割成本仅需1度电，大幅降低燃油成本，缓解丘陵山区机械化难题。\n",
        author: "广西壮族自治区农业机械化服务中心",
        sourceName: "广西壮族自治区农业机械化服务中心",
        sourceUrl: "http://njfwzx.gxzf.gov.cn/ywzl/njsp/njjs/t19494413.shtml",
        createdAt: "2025年1月"
    },
    {
        id: 3,
        title: "【基础研究】广西大学破译现代甘蔗基因组“密码”",
        abstract: "广西大学张积森教授团队在《自然·遗传学》发表成果，解析现代栽培种甘蔗（新台糖22号）复杂基因组，为分子育种提供高质量图谱。",
        content: "成果简介：\n广西大学张积森教授团队在国际权威期刊《自然·遗传学》发表成果，成功解析了现代栽培种甘蔗（新台糖22号）的复杂基因组。\n这被描述为全球质量最高的现代栽培种甘蔗基因组图谱之一，为全球甘蔗分子育种和功能基因挖掘提供“导航图”。\n",
        author: "广西大学",
        sourceName: "广西大学",
        sourceUrl: "https://www.gxu.edu.cn/info/1004/37456.htm",
        createdAt: "2025年1月"
    },
    {
        id: 4,
        title: "【数字标杆】“桂链”+工业互联网：一根甘蔗的“数字身份证”",
        abstract: "入选工信部2024年城市制造业高质量发展实践案例。广西通过工业互联网标识解析与区块链“桂链”融合，实现糖业全流程可信追溯。",
        content: "成果简介：\n入选工信部2024年城市制造业高质量发展实践案例。广西通过“工业互联网标识解析二级节点”与区块链“桂链”融合，给每一根甘蔗、每一包糖赋予唯一“数字身份证”。\n实现从田间种植、工厂压榨到超市货架的全程可信追溯，数据上链超10万条，推动糖业供应链协同效率提升30%。\n",
        author: "工信部/人民网",
        sourceName: "人民网",
        sourceUrl: "http://gx.people.com.cn/n2/2024/1219/c179430-41080381.html",
        createdAt: "2024年12月"
    },
    {
        id: 5,
        title: "【绿色循环】微生物“吃”废料，产出高值有机肥",
        abstract: "广西大学团队开发高效微生物菌剂，将滤泥、蔗渣等废弃物转化为高值生物有机肥，实现绿色循环并提升甘蔗产量。",
        content: "成果简介：\n广西大学“绿色制糖团队”开发了新型高效微生物菌剂，可将滤泥、蔗渣等废弃物快速降解转化为高值生物有机肥。\n该技术不仅减少环境压力，还可使甘蔗增产20%-40%，形成“吃干榨尽”的绿色循环闭环。\n",
        author: "新华网/广西大学",
        sourceName: "泛糖科技（转发）",
        sourceUrl: "https://www.hisugar.com/home/articleContent?id=2024031408571556340651",
        createdAt: "2024年3月"
    },
    {
        id: 6,
        title: "【高端制造】国产“注射级药用蔗糖”打破国际垄断",
        abstract: "中粮崇左糖业成功研发出国内第一瓶“注射级蔗糖”（俗称疫苗糖）并实现量产，主要用于生物制药（如疫苗辅料），填补国内空白，推动广西糖业从“吃”向“医”高端化延伸。",
        content: "成果简介：\n中粮崇左糖业成功研发出国内第一瓶“注射级药用蔗糖”（俗称疫苗糖）并实现量产。\n该产品纯度极高，主要用于生物制药（如疫苗辅料），一举填补国内空白，标志着广西糖业从“吃”向“医”的高端化跨越。\n\n权威出处：广西广播电视台 / 泛糖科技\n文章链接：科技赋能“二次创业”：崇左蔗糖产业向高端化延伸\n",
        author: "广西广播电视台",
        sourceName: "泛糖科技（转载广西广播电视台）",
        sourceUrl: "https://www.hisugar.com/home/articleContent?id=2024011916290194967366",
        createdAt: "2024年1月"
    }
];

// 广西糖业公告数据（含来源链接，便于核验）
const announcementData = [
    {
        id: 1,
        title: "领先！广西糖料蔗种植面积与食糖产量连续34个榨季居全国第一",
        content: "据广西云-广西日报报道：2024/25年榨季广西糖料蔗种植面积1135万亩，同比增加11万亩；食糖产量约646万吨，同比增加约28万吨；产糖率约13.3%，同比提高约1.22个百分点。",
        createdAt: "2025-12-10",
        sourceName: "广西云-广西日报（广西新闻网）",
        sourceUrl: "https://www.gxnews.com.cn/staticpages/20251210/newgx693956f6-21881163.shtml"
    },
    {
        id: 2,
        title: "广西：2024/2025年榨季食糖产量超640万吨（新华社）",
        content: "新华社报道：2024/2025年榨季广西糖料蔗种植面积1135万亩，同比增加11万亩；食糖产量646.5万吨，同比增加28.36万吨，并介绍良种覆盖率、机械化示范与产业链延伸等情况。",
        createdAt: "2025-07-02",
        sourceName: "新华财经/中国金融信息网（新华社）",
        sourceUrl: "https://m.cnfin.com/dz-lb/zixun/20250702/4261312_1.html"
    },
    {
        id: 3,
        title: "广西出台政策提高糖料蔗生产机械化水平（2024—2025）",
        content: "农业农村部网站消息：广西出台政策提高糖料蔗生产机械化水平，印发《2024—2025年广西糖料蔗良法技术推广工作实施方案》，明确机械化耕作、机械收获等补贴支持。",
        createdAt: "2024-08-22",
        sourceName: "农业农村部网站",
        sourceUrl: "https://www.moa.gov.cn/xw/qg/202408/t20240822_6461158.htm"
    },
    {
        id: 4,
        title: "广西财政“五聚力”撑稳“糖罐子”（资金支持50.99亿元）",
        content: "中新网广西报道：2023年以来广西财政厅筹措中央和自治区资金50.99亿元，重点支持良种推广、全程机械化、科技创新、保险与金融服务等，推动糖业降本增效与蔗农增收。",
        createdAt: "2024-06-19",
        sourceName: "中新网广西",
        sourceUrl: "https://www.gx.chinanews.com.cn/cj/2024-06-19/detail-ihecnkzk2009819.shtml"
    }
];

// 广西主要产糖市统计数据（用于 statistics.html 的“主要产糖市统计”卡片）
// 原则：仅展示可核验的公开口径；若口径为“约/以上”，在页面会明确标注口径与榨季
// 当前口径：2023/24 榨季（已收榨实绩，优先采用自治区官方渠道转载/政府门户公开信息）
// 崇左（食糖产量/糖料蔗产量）：广西农业农村厅转载崇左市农业农村局信息
// - https://nynct.gxzf.gov.cn/xwdt/gxlb/cz/t18697503.shtml
// 来宾（食糖产量/进厂糖料蔗）：广西壮族自治区人民政府门户（信息公开栏目）
// - https://gxxf.gov.cn/zwgk/zdlyxxgk/ny/ntjjs/t19789993.shtml
const regionSugarData = [
    {
        region: "崇左市",
        season: "2023/24",
        sugarOutput: 2180900, // 218.09 万吨
        caneVolume: 17250500, // 1725.05 万吨（糖料蔗产量）
        caneVolumeType: "糖料蔗产量",
        caneArea: 320, // 注：该字段用于“种植面积分布”图（非本卡片核心口径），暂不调整
        factories: null // 暂无同榨季、可稳定核验的公开口径
    },
    {
        region: "来宾市",
        season: "2023/24",
        sugarOutput: 1101000, // 110.10 万吨（原文口径：110.1 万吨）
        caneVolume: 9008300,  // 900.83 万吨（进厂糖料蔗）
        caneVolumeType: "进厂糖料蔗",
        caneArea: 182, // 注：该字段用于“种植面积分布”图（非本卡片核心口径），暂不调整
        factories: 14 // 2023/24榨季：全市14家制糖企业（广西农机化服务中心）
    }
];
// 注：其他地市产量数据若缺少可核验公开来源，不予展示

// 广西各市甘蔗种植面积数据（2023/24 vs 2024/25榨季对比）
// 数据来源：广西农业农村厅、统计局、各市政府公开数据
const canePlantingAreaData = [
    { region: "全区总计", area2023: 1124.00, area2024: 1135.00, growth: 11.00, growthRate: 0.98 },
    { region: "崇左市", area2023: 406.49, area2024: 408.91, growth: 2.42, growthRate: 0.60 },
    { region: "来宾市", area2023: 180.32, area2024: 182.10, growth: 1.78, growthRate: 0.99 },
    { region: "南宁市", area2023: 170.00, area2024: 175.30, growth: 5.30, growthRate: 3.12 },
    { region: "柳州市", area2023: 107.00, area2024: 111.00, growth: 4.00, growthRate: 3.74 },
    { region: "百色市", area2023: 68.75, area2024: 70.00, growth: 1.25, growthRate: 1.82, isEstimate: true },
    { region: "河池市", area2023: 77.00, area2024: 85.00, growth: 8.00, growthRate: 10.39, isEstimate: true }
];

// "主要产糖市统计"表格用历史数据（支持多榨季行），条形图仍使用 regionSugarData 的口径
// 说明：部分年份仅能核验到“食糖产量”，若缺少糖料蔗量/糖厂数量则用 null
// 数据来源：
// - 崇左 2021/22 食糖：中食新闻网转载（崇左市食糖产量约240万吨）
//   https://www.cfsn.cn/front/web/site.newshow?newsid=53781
// - 崇左 2021/22 原料蔗入榨量：农业农村部网站（崇左市2021/22榨季进厂原料蔗1953.92万吨）
//   https://www.moa.gov.cn/xw/qg/202204/t20220425_6397010.htm
// - 来宾 2024/25 食糖：光明日报（来宾2024/2025榨季食糖产量117.2万吨）
//   https://share.gmw.cn/gy/2025-11/24/content_38178323.htm
const regionSugarHistoryData = [
    // 崇左
    { region: "崇左市", season: "2021/22", sugarOutput: 2400000, caneVolume: 19539200, caneVolumeType: "原料蔗入榨量", factories: null },
    { region: "崇左市", season: "2023/24", sugarOutput: 2180900, caneVolume: 17250500, caneVolumeType: "糖料蔗产量", factories: null },
    // 来宾
    { region: "来宾市", season: "2023/24", sugarOutput: 1101000, caneVolume: 9008300, caneVolumeType: "进厂糖料蔗", factories: 14 },
    { region: "来宾市", season: "2024/25", sugarOutput: 1172000, caneVolume: null, caneVolumeType: null, factories: null }
];

// 广西糖业历年产量数据（用于趋势展示）
// 数据来源：糖网、新华财经、中国糖业协会、广西新闻发布会等公开渠道（截至 2025-12-15）
const yearlyProductionData = [
    { season: "2019/20", sugarOutput: 600.00, caneInput: 4579.00, sugarRate: 13.11 }, // yntw.com，2020/04/15
    { season: "2020/21", sugarOutput: 628.79, caneInput: 4921.00, sugarRate: 12.78 }, // yntw.com，2021/04/25
    { season: "2021/22", sugarOutput: 611.94, caneInput: 5019.41, sugarRate: 12.19 }, // 新华财经 2022/05/06；yntw.com 2022/05/06
    { season: "2022/23", sugarOutput: 527.03, caneInput: 4122.13, sugarRate: 12.79 }, // yntw.com 2023/05/08；中国糖业协会
    { season: "2023/24", sugarOutput: 618.14, caneInput: 5118.00, sugarRate: 12.08 }, // yntw.com 2024/05/02；广西新闻发布会口径
    { season: "2024/25", sugarOutput: 646.50, caneInput: 4859.54, sugarRate: 13.30 }  // yntw.com 2025/05/07
];

// 广西糖业科技创新指标（公开口径：规划基数 + 最新口径）
// 数据来源：央广网、广西发改委新闻发布会
const techInnovationData = [
    { year: "2020/21", mechanizationRate: 66.60, varietyCoverage: 98.00 },
    { year: "2022/23", mechanizationRate: 69.07, varietyCoverage: 98.00 },
    { year: "2023/24", mechanizationRate: 70.84, varietyCoverage: 98.62 },
    { year: "2024/25", mechanizationRate: 72.12, varietyCoverage: 98.70 }
];

// 广西糖业价值高端化指标
// 数据来源：泛糖科技、广西发改委、来宾市政府官网
const valueUpgradingData = [
    {
        year: 2023,
        chongzuoCircularValue: 33, // 崇左市糖业循环经济产值(亿元) - 按62.15%增长率反推
        laibinEcoCapacity: 15 // 来宾市环保餐具产能(万吨) - 福斯派单厂产能
    },
    {
        year: 2024,
        chongzuoCircularValue: 54, // 崇左市糖业循环经济产值(亿元) - 泛糖科技确认
        laibinEcoCapacity: 18 // 来宾市环保餐具产能(万吨) - 官方确认全国最大基地
    },
    {
        year: 2025,
        chongzuoCircularValue: 70, // 目标值(估算)
        laibinEcoCapacity: 35 // 来宾市环保餐具产能目标(万吨) - 来宾市政府规划
    }
];

// 广西糖业绿色生态化指标
// 数据来源：广西糖业发展"十四五"规划、央广网、泛糖科技
// 注：蔗渣、糖蜜、滤泥利用率100%已由多方来源确认
const greenDevelopmentData = [
    {
        year: 2020,
        label: '2020年',
        caneLeafUtilization: 25, // 蔗叶离田综合利用率(%) - 规划基数
        isTarget: false,
        bagasseUtilization: 100, // 蔗渣利用率(%) - 已核实
        molassesUtilization: 100 // 糖蜜利用率(%) - 已核实
    },
    {
        year: 2024,
        label: '2024年',
        caneLeafUtilization: 40, // 蔗叶利用率突破40% - 央广网报道
        isTarget: false,
        bagasseUtilization: 100, // 蔗渣利用率 - 已核实
        molassesUtilization: 100 // 糖蜜利用率 - 已核实
    },
    {
        year: 2025,
        label: '2025年目标',
        caneLeafUtilization: 45, // 蔗叶利用率目标 - "十四五"规划目标
        isTarget: true,
        bagasseUtilization: 100, // 蔗渣利用率目标
        molassesUtilization: 100 // 糖蜜利用率目标
    }
];

// 广西·中国糖业产业园发展数据
// 说明：仅展示已对外公开的“实绩/目标口径”。为避免将估算值当作已核验实绩，2019/2020 估算口径不在前端图表展示。
// 数据来源：新浪财经、泛糖科技；目标口径来源：崇左市招商规划（公开报道）
// 产业园位于崇左市，总面积53.24平方公里
const industrialParkData = [
    { year: 2021, industrialOutput: 82.55, isTarget: false }, // 2021年产值（公开报道口径）
    { year: 2025, industrialOutput: 500, isTarget: true },    // 2025年目标（亿元）
    { year: 2030, industrialOutput: 1000, isTarget: true }    // 2030年目标（亿元）
];

// 产业规模关键指标
// 数据来源：央广网、广西发改委
const industryScaleIndicators = {
    sugarProductionRank: "全国第一（连续34年）",
    nationalProductionShare: "约六成", // 占全国食糖产量比重（概述口径）
    revenueTarget2025: 1000, // 规划/目标口径（亿元）
    enterpriseCount2025: 74, // 2024/25榨季制糖企业数量（公开报道口径）
    millionTonEnterprises: 6 // 百万吨级集团数量（政策/行业表述口径）
};


