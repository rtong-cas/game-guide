// ===== GameGuide 主逻辑 =====

const GUIDE_ICONS = {
  '主线攻略': '🗺️', '隐藏要素': '🔍', '配装攻略': '⚔️', '进阶技巧': '💡',
  '收集攻略': '📦', 'DLC攻略': '🧩', 'BOSS攻略': '👹', '新手攻略': '📖', '成就攻略': '🏆'
};
function getGuideIcon(type) { return GUIDE_ICONS[type] || '📄'; }

const page = window.location.pathname.split('/').pop() || 'index.html';

// ===== 工具函数 =====
function getAllGuides() {
  const list = [];
  gamesData.games.forEach(g => {
    g.guides.forEach(guide => list.push({...guide, gameName: g.name, gameId: g.id}));
  });
  return list;
}

function renderGameGrid(games, elId) {
  const el = document.getElementById(elId);
  if (!el) return;
  if (!games || games.length === 0) {
    el.innerHTML = '<div class="empty-state"><div class="icon">📭</div><h3>暂无匹配结果</h3><p>换个筛选条件试试</p></div>';
    return;
  }
  el.innerHTML = games.map(g => `
    <div class="game-card" onclick="location.href='game.html?id=${g.id}'">
      <div class="card-img" style="background-image: linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.8)), url('${g.cover}');">
        <span class="card-badge">${g.badge}</span>
        <span class="card-title">${g.name}</span>
      </div>
      <div class="card-body">
        <div class="meta">${g.type} · ${g.platform}</div>
        <div class="tags">${g.tags.slice(0, 4).map(t => `<span>${t}</span>`).join('')}</div>
      </div>
    </div>
  `).join('');
}

function renderGuideList(guides, elId, limit) {
  const el = document.getElementById(elId);
  if (!el) return;
  const items = limit ? guides.slice(0, limit) : guides;
  el.innerHTML = items.map(g => `
    <div class="guide-item" onclick="location.href='guide.html?game=${g.gameId}&id=${g.id}'">
      <div class="guide-icon">${getGuideIcon(g.type)}</div>
      <div class="guide-info">
        <h3>${g.title}</h3>
        <p>${g.desc}</p>
        <div class="guide-meta">
          <span>🎮 ${g.gameName}</span>
          <span>🏷️ ${g.type}</span>
          <span>📅 ${g.date}</span>
          <span>👁️ ${g.views}</span>
        </div>
      </div>
    </div>
  `).join('');
}

