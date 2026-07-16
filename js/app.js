// ===== 应用主逻辑 =====

// 获取当前页面路径
const page = window.location.pathname.split('/').pop() || 'index.html';

// 渲染首页
function renderHome() {
  const hotEl = document.getElementById('hotGames');
  const guideEl = document.getElementById('latestGuides');
  const upcomingEl = document.getElementById('upcomingGames');
  if (!hotEl) return;

  // 热门游戏卡片
  hotEl.innerHTML = gamesData.games.map(g => `
    <div class="game-card" onclick="location.href='game.html?id=${g.id}'">
      <div class="card-img" style="background-image: linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.7)), url('${g.cover}');">
        <span class="card-badge">${g.badge}</span>
      </div>
      <div class="card-body">
        <h3>${g.name}</h3>
        <div class="meta">${g.type} · ${g.platform}</div>
        <div class="tags">${g.tags.map(t => `<span>${t}</span>`).join('')}</div>
      </div>
    </div>
  `).join('');

  // 最新攻略（所有游戏的攻略按日期排序，取前8条）
  const allGuides = [];
  gamesData.games.forEach(g => {
    g.guides.forEach(guide => {
      allGuides.push({ ...guide, gameName: g.name, gameId: g.id });
    });
  });
  allGuides.sort((a, b) => b.date.localeCompare(a.date));

  const iconMap = {
    '主线攻略': '🗺️', '隐藏要素': '🔍', '配装攻略': '⚔️', '进阶技巧': '💡',
    '收集攻略': '📦', 'DLC攻略': '🧩', 'BOSS攻略': '👹', '新手攻略': '📖'
  };

  guideEl.innerHTML = allGuides.slice(0, 8).map(g => `
    <div class="guide-item" onclick="location.href='guide.html?game=${g.gameId}&id=${g.id}'">
      <div class="guide-icon" style="background: #2a2a4a;">${iconMap[g.type] || '📄'}</div>
      <div class="guide-info">
        <h3>${g.title}</h3>
        <p>${g.desc}</p>
        <div class="guide-meta">
          <span>🎮 ${g.gameName}</span>
          <span>📅 ${g.date}</span>
          <span>👁️ ${g.views}</span>
        </div>
      </div>
    </div>
  `).join('');

  // 即将发售
  upcomingEl.innerHTML = gamesData.upcoming.map(u => `
    <div class="upcoming-card">
      <div class="date">${u.date}</div>
      <h3>${u.name}</h3>
      <p>${u.nameEn} · ${u.type}</p>
    </div>
  `).join('');
}

// 渲染游戏库页
function renderGames() {
  const grid = document.querySelector('.game-grid');
  if (!grid) return;

  const params = new URLSearchParams(window.location.search);
  const search = params.get('search')?.toLowerCase() || '';

  let filtered = gamesData.games;
  if (search) {
    filtered = filtered.filter(g => 
      g.name.toLowerCase().includes(search) || 
      g.nameEn.toLowerCase().includes(search) ||
      g.tags.some(t => t.toLowerCase().includes(search))
    );
  }

  if (filtered.length === 0) {
    grid.innerHTML = '<div style="text-align:center;padding:60px;color:#7a7a9a;">没有找到匹配的游戏</div>';
    return;
  }

  grid.innerHTML = filtered.map(g => `
    <div class="game-card" onclick="location.href='game.html?id=${g.id}'">
      <div class="card-img" style="background-image: linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.7)), url('${g.cover}');">
        <span class="card-badge">${g.badge}</span>
      </div>
      <div class="card-body">
        <h3>${g.name}</h3>
        <div class="meta">${g.type} · ${g.platform}</div>
        <div class="tags">${g.tags.map(t => `<span>${t}</span>`).join('')}</div>
      </div>
    </div>
  `).join('');
}

