// ===== 游戏数据 =====
// 实际运行时，这部分会由 AI 自动采集+生成
const gamesData = {
  games: [
    {
      id: "wukong",
      name: "黑神话：悟空",
      nameEn: "Black Myth: Wukong",
      cover: "https://img2.gamersky.com/gamersky/2024/08/01_blackmyth.png",
      bgColor: "#1a0a0a",
      badge: "🔥 热度#1",
      type: "ACT 动作",
      platform: "PC / PS5 / Xbox",
      date: "2024-08-20",
      tags: ["动作", "RPG", "神话"],
      description: "游戏科学开发的西游题材动作角色扮演游戏。以中国神话为背景，融合了魂系战斗与华丽演出。",
      guides: [
        { id: "wukong-boss", title: "全BOSS打法攻略", type: "主线攻略", date: "2026-07-15", views: "12.3万", desc: "从幽魂到二郎神，全部BOSS详细打法、弱点分析、逃课方案" },
        { id: "wukong-hidden", title: "全隐藏支线&结局触发", type: "隐藏要素", date: "2026-07-14", views: "8.7万", desc: "全隐藏地图入口、隐藏BOSS、真结局触发条件一览" },
        { id: "wukong-build", title: "最强配装Build推荐", type: "配装攻略", date: "2026-07-12", views: "6.5万", desc: "各流派加点方案、法宝选择、葫芦配酒搭配推荐" }
      ]
    },
    {
      id: "doom-tda",
      name: "毁灭战士：黑暗时代",
      nameEn: "Doom: The Dark Ages",
      cover: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3013340/header.jpg",
      bgColor: "#1a0a00",
      badge: "IGN 9/10",
      type: "FPS 第一人称射击",
      platform: "PC / PS5 / Xbox",
      date: "2026-05-19",
      tags: ["FPS", "爽游", "动作"],
      description: "id Software开发的最新DOOM系列作品，被称为「黑暗时代」资料片，IGN评分9/10，战斗节奏更接近DOOM Eternal。",
      guides: [
        { id: "doom-tda-story", title: "主线流程全攻略", type: "主线攻略", date: "2026-07-13", views: "5.2万", desc: "每一关全收集、隐藏战斗竞技场、符文位置详解" },
        { id: "doom-tda-weapon", title: "全武器解锁&升级指南", type: "进阶技巧", date: "2026-07-10", views: "3.8万", desc: "全武器获取位置、模组选择、最优升级路线" }
      ]
    },
    {
      id: "ac4-resynced",
      name: "刺客信条：黑旗 复刻版",
      nameEn: "Assassin's Creed IV: Black Flag Resynced",
      cover: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3318850/header.jpg",
      bgColor: "#0a1a2e",
      badge: "7月新游",
      type: "ACT 动作冒险",
      platform: "PC / PS5 / Xbox",
      date: "2026-07-09",
      tags: ["开放世界", "海战", "历史"],
      description: "育碧经典重制升级版，画质全面提升，优化了操作和UI，IGN评分7/10。扮演海盗爱德华·肯威纵横加勒比海。",
      guides: [
        { id: "ac4-ship", title: "寒鸦号全升级攻略", type: "进阶技巧", date: "2026-07-11", views: "4.1万", desc: "船只收集品位置、最强船员组合、传奇船打法" },
        { id: "ac4-collect", title: "全收集品地图指引", type: "收集攻略", date: "2026-07-09", views: "6.8万", desc: "Animus碎片、海上歌谣、藏宝图全位置标记" }
      ]
    },
    {
      id: "gbf-relink",
      name: "碧蓝幻想：Relink",
      nameEn: "Granblue Fantasy: Relink",
      cover: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/881020/header.jpg",
      bgColor: "#1a2a3a",
      badge: "7月新游",
      type: "ARPG 动作角色扮演",
      platform: "PC / PS5 / PS4",
      date: "2026-07-09",
      tags: ["日式RPG", "共斗", "动漫风"],
      description: "Cygames开发的动作RPG「无尽黄昏」资料片，全新剧情篇章和角色登场。",
      guides: [
        { id: "gbf-relink-char", title: "全角色强度排行&配装", type: "配装攻略", date: "2026-07-12", views: "7.3万", desc: "最新角色Tier榜、因子搭配、武器觉醒推荐" },
        { id: "gbf-relink-endgame", title: "终局内容全解析", type: "主线攻略", date: "2026-07-10", views: "4.6万", desc: "Proud难度副本攻略、路西法HL战术、因子Farm路线" }
      ]
    },
    {
      id: "palworld",
      name: "幻兽帕鲁",
      nameEn: "Palworld",
      cover: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1623730/header.jpg",
      bgColor: "#1a2a1a",
      badge: "🔥 持续热门",
      type: "ACT 动作/生存",
      platform: "PC / Xbox",
      date: "2024-01-19",
      tags: ["开放世界", "生存", "养成"],
      description: "Pocketpair开发的缝合怪神作，将宝可梦收集+射击+生存建造巧妙融合。",
      guides: [
        { id: "palworld-breed", title: "全帕鲁配种公式大全", type: "进阶技巧", date: "2026-07-08", views: "9.8万", desc: "最新配种计算器使用指南、稀有帕鲁配方、闪光变异技巧" },
        { id: "palworld-base", title: "最优基地布局方案", type: "新手攻略", date: "2026-07-05", views: "5.4万", desc: "各阶段基地选址、流水线自动化、防御工事搭建" }
      ]
    },
    {
      id: "elden-ring",
      name: "艾尔登法环",
      nameEn: "Elden Ring",
      cover: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1245620/header.jpg",
      bgColor: "#1a1a0a",
      badge: "经典长青",
      type: "ARPG 动作角色扮演",
      platform: "PC / PS5 / PS4 / Xbox",
      date: "2022-02-25",
      tags: ["魂系", "开放世界", "硬核"],
      description: "FromSoftware的开放世界魂系巅峰之作，DLC「黄金树之影」持续更新中。",
      guides: [
        { id: "elden-ring-dlc", title: "黄金树之影全收集攻略", type: "DLC攻略", date: "2026-07-06", views: "15.2万", desc: "幽影之地全地图探索、新武器战灰位置、DLC最强Build" },
        { id: "elden-ring-boss", title: "全 remembrance BOSS无伤打法", type: "BOSS攻略", date: "2026-07-02", views: "10.1万", desc: "含DLC全部追忆BOSS，逃课流/弹反流/法术流多方案" }
      ]
    }
  ],

  upcoming: [
    { name: "红色沙漠", nameEn: "Crimson Desert", date: "2026年Q3", type: "ARPG" },
    { name: "漫威金刚狼", nameEn: "Marvel's Wolverine", date: "2026年Q4", type: "ACT" },
    { name: "Forza Horizon 6", nameEn: "Forza Horizon 6", date: "2026年Q3", type: "RAC" },
    { name: "侠盗猎车手6", nameEn: "GTA VI", date: "待定", type: "ACT" },
    { name: "Pragmata", nameEn: "Pragmata", date: "2026年", type: "ACT" }
  ]
};