// ===== 首页 =====
function renderHome() {
  // Banner轮播
  const banner = document.querySelector('.hero-banner');
  if (banner && gamesData.banners && gamesData.banners.length > 0) {
    let idx = 0;
    // 创建底部点
    const dotsHtml = gamesData.banners.map((_, i) => `<span class="hero-dot${i===0?' active':''}" onclick="goBanner(${i})"></span>`).join('');
    const dotsDiv = document.createElement('div');
    dotsDiv.className = 'hero-dots';
    dotsDiv.innerHTML = dotsHtml;
    banner.appendChild(dotsDiv);
    
    window.goBanner = (i) => {
      idx = i;
      const b = gamesData.banners[idx];
      document.getElementById('heroTitle').textContent = b.title;
      document.getElementById('heroDesc').textContent = b.desc;
      document.getElementById('heroLink').href = b.link;
      banner.style.backgroundImage = `url('${b.bg}')`;
      document.querySelectorAll('.hero-dot').forEach((d, j) => d.classList.toggle('active', j === idx));
    };
    
    window.goBanner(0);
    setInterval(() => { window.goBanner((idx + 1) % gamesData.banners.length); }, 5000);
  }

  // 快捷入口统计
  const allGuides = getAllGuides();
  document.getElementById('totalGames').textContent = gamesData.games.length;
  document.getElementById('totalNewbie').textContent = allGuides.filter(g => g.type === '新手攻略').length;
  document.getElementById('totalBoss').textContent = allGuides.filter(g => g.type === 'BOSS攻略').length;
  document.getElementById('totalHidden').textContent = allGuides.filter(g => g.type === '隐藏要素').length;
  document.getElementById('totalBuild').textContent = allGuides.filter(g => g.type === '配装攻略').length;

  // 资讯
  const newsEl = document.getElementById('newsList');
  if (newsEl) {
    newsEl.innerHTML = gamesData.news.slice(0, 6).map(n => `
      <div class="news-card">
        <span class="news-tag">${n.tag}</span>
        <h3>${n.title}</h3>
        <p>${n.desc}</p>
        <div class="news-meta">📅 ${n.date}</div>
      </div>
    `).join('');
  }

  // 热门游戏
  renderGameGrid(gamesData.games.slice(0, 6), 'hotGames');

  // 最新攻略分页显示（先显示6条）
  allGuides.sort((a, b) => b.date.localeCompare(a.date));
  let guidePage = 0;
  const PER_PAGE = 6;
  
  function renderGuidePage() {
    const start = 0;
    const end = (guidePage + 1) * PER_PAGE;
    renderGuideList(allGuides.slice(0, end), 'latestGuides');
    
    const wrap = document.getElementById('loadMoreWrap');
    if (end >= allGuides.length) {
      if (wrap) wrap.style.display = 'none';
    } else {
      if (wrap) wrap.style.display = 'block';
    }
  }
  
  window.loadMoreGuides = () => {
    guidePage++;
    renderGuidePage();
  };
  
  renderGuidePage();

  // 即将发售
  const upcomingEl = document.getElementById('upcomingGames');
  if (upcomingEl) {
    upcomingEl.innerHTML = gamesData.upcoming.slice(0, 10).map(u => `
      <div class="upcoming-card">
        <div class="date">${u.date}</div>
        <h3>${u.name}</h3>
        <p>${u.nameEn} · ${u.type}</p>
        <div class="plat">${(u.platforms||[]).map(p => `<span>${p}</span>`).join('')}</div>
      </div>
    `).join('');
  }
}

// ===== Tab切换 =====
window.switchTab = function(el, platform) {
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  el.classList.add('active');
  if (platform === 'all') renderGameGrid(gamesData.games.slice(0, 6), 'hotGames');
  else renderGameGrid(gamesData.games.filter(g => g.platforms && g.platforms.includes(platform)).slice(0, 6), 'hotGames');
};

// ===== 快速筛选 =====
window.filterGuides = function(type) {
  location.href = `games.html?type=${encodeURIComponent(type)}`;
};

// ===== 搜索 =====
window.searchGame = function() {
  const input = document.getElementById('searchInput');
  if (!input) return;
  const q = input.value.trim();
  if (q) location.href = `games.html?search=${encodeURIComponent(q)}`;
};

// ===== 菜单 =====
window.toggleMenu = function() {
  document.querySelector('.nav')?.classList.toggle('open');
};

// ===== 回到顶部 =====
(function() {
  const btn = document.createElement('button');
  btn.className = 'back-to-top';
  btn.innerHTML = '↑';
  btn.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  document.body.appendChild(btn);
  window.addEventListener('scroll', () => {
    btn.classList.toggle('show', window.scrollY > 400);
  });
})();

