// ===== GameGuide 完整数据 =====
const siteData = {
  // 首页Banner轮播
  banners: [
    { title: "黑神话：悟空 全攻略", desc: "从入门到全成就，最完整的西游冒险指南", link: "game.html?id=wukong", bg: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2358720/header.jpg" },
    { title: "艾尔登法环 黄金树之影", desc: "DLC全地图探索、新武器战灰、最强Build一网打尽", link: "game.html?id=elden-ring", bg: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1245620/header.jpg" },
    { title: "刺客信条：黑旗 复刻版", desc: "经典重制，寒鸦号全升级+全收集指引", link: "game.html?id=ac4-resynced", bg: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3318850/header.jpg" }
  ],
  bannerIndex: 0,

  // 游戏资讯
  news: [
    { id: "n1", title: "《上古卷轴6》开发进度爆料：已进入可游玩阶段", tag: "业界动态", date: "2026-07-16", desc: "B社总监透露《上古卷轴6》开发顺利，现已可完整游玩主线流程。" },
    { id: "n2", title: "《卧龙2》正式公布首支预告片，2027年发售", tag: "新作发布", date: "2026-07-16", desc: "光荣特库魔正式公布《卧龙2》，新主角+全新战场，登陆PC/PS5/Xbox。" },
    { id: "n3", title: "国产抗日FPS《抵抗者》宣布首次公开试玩", tag: "国产游戏", date: "2026-07-16", desc: "国产独立FPS《抵抗者》宣布将于8月开启首次公开试玩，Steam页面已上线。" },
    { id: "n4", title: "PS港服夏日大促重磅开启", tag: "优惠促销", date: "2026-07-16", desc: "索尼PS港服夏日促销正式开启，多款大作低至2折，会员额外折扣。" },
    { id: "n5", title: "《漫威金刚狼》重申2026年发售日不变", tag: "业界动态", date: "2026-07-16", desc: "Insomniac工作室确认《漫威金刚狼》仍计划2026年发售，开发顺利推进中。" },
    { id: "n6", title: "《心动小镇》×三丽鸥家族联动正式上线", tag: "手游资讯", date: "2026-07-15", desc: "治愈系手游《心动小镇》与三丽鸥家族联动开启，限定角色和装饰上线。" },
    { id: "n7", title: "《Forza Horizon 6》发售日泄露：9月4日发售", tag: "传闻", date: "2026-07-15", desc: "墨西哥背景的《极限竞速：地平线6》发售日疑似泄露，微软未予置评。" },
    { id: "n8", title: "《休闲采矿》Steam正式发售，桌面摸鱼神器", tag: "独立游戏", date: "2026-07-14", desc: "治愈系放置游戏《休闲采矿》正式发售，在桌面默默开挖，好评率96%。" }
  ],

  // 游戏数据
  games: [
    {
      id: "wukong",
      name: "黑神话：悟空",
      nameEn: "Black Myth: Wukong",
      cover: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2358720/header.jpg",
      bgColor: "#1a0a0a",
      badge: "🔥 热度#1",
      type: "ACT 动作",
      platform: "PC / PS5 / Xbox",
      platforms: ["pc", "ps", "xbox"],
      date: "2024-08-20",
      tags: ["动作", "RPG", "神话", "魂系"],
      description: "游戏科学开发的西游题材动作角色扮演游戏。以中国神话为背景，融合了魂系战斗与华丽演出，是2024年最受瞩目的国产3A大作。",
      guides: [
        { id: "wukong-boss", title: "全BOSS打法攻略（含DLC）", type: "BOSS攻略", date: "2026-07-15", views: "12.3万", desc: "从幽魂到二郎神，全部BOSS详细打法、弱点分析、逃课方案" },
        { id: "wukong-hidden", title: "全隐藏支线&真结局触发条件", type: "隐藏要素", date: "2026-07-14", views: "8.7万", desc: "全隐藏地图入口、隐藏BOSS、真结局触发条件一览" },
        { id: "wukong-build", title: "最强配装Build推荐（多流派）", type: "配装攻略", date: "2026-07-12", views: "6.5万", desc: "各流派加点方案、法宝选择、葫芦配酒搭配推荐" },
        { id: "wukong-newbie", title: "新手入门指南：基础操作到进阶技巧", type: "新手攻略", date: "2026-07-10", views: "5.2万", desc: "从零开始的悟空之旅，包含战斗系统详解和资源规划" }
      ]
    },
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
      description: "id Software开发的DOOM最新资料片「黑暗时代」，IGN评分9/10。战斗节奏更快、武器更狂野，被誉为近年最佳的FPS资料片。",
      guides: [
        { id: "doom-tda-story", title: "主线流程全攻略（全收集）", type: "主线攻略", date: "2026-07-13", views: "5.2万", desc: "每一关全收集、隐藏战斗竞技场、符文位置详解" },
        { id: "doom-tda-weapon", title: "全武器解锁&模组升级指南", type: "进阶技巧", date: "2026-07-10", views: "3.8万", desc: "全武器获取位置、模组选择、最优升级路线推荐" },
        { id: "doom-tda-secret", title: "所有隐藏关卡&彩蛋位置", type: "隐藏要素", date: "2026-07-08", views: "2.4万", desc: "经典DOOM彩蛋、隐藏战斗关卡、特殊武器解锁" }
      ]
    },
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
      description: "育碧经典重制升级版，画质全面提升，优化了操作和UI。扮演海盗爱德华·肯威纵横加勒比海，体验最经典的海战系统。",
      guides: [
        { id: "ac4-ship", title: "寒鸦号全升级&传奇船攻略", type: "进阶技巧", date: "2026-07-11", views: "4.1万", desc: "船只收集品位置、最强船员组合、传奇船打法详解" },
        { id: "ac4-collect", title: "全收集品地图指引", type: "收集攻略", date: "2026-07-09", views: "6.8万", desc: "Animus碎片、海上歌谣、藏宝图全位置标记" },
        { id: "ac4-story", title: "主线剧情速通&全同步条件", type: "主线攻略", date: "2026-07-08", views: "3.2万", desc: "每个记忆序列100%同步条件、速通路线推荐" }
      ]
    },
    {
      id: "gbf-relink",
      name: "碧蓝幻想：Relink 无尽黄昏",
      nameEn: "Granblue Fantasy: Relink",
      cover: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/881020/header.jpg",
      bgColor: "#1a2a3a",
      badge: "7月新游",
      type: "ARPG 动作角色扮演",
      platform: "PC / PS5 / PS4",
      platforms: ["pc", "ps"],
      date: "2026-07-09",
      tags: ["日式RPG", "共斗", "动漫风", "动作"],
      description: "Cygames开发的JRPG「无尽黄昏」资料片，全新剧情篇章、新角色、新副本，共斗玩法全面进化。",
      guides: [
        { id: "gbf-relink-char", title: "全角色强度排行&配装指南", type: "配装攻略", date: "2026-07-12", views: "7.3万", desc: "最新角色Tier榜、因子搭配、武器觉醒推荐" },
        { id: "gbf-relink-endgame", title: "终局内容全解析：Proud难度通关", type: "主线攻略", date: "2026-07-10", views: "4.6万", desc: "Proud难度副本攻略、路西法HL战术、因子Farm路线" },
        { id: "gbf-relink-boss", title: "全BOSS机制详解&逃课打法", type: "BOSS攻略", date: "2026-07-07", views: "3.9万", desc: "从入门到路西法，每个BOSS的机制分析和推荐打法" }
      ]
    },
    {
      id: "palworld",
      name: "幻兽帕鲁",
      nameEn: "Palworld",
      cover: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1623730/header.jpg",
      bgColor: "#1a2a1a",
      badge: "🔥 持续热门",
      type: "生存 动作",
      platform: "PC / Xbox",
      platforms: ["pc", "xbox"],
      date: "2024-01-19",
      tags: ["开放世界", "生存", "养成", "射击"],
      description: "Pocketpair开发的缝合怪神作，将宝可梦收集+射击+生存建造巧妙融合，销量突破千万。",
      guides: [
        { id: "palworld-breed", title: "全帕鲁配种公式大全（持续更新）", type: "进阶技巧", date: "2026-07-08", views: "9.8万", desc: "最新配种计算器使用指南、稀有帕鲁配方、闪光变异技巧" },
        { id: "palworld-base", title: "最优基地布局&自动化流水线", type: "新手攻略", date: "2026-07-05", views: "5.4万", desc: "各阶段基地选址、流水线自动化、防御工事搭建指南" },
        { id: "palworld-boss", title: "全塔主BOSS攻略&配队推荐", type: "BOSS攻略", date: "2026-07-02", views: "3.1万", desc: "各个塔主BOSS的技能分析和推荐帕鲁配队" }
      ]
    },
    {
      id: "elden-ring",
      name: "艾尔登法环",
      nameEn: "Elden Ring",
      cover: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1245620/header.jpg",
      bgColor: "#1a1a0a",
      badge: "🏆 经典长青",
      type: "ARPG 动作角色扮演",
      platform: "PC / PS5 / PS4 / Xbox",
      platforms: ["pc", "ps", "xbox"],
      date: "2022-02-25",
      tags: ["魂系", "开放世界", "硬核", "奇幻"],
      description: "FromSoftware的开放世界魂系巅峰之作，DLC「黄金树之影」持续更新中。广阔的「狭间之地」充满了未知的冒险和挑战。",
      guides: [
        { id: "elden-ring-dlc", title: "黄金树之影全收集&全BOSS攻略", type: "DLC攻略", date: "2026-07-06", views: "15.2万", desc: "幽影之地全地图探索、新武器战灰位置、DLC最强Build" },
        { id: "elden-ring-boss", title: "全追忆BOSS无伤打法指南", type: "BOSS攻略", date: "2026-07-02", views: "10.1万", desc: "含DLC全部追忆BOSS，逃课流/弹反流/法术流多方案" },
        { id: "elden-ring-build", title: "版本最强Build汇总（DLC版）", type: "配装攻略", date: "2026-06-28", views: "7.8万", desc: "感应流血、智力法术、信仰雷电等主流Build详细配装" },
        { id: "elden-ring-newbie", title: "新手入坑指南：开局路线&武器推荐", type: "新手攻略", date: "2026-06-25", views: "6.3万", desc: "不迷路的新手开局路线、前期强力武器和护符获取" }
      ]
    },
    {
      id: "palworld-2024",
      name: "幻兽帕鲁",
      nameEn: "Palworld",
      cover: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1623730/header.jpg",
      bgColor: "#1a2a1a",
      badge: "🔥 持续热门",
      type: "生存 动作",
      platform: "PC / Xbox",
      platforms: ["pc", "xbox"],
      date: "2024-01-19",
      tags: ["开放世界", "生存", "养成", "射击"],
      description: "Pocketpair开发的缝合怪神作，将宝可梦收集+射击+生存建造巧妙融合，销量突破千万。",
      guides: [
        { id: "palworld-999", title: "Dummy", type: "隐藏要素", date: "2026-01-01", views: "0万", desc: "" }
      ]
    }
  ],
  // Remove duplicate
  getUniqueGames() {
    const seen = new Set();
    return this.games.filter(g => {
      const key = g.id;
      if (seen.has(key)) return false;
      seen.add(key);
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
    { name: "卧龙2", nameEn: "Wo Long 2", date: "2027年", type: "ARPG", platforms: ["PC", "PS5", "Xbox"] }
  ]
};

// 去重后导出
gamesData = { games: siteData.getUniqueGames(), upcoming: siteData.upcoming, news: siteData.news, banners: siteData.banners };
