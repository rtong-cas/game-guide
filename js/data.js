// ===== 攻略喵 完整数据 =====
const siteData = {
  banners: [
    { title: "黑神话：悟空 完整攻略", desc: "从入门到全成就，最全面的西游冒险指南", link: "game.html?id=wukong", bg: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2358720/header.jpg" },
    { title: "艾尔登法环 黄金树之影", desc: "DLC全地图探索、新武器战灰、最强Build一网打尽", link: "game.html?id=elden-ring", bg: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1245620/header.jpg" },
    { title: "GTA 6 即将到来", desc: "目前最受期待的游戏，最新爆料合集", link: "game.html?id=gta6", bg: "https://cdn.cloudflare.steamstatic.com/steam/apps/271590/header.jpg" }
  ],

  news: [
    { id: "n1", title: "《上古卷轴6》开发进度爆料：已进入可游玩阶段", tag: "业界动态", date: "2026-07-16", desc: "B社总监透露《上古卷轴6》开发顺利，现已可完整游玩主线流程。" },
    { id: "n2", title: "《卧龙2》正式公布首支预告片，2027年发售", tag: "新作发布", date: "2026-07-16", desc: "光荣特库魔正式公布《卧龙2》，新主角+全新战场，登陆PC/PS5/Xbox。" },
    { id: "n3", title: "国产FPS《抵抗者》宣布首次公开试玩", tag: "国产游戏", date: "2026-07-16", desc: "国产独立FPS《抵抗者》宣布将于8月开启首次公开试玩，Steam页面已上线。" },
    { id: "n4", title: "PS港服夏日大促重磅开启！超值优惠好价", tag: "优惠促销", date: "2026-07-16", desc: "索尼PS港服夏日促销正式开启，多款大作低至2折，会员额外折扣。" },
    { id: "n5", title: "《漫威金刚狼》重申2026年发售日不变", tag: "业界动态", date: "2026-07-16", desc: "Insomniac工作室确认《漫威金刚狼》仍计划2026年发售，开发顺利。" },
    { id: "n6", title: "《Forza Horizon 6》或将于9月发售", tag: "传闻", date: "2026-07-15", desc: "墨西哥背景的《极限竞速：地平线6》发售日疑似泄露，微软未予置评。" },
    { id: "n7", title: "《心动小镇》×三丽鸥家族联动正式上线", tag: "手游资讯", date: "2026-07-15", desc: "治愈系手游《心动小镇》与三丽鸥家族联动开启，限定角色和装饰上线。" },
    { id: "n8", title: "《休闲采矿》Steam正式发售，桌面摸鱼神器", tag: "独立游戏", date: "2026-07-14", desc: "治愈系放置游戏《休闲采矿》正式发售，在桌面默默开挖，好评率96%。" },
    { id: "n9", title: "《幻兽帕鲁》全新大型更新上线", tag: "游戏更新", date: "2026-07-12", desc: "幻兽帕鲁发布大型更新，新增区域、新帕鲁和新BOSS挑战。" },
    { id: "n10", title: "《碧蓝幻想Relink》无尽黄昏引爆玩家好评", tag: "游戏评测", date: "2026-07-11", desc: "Cygames《碧蓝幻想Relink》新资料片获玩家高度评价。" },
    { id: "n11", title: "《赛博朋克2077》发布小型更新修复Bug", tag: "游戏更新", date: "2026-07-10", desc: "CD Projekt Red发布更新，修复部分任务和性能问题。" },
    { id: "n12", title: "《侠盗猎车手6》新传闻：试玩版已完成", tag: "传闻", date: "2026-07-08", desc: "据内部人士透露，GTA6内部试玩版已完成，R星正在进行最终打磨。" },
    { id: "n13", title: "《最终幻想7 重生》PC版销量突破200万", tag: "业界动态", date: "2026-07-07", desc: "SE宣布《最终幻想7 重生》PC版全球销量突破200万套，系列累计突破800万。" },
    { id: "n14", title: "《极限竞速 地平线6》实机画面泄露", tag: "传闻", date: "2026-07-06", desc: "疑似《地平线6》早期实机片段泄露，画面效果惊艳，墨西哥地图细节丰富。" },
    { id: "n15", title: "《荒野大镖客：救赎》PC版获玩家好评", tag: "游戏评测", date: "2026-07-05", desc: "《荒野大镖客：救赎》PC移植版获多半好评，60帧西部体验圆梦。" }
  ],

  // ===== 10 款热门游戏 × 每款 10-15 篇攻略 =====
  games: [
    // ═══════════════════════════
    // 1. 黑神话：悟空（12篇）
    // ═══════════════════════════
    {
      id: "wukong",
      name: "黑神话：悟空",
      nameEn: "Black Myth: Wukong",
      cover: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2358720/header.jpg",
      bgColor: "#1a0a0a",
      badge: "🔥 国产神作",
      type: "ACT 动作",
      platform: "PC / PS5 / Xbox",
      platforms: ["pc", "ps", "xbox"],
      date: "2024-08-20",
      tags: ["动作", "RPG", "神话", "魂系", "国产"],
      description: "游戏科学打造的动作角色扮演游戏。以中国神话为背景，融合魂系战斗与华丽演出。2024年最受瞩目的国产3A大作，全球销量超2500万。",
      guides: [
        { id: "wukong-boss", title: "全BOSS打法攻略（含DLC）", type: "BOSS攻略", date: "2026-07-15", views: "12.3万", desc: "从幽魂到二郎神，全部BOSS详细打法、弱点分析、逃课方案" },
        { id: "wukong-hidden", title: "全隐藏支线&真结局触发条件", type: "隐藏要素", date: "2026-07-14", views: "8.7万", desc: "全隐藏地图入口、隐藏BOSS、真结局触发条件一览" },
        { id: "wukong-build", title: "最强配装Build推荐（多流派）", type: "配装攻略", date: "2026-07-12", views: "6.5万", desc: "各流派加点方案、法宝选择、葫芦配酒搭配推荐" },
        { id: "wukong-newbie", title: "新手入门指南：基础操作到进阶技巧", type: "新手攻略", date: "2026-07-10", views: "5.2万", desc: "从零开始的悟空之旅，包含战斗系统详解和资源规划" },
        { id: "wukong-collect", title: "全收集品攻略：丹药/葫芦/珍玩", type: "收集攻略", date: "2026-07-09", views: "4.8万", desc: "全地图丹药材料、葫芦升级、珍玩收集位置一览" },
        { id: "wukong-achievement", title: "全成就解锁指南", type: "成就攻略", date: "2026-07-08", views: "3.6万", desc: "81项成就全解锁条件，含隐藏成就触发方法" },
        { id: "wukong-map", title: "全关卡地图详解&捷径攻略", type: "主线攻略", date: "2026-07-07", views: "4.2万", desc: "每张地图的重要点位、隐藏通道和捷径解锁" },
        { id: "wukong-skill", title: "全技能树解析&最优加点路线", type: "进阶技巧", date: "2026-07-06", views: "3.9万", desc: "棍法、奇术、身法、毫毛四大体系深度解析" },
        { id: "wukong-weapon", title: "全武器获取&升级攻略", type: "收集攻略", date: "2026-07-05", views: "5.1万", desc: "每一把武器的获取位置、升级素材和属性评测" },
        { id: "wukong-dlc", title: "DLC「再战轮回」完整攻略", type: "DLC攻略", date: "2026-07-04", views: "6.0万", desc: "DLC新增区域探索、新BOSS、新法宝和新结局" },
        { id: "wukong-elite", title: "全精英怪位置&掉落物一览", type: "隐藏要素", date: "2026-07-03", views: "2.8万", desc: "全地图精英怪刷新位置、掉落素材和击杀技巧" },
        { id: "wukong-faq", title: "常见问题FAQ & 优化设置", type: "新手攻略", date: "2026-07-01", views: "3.2万", desc: "卡关解决方案、PC优化设置、常见Bug修复方法" }
      ]
    },
    // ═══════════════════════════
    // 2. 艾尔登法环（15篇）
    // ═══════════════════════════
    {
      id: "elden-ring",
      name: "艾尔登法环",
      nameEn: "Elden Ring",
      cover: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1245620/header.jpg",
      bgColor: "#1a1a0a",
      badge: "🏆 年度游戏",
      type: "ARPG",
      platform: "PC / PS5 / PS4 / Xbox",
      platforms: ["pc", "ps", "xbox"],
      date: "2022-02-25",
      tags: ["魂系", "开放世界", "硬核", "奇幻"],
      description: "FromSoftware的开放世界魂系巅峰，TGA 2022年度游戏大奖。DLC「黄金树之影」已发售，广阔的交界地充满了无尽的冒险与挑战。全球销量超3000万。",
      guides: [
        { id: "elden-ring-dlc", title: "黄金树之影全收集&全BOSS攻略", type: "DLC攻略", date: "2026-07-06", views: "15.2万", desc: "幽影之地全地图探索、新武器战灰位置、DLC最强Build" },
        { id: "elden-ring-boss", title: "全追忆BOSS无伤打法指南", type: "BOSS攻略", date: "2026-07-02", views: "10.1万", desc: "含DLC全部追忆BOSS，逃课流/弹反流/法术流多方案" },
        { id: "elden-ring-build", title: "版本最强Build汇总（DLC版）", type: "配装攻略", date: "2026-06-28", views: "7.8万", desc: "感应流血、智力法术、信仰雷电等主流Build详细配装" },
        { id: "elden-ring-newbie", title: "新手入坑指南：开局路线&武器推荐", type: "新手攻略", date: "2026-06-25", views: "6.3万", desc: "不迷路的新手开局路线、前期强力武器和护符获取" },
        { id: "elden-ring-map", title: "全地图探索指南&重要点位标记", type: "主线攻略", date: "2026-06-22", views: "5.6万", desc: "宁姆格福到巨人山顶，每片区域的重要探索点位" },
        { id: "elden-ring-weapon", title: "全传说武器获取位置", type: "收集攻略", date: "2026-06-20", views: "7.2万", desc: "9把传说武器和DLC新增传说武器的获取攻略" },
        { id: "elden-ring-ash", title: "全骨灰收集&强化指南", type: "收集攻略", date: "2026-06-18", views: "4.1万", desc: "全64种骨灰收集位置和升级素材路线" },
        { id: "elden-ring-spell", title: "全魔法/祷告收集位置", type: "收集攻略", date: "2026-06-15", views: "3.8万", desc: "全魔法和祷告书获取位置、属性评测和实战推荐" },
        { id: "elden-ring-talisman", title: "全护符收集攻略", type: "收集攻略", date: "2026-06-12", views: "3.5万", desc: "全护符位置标记和效果详解，含DLC新增护符" },
        { id: "elden-ring-secret", title: "全隐藏区域入口&隐藏BOSS", type: "隐藏要素", date: "2026-06-10", views: "5.9万", desc: "永恒之城、深根底层等隐藏区域进入方法" },
        { id: "elden-ring-craft", title: "全制作笔记收集&实用道具配方", type: "进阶技巧", date: "2026-06-08", views: "2.2万", desc: "制作笔记全收集和PvE实用道具配方" },
        { id: "elden-ring-pvp", title: "PvP入侵&决斗全面指南", type: "进阶技巧", date: "2026-06-05", views: "1.8万", desc: "联机机制详解、入侵技巧、竞技场配装思路" },
        { id: "elden-ring-lore", title: "完整剧情解读&世界观解析", type: "隐藏要素", date: "2026-06-02", views: "6.8万", desc: "交界地编年史、半神家族关系、DLC剧情深挖" },
        { id: "elden-ring-quest", title: "全支线任务触发条件&流程", type: "主线攻略", date: "2026-05-30", views: "4.5万", desc: "菈妮线、菲雅线、食粪者线等完整支线流程" },
        { id: "elden-ring-achieve", title: "全成就解锁条件", type: "成就攻略", date: "2026-05-28", views: "2.9万", desc: "42项成就全解锁，含DLC新增成就攻略" }
      ]
    },
    // ═══════════════════════════
    // 3. DOOM 黑暗时代（10篇）
    // ═══════════════════════════
    {
      id: "doom-tda",
      name: "毁灭战士：黑暗时代",
      nameEn: "Doom: The Dark Ages",
      cover: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3013340/header.jpg",
      bgColor: "#1a0500",
      badge: "IGN 9/10",
      type: "FPS 射击",
      platform: "PC / PS5 / Xbox",
      platforms: ["pc", "ps", "xbox"],
      date: "2026-05-19",
      tags: ["FPS", "爽游", "动作", "科幻"],
      description: "id Software开发的DOOM最新资料片，IGN评分9/10。战斗节奏更快、武器更狂野，被誉为近年最佳FPS资料片。",
      guides: [
        { id: "doom-tda-story", title: "主线流程全攻略（全收集）", type: "主线攻略", date: "2026-07-13", views: "5.2万", desc: "每一关全收集、隐藏战斗竞技场、符文位置详解" },
        { id: "doom-tda-weapon", title: "全武器解锁&模组升级指南", type: "进阶技巧", date: "2026-07-10", views: "3.8万", desc: "全武器获取位置、模组选择、最优升级路线推荐" },
        { id: "doom-tda-secret", title: "所有隐藏关卡&彩蛋位置", type: "隐藏要素", date: "2026-07-08", views: "2.4万", desc: "经典DOOM彩蛋、隐藏战斗关卡、特殊武器解锁" },
        { id: "doom-tda-boss", title: "全BOSS战攻略", type: "BOSS攻略", date: "2026-07-06", views: "3.1万", desc: "每个BOSS的技能分析和弱点武器推荐" },
        { id: "doom-tda-rune", title: "全符文收集&最佳搭配", type: "收集攻略", date: "2026-07-04", views: "1.9万", desc: "所有符文位置和不同玩法的最佳符文组合" },
        { id: "doom-tda-practice", title: "战斗进阶技巧：从入门到无双", type: "进阶技巧", date: "2026-07-02", views: "2.7万", desc: "超级霰弹枪运用、快速切枪技巧、资源循环管理" },
        { id: "doom-tda-achieve", title: "全成就解锁指南", type: "成就攻略", date: "2026-06-30", views: "1.6万", desc: "全成就条件一览，含隐藏成就解锁方法" },
        { id: "doom-tda-newbie", title: "新手向生存指南", type: "新手攻略", date: "2026-06-28", views: "2.1万", desc: "从零开始的毁灭战士之旅，基础操作和生存策略" },
        { id: "doom-tda-upgrade", title: "全升级/强化系统详解", type: "进阶技巧", date: "2026-06-26", views: "1.4万", desc: "哨兵铠甲升级、执政官升级点数分配最优解" },
        { id: "doom-tda-lore", title: "DOOM系列剧情时间线解析", type: "隐藏要素", date: "2026-06-24", views: "1.2万", desc: "从DOOM 2016到黑暗时代的时间线和剧情联系" }
      ]
    },
    // ═══════════════════════════
    // 4. 刺客信条：黑旗 复刻版（10篇）
    // ═══════════════════════════
    {
      id: "ac4-resynced",
      name: "刺客信条：黑旗 复刻版",
      nameEn: "Assassin's Creed IV: Black Flag Resynced",
      cover: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3318850/header.jpg",
      bgColor: "#0a1a2e",
      badge: "7月新游",
      type: "ACT 冒险",
      platform: "PC / PS5 / Xbox",
      platforms: ["pc", "ps", "xbox"],
      date: "2026-07-09",
      tags: ["开放世界", "海战", "历史", "重制"],
      description: "育碧经典重制升级版，画质全面提升，操作与UI深度优化。扮演海盗爱德华·肯威，驾驶寒鸦号纵横加勒比海。",
      guides: [
        { id: "ac4-ship", title: "寒鸦号全升级&传奇船攻略", type: "进阶技巧", date: "2026-07-11", views: "4.1万", desc: "船只收集品位置、最强船员组合、传奇船打法详解" },
        { id: "ac4-collect", title: "全收集品地图指引", type: "收集攻略", date: "2026-07-09", views: "6.8万", desc: "Animus碎片、海上歌谣、藏宝图全位置标记" },
        { id: "ac4-story", title: "主线剧情速通&全同步条件", type: "主线攻略", date: "2026-07-08", views: "3.2万", desc: "每个记忆序列100%同步条件、速通路线推荐" },
        { id: "ac4-newbie", title: "新手入门：从菜鸟到传奇海盗", type: "新手攻略", date: "2026-07-07", views: "2.5万", desc: "开局资源规划、战斗基础、航海入门" },
        { id: "ac4-hidden", title: "全隐藏地点&秘密任务", type: "隐藏要素", date: "2026-07-06", views: "2.8万", desc: "隐藏洞穴、秘密墓穴、限时挑战任务" },
        { id: "ac4-weapon", title: "爱德华全装备升级指南", type: "配装攻略", date: "2026-07-05", views: "2.1万", desc: "袖剑、火枪、弯刀全升级素材和路线" },
        { id: "ac4-treasure", title: "全藏宝图解法&宝藏位置", type: "收集攻略", date: "2026-07-04", views: "3.5万", desc: "20张藏宝图解法详解和宝藏实际位置" },
        { id: "ac4-fleet", title: "肯威舰队任务攻略&最强舰队配置", type: "进阶技巧", date: "2026-07-03", views: "1.9万", desc: "舰队管理、航线选择、传说船运" },
        { id: "ac4-achieve", title: "全成就/奖杯解锁指南", type: "成就攻略", date: "2026-07-02", views: "1.6万", desc: "全成就条件一览和刷法推荐" },
        { id: "ac4-diff", title: "复刻版vs原版：所有变化一览", type: "新手攻略", date: "2026-07-01", views: "2.3万", desc: "画面、操作、内容变化全面对比" }
      ]
    },
    // ═══════════════════════════
    // 5. 碧蓝幻想Relink 无尽黄昏（10篇）
    // ═══════════════════════════
    {
      id: "gbf-relink",
      name: "碧蓝幻想：Relink 无尽黄昏",
      nameEn: "Granblue Fantasy: Relink",
      cover: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/881020/header.jpg",
      bgColor: "#1a2a3a",
      badge: "7月新游",
      type: "ARPG",
      platform: "PC / PS5 / PS4",
      platforms: ["pc", "ps"],
      date: "2026-07-09",
      tags: ["日式RPG", "共斗", "动漫风", "动作"],
      description: "Cygames开发的JRPG「无尽黄昏」资料片。全新剧情篇章、新角色、新副本，共斗玩法全面进化。",
      guides: [
        { id: "gbf-relink-char", title: "全角色强度排行&配装指南", type: "配装攻略", date: "2026-07-12", views: "7.3万", desc: "最新角色Tier榜、因子搭配、武器觉醒推荐" },
        { id: "gbf-relink-endgame", title: "终局内容全解析：Proud难度通关", type: "主线攻略", date: "2026-07-10", views: "4.6万", desc: "Proud难度副本攻略、路西法HL战术、因子Farm路线" },
        { id: "gbf-relink-boss", title: "全BOSS机制详解&逃课打法", type: "BOSS攻略", date: "2026-07-07", views: "3.9万", desc: "从入门到路西法，每个BOSS的机制分析和推荐打法" },
        { id: "gbf-relink-newbie", title: "新手入门：快速上手指南", type: "新手攻略", date: "2026-07-06", views: "3.2万", desc: "战斗系统基础、角色选择、资源规划" },
        { id: "gbf-relink-weapon", title: "全武器觉醒&终极武器获取", type: "收集攻略", date: "2026-07-05", views: "4.1万", desc: "每个角色终极武器获取条件和觉醒材料Farm路线" },
        { id: "gbf-relink-factor", title: "因子系统详解&最优搭配", type: "配装攻略", date: "2026-07-04", views: "3.5万", desc: "因子机制解析、全攻击/辅助因子效果和推荐组合" },
        { id: "gbf-relink-quest", title: "全支线任务&隐藏任务攻略", type: "隐藏要素", date: "2026-07-03", views: "2.4万", desc: "全支线触发条件和奖励一览" },
        { id: "gbf-relink-coop", title: "联机共斗完全指南", type: "进阶技巧", date: "2026-07-02", views: "1.8万", desc: "联机机制、房主技巧、角色配合、信号系统" },
        { id: "gbf-relink-sigil", title: "无尽黄昏新增内容全解", type: "DLC攻略", date: "2026-07-01", views: "3.3万", desc: "新角色评测、新副本机制、新系统详解" },
        { id: "gbf-relink-achieve", title: "全成就解锁指南", type: "成就攻略", date: "2026-06-30", views: "1.5万", desc: "全成就解锁条件和速刷路线" }
      ]
    },
    // ═══════════════════════════
    // 6. 幻兽帕鲁（10篇）
    // ═══════════════════════════
    {
      id: "palworld",
      name: "幻兽帕鲁",
      nameEn: "Palworld",
      cover: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1623730/header.jpg",
      bgColor: "#1a2a1a",
      badge: "🔥 3000万+",
      type: "生存 动作",
      platform: "PC / Xbox",
      platforms: ["pc", "xbox"],
      date: "2024-01-19",
      tags: ["开放世界", "生存", "养成", "射击"],
      description: "Pocketpair开发的缝合怪神作，将宝可梦收集+射击+生存建造巧妙融合。全球销量突破3000万，持续更新中。",
      guides: [
        { id: "palworld-breed", title: "全帕鲁配种公式大全（持续更新）", type: "进阶技巧", date: "2026-07-08", views: "9.8万", desc: "最新配种计算器使用指南、稀有帕鲁配方、闪光变异技巧" },
        { id: "palworld-base", title: "最优基地布局&自动化流水线", type: "新手攻略", date: "2026-07-05", views: "5.4万", desc: "各阶段基地选址、流水线自动化、防御工事搭建指南" },
        { id: "palworld-boss", title: "全塔主BOSS攻略&配队推荐", type: "BOSS攻略", date: "2026-07-02", views: "3.1万", desc: "各个塔主BOSS的技能分析和推荐帕鲁配队" },
        { id: "palworld-paldeck", title: "全帕鲁图鉴&捕获指南", type: "收集攻略", date: "2026-06-30", views: "6.7万", desc: "全帕鲁分布位置、捕获条件和属性评测" },
        { id: "palworld-weapon", title: "全武器解锁&制作指南", type: "配装攻略", date: "2026-06-28", views: "3.4万", desc: "从石弓到火箭发射器，全武器材料和技术解锁" },
        { id: "palworld-hidden", title: "全隐藏区域&稀有帕鲁位置", type: "隐藏要素", date: "2026-06-26", views: "4.2万", desc: "全地图隐藏洞穴、传说帕鲁刷新点、稀有BOSS" },
        { id: "palworld-egg", title: "帕鲁蛋全攻略：孵化&变异", type: "进阶技巧", date: "2026-06-24", views: "3.8万", desc: "蛋类型识别、孵化温度控制、变异概率和技巧" },
        { id: "palworld-update", title: "最新版本新增内容详解", type: "主线攻略", date: "2026-06-22", views: "2.5万", desc: "新区域、新帕鲁、新BOSS和新机制的全面介绍" },
        { id: "palworld-achieve", title: "全成就解锁指南", type: "成就攻略", date: "2026-06-20", views: "1.7万", desc: "全成就条件和效率解锁路线" },
        { id: "palworld-farm", title: "高效资源Farm路线推荐", type: "新手攻略", date: "2026-06-18", views: "2.9万", desc: "各等级阶段最佳刷资源地点和路线" }
      ]
    },
    // ═══════════════════════════
    // 7. GTA 6（10篇）
    // ═══════════════════════════
    {
      id: "gta6",
      name: "侠盗猎车手6",
      nameEn: "Grand Theft Auto VI",
      cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/271590/header.jpg",
      bgColor: "#0a0a1a",
      badge: "🔮 最受期待",
      type: "ACT 动作冒险",
      platform: "PS5 / Xbox",
      platforms: ["ps", "xbox"],
      date: "待定 2026/2027",
      tags: ["开放世界", "GTA", "Rockstar", "犯罪"],
      description: "Rockstar Games开发中的次世代开放世界巨作。以迈阿密为原型的罪恶都市背景，系列史上规模最大一作，全球玩家翘首以盼。",
      guides: [
        { id: "gta6-news", title: "GTA6 最新消息与爆料汇总", type: "进阶技巧", date: "2026-07-12", views: "18.5万", desc: "截至目前所有官方信息和传闻汇总，含发售日、地图、角色分析" },
        { id: "gta6-pre", title: "发售前必知：历代GTA速通回顾", type: "新手攻略", date: "2026-07-08", views: "6.2万", desc: "GTA系列经典回顾，从GTA3到GTA5，为GTA6做好准备" },
        { id: "gta6-map", title: "已知地图信息分析&历代地图对比", type: "隐藏要素", date: "2026-07-06", views: "8.3万", desc: "基于泄露和官宣的地图情报汇总，与历代地图对比分析" },
        { id: "gta6-char", title: "已知角色情报&剧情预测", type: "隐藏要素", date: "2026-07-04", views: "5.7万", desc: "男女双主角设定分析、剧情走向和设定推测" },
        { id: "gta6-feature", title: "系统大进化：GTA6已知新特性", type: "进阶技巧", date: "2026-07-02", views: "4.5万", desc: "动态AI、建筑内部探索、天气系统等新特性汇总" },
        { id: "gta6-vehicle", title: "历届GTA载具文化回顾", type: "收集攻略", date: "2026-06-30", views: "2.8万", desc: "GTA系列经典载具回顾和GTA6可能出现的车型" },
        { id: "gta6-music", title: "GTA系列音乐电台文化", type: "隐藏要素", date: "2026-06-28", views: "1.9万", desc: "历代电台音乐回顾和GTA6音乐阵容预测" },
        { id: "gta6-online", title: "GTA Online到GTA6 Online的进化", type: "进阶技巧", date: "2026-06-26", views: "2.4万", desc: "历代在线模式回顾和下一代在线模式的展望" },
        { id: "gta6-spec", title: "GTA6配置需求分析&PC版展望", type: "配装攻略", date: "2026-06-24", views: "3.6万", desc: "基于次世代主机的PC配置推测和优化建议" },
        { id: "gta6-hype", title: "GTA6发售前必玩游戏推荐", type: "新手攻略", date: "2026-06-22", views: "4.1万", desc: "等待GTA6的日子里值得一玩的开放世界游戏推荐" }
      ]
    },
    // ═══════════════════════════
    // 8. 赛博朋克2077（10篇）
    // ═══════════════════════════
    {
      id: "cyberpunk",
      name: "赛博朋克2077",
      nameEn: "Cyberpunk 2077",
      cover: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1091500/header.jpg",
      bgColor: "#0a0a1a",
      badge: "✅ 口碑逆袭",
      type: "ARPG 开放世界",
      platform: "PC / PS5 / Xbox",
      platforms: ["pc", "ps", "xbox"],
      date: "2020-12-10",
      tags: ["开放世界", "科幻", "RPG", "赛博朋克"],
      description: "CD Projekt Red的科幻开放世界RPG。经历了初版滑铁卢后，通过《往日之影》和2.0大更新完成口碑逆袭，Steam好评率升至90%+。",
      guides: [
        { id: "cyberpunk-build", title: "2.0版本最强Build推荐", type: "配装攻略", date: "2026-07-11", views: "7.5万", desc: "黑客流、时停流、狂暴流三大主流Build详细配装" },
        { id: "cyberpunk-phantom", title: "往日之影全任务&全结局攻略", type: "DLC攻略", date: "2026-07-07", views: "9.1万", desc: "狗镇全任务流程、全结局触发条件、全Relic技能获取" },
        { id: "cyberpunk-secret", title: "全隐藏任务&彩蛋收集指南", type: "隐藏要素", date: "2026-07-03", views: "3.6万", desc: "全地图隐藏任务、致敬彩蛋、传说装备位置" },
        { id: "cyberpunk-story", title: "主线全流程攻略&关键选择解析", type: "主线攻略", date: "2026-06-30", views: "4.2万", desc: "全主线流程、关键对话选项影响、结局分歧条件" },
        { id: "cyberpunk-side", title: "全支线任务&委托攻略", type: "隐藏要素", date: "2026-06-28", views: "3.8万", desc: "全支线触发条件、隐藏委托、重要NPC剧情线" },
        { id: "cyberpunk-weapon", title: "全传说武器&不朽武器获取", type: "收集攻略", date: "2026-06-26", views: "5.3万", desc: "全传说和不朽武器获取位置及属性评测" },
        { id: "cyberpunk-cyber", title: "全义体收集&最佳搭配", type: "配装攻略", date: "2026-06-24", views: "4.1万", desc: "2.0版全义体效果详解和Build搭配建议" },
        { id: "cyberpunk-newbie", title: "2.0版新手完全指南", type: "新手攻略", date: "2026-06-22", views: "3.4万", desc: "开局属性分配、技能系统、资源管理完全解读" },
        { id: "cyberpunk-achieve", title: "全成就解锁指南", type: "成就攻略", date: "2026-06-20", views: "2.1万", desc: "含往日之影的全成就解锁条件和效率刷法" },
        { id: "cyberpunk-opt", title: "PC优化设置&画质提升指南", type: "进阶技巧", date: "2026-06-18", views: "2.7万", desc: "帧数优化、光追设置、DLSS/FSR调试、画质Mod推荐" }
      ]
    },
    // ═══════════════════════════
    // 9. 荒野大镖客：救赎（10篇）
    // ═══════════════════════════
    {
      id: "rdr",
      name: "荒野大镖客：救赎",
      nameEn: "Red Dead Redemption",
      cover: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2668510/header.jpg",
      bgColor: "#1a1a0a",
      badge: "🎯 西部经典",
      type: "ACT 开放世界",
      platform: "PC / PS5 / PS4 / Switch",
      platforms: ["pc", "ps"],
      date: "2025-10-29",
      tags: ["开放世界", "西部", "Rockstar", "叙事"],
      description: "Rockstar经典西部冒险的PC移植版。陪伴John Marston穿越边境追捕昔日同党，体验西部时代的谢幕与救赎。",
      guides: [
        { id: "rdr-story", title: "主线剧情全攻略&全金牌条件", type: "主线攻略", date: "2026-07-09", views: "3.4万", desc: "全任务流程、金牌挑战条件、隐藏陌生人任务" },
        { id: "rdr-collect", title: "全收集品攻略", type: "收集攻略", date: "2026-07-05", views: "2.8万", desc: "藏宝图、动物图鉴、服装材料全位置" },
        { id: "rdr-hidden", title: "全隐藏要素&陌生人任务", type: "隐藏要素", date: "2026-07-03", views: "2.1万", desc: "全陌生人事件触发、随机事件、隐藏地点" },
        { id: "rdr-newbie", title: "新手入门：西部生存指南", type: "新手攻略", date: "2026-07-01", views: "1.8万", desc: "荣誉系统、枪战技巧、狩猎采集、经济系统详解" },
        { id: "rdr-achieve", title: "全成就解锁指南", type: "成就攻略", date: "2026-06-29", views: "1.5万", desc: "全成就条件一览和效率解锁路线" },
        { id: "rdr-hunting", title: "狩猎全攻略&传奇动物", type: "进阶技巧", date: "2026-06-27", views: "2.4万", desc: "全动物分布、完美皮毛技巧、传奇动物位置" },
        { id: "rdr-outfit", title: "全服装套裝获取攻略", type: "收集攻略", date: "2026-06-25", views: "1.6万", desc: "每套服装的材料要求和制作方法" },
        { id: "rdr-weapon", title: "全武器获取&属性对比", type: "配装攻略", date: "2026-06-23", views: "1.9万", desc: "全手枪/步枪/霰弹枪获取位置和性能评测" },
        { id: "rdr-minigame", title: "小游戏&德州扑克技巧", type: "进阶技巧", date: "2026-06-21", views: "1.2万", desc: "骰子游戏、德州扑克、五指刀等小游戏攻略" },
        { id: "rdr-pc", title: "PC版画质设置&Mod推荐", type: "配装攻略", date: "2026-06-19", views: "2.5万", desc: "PC版最佳画质设置、帧数优化、值得安装的Mod" }
      ]
    },
    // ═══════════════════════════
    // 10. 最终幻想7 重生（10篇）
    // ═══════════════════════════
    {
      id: "ff7-rebirth",
      name: "最终幻想7 重生",
      nameEn: "Final Fantasy VII Rebirth",
      cover: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3012460/header.jpg",
      bgColor: "#1a1a2e",
      badge: "⭐ IGN 9/10",
      type: "RPG 角色扮演",
      platform: "PC / PS5",
      platforms: ["pc", "ps"],
      date: "2025-12-04",
      tags: ["日式RPG", "最终幻想", "开放世界", "重制"],
      description: "SQUARE ENIX《最终幻想7》重制计划第二弹。离开米德加后，克劳德一行人在广阔世界中冒险，战斗系统全面进化。",
      guides: [
        { id: "ff7-boss", title: "全BOSS机制详解&弱点分析", type: "BOSS攻略", date: "2026-07-10", views: "6.7万", desc: "从零式到萨菲罗斯，全BOSS弱点、机制和配队推荐" },
        { id: "ff7-side", title: "全支线任务&小游戏攻略", type: "隐藏要素", date: "2026-07-06", views: "4.5万", desc: "全支线触发条件、女王之血卡牌收集、陆行鸟赛跑" },
        { id: "ff7-build", title: "全角色最强配装&魔晶石搭配", type: "配装攻略", date: "2026-07-02", views: "5.8万", desc: "克劳德物理流、爱丽丝魔法流、蒂法极限流配装" },
        { id: "ff7-newbie", title: "新手必知：战斗系统深度解析", type: "新手攻略", date: "2026-06-28", views: "4.2万", desc: "ATB系统详解、角色切换技巧、力竭机制全解" },
        { id: "ff7-story", title: "主线全流程攻略&章节详解", type: "主线攻略", date: "2026-06-25", views: "5.1万", desc: "全14章主线流程、重要收集和选择支" },
        { id: "ff7-materia", title: "全魔晶石获取&最强组合", type: "收集攻略", date: "2026-06-22", views: "4.5万", desc: "全魔晶石位置和最强魔晶石搭配方案" },
        { id: "ff7-weapon", title: "全角色武器收集&技能学习", type: "收集攻略", date: "2026-06-20", views: "3.8万", desc: "每把武器的获取位置、属性和关联技能" },
        { id: "ff7-summons", title: "全召唤兽获取&实战评测", type: "隐藏要素", date: "2026-06-18", views: "3.2万", desc: "全召唤兽挑战位置、战斗机制和实战强度" },
        { id: "ff7-queen", title: "女王之血卡牌全收集&必胜牌组", type: "进阶技巧", date: "2026-06-16", views: "3.9万", desc: "全卡牌获取、最强牌组构建和NPC对战策略" },
        { id: "ff7-achieve", title: "全成就解锁指南", type: "成就攻略", date: "2026-06-14", views: "2.3万", desc: "全成就条件一览，含白金攻略" }
      ]
    }
  ],

  getUniqueGames() {
    const seen = new Set();
    return this.games.filter(g => {
      if (seen.has(g.id)) return false;
      seen.add(g.id);
      return true;
    });
  },

  upcoming: [
    { name: "红色沙漠", nameEn: "Crimson Desert", date: "2026年Q3", type: "ARPG", platforms: ["PC", "PS5", "Xbox"] },
    { name: "漫威金刚狼", nameEn: "Marvel's Wolverine", date: "2026年Q4", type: "ACT", platforms: ["PS5"] },
    { name: "Forza Horizon 6", nameEn: "Forza Horizon 6", date: "2026-09-04", type: "RAC", platforms: ["PC", "Xbox"] },
    { name: "上古卷轴6", nameEn: "The Elder Scrolls VI", date: "待定", type: "RPG", platforms: ["PC", "Xbox"] },
    { name: "Pragmata", nameEn: "Pragmata", date: "2026年", type: "ACT", platforms: ["PC", "PS5", "Xbox"] },
    { name: "卧龙2", nameEn: "Wo Long 2", date: "2027年", type: "ARPG", platforms: ["PC", "PS5", "Xbox"] },
    { name: "死亡搁浅2", nameEn: "Death Stranding 2", date: "2026年", type: "ACT", platforms: ["PS5"] },
    { name: "GTA 6", nameEn: "Grand Theft Auto VI", date: "待定", type: "ACT", platforms: ["PS5", "Xbox"] },
    { name: "怪物猎人：荒野", nameEn: "Monster Hunter Wilds", date: "2026年", type: "ARPG", platforms: ["PC", "PS5", "Xbox"] },
    { name: "黑神话悟空DLC", nameEn: "Black Myth Wukong DLC", date: "2026年", type: "ACT", platforms: ["PC", "PS5", "Xbox"] }
  ]
};

// 导出
gamesData = { games: siteData.getUniqueGames(), upcoming: siteData.upcoming, news: siteData.news, banners: siteData.banners };
