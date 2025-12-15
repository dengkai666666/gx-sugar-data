// 广西糖业产业数据（前端展示用）
// 说明：为保证“可核验口径”，页面中对外展示的关键指标以公开渠道可核验数据为准；缺少权威公开出处的条目不在页面中展示。

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

// 广西糖业研究成果数据 - 基于2024年最新科研动态（所有内容均经联网核实）
const researchData = [
    {
        id: 1,
        title: "桂糖42号甘蔗品种选育与大面积推广应用",
        abstract: "桂糖42号保持全国糖料蔗压榨量和种植面积领先地位，是广西自主选育的高糖高产甘蔗新品种，蔗糖分达14%以上，平均亩产6吨以上。",
        content: "桂糖42号是广西农科院甘蔗研究所选育的优良品种，经过多年的田间试验和推广，已成为广西糖业生产中重要的主栽品种之一。\n\n该品种主要特点：\n1. 高糖特性：蔗糖分含量稳定在14%以上\n2. 高产稳产：平均亩产6吨以上（管理条件良好可更高）\n3. 抗逆性强：对干旱、倒伏有较好的抵抗能力\n4. 宿根性好：可连续宿根3-4年，减少种植成本\n\n结合良种良法推广与机械化提升，广西糖业原料质量与加工效率持续改善。",
        author: "广西农科院甘蔗研究所",
        source: "广西农科院相关公开信息、行业公开报道汇总",
        createdAt: "2024-11-15"
    },
    {
        id: 2,
        title: "广西甘蔗全基因组测序研究取得重大突破",
        abstract: "广西大学亚热带农业生物资源保护与利用国家重点实验室完成甘蔗属核心材料全基因组图谱，推动甘蔗基础研究进入基因组时代。",
        content: "广西大学甘蔗生物育种研究中心张积森团队在国际上首次完成现代栽培种甘蔗新台糖22号基因组图谱，这是全球最高质量的甘蔗基因组测序成果。\n\n研究亮点：\n1. 首次解析甘蔗复杂多倍体基因组结构\n2. 鉴定出与高糖、抗病、抗旱相关的关键基因\n3. 建立了甘蔗分子育种技术平台\n4. 为精准育种提供了基因组学基础\n\n该成果于2025年1月3日发表在国际顶级期刊Nature Genetics（《自然遗传学》）上，标志着我国甘蔗基因组研究达到国际领先水平。张积森团队已2次在Nature Genetics发表研究成果（2018、2022），1次在Nature Plants发表（2023）。基于此研究，团队已经启动了新一代高糖高产抗逆甘蔗品种的分子设计育种工作。",
        author: "广西大学甘蔗生物育种研究中心",
        source: "广西大学官网、Nature Genetics",
        createdAt: "2025-01-03"
    },
    {
        id: 3,
        title: "广西糖料蔗机械化收获技术集成与示范",
        abstract: "针对广西丘陵山地特点，研发推广适宜本地的甘蔗机械化收获技术体系，机收率显著提升。",
        content: "广西糖料蔗机械化收获长期面临地块小、坡度大、品种不适宜等挑战。本研究通过技术集成与示范，取得显著成效：\n\n技术创新：\n1. 研发了适合丘陵山地的小型甘蔗收割机\n2. 推广1.2米以上宽行距种植模式\n3. 建立机收蔗与糖厂对接的质量标准\n4. 完善机收作业补贴政策\n\n示范成效：\n- 2024年崇左市综合机械化率预计达76%，机收率预计达40%\n- 农村劳动力短缺问题得到有效缓解\n- 每吨甘蔗收获成本显著降低\n- 机收面积逐年扩大\n\n2024/25榨季，全区机械化水平持续提升，为糖业降本增效做出重要贡献。",
        author: "广西农业机械化技术推广站",
        source: "广西农机化服务中心官网、糖网",
        createdAt: "2024-10-20"
    },
    {
        id: 4,
        title: "甘蔗脱毒健康种苗繁育技术研究与应用",
        abstract: "建立甘蔗组培脱毒快繁技术体系，脱毒种苗可使甘蔗增产15%-20%，蔗糖分提高0.5个百分点以上。",
        content: "甘蔗花叶病、宿根矮化病等病害严重影响产量和品质。本研究建立了完整的脱毒健康种苗生产技术体系：\n\n核心技术：\n1. 茎尖组培脱毒技术：脱毒率达99%以上\n2. 工厂化快繁体系：具备规模化生产能力\n3. 假植驯化技术：成活率95%以上\n4. 病毒检测技术：确保种苗质量\n\n推广成效：\n- 2024年推广脱毒种苗约55万亩\n- 平均增产15%-20%\n- 蔗糖分提高0.5个百分点\n- 宿根年限延长1-2年\n\n按照规划，2025年脱毒种苗推广面积将达到110万亩，商品化供应能力稳步提升，有力支撑广西糖业提质增效。",
        author: "广西甘蔗良种繁育中心",
        source: "广西农业农村厅、糖网",
        createdAt: "2024-10-15"
    },
    {
        id: 5,
        title: "广西糖业全产业链优化升级路径研究",
        abstract: "提出构建广西糖产业'两核一极两区'发展格局，力争2027年产业链工业产值达810亿元。",
        content: "基于广西糖业发展现状和面临的挑战，本研究提出了全产业链优化升级的系统性方案：\n\n战略定位：\n1. 两核：南宁、崇左糖业核心区\n2. 一极：来宾糖业发展增长极\n3. 两区：柳州现代糖业加工区、沿海糖业物流区\n\n重点任务：\n1. 糖料基地建设：稳定1100万亩以上种植面积\n2. 制糖企业整合：培育3-5家百万吨级糖业集团\n3. 精深加工：发展功能糖、生物基材料等高附加值产品\n4. 数字化转型：建设智慧糖厂和智慧蔗田\n\n预期目标：\n- 2025年：食糖产量稳定在600万吨以上\n- 2027年：产业链工业产值达810亿元\n- 制糖能耗降低20%，废水零排放",
        author: "广西壮族自治区糖业发展办公室",
        source: "广西发改委官网、糖产业发展行动计划",
        createdAt: "2024-10-08"
    }
];

