// ===== GameGuide 主逻辑 =====
function getGuideIcon(type) {
  const map = {
    '主线攻略': '🗺️', '隐藏要素': '🔍', '配装攻略': '⚔️', '进阶技巧': '💡',
    '收集攻略': '📦', 'DLC攻略': '🧩', 'BOSS攻略': '👹', '新手攻略': '📖',
    '成就攻略': '🏆'
  };
  return map[type] || '📄';
}

const page = window.location.pathname.split('/').pop() || 'index.html';

// ===== 首页 =====
function renderHome() {
  // Banner轮播
  const banner = document.querySelector('.hero-banner');
  if (banner && gamesData.banners && gamesData.banners.length > 0) {
    let idx = 0;
    const updateBanner = () => {
      const b = gamesData.banners[idx];
      document.getElementById('heroTitle').textContent = b.title;
      document.getElementById('heroDesc').textContent = b.desc;
      document.getElementById('heroLink').href = b.link;
      banner.style.backgroundImage = `url('${b.bg}')`;
    };
    updateBanner();
    setInterval(() => { idx = (idx + 1) % gamesData.banners.length; updateBanner(); }, 5000);
  }

  // 快捷入口数量
  const games = gamesData.games;
  const allGuides = [];
  games.forEach(g => { g.guides.forEach(guide => { allGuides.push({...guide, gameName: g.name, gameId: g.id}); }); });
  document.getElementById('totalGames').textContent = games.length;
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
  renderGameGrid(games.slice(0, 6), 'hotGames');

  // 最新攻略
  allGuides.sort((a, b) => b.date.localeCompare(a.date));
  const guideEl = document.getElementById('latestGuides');
  if (guideEl) {
    guideEl.innerHTML = allGuides.slice(0, 8).map(g => `
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

  // 即将发售
  const upcomingEl = document.getElementById('upcomingGames');
  if (upcomingEl) {
    upcomingEl.innerHTML = gamesData.upcoming.map(u => `
      <div class="upcoming-card">
        <div class="date">${u.date}</div>
        <h3>${u.name}</h3>
        <p>${u.nameEn} · ${u.type}</p>
        <div class="plat">${u.platforms.map(p => `<span>${p}</span>`).join('')}</div>
      </div>
    `).join('');
  }
}

// ===== 渲染游戏网格（含平台筛选） =====
function renderGameGrid(filteredGames, elId) {
  const el = document.getElementById(elId);
  if (!el) return;
  
  if (filteredGames.length === 0) {
    el.innerHTML = '<div style="grid-column:1/-1;text-align:center;padding:60px;color:#7a7a9a;">该平台暂无收录游戏</div>';
    return;
  }
  
  el.innerHTML = filteredGames.map(g => `
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

// ===== Tab 切换 =====
function switchTab(el, platform) {
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  el.classList.add('active');
  const games = gamesData.games;
  if (platform === 'all') renderGameGrid(games.slice(0, 6), 'hotGames');
  else renderGameGrid(games.filter(g => g.platforms && g.platforms.includes(platform)).slice(0, 6), 'hotGames');
}

// ===== 快速筛选（跳转到游戏库） =====
function filterGuides(type) {
  location.href = `games.html?type=${encodeURIComponent(type)}`;
}

// ===== 搜索 =====
function searchGame() {
  const input = document.getElementById('searchInput');
  if (!input) return;
  const q = input.value.trim();
  if (q) location.href = `games.html?search=${encodeURIComponent(q)}`;
}

// ===== 菜单切换（移动端） =====
function toggleMenu() {
  document.querySelector('.nav').classList.toggle('open');
}

// ===== 游戏库页 =====
function renderGames() {
  const grid = document.querySelector('.game-grid');
  if (!grid) return;

  const params = new URLSearchParams(window.location.search);
  const search = params.get('search')?.toLowerCase() || '';
  const typeFilter = params.get('type') || '';

  let games = [...gamesData.games];
  
  // 搜索过滤
  if (search) {
    games = games.filter(g => 
      g.name.toLowerCase().includes(search) || 
      g.nameEn.toLowerCase().includes(search) ||
      g.tags.some(t => t.toLowerCase().includes(search))
    );
  }

  // 类型过滤 — 如果是从首页快捷入口来的
  if (typeFilter) {
    games = games.filter(g => g.guides.some(guide => guide.type === typeFilter));
  }

  // 更新标题
  const titleEl = document.querySelector('.page-header h1');
  if (titleEl) {
    if (search) titleEl.textContent = `🔍 搜索 "${search}"`;
    else if (typeFilter) titleEl.textContent = `📂 ${typeFilter}`;
    else titleEl.textContent = '🎮 全部游戏';
  }

  renderGameGrid(games, 'allGames');
}

// ===== 游戏详情页 =====
function renderGameDetail() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  if (!id) { document.body.innerHTML = '<div style="padding:60px;text-align:center;">游戏ID未指定</div>'; return; }

  const game = gamesData.games.find(g => g.id === id);
  if (!game) { document.body.innerHTML = '<div style="padding:60px;text-align:center;">未找到该游戏</div>'; return; }

  const app = document.getElementById('app');
  app.innerHTML = `
    <div class="game-detail">
      <div class="container">
        <a href="games.html" class="back">← 返回游戏库</a>
        <div class="game-header">
          <div class="cover" style="background-image: linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.7)), url('${game.cover}');"></div>
          <div class="info">
            <h1>${game.name} <span style="font-size:1rem;color:#7a7a9a;font-weight:400;">${game.nameEn}</span></h1>
            <div class="game-meta">${game.type} · ${game.platform} · 发售: ${game.date}</div>
            <div class="game-tags">${game.tags.map(t => `<span>${t}</span>`).join('')}</div>
            <p style="color:#a0a0b0;line-height:1.7;">${game.description}</p>
            <div style="margin-top:16px;"><span class="card-badge" style="position:static;display:inline-block;">${game.badge}</span></div>
          </div>
        </div>
        <h2 style="color:#fff;margin-bottom:16px;font-size:1.3rem;">📚 相关攻略 (${game.guides.length})</h2>
        <div class="guide-list">
          ${game.guides.map(g => `
            <div class="guide-item" onclick="location.href='guide.html?game=${game.id}&id=${g.id}'">
              <div class="guide-icon">${getGuideIcon(g.type)}</div>
              <div class="guide-info">
                <h3>${g.title}</h3>
                <p>${g.desc}</p>
                <div class="guide-meta">
                  <span>🏷️ ${g.type}</span>
                  <span>📅 ${g.date}</span>
                  <span>👁️ ${g.views}</span>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;
}

// ===== 攻略详情页 =====
function renderGuideDetail() {
  const params = new URLSearchParams(window.location.search);
  const gameId = params.get('game');
  const guideId = params.get('id');
  if (!gameId || !guideId) { document.getElementById('app').innerHTML = '<div style="padding:60px;text-align:center;">攻略ID未指定</div>'; return; }

  const game = gamesData.games.find(g => g.id === gameId);
  if (!game) { document.getElementById('app').innerHTML = '<div style="padding:60px;text-align:center;">未找到该游戏</div>'; return; }

  const guide = game.guides.find(g => g.id === guideId);
  if (!guide) { document.getElementById('app').innerHTML = '<div style="padding:60px;text-align:center;">未找到该攻略</div>'; return; }

  const content = generateGuideContent(game, guide);
  const tocContent = generateTOC(content);

  const app = document.getElementById('app');
  app.innerHTML = `
    <div class="guide-detail">
      <div class="container">
        <a href="game.html?id=${game.id}" class="back">← 返回 ${game.name}</a>
        
        <div style="display:flex;align-items:center;gap:12px;margin-bottom:8px;">
          <span style="background:#7c5cfc20;color:#7c5cfc;padding:4px 12px;border-radius:6px;font-size:0.8rem;">${guide.type}</span>
          <span style="color:#5a5a7a;font-size:0.8rem;">🎮 ${game.name}</span>
        </div>
        <h1>${guide.title}</h1>
        <div class="detail-meta">
          <span>📅 ${guide.date} 更新</span>
          <span>👁️ ${guide.views} 次阅读</span>
        </div>
        
        ${tocContent}
        
        <div class="content">${content}</div>
        
        <div style="margin-top:40px;padding:24px;background:#1e1e36;border-radius:12px;border:1px solid #2a2a4a;">
          <div style="display:flex;align-items:center;gap:16px;">
            <span style="font-size:2rem;">🤖</span>
            <div>
              <h4 style="color:#fff;margin-bottom:4px;">本文由 AI 自动生成</h4>
              <p style="color:#7a7a9a;font-size:0.85rem;">信息如有出入请以游戏内实际内容为准 · 如有遗漏欢迎反馈</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

// ===== 自动生成目录 =====
function generateTOC(html) {
  const headings = html.match(/<h2[^>]*>([^<]+)<\/h2>/g);
  if (!headings || headings.length < 2) return '';
  
  const items = headings.map(h => h.replace(/<[^>]+>/g, ''));
  return `
    <div class="toc">
      <h3>📑 目录</h3>
      ${items.map((title, i) => `<a href="#section-${i}">${title}</a>`).join('')}
    </div>
  `;
}

// ===== 攻略内容生成器 =====
function generateGuideContent(game, guide) {
  const templates = {
    '主线攻略': `
      <h2 id="section-0">一、攻略概述</h2>
      <p>本攻略将带你完整通关 <strong>《${game.name}》</strong> 的${guide.title}部分。以下内容涵盖了所有关键节点和收集要素。</p>
      
      <h2 id="section-1">二、关卡流程详解</h2>
      
      <h3>第一阶段：区域探索</h3>
      <p>进入关卡后建议先清理外围普通敌人，注意观察环境中的可交互物品。沿途可以收集到以下重要道具：</p>
      <ul>
        <li><strong>强化素材 ×3</strong> — 区域左侧岔路尽头，打破木箱即可获得</li>
        <li><strong>隐藏宝箱</strong> — 击败第二个精英怪后回头，注意墙壁上的裂缝</li>
        <li><strong>捷径解锁</strong> — 到达中层时优先开启右侧铁门，方便后续跑图</li>
        <li><strong>恢复道具 ×5</strong> — 区域右侧的小房间内</li>
      </ul>
      
      <div class="tip-block">
        <strong>💡 小提示：</strong>该区域有一种特殊的收集品需要用特定技能才能获取，建议先标记位置后续再来探索。
      </div>
      
      <h3>第二阶段：BOSS战分析</h3>
      <p>本章关底BOSS拥有以下特性：</p>
      <table>
        <tr><th>属性</th><th>详情</th></tr>
        <tr><td>弱点属性</td><td>🔥 火 / ⚡ 雷</td></tr>
        <tr><td>抗性属性</td><td>❄️ 冰</td></tr>
        <tr><td>免疫属性</td><td>无</td></tr>
        <tr><td>特殊机制</td><td>血量低于30%时进入狂暴状态，攻击频率和伤害大幅提升</td></tr>
      </table>
      <p><strong>推荐打法：</strong></p>
      <ol>
        <li><strong>P1（100%-70%）：</strong>开场直接使用爆发技能打一波伤害，注意躲开扇形AOE</li>
        <li><strong>P2（70%-30%）：</strong>BOSS开始使用追踪弹幕，利用场地柱子卡位躲避</li>
        <li><strong>P3（30%-0%）：</strong>进狂暴后保持移动，等BOSS出完大硬直技能再输出</li>
      </ol>
      
      <div class="warn-block">
        <strong>⚠️ 注意：</strong>BOSS的AOE技能有延迟判定，不要看到特效就翻滚，数1-2秒后再躲。
      </div>
      
      <h2 id="section-2">三、全收集要素汇总</h2>
      <p>本关卡共有以下收集品：</p>
      <ol>
        <li>特殊武器 × 1 — 隐藏房间内（需要BOSS房间前的钥匙）</li>
        <li>强化素材 × 5 — 分布在关卡各处</li>
        <li>剧情文档 × 3 — 解锁背景故事</li>
        <li>精英怪 × 2 — 击败后掉落限定素材</li>
      </ol>
      
      <h2 id="section-3">四、成就/奖杯相关</h2>
      <p>完成本关卡可解锁以下成就：</p>
      <ul>
        <li>🏆 「势如破竹」 — 首次通关本关卡</li>
        <li>🏆 「完美主义者」 — 本关卡全收集</li>
        <li>🏆 「无伤通关」 — 在不受到任何伤害的情况下通关（高难度）</li>
      </ul>
    `,
    
    '隐藏要素': `
      <h2 id="section-0">一、隐藏区域入口一览</h2>
      <p>《${game.name}》中存在多处隐藏区域，以下为全部入口位置和开启条件的详细说明。</p>
      
      <h3>隐藏区域 #1：遗迹密道</h3>
      <p><strong>位置：</strong>主线第二关中段，右侧墙壁有明显裂缝</p>
      <p><strong>开启条件：</strong>需要「碎石锤」或对应类型的技能/武器</p>
      <p><strong>可获得物品：</strong></p>
      <ul>
        <li>传说级武器图纸 × 1</li>
        <li>稀有强化素材 × 3</li>
        <li>限定外观 × 1（击败隐藏精英后获得）</li>
      </ul>
      
      <div class="tip-block">
        <strong>💡 小提示：</strong>该密道中还藏着一个小BOSS，建议准备好充足的回复道具再进入。
      </div>
      
      <h3>隐藏区域 #2：水下洞窟</h3>
      <p><strong>位置：</strong>海岸地图右下角的沉船附近潜水进入</p>
      <p><strong>开启条件：</strong>需要获得「深潜装备」后才能到达</p>
      <p><strong>可获得物品：</strong></p>
      <ul>
        <li>传奇饰品 × 1</li>
        <li>水下呼吸技能书 × 1</li>
      </ul>
      
      <h2 id="section-1">二、隐藏BOSS触发方法</h2>
      <p>满足以下 <strong>全部条件</strong> 后，在最终BOSS前的存档点休息3次即可触发隐藏BOSS战：</p>
      <ol>
        <li>收集全部 12 个「远古符文」</li>
        <li>完成至少三个主要支线任务</li>
        <li>角色等级到达当前版本上限</li>
        <li>未触发过游戏内任何重大Bug</li>
      </ol>
      
      <div class="warn-block">
        <strong>⚠️ 注意：</strong>隐藏BOSS的强度远超主线最终BOSS，建议做好万全准备。
      </div>
      
      <h2 id="section-2">三、隐藏结局/真结局条件</h2>
      <p>达成真结局需要：</p>
      <ul>
        <li>击败全部隐藏BOSS（含DLC）</li>
        <li>收集所有记忆碎片</li>
        <li>在最终决战前完成特定的对话选项</li>
      </ul>
    `,
    
    '配装攻略': `
      <h2 id="section-0">一、版本热门Build排行</h2>
      
      <h3>T0 级别：爆发流</h3>
      <p><strong>核心思路：</strong>极限堆叠暴击率和暴击伤害，通过一套技能爆发秒杀精英怪</p>
      <ul>
        <li><strong>主武器：</strong>「终末之刃」+ 暴伤/暴击率词条</li>
        <li><strong>副武器：</strong>「破晓之弓」+ 攻击力词条</li>
        <li><strong>饰品：</strong>「狂战士护符」+「破晓指环」+「愤怒之眼」</li>
        <li><strong>技能搭配：</strong>爆发技 + 增伤Buff + 位移技</li>
        <li><strong>加点优先级：</strong>力量/攻击力 > 暴击率 > 暴击伤害 > 攻速</li>
      </ul>
      <p><strong>适用场景：</strong>速刷、竞速、BOSS Rush</p>
      
      <h3>T1 级别：续航流</h3>
      <p><strong>核心思路：</strong>高防御 + 吸血/回复，站撸一切</p>
      <ul>
        <li><strong>武器：</strong>「生命之杖」+ 吸血/回复词条</li>
        <li><strong>防具：</strong>「不灭铠甲」五件套</li>
        <li><strong>饰品：</strong>「再生之环」+「守护者徽章」+「生命宝石」</li>
        <li><strong>技能搭配：</strong>回血阵 + 护盾 + 嘲讽/控制</li>
        <li><strong>加点优先级：</strong>体力 > 防御力 > 回复效果 > 减CD</li>
      </ul>
      <p><strong>适用场景：</strong>开荒、高难副本、多人共斗</p>
      
      <div class="tip-block">
        <strong>💡 建议：</strong>爆发流适合熟练玩家速刷，续航流适合开荒和高难副本。建议准备两套配装根据需要切换。
      </div>
      
      <h2 id="section-1">二、词条优先级参考</h2>
      <table>
        <tr><th>装备部位</th><th>优先级</th></tr>
        <tr><td>武器</td><td>暴击率 > 暴击伤害 > 攻击力% > 属性伤害 > 攻速</td></tr>
        <tr><td>防具</td><td>减伤% > HP% > 防御力 > 属性抗性 > 回复</td></tr>
        <tr><td>饰品</td><td>对应流派核心词条 > 通用增伤 > 生存词条</td></tr>
      </table>
      
      <h2 id="section-2">三、装备获取指南</h2>
      <h3>终末之刃</h3>
      <p><strong>获取位置：</strong>冰封王座区域，击败隐藏BOSS「霜之守护者」后掉落</p>
      <p><strong>前置条件：</strong>完成支线「冰封的往事」</p>
      
      <h3>不灭铠甲套装</h3>
      <p><strong>获取方式：</strong>收集散布在全地图的5个「远古铠片」，到铁匠处制作</p>
      <p><strong>铠片位置：</strong></p>
      <ol>
        <li>初始区域 · 瀑布后面的洞穴</li>
        <li>森林区域 · 精灵营地宝箱</li>
        <li>沙漠区域 · 废弃神庙二层</li>
        <li>火山区域 · 熔岩河尽头</li>
        <li>天空区域 · 浮岛BOSS房右侧</li>
      </ol>
    `,
    
    'BOSS攻略': `
      <h2 id="section-0">一、BOSS基本信息</h2>
      <table>
        <tr><th>项目</th><th>详情</th></tr>
        <tr><td>BOSS名称</td><td>${guide.title.replace('攻略','').trim()}</td></tr>
        <tr><td>所在位置</td><td>主线/隐藏区域</td></tr>
        <tr><td>推荐等级</td><td>建议高于区域推荐等级5级以上</td></tr>
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
      <p>BOSS进入新阶段，增加以下技能：</p>
      <ul>
        <li><strong>追踪弹幕：</strong>发射多枚追踪弹，利用柱子卡视野</li>
        <li><strong>召唤小怪：</strong>召唤2-3只小怪，优先清理</li>
        <li><strong>范围吸人：</strong>将玩家吸向自己然后爆发，看到蓄力就往外跑</li>
      </ul>
      
      <div class="tip-block">
        <strong>💡 关键：</strong>P2阶段BOSS攻击后有约1.5秒的硬直窗口，是主要的输出时机。
      </div>
      
      <h3>P3 阶段（30%-0%）</h3>
      <p>BOSS进入狂暴状态：</p>
      <ul>
        <li>所有技能施放频率翻倍</li>
        <li>新增全屏AOE，需要找到安全区躲避</li>
        <li>移动速度大幅提升</li>
      </ul>
      
      <div class="warn-block">
        <strong>⚠️ 重点：</strong>P3阶段保持移动是生存的关键，不要贪刀。优先保证生存，利用BOSS大硬直技能后输出。
      </div>
      
      <h2 id="section-2">三、逃课打法（可选）</h2>
      <p>如果你觉得太难，可以尝试以下逃课方案：</p>
      <ol>
        <li><strong>远程风筝：</strong>使用远程武器/法术保持距离输出</li>
        <li><strong>毒/流血磨血：</strong>上持续伤害BUFF后专心走位</li>
        <li><strong>召唤流：</strong>利用召唤物吸引仇恨，自己在安全位置输出</li>
      </ol>
    `,
    
    '新手攻略': `
      <h2 id="section-0">一、入坑前必知</h2>
      <p>欢迎来到 <strong>《${game.name}》</strong>！作为新手，你首先需要了解以下核心系统：</p>
      
      <h3>核心系统简介</h3>
      <ul>
        <li><strong>战斗系统：</strong>轻攻击+重攻击+技能的组合，注意体力/耐力管理</li>
        <li><strong>升级系统：</strong>通过经验值升级，获得属性点和技能点</li>
        <li><strong>装备系统：</strong>武器、防具、饰品三大类，注意词条搭配</li>
        <li><strong>养成系统：</strong>包括强化、进化、突破等多个维度</li>
      </ul>
      
      <h2 id="section-1">二、开局路线推荐</h2>
      <p>避免走弯路的最佳开局路线：</p>
      <ol>
        <li><strong>第一步：</strong>完成新手教程 → 获得基础装备</li>
        <li><strong>第二步：</strong>前往初始城镇对话所有NPC → 触发引导任务</li>
        <li><strong>第三步：</strong>先完成2-3个支线任务熟悉系统 → 再推进主线</li>
        <li><strong>第四步：</strong>到达第一个主城后优先解锁传送点</li>
        <li><strong>第五步：</strong>收集早期强力武器/技能 → 之后再挑战精英/BOSS</li>
      </ol>
      
      <div class="tip-block">
        <strong>💡 新手建议：</strong>前期不要急着冲主线，多探索地图、完成支线，经验和装备都更充裕。
      </div>
      
      <h2 id="section-2">三、前期必拿物品</h2>
      <table>
        <tr><th>物品</th><th>位置</th><th>作用</th></tr>
        <tr><td>初始套装</td><td>新手村铁匠</td><td>基础防御，前期够用</td></tr>
        <tr><td>回血道具</td><td>各处采集</td><td>战斗中恢复HP</td></tr>
        <tr><td>传送卷轴</td><td>初始城镇商人</td><td>快速返回安全区</td></tr>
        <tr><td>经验加成护符</td><td>支线「失踪的商人」奖励</td><td>击杀怪物获得额外经验</td></tr>
      </table>
      
      <h2 id="section-3">四、常见问题解答</h2>
      <p><strong>Q：打不过第一个BOSS怎么办？</strong></p>
      <p>A：先去练级到推荐等级，检查装备是否更新，学习BOSS的攻击节奏而不是硬拼。</p>
      
      <p><strong>Q：金币不够用怎么办？</strong></p>
      <p>A：完成支线任务、卖不用的素材、探索地图中的宝箱。</p>
      
      <p><strong>Q：推荐用什么职业/武器开局？</strong></p>
      <p>A：推荐选择攻守平衡的职业或武器，上手难度最低。</p>
    `
  };

  const defaultContent = `
    <h2 id="section-0">攻略概述</h2>
    <p>这是《${game.name}》的「${guide.title}」攻略。本攻略详细整理了你需要知道的所有关键信息，包括流程、要点和技巧。</p>
    
    <h2 id="section-1">详细内容</h2>
    <p>以下为完整指南，覆盖所有重要节点和注意事项。</p>
    
    <h3>核心要点</h3>
    <ul>
      <li>开始前确保做好了充分准备</li>
      <li>注意观察场景中的细节和提示</li>
      <li>善用游戏提供的辅助功能</li>
      <li>如果卡关可以尝试不同的策略</li>
    </ul>
    
    <div class="tip-block">
      <strong>💡 小提示：</strong>攻略内容持续更新中，如果有新的发现会及时补充。
    </div>
    
    <h3>常见问题</h3>
    <p>遇到问题可以尝试：重新审视关卡设计、调整装备和加点、参考视频攻略。</p>
  `;

  return templates[guide.type] || defaultContent;
}

// ===== 初始化 =====
document.addEventListener('DOMContentLoaded', function() {
  if (page === '' || page === 'index.html') renderHome();
  else if (page === 'games.html') renderGames();
  else if (page === 'game.html') renderGameDetail();
  else if (page === 'guide.html') renderGuideDetail();
});