// 渲染游戏详情页
function renderGameDetail() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  if (!id) { document.body.innerHTML = '<div style="padding:60px;text-align:center;">游戏ID未指定</div>'; return; }

  const game = gamesData.games.find(g => g.id === id);
  if (!game) { document.body.innerHTML = '<div style="padding:60px;text-align:center;">未找到该游戏</div>'; return; }

  const app = document.getElementById('app');
  const iconMap = {
    '主线攻略': '🗺️', '隐藏要素': '🔍', '配装攻略': '⚔️', '进阶技巧': '💡',
    '收集攻略': '📦', 'DLC攻略': '🧩', 'BOSS攻略': '👹', '新手攻略': '📖'
  };

  app.innerHTML = `
    <div class="game-detail">
      <div class="container">
        <a href="games.html" class="back" style="display:inline-block;margin-bottom:20px;color:#7a7a9a;">← 返回游戏库</a>
        <div class="game-header">
          <div class="cover" style="background-image: linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.6)), url('${game.cover}');"></div>
          <div class="info">
            <h1>${game.name} <span style="font-size:1rem;color:#7a7a9a;font-weight:400;">${game.nameEn}</span></h1>
            <div class="game-meta">${game.type} · ${game.platform} · 发售: ${game.date}</div>
            <div class="game-tags">${game.tags.map(t => `<span>${t}</span>`).join('')}</div>
            <p style="color:#a0a0b0;line-height:1.7;">${game.description}</p>
          </div>
        </div>
        <h2 style="color:#fff;margin-bottom:16px;">📚 相关攻略 (${game.guides.length})</h2>
        <div class="guide-list">
          ${game.guides.map(g => `
            <div class="guide-item" onclick="location.href='guide.html?game=${game.id}&id=${g.id}'">
              <div class="guide-icon" style="background:#2a2a4a;">${iconMap[g.type] || '📄'}</div>
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

// 渲染攻略详情页
function renderGuideDetail() {
  const params = new URLSearchParams(window.location.search);
  const gameId = params.get('game');
  const guideId = params.get('id');
  if (!gameId || !guideId) { document.body.innerHTML = '<div style="padding:60px;text-align:center;">攻略ID未指定</div>'; return; }

  const game = gamesData.games.find(g => g.id === gameId);
  if (!game) { document.body.innerHTML = '<div style="padding:60px;text-align:center;">未找到该游戏</div>'; return; }

  const guide = game.guides.find(g => g.id === guideId);
  if (!guide) { document.body.innerHTML = '<div style="padding:60px;text-align:center;">未找到该攻略</div>'; return; }

  // 模拟攻略内容（实际使用时由AI生成真实内容）
  const content = generateGuideContent(game, guide);

  const app = document.getElementById('app');
  app.innerHTML = `
    <div class="guide-detail">
      <div class="container">
        <a href="game.html?id=${game.id}" class="back">← 返回 ${game.name} 攻略列表</a>
        <h1>${guide.title}</h1>
        <div class="detail-meta">
          <span>🎮 ${game.name}</span>
          <span>🏷️ ${guide.type}</span>
          <span>📅 ${guide.date}</span>
          <span>👁️ ${guide.views} 次阅读</span>
        </div>
        <div class="content">
          ${content}
        </div>
        <div style="margin-top:40px;padding:20px;background:#1e1e36;border-radius:10px;text-align:center;color:#7a7a9a;">
          ⚡ 本文由 AI 自动生成，信息如有出入请以游戏内实际内容为准
        </div>
      </div>
    </div>
  `;
}