// ===== 游戏库页 =====
function renderGames() {
  const grid = document.getElementById('allGames');
  if (!grid) return;

  const params = new URLSearchParams(window.location.search);
  const search = params.get('search')?.toLowerCase() || '';
  const typeFilter = params.get('type') || '';

  let games = [...gamesData.games];
  
  if (search) {
    const searchGuides = getAllGuides().filter(g => g.title.toLowerCase().includes(search) || g.type.includes(search));
    const gameIds = new Set(searchGuides.map(g => g.gameId));
    games = games.filter(g => 
      g.name.toLowerCase().includes(search) || 
      g.nameEn.toLowerCase().includes(search) ||
      g.tags.some(t => t.toLowerCase().includes(search)) ||
      gameIds.has(g.id)
    );
  }
  if (typeFilter) {
    games = games.filter(g => g.guides.some(guide => guide.type === typeFilter));
  }

  document.title = search ? `搜索"${search}" - GameGuide` : (typeFilter ? `${typeFilter} - GameGuide` : '游戏库 - GameGuide');
  const titleEl = document.querySelector('.page-header h1');
  if (titleEl) {
    titleEl.textContent = search ? `🔍 搜索 "${search}"` : typeFilter ? `📂 ${typeFilter}` : '🎮 全部游戏';
  }
  const subEl = document.querySelector('.page-header p');
  if (subEl) {
    subEl.textContent = search ? `找到 ${games.length} 个相关游戏` : typeFilter ? `共 ${games.length} 款游戏含有此类攻略` : `共收录 ${gamesData.games.length} 款热门游戏攻略`;
  }

  renderGameGrid(games, 'allGames');
}

// ===== 游戏详情页 =====
function renderGameDetail() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  if (!id) { document.getElementById('app').innerHTML = '<div class="empty-state"><div class="icon">❌</div><h3>游戏ID未指定</h3></div>'; return; }

  const game = gamesData.games.find(g => g.id === id);
  if (!game) { document.getElementById('app').innerHTML = '<div class="empty-state"><div class="icon">❌</div><h3>未找到该游戏</h3></div>'; return; }

  const app = document.getElementById('app');
  app.innerHTML = `
    <div class="game-detail">
      <div class="container">
        <div class="breadcrumb">
          <a href="index.html">首页</a><span class="sep">/</span><a href="games.html">游戏库</a><span class="sep">/</span><span>${game.name}</span>
        </div>
        <div class="game-header">
          <div class="cover" style="background-image: linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.7)), url('${game.cover}');"></div>
          <div class="info">
            <h1>${game.name} <span style="font-size:1rem;color:#7a7a9a;font-weight:400;">${game.nameEn}</span></h1>
            <div class="game-meta">${game.type} · ${game.platform} · 发售: ${game.date}</div>
            <div class="game-tags">${game.tags.map(t => `<span>${t}</span>`).join('')}</div>
            <p style="color:#a0a0b0;line-height:1.7;">${game.description}</p>
            <div style="margin-top:16px;display:flex;gap:10px;flex-wrap:wrap;">
              <span class="guide-count-badge">📚 ${game.guides.length} 篇攻略</span>
              <span class="card-badge" style="position:static;display:inline-block;">${game.badge}</span>
            </div>
          </div>
        </div>
        <h2 style="color:#fff;margin-bottom:16px;font-size:1.3rem;">📚 全部攻略</h2>
        <div class="guide-list" id="gameGuides"></div>
      </div>
    </div>
  `;
  
  renderGuideList(game.guides.map(g => ({...g, gameName: game.name, gameId: game.id})), 'gameGuides');
}

