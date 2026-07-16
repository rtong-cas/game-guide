// ===== GameGuide 完整数据 =====
const siteData = {
  // 首页Banner轮播
  banners: [
    { title: "黑神话：悟空 完整攻略", desc: "从入门到全成就，最全面的西游冒险指南", link: "game.html?id=wukong", bg: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2358720/header.jpg" },
    { title: "艾尔登法环 黄金树之影", desc: "DLC全地图探索、新武器战灰、最强Build一网打尽", link: "game.html?id=elden-ring", bg: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1245620/header.jpg" },
    { title: "GTA 6 即将到来", desc: "目前最受期待的游戏，最新爆料合集", link: "game.html?id=gta6", bg: "https://cdn.cloudflare.steamstatic.com/steam/apps/271590/header.jpg" }
  ],
  bannerIndex: 0,

  // 游戏资讯
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
    { id: "n12", title: "《侠盗猎车手6》新传闻：试玩版已完成", tag: "传闻", date: "2026-07-08", desc: "据内部人士透露，GTA6内部试玩版已完成，R星正在进行最终打磨。" }
  ],

  // ===== 10 款热门游戏 =====
  games: [
    // 1. 黑神话：悟空
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
      description: "游戏科学打造的西游题材动作角色扮演游戏。以中国神话为背景，融合魂系战斗与华丽演出，是2024年最受瞩目的国产3A大作。",
      guides: [
        { id: "wukong-boss", title: "全BOSS打法攻略（含DLC）", type: "BOSS攻略", date: "2026-07-15", views: "12.3万", desc: "从幽魂到二郎神，全部BOSS详细打法、弱点分析、逃课方案" },
        { id: "wukong-hidden", title: "全隐藏支线&真结局触发条件", type: "隐藏要素", date: "2026-07-14", views: "8.7万", desc: "全隐藏地图入口、隐藏BOSS、真结局触发条件一览" },
        { id: "wukong-build", title: "最强配装Build推荐（多流派）", type: "配装攻略", date: "2026-07-12", views: "6.5万", desc: "各流派加点方案、法宝选择、葫芦配酒搭配推荐" },
        { id: "wukong-newbie", title: "新手入门指南：基础操作到进阶技巧", type: "新手攻略", date: "2026-07-10", views: "5.2万", desc: "从零开始的悟空之旅，包含战斗系统详解和资源规划" }
      ]
    },
    // 2. 艾尔登法环
    {
      id: "elden-ring",
      name: "艾尔登法环",
      nameEn: "Elden Ring",
      cover: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1245620/header.jpg",
      bgColor: "#1a1a0a",
      badge: "🏆 经典长青",
      type: "ARPG",
      platform: "PC / PS5 / PS4 / Xbox",
      platforms: ["pc", "ps", "xbox"],
      date: "2022-02-25",
      tags: ["魂系", "开放世界", "硬核", "奇幻"],
      description: "FromSoftware的开放世界魂系巅峰，年度游戏大奖得主。DLC「黄金树之影」已发售，广阔的交界地充满了无尽的冒险与挑战。",
      guides: [
        { id: "elden-ring-dlc", title: "黄金树之影全收集&全BOSS攻略", type: "DLC攻略", date: "2026-07-06", views: "15.2万", desc: "幽影之地全地图探索、新武器战灰位置、DLC最强Build" },
        { id: "elden-ring-boss", title: "全追忆BOSS无伤打法指南", type: "BOSS攻略", date: "2026-07-02", views: "10.1万", desc: "含DLC全部追忆BOSS，逃课流/弹反流/法术流多方案" },
        { id: "elden-ring-build", title: "版本最强Build汇总（DLC版）", type: "配装攻略", date: "2026-06-28", views: "7.8万", desc: "感应流血、智力法术、信仰雷电等主流Build详细配装" },
        { id: "elden-ring-newbie", title: "新手入坑指南：开局路线&武器推荐", type: "新手攻略", date: "2026-06-25", views: "6.3万", desc: "不迷路的新手开局路线、前期强力武器和护符获取" }
      ]
    },
    // 3. DOOM 黑暗时代
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
        { id: "doom-tda-secret", title: "所有隐藏关卡&彩蛋位置", type: "隐藏要素", date: "2026-07-08", views: "2.4万", desc: "经典DOOM彩蛋、隐藏战斗关卡、特殊武器解锁" }
      ]
    },
    // 4. 刺客信条：黑旗 复刻版
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
        { id: "ac4-story", title: "主线剧情速通&全同步条件", type: "主线攻略", date: "2026-07-08", views: "3.2万", desc: "每个记忆序列100%同步条件、速通路线推荐" }
      ]
    },
    // 5. 碧蓝幻想Relink 无尽黄昏
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
        { id: "gbf-relink-boss", title: "全BOSS机制详解&逃课打法", type: "BOSS攻略", date: "2026-07-07", views: "3.9万", desc: "从入门到路西法，每个BOSS的机制分析和推荐打法" }
      ]
    },
    // 6. 幻兽帕鲁
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
        { id: "palworld-boss", title: "全塔主BOSS攻略&配队推荐", type: "BOSS攻略", date: "2026-07-02", views: "3.1万", desc: "各个塔主BOSS的技能分析和推荐帕鲁配队" }
      ]
    },
    // 7. GTA 6
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
      description: "Rockstar Games开发中的次世代开放世界巨作。以迈阿密为原型的罪恶都市背景，系列史上规模最大的一作，全球玩家翘首以盼。",
      guides: [
        { id: "gta6-news", title: "GTA6 最新消息与爆料汇总", type: "进阶技巧", date: "2026-07-12", views: "18.5万", desc: "截至目前所有官方信息和传闻汇总，含发售日、地图、角色分析" },
        { id: "gta6-pre", title: "发售前必知：历代GTA速通回顾", type: "新手攻略", date: "2026-07-08", views: "6.2万", desc: "GTA系列经典回顾，从GTA3到GTA5，为GTA6做好准备" }
      ]
    },
    // 8. 赛博朋克2077
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
      description: "CD Projekt Red的科幻开放世界RPG。经历了初版口碑滑铁卢后，通过资料片《往日之影》和2.0大更新完成口碑逆袭。",
      guides: [
        { id: "cyberpunk-build", title: "2.0版本最强Build推荐", type: "配装攻略", date: "2026-07-11", views: "7.5万", desc: "黑客流、时停流、狂暴流三大主流Build详细配装" },
        { id: "cyberpunk-phantom", title: "往日之影全任务&全结局攻略", type: "DLC攻略", date: "2026-07-07", views: "9.1万", desc: "狗镇全任务流程、全结局触发条件、全Relic技能获取" },
        { id: "cyberpunk-secret", title: "全隐藏任务&彩蛋收集指南", type: "隐藏要素", date: "2026-07-03", views: "3.6万", desc: "全地图隐藏任务、致敬彩蛋、传说装备位置" }
      ]
    },
    // 9. 幻兽帕鲁移除（去重）
    // 10. 荒野大镖客：救赎
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
      description: "Rockstar经典西部冒险游戏的全平台移植版。陪伴John Marston穿越边境追捕昔日同党，体验西部时代的谢幕。",
      guides: [
        { id: "rdr-story", title: "主线剧情全攻略&全金牌条件", type: "主线攻略", date: "2026-07-09", views: "3.4万", desc: "全任务流程、金牌挑战条件、隐藏陌生人任务" },
        { id: "rdr-collect", title: "全收集品攻略", type: "收集攻略", date: "2026-07-05", views: "2.8万", desc: "藏宝图、动物图鉴、服装材料全位置" }
      ]
    },
    // 10. 最终幻想7 重生
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
      description: "SQUARE ENIX《最终幻想7》重制计划第二弹。离开米德加后，克劳德一行人在广阔的世界中展开冒险，战斗系统全面进化。",
      guides: [
        { id: "ff7-boss", title: "全BOSS机制详解&弱点分析", type: "BOSS攻略", date: "2026-07-10", views: "6.7万", desc: "从零式到萨菲罗斯，全BOSS弱点、机制和配队推荐" },
        { id: "ff7-side", title: "全支线任务&小游戏攻略", type: "隐藏要素", date: "2026-07-06", views: "4.5万", desc: "全支线触发条件、女王之血卡牌收集、陆行鸟赛跑" },
        { id: "ff7-build", title: "全角色最强配装&魔晶石搭配", type: "配装攻略", date: "2026-07-02", views: "5.8万", desc: "克劳德物理流、爱丽丝魔法流、蒂法极限流配装" }
      ]
    }
  ],

  // 去重处理
  getUniqueGames() {
    const seen = new Set();
    return this.games.filter(g => {
      if (seen.has(g.id)) return false;
      seen.add(g.id);
      return true;
    });
  },

  // 即将发售
  upcoming: [
    { name: "红色沙漠", nameEn: "Crimson Desert", date: "2026年Q3", type: "ARPG", platforms: ["PC", "PS5", "Xbox"] },
    { name: "漫威金刚狼", nameEn: "Marvel's Wolverine", date: "2026年Q4", type: "ACT", platforms: ["PS5"] },
    { name: "Forza Horizon 6", nameEn: "Forza Horizon 6", date: "2026-09-04", type: "RAC", platforms: ["PC", "Xbox"] },
    { name: "上古卷轴6", nameEn: "The Elder Scrolls VI", date: "待定", type: "RPG", platforms: ["PC", "Xbox"] },
    { name: "Pragmata", nameEn: "Pragmata", date: "2026年", type: "ACT", platforms: ["PC", "PS5", "Xbox"] },
    { name: "卧龙2", nameEn: "Wo Long 2", date: "2027年", type: "ARPG", platforms: ["PC", "PS5", "Xbox"] },
    { name: "死亡搁浅2", nameEn: "Death Stranding 2", date: "2026年", type: "ACT", platforms: ["PS5"] },
    { name: "GTA 6", nameEn: "Grand Theft Auto VI", date: "待定", type: "ACT", platforms: ["PS5", "Xbox"] }
  ]
};

// 导出全局变量
gamesData = { games: siteData.getUniqueGames(), upcoming: siteData.upcoming, news: siteData.news, banners: siteData.banners };