// 攻略内容生成器（Demo用，实际走爬取+AI生成）
function generateGuideContent(game, guide) {
  const templates = {
    '主线攻略': `
      <h2>一、前置准备</h2>
      <p>在开始本章节之前，建议将角色等级提升至推荐等级以上，并准备好充足的回复道具。</p>
      
      <h2>二、关卡流程</h2>
      <h3>第一阶段：区域探索</h3>
      <p>进入关卡后，先清理外围的普通敌人，注意躲避远程攻击。沿途可以收集到以下重要物品：</p>
      <ul>
        <li><strong>强化素材×3</strong> — 区域左侧岔路尽头</li>
        <li><strong>隐藏宝箱</strong> — 击败第二个精英怪后回头，打破墙壁进入</li>
        <li><strong>捷径解锁</strong> — 到达中层时先开启右侧铁门，方便后续跑图</li>
      </ul>
      
      <div class="tip">
        <strong>💡 小提示：</strong>该区域有一种特殊的收集品需要用特定技能才能获取，建议回头再来探索。
      </div>
      
      <h3>第二阶段：BOSS战</h3>
      <p>本章关底BOSS具有以下特点：</p>
      <ul>
        <li><strong>弱点属性：</strong>火 / 雷</li>
        <li><strong>抗性属性：</strong>冰</li>
        <li><strong>特殊机制：</strong>BOSS在血量低于30%时会进入狂暴状态，攻击频率大幅提升</li>
      </ul>
      <p><strong>推荐打法：</strong>开场直接使用爆发技能打一波爆发，中间阶段利用场地柱子卡位躲技能，进狂暴后保持移动，找机会蹭刀即可。</p>
      
      <div class="warning">
        <strong>⚠️ 注意：</strong>BOSS的AOE技能有延迟判定，不要看到特效就翻滚，等0.5秒后再躲。
      </div>
      
      <h2>三、全收集要素</h2>
      <p>本关卡共有以下收集品：</p>
      <ol>
        <li>特殊武器 × 1 — 隐藏房间内（需要钥匙）</li>
        <li>强化素材 × 5 — 分布在关卡各处</li>
        <li>剧情文档 × 3 — 解锁背景故事</li>
      </ol>
    `,
    '隐藏要素': `
      <h2>一、隐藏区域入口</h2>
      <p>游戏中存在多处隐藏区域，以下是全部入口的位置和开启条件：</p>
      
      <h3>隐藏区域 #1：遗迹密道</h3>
      <p><strong>位置：</strong>主线第二关中段，右侧墙壁有明显裂缝</p>
      <p><strong>开启条件：</strong>需要「碎石锤」或对应类型的技能</p>
      <p><strong>奖励：</strong>传说级武器图纸、稀有素材×3</p>
      
      <div class="tip">
        <strong>💡 小提示：</strong>该密道中还藏着一个小BOSS，击败后掉落限定外观。
      </div>
      
      <h3>隐藏区域 #2：水下洞窟</h3>
      <p><strong>位置：</strong>海岸地图右下角的沉船附近潜水进入</p>
      <p><strong>开启条件：</strong>需要获得「深潜装备」后才能到达</p>
      
      <h2>二、隐藏BOSS触发</h2>
      <p>满足以下所有条件后，在最终BOSS前的存档点休息3次即可触发隐藏BOSS战：</p>
      <ol>
        <li>收集全部12个「远古符文」</li>
        <li>完成了三个主要支线任务</li>
        <li>角色等级到达上限</li>
      </ol>
    `,
    '配装攻略': `
      <h2>一、版本热门Build排名</h2>
      
      <h3>T0：爆发流</h3>
      <p><strong>核心思路：</strong>堆满暴击率和暴击伤害，一套技能秒杀精英怪</p>
      <ul>
        <li><strong>武器推荐：</strong>「终末之刃」+ 暴伤词条</li>
        <li><strong>饰品推荐：</strong>「狂战士护符」「破晓指环」</li>
        <li><strong>技能搭配：</strong>爆发技 + 增伤Buff + 位移</li>
        <li><strong>加点建议：</strong>力量/攻击力 > 暴击率 > 暴击伤害</li>
      </ul>
      
      <h3>T1：续航流</h3>
      <p><strong>核心思路：</strong>高防御 + 吸血/回血，站撸一切</p>
      <ul>
        <li><strong>武器推荐：</strong>「生命之杖」+ 吸血词条</li>
        <li><strong>防具推荐：</strong>「不灭铠甲」套装</li>
        <li><strong>技能搭配：</strong>回血阵 + 护盾 + 嘲讽</li>
      </ul>
      
      <div class="tip">
        <strong>💡 小提示：</strong>爆发流适合熟练玩家速刷，续航流适合开荒和高难副本。
      </div>
      
      <h2>二、词条优先级</h2>
      <p>武器：暴击率 > 暴击伤害 > 攻击力% > 属性伤害 > 攻速</p>
      <p>防具：减伤 > HP% > 防御力 > 抗性 > 回复</p>
    `
  };

  // Fallback
  const defaultContent = `
    <h2>攻略概述</h2>
    <p>这是《${game.name}》的「${guide.title}」攻略。本攻略详细整理了你需要知道的所有关键信息。</p>
    
    <h2>详细内容</h2>
    <p>以下为${guide.type}的完整指南，包含所有重要节点和注意要点。</p>
    
    <h3>要点速览</h3>
    <ul>
      <li>推荐在开始前做好充分准备</li>
      <li>注意观察场景中的细节提示</li>
      <li>善用游戏提供的辅助功能</li>
    </ul>
    
    <div class="tip">
      <strong>💡 小提示：</strong>攻略持续更新中，如果有新发现会及时补充。
    </div>
    
    <h3>常见问题</h3>
    <p>如果在攻略过程中遇到问题，可以参考其他玩家的讨论或查看相关视频攻略。</p>
  `;

  return templates[guide.type] || defaultContent;
}

// 搜索功能
function searchGame() {
  const input = document.getElementById('searchInput');
  if (!input) return;
  const q = input.value.trim();
  if (q) {
    location.href = `games.html?search=${encodeURIComponent(q)}`;
  }
}

// 页面初始化
document.addEventListener('DOMContentLoaded', function() {
  if (page === '' || page === 'index.html') {
    renderHome();
  } else if (page === 'games.html') {
    renderGames();
  } else if (page === 'game.html') {
    renderGameDetail();
  } else if (page === 'guide.html') {
    renderGuideDetail();
  }
});