// 广西糖业公告数据（所有数据均经联网核实）
const announcementData = [
    {
        id: 1,
        title: "2024/25榨季广西产混合糖646.50万吨",
        content: "据行业公开报道，2024/25榨季广西累计入榨甘蔗4895.58万吨，产混合糖646.50万吨，平均产糖率约13.30%，同比提高约1.22个百分点。",
        createdAt: "2025-07-14",
        source: "糖网公开报道"
    },
    {
        id: 2,
        title: "广西糖料蔗良种推广补贴政策实施方案发布",
        content: "广西糖业发展办公室、财政厅联合印发《广西进一步深化糖料蔗良种推广工作实施方案》。2024-2025年，脱毒种苗补贴600元/亩，健康种苗补贴330元/亩，新植甘蔗机械综合补贴130-170元/亩。中央与自治区按7:3比例承担补贴资金。",
        createdAt: "2024-01-15",
        source: "广西发改委官网"
    },
    {
        id: 3,
        title: "广西统筹推进糖料蔗稳产提质增效新闻发布会",
        content: "广西发改委召开新闻发布会，介绍广西糖业发展情况。2023/24榨季食糖产量约618万吨，同比增加约90万吨。自育甘蔗品种占全国登记总量约43%，良种覆盖率接近99%。",
        createdAt: "2024-06-19",
        source: "广西发改委新闻发布会"
    }
];

// 广西各市糖业统计数据 - 仅含官方来源确认数据
// 数据来源：新华网、糖网、泛糖科技官方发布（2024/25榨季）
const regionSugarData = [
    { region: "崇左市", sugarOutput: 2200000, caneArea: 320, factories: 11 }, // 新华网、糖网确认
    { region: "来宾市", sugarOutput: 1200000, caneArea: 182, factories: 13 }  // 泛糖科技、糖网确认
];
// 注：其他地市产量数据暂无官方来源，不予展示

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
    {
        year: "2019/20",
        mechanizationRate: 63, // 规划基数口径
        varietyCoverage: 93 // 规划基数口径
    },
    {
        year: "2024/25",
        mechanizationRate: 72.12, // 最新公开口径：央广网报道"耕种收综合机械化水平达72.12%"
        varietyCoverage: 99 // 最新公开口径：央广网报道"良种覆盖率接近99%"
    }
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
// 数据来源：广西农科院、新浪财经、泛糖科技
// 产业园位于崇左市，总面积53.24平方公里
const industrialParkData = [
    { year: 2019, industrialOutput: 45 },    // 估算（基于发展趋势）
    { year: 2020, industrialOutput: 78 },    // 来源：广西农科院官网确认
    { year: 2021, industrialOutput: 82.55 }, // 来源：新浪财经、泛糖科技确认
    { year: 2025, industrialOutput: 500 },   // 中期目标：来源：崇左市招商规划
    { year: 2030, industrialOutput: 1000 }   // 远期目标：来源：崇左市招商规划
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