// ===== 攻略详情页 =====
function renderGuideDetail() {
  const params = new URLSearchParams(window.location.search);
  const gameId = params.get('game');
  const guideId = params.get('id');
  if (!gameId || !guideId) { document.getElementById('app').innerHTML = '<div class="empty-state"><div class="icon">❌</div><h3>攻略ID未指定</h3></div>'; return; }

  const game = gamesData.games.find(g => g.id === gameId);
  if (!game) { document.getElementById('app').innerHTML = '<div class="empty-state"><div class="icon">❌</div><h3>未找到该游戏</h3></div>'; return; }

  const guide = game.guides.find(g => g.id === guideId);
  if (!guide) { document.getElementById('app').innerHTML = '<div class="empty-state"><div class="icon">❌</div><h3>未找到该攻略</h3></div>'; return; }

  const content = generateGuideContent(game, guide);
  const headings = content.match(/<h2[^>]*>([^<]+)<\/h2>/g);
  const tocItems = headings ? headings.map(h => h.replace(/<[^>]+>/g, '')) : [];
  const hasToc = tocItems.length >= 2;

  const app = document.getElementById('app');
  app.innerHTML = `
    <div class="guide-detail">
      <div class="container">
        <div class="breadcrumb">
          <a href="index.html">首页</a><span class="sep">/</span>
          <a href="games.html">游戏库</a><span class="sep">/</span>
          <a href="game.html?id=${game.id}">${game.name}</a><span class="sep">/</span>
          <span>${guide.title}</span>
        </div>
        
        <div style="display:flex;align-items:center;gap:12px;margin-bottom:8px;flex-wrap:wrap;">
          <span style="background:#7c5cfc20;color:#7c5cfc;padding:4px 12px;border-radius:6px;font-size:0.82rem;font-weight:500;">${getGuideIcon(guide.type)} ${guide.type}</span>
          <span style="color:#5a5a7a;font-size:0.82rem;">🎮 ${game.name}</span>
        </div>
        <h1>${guide.title}</h1>
        <div class="detail-meta">
          <span>📅 ${guide.date} 更新</span>
          <span>👁️ ${guide.views} 次阅读</span>
          <span>📄 约 ${Math.ceil(content.length / 200)} 分钟阅读</span>
        </div>
        
        ${hasToc ? `<div class="toc"><h3>📑 目录</h3>${tocItems.map((t, i) => `<a href="#section-${i}">${t}</a>`).join('')}</div>` : ''}
        
        <div class="content">${content}</div>
        
        <div style="margin-top:40px;padding:24px;background:#1e1e36;border-radius:12px;border:1px solid #2a2a4a;">
          <div style="display:flex;align-items:center;gap:16px;">
            <span style="font-size:2.5rem;">🤖</span>
            <div>
              <h4 style="color:#fff;margin-bottom:4px;">本文由 AI 自动生成</h4>
              <p style="color:#7a7a9a;font-size:0.85rem;">信息如有出入请以游戏内实际内容为准 · 持续更新中</p>
            </div>
          </div>
        </div>
        
        <div style="margin-top:30px;">
          <a href="game.html?id=${game.id}" style="color:#7c5cfc;font-size:0.9rem;">← 返回 ${game.name} 全部攻略</a>
        </div>
      </div>
    </div>
  `;
}

// ===== 攻略内容生成器 =====
function generateGuideContent(game, guide) {
  const BOSS_TEMPLATE = `
    <h2 id="section-0">一、BOSS基本信息</h2>
    <div class="stat-grid">
      <div class="stat-box"><div class="num">🔥 火</div><div class="label">弱点属性</div></div>
      <div class="stat-box"><div class="num">❄️ 冰</div><div class="label">抗性属性</div></div>
      <div class="stat-box"><div class="num">80%</div><div class="label">推荐等级</div></div>
      <div class="stat-box"><div class="num">⭐⭐⭐</div><div class="label">难度评级</div></div>
    </div>
    <table>
      <tr><th>项目</th><th>详情</th></tr>
      <tr><td>BOSS名称</td><td>${guide.title}</td></tr>
      <tr><td>所在位置</td><td>主线第五章 / 隐藏区域</td></tr>
      <tr><td>推荐等级</td><td>高于区域推荐等级5级以上</td></tr>
      <tr><td>弱点属性</td><td>🔥 火 / ⚡ 雷</td></tr>
      <tr><td>抗性属性</td><td>❄️ 冰</td></tr>
      <tr><td>可掉落</td><td>传说武器图纸、稀有素材、限定外观</td></tr>
    </table>
    
    <h2 id="section-1">二、阶段详解</h2>
    <h3>P1 阶段（100%-65%）</h3>
    <p>BOSS主要使用以下技能：</p>
    <ul>
      <li><strong>横扫：</strong>前方扇形攻击，前摇明显，向BOSS身后翻滚即可</li>
      <li><strong>突进：</strong>快速冲向玩家，看到BOSS弯腰直接侧向闪避</li>
      <li><strong>地面震荡：</strong>抬起脚踩地，有红圈提示，跳起来或远离</li>
    </ul>
    <h3>P2 阶段（65%-30%）</h3>
    <ul>
      <li><strong>追踪弹幕：</strong>发射多枚追踪弹，利用柱子卡视野</li>
      <li><strong>召唤小怪：</strong>召唤2-3只小怪，优先清理</li>
      <li><strong>范围吸人：</strong>将玩家吸向自己然后爆发，看到蓄力就往外跑</li>
    </ul>
    <div class="tip-block"><strong>💡 关键：</strong>P2阶段BOSS攻击后有约1.5秒的硬直窗口，是主要输出时机。</div>
    <h3>P3 阶段（30%-0%）</h3>
    <ul>
      <li>所有技能施放频率翻倍</li>
      <li>新增全屏AOE，需要找到安全区躲避</li>
      <li>移动速度大幅提升</li>
    </ul>
    <div class="warn-block"><strong>⚠️ 重点：</strong>P3保持移动是生存关键，不要贪刀。</div>
    
    <h2 id="section-2">三、逃课打法</h2>
    <ol>
      <li><strong>远程风筝：</strong>使用远程武器/法术保持距离输出</li>
      <li><strong>毒/流血磨血：</strong>上持续伤害BUFF后专心走位</li>
      <li><strong>召唤流：</strong>利用召唤物吸引仇恨</li>
    </ol>
  `;

  const NEWBIE_TEMPLATE = `
    <h2 id="section-0">一、入坑必知</h2>
    <p>欢迎来到 <strong>《${game.name}》</strong>！本指南将带你快速上手。</p>
    <h3>核心系统</h3>
    <ul>
      <li><strong>战斗系统：</strong>轻重攻击+技能组合，注意体力/耐力管理</li>
      <li><strong>升级系统：</strong>通过经验值升级，获得属性点和技能点</li>
      <li><strong>装备系统：</strong>武器、防具、饰品三大类，注意词条搭配</li>
    </ul>
    
    <h2 id="section-1">二、开局路线推荐</h2>
    <ol>
      <li>完成新手教程 → 获得基础装备</li>
      <li>前往初始城镇对话所有NPC → 触发引导任务</li>
      <li>先完成2-3个支线任务熟悉系统 → 再推进主线</li>
      <li>到达第一个主城后优先解锁传送点</li>
      <li>收集早期强力武器/技能 → 之后再挑战BOSS</li>
    </ol>
    <div class="tip-block"><strong>💡 建议：</strong>前期多探索地图、完成支线，经验和装备更充裕。</div>
    
    <h2 id="section-2">三、前期必拿物品</h2>
    <table>
      <tr><th>物品</th><th>位置</th><th>作用</th></tr>
      <tr><td>基础套装</td><td>新手村</td><td>前期够用的基础防御</td></tr>
      <tr><td>回复道具</td><td>各处采集/购买</td><td>战斗中恢复HP</td></tr>
      <tr><td>传送卷轴</td><td>初始城镇商人</td><td>快速返回安全区</td></tr>
    </table>
    
    <h2 id="section-3">四、常见问题</h2>
    <p><strong>Q：打不过BOSS怎么办？</strong><br>A：先去练级到推荐等级，检查装备，学习BOSS攻击节奏。</p>
    <p><strong>Q：金币不够用？</strong><br>A：完成支线、卖不用的素材、探索宝箱。</p>
  `;

  const BUILD_TEMPLATE = `
    <h2 id="section-0">一、版本热门Build排行</h2>
    
    <h3>T0：爆发流</h3>
    <p>核心思路：极限堆叠暴击率和暴击伤害</p>
    <ul>
      <li><strong>主武器：</strong>「终末之刃」+ 暴伤词条</li>
      <li><strong>饰品：</strong>「狂战士护符」+「破晓指环」</li>
      <li><strong>技能：</strong>爆发技 + 增伤Buff + 位移技</li>
      <li><strong>加点：</strong>力量/攻击力 > 暴击率 > 暴击伤害</li>
    </ul>
    
    <h3>T1：续航流</h3>
    <p>核心思路：高防御 + 吸血/回复，站撸一切</p>
    <ul>
      <li><strong>武器：</strong>「生命之杖」+ 吸血词条</li>
      <li><strong>防具：</strong>「不灭铠甲」套装</li>
      <li><strong>技能：</strong>回血阵 + 护盾 + 控制</li>
    </ul>
    
    <div class="tip-block"><strong>💡 建议：</strong>爆发流适合熟练玩家速刷，续航流适合开荒和高难副本。</div>
    
    <h2 id="section-1">二、词条优先级</h2>
    <table>
      <tr><th>部位</th><th>优先级</th></tr>
      <tr><td>武器</td><td>暴击率 > 暴击伤害 > 攻击力% > 属性伤害 > 攻速</td></tr>
      <tr><td>防具</td><td>减伤% > HP% > 防御力 > 属性抗性 > 回复</td></tr>
    </table>
    
    <h2 id="section-2">三、关键装备获取</h2>
    <h3>终末之刃</h3>
    <p><strong>获取：</strong>击败隐藏BOSS「霜之守护者」掉落</p>
    <p><strong>前置：</strong>完成支线「冰封的往事」</p>
  `;

  const HIDDEN_TEMPLATE = `
    <h2 id="section-0">一、隐藏区域入口</h2>
    <h3>隐藏区域 #1</h3>
    <p><strong>位置：</strong>主线第二关中段，右侧墙壁有明显裂缝</p>
    <p><strong>开启：</strong>需要对应类型的技能/武器</p>
    <p><strong>奖励：</strong>传说武器图纸、稀有素材</p>
    
    <div class="tip-block"><strong>💡 提示：</strong>隐藏区域中还有精英怪，建议准备好再进入。</div>
    
    <h3>隐藏区域 #2</h3>
    <p><strong>位置：</strong>海岸地图右下角</p>
    <p><strong>开启：</strong>需要特定装备</p>
    
    <h2 id="section-1">二、隐藏BOSS触发</h2>
    <p>满足以下条件后在特定位置触发：</p>
    <ol>
      <li>收集全部12个特定收集品</li>
      <li>完成三个主要支线</li>
      <li>角色等级到达上限</li>
    </ol>
    
    <h2 id="section-2">三、真结局条件</h2>
    <ul>
      <li>击败全部隐藏BOSS</li>
      <li>收集所有记忆碎片</li>
      <li>在最终决战前完成特定对话选项</li>
    </ul>
  `;

  const COLLECT_TEMPLATE = `
    <h2 id="section-0">一、收集品分类</h2>
    <p>《${game.name}》中的收集品分为以下几类：</p>
    <ul>
      <li><strong>武器/装备：</strong>全地图分布，部分在隐藏区域</li>
      <li><strong>强化素材：</strong>击败精英怪和探索获得</li>
      <li><strong>剧情文档：</strong>解锁背景故事和隐藏信息</li>
    </ul>
    
    <h2 id="section-1">二、全收集品位置</h2>
    <h3>收藏品 #1-5：初始区域</h3>
    <ol>
      <li>出生点右侧洞穴内</li>
      <li>第一个存档点后左转的岔路</li>
      <li>击败第一个精英怪后的房间角落</li>
      <li>瀑布后面的隐藏空间</li>
      <li>第一个BOSS战场地左侧</li>
    </ol>
    
    <h3>收藏品 #6-10：森林区域</h3>
    <ol start="6">
      <li>大树根部的宝箱</li>
      <li>精灵营地商人处购买</li>
      <li>瀑布上游的木桥下</li>
      <li>击败区域BOSS后返回</li>
      <li>隐藏洞穴的最深处</li>
    </ol>
    
    <div class="tip-block"><strong>💡 提示：</strong>部分收集品需要特定技能或推进到特定剧情后才能获取。</div>
    
    <h2 id="section-2">三、收集奖励</h2>
    <table>
      <tr><th>进度</th><th>奖励</th></tr>
      <tr><td>25%</td><td>强化石×5、金币×1000</td></tr>
      <tr><td>50%</td><td>限定武器外观</td></tr>
      <tr><td>75%</td><td>稀有饰品</td></tr>
      <tr><td>100%</td><td>传说装备、成就/奖杯</td></tr>
    </table>
  `;

  const DLC_TEMPLATE = `
    <h2 id="section-0">一、DLC内容概述</h2>
    <p>《${game.name}》的「${guide.title}」为玩家带来了全新的游戏内容：</p>
    <ul>
      <li><strong>新区域：</strong>全新的可探索地图</li>
      <li><strong>新剧情：</strong>延续主线的全新故事</li>
      <li><strong>新BOSS：</strong>更具挑战性的敌人</li>
      <li><strong>新装备/技能：</strong>丰富配装选择</li>
    </ul>
    
    <h2 id="section-1">二、新区域探索</h2>
    <p>DLC新增的探索区域需要满足以下条件才能进入：</p>
    <ol>
      <li>完成主线全部章节</li>
      <li>角色等级达到推荐等级</li>
      <li>在特定NPC处接取DLC引导任务</li>
    </ol>
    
    <h2 id="section-2">三、新BOSS攻略</h2>
    <p>DLC新增BOSS难度较高，建议做好充分准备：</p>
    <ul>
      <li><strong>推荐装备：</strong>传说级武器+完整套装</li>
      <li><strong>推荐等级：</strong>达到当前版本最高等级</li>
      <li><strong>推荐道具：</strong>准备充足的回复和增益道具</li>
    </ul>
    
    <h2 id="section-3">四、DLC全收集</h2>
    <p>DLC新增了以下收集品：</p>
    <ul>
      <li>新武器/装备 × 若干</li>
      <li>新技能/能力 × 若干</li>
      <li>剧情文档 × 若干</li>
      <li>新成就/奖杯 × 若干</li>
    </ul>
  `;

  const STORY_TEMPLATE = `
    <h2 id="section-0">一、流程概览</h2>
    <p>本攻略将带你走完 <strong>《${game.name}》</strong> 的主线流程，包含关键要点和收集推荐。</p>
    
    <h2 id="section-1">二、关卡详解</h2>
    <h3>第一阶段</h3>
    <p>进入关卡后先清理外围敌人，注意收集以下物品：</p>
    <ul>
      <li><strong>强化素材×3</strong> — 区域左侧岔路尽头</li>
      <li><strong>隐藏宝箱</strong> — 击败第二个精英怪后回头</li>
      <li><strong>捷径解锁</strong> — 到达中层时优先开启铁门</li>
    </ul>
    
    <div class="tip-block"><strong>💡 提示：</strong>部分收集品需要特定技能，可标记后续再来。</div>
    
    <h3>第二阶段：BOSS战</h3>
    <p><strong>推荐打法：</strong>开场爆发打一波，中间阶段利用场地卡位，狂暴后保持移动。</p>
    <table>
      <tr><th>属性</th><th>详情</th></tr>
      <tr><td>弱点</td><td>🔥 火 / ⚡ 雷</td></tr>
      <tr><td>抗性</td><td>❄️ 冰</td></tr>
      <tr><td>特殊</td><td>30%血量狂暴</td></tr>
    </table>
    
    <div class="warn-block"><strong>⚠️ 注意：</strong>AOE技能有延迟判定，数1-2秒后再躲。</div>
    
    <h2 id="section-2">三、全收集要点</h2>
    <ol>
      <li>特殊武器 × 1 — 隐藏房间（需要钥匙）</li>
      <li>强化素材 × 5 — 关卡各处</li>
      <li>剧情文档 × 3 — 解锁背景</li>
    </ol>
  `;

  const ACHIEVE_TEMPLATE = `
    <h2 id="section-0">一、成就列表总览</h2>
    <p>《${game.name}》共有以下成就等待解锁：</p>
    <table>
      <tr><th>成就名</th><th>解锁条件</th><th>难度</th></tr>
      <tr><td>踏上旅程</td><td>完成序章</td><td>⭐</td></tr>
      <tr><td>势如破竹</td><td>击败第一个BOSS</td><td>⭐</td></tr>
      <tr><td>收集大师</td><td>收集50%的收藏品</td><td>⭐⭐</td></tr>
      <tr><td>完美主义者</td><td>全收集</td><td>⭐⭐⭐</td></tr>
      <tr><td>无伤通关</td><td>不受伤击败特定BOSS</td><td>⭐⭐⭐⭐</td></tr>
      <tr><td>白金奖杯</td><td>解锁全部成就</td><td>⭐⭐⭐⭐⭐</td></tr>
    </table>
    
    <h2 id="section-1">二、速刷路线推荐</h2>
    <ol>
      <li>先完成所有主线成就</li>
      <li>回头做全收集</li>
      <li>最后挑战高难度成就</li>
    </ol>
    
    <h2 id="section-2">三、隐藏成就说明</h2>
    <p>以下为隐藏成就的解锁条件：</p>
    <ul>
      <li><strong>隐藏成就#1：</strong>在特定时间触发特殊事件</li>
      <li><strong>隐藏成就#2：</strong>完成某个支线的特殊选择</li>
      <li><strong>隐藏成就#3：</strong>不使用特定道具通关</li>
    </ul>
  `;

  const ADVANCED_TEMPLATE = `
    <h2 id="section-0">一、进阶技巧概述</h2>
    <p>《${game.name}》的深度远超表面，以下进阶技巧将帮助你成为高手。</p>
    
    <h2 id="section-1">二、核心技巧拆解</h2>
    <h3>技巧一：资源循环</h3>
    <p>合理利用游戏内的资源循环机制，可以大幅提升效率：</p>
    <ul>
      <li>击败敌人→获得资源→强化装备→挑战更强敌人</li>
      <li>探索→发现资源点→定期采集→制作高级道具</li>
    </ul>
    
    <h3>技巧二：战斗进阶</h3>
    <ul>
      <li>掌握完美闪避/格挡时机</li>
      <li>学会取消后摇，打出最大DPS</li>
      <li>利用环境元素造成额外伤害</li>
    </ul>
    
    <h2 id="section-2">三、高手思路</h2>
    <div class="tip-block"><strong>💡 核心思路：</strong>与其追求单一build的极致，不如准备多套方案针对不同场景切换。</div>
    
    <h2 id="section-3">四、效率提升技巧</h2>
    <ul>
      <li>规划路线，避免重复跑图</li>
      <li>善用游戏内的传送/快速旅行系统</li>
      <li>了解怪物刷新机制，高效Farm</li>
    </ul>
  `;

  const templates = {
    'BOSS攻略': BOSS_TEMPLATE,
    '新手攻略': NEWBIE_TEMPLATE,
    '配装攻略': BUILD_TEMPLATE,
    '隐藏要素': HIDDEN_TEMPLATE,
    '收集攻略': COLLECT_TEMPLATE,
    'DLC攻略': DLC_TEMPLATE,
    '主线攻略': STORY_TEMPLATE,
    '成就攻略': ACHIEVE_TEMPLATE,
    '进阶技巧': ADVANCED_TEMPLATE
  };

  return templates[guide.type] || `
    <h2 id="section-0">攻略概述</h2>
    <p>《${game.name}》的「${guide.title}」攻略，整理了所有关键信息。</p>
    <h2 id="section-1">核心要点</h2>
    <ul>
      <li>做好充分准备</li>
      <li>注意观察场景细节</li>
      <li>善用游戏辅助功能</li>
    </ul>
    <div class="tip-block"><strong>💡 提示：</strong>内容持续更新中。</div>
  `;
}

// ===== 页面初始化 =====
document.addEventListener('DOMContentLoaded', function() {
  document.body.classList.add('page-loading');
  
  if (page === '' || page === 'index.html') renderHome();
  else if (page === 'games.html') renderGames();
  else if (page === 'game.html') renderGameDetail();
  else if (page === 'guide.html') renderGuideDetail();
});
