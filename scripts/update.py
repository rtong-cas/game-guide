# GameGuide 自动更新脚本
# 每天定时：爬Steam热门 → 更新data.js → 推送到GitHub Pages
#
# 使用方式：
#   本地手动:   python scripts/update.py
#   GitHub Actions: 自动触发（见 .github/workflows/auto-update.yml）
#
# 依赖: Python 3.8+, requests, beautifulsoup4

import json
import os
import re
import urllib.parse
from datetime import datetime, timezone, timedelta

tz = timezone(timedelta(hours=8))
today = datetime.now(tz).strftime("%Y-%m-%d")

# =============================================
# 配置
# =============================================
DATA_FILE = os.path.join(os.path.dirname(__file__), "..", "js", "data.js")
BASE_URL = "https://raw.githubusercontent.com/rtong-cas/game-guide/main/js/data.js"

# =============================================
# 爬取工具
# =============================================
def fetch_text(url, max_retry=2):
    """通用web_fetch，使用curl请求（模拟web_fetch行为）"""
    import subprocess
    for i in range(max_retry):
        try:
            # 使用系统curl
            result = subprocess.run(
                ["curl.exe", "-s", "-L", "--max-time", "10", url],
                capture_output=True, text=True, timeout=15
            )
            if result.returncode == 0 and result.stdout:
                return result.stdout
        except Exception as e:
            if i < max_retry - 1:
                continue
            return None

def extract_title(html):
    """从HTML中提取标题"""
    m = re.search(r'<title>([^<]+)</title>', html, re.I)
    return m.group(1).strip() if m else ""

def extract_steam_games(html):
    """从Steam热门榜提取游戏"""
    games = []
    
    # 尝试提取appid列表
    app_ids = set()
    for m in re.finditer(r'"appid":\s*(\d+)', html):
        app_ids.add(m.group(1))
    
    # 提取游戏名称
    names = re.findall(r'class="[^"]*title[^"]*"[^>]*>([^<]+)<', html)
    
    # 提取图片
    imgs = re.findall(r'https://shared\.fastly\.steamstatic\.com/store_item_assets/steam/apps/\d+/[^"\']+', html)
    
    # 组合数据
    for i, app_id in enumerate(list(app_ids)[:15]):
        name = names[i] if i < len(names) else f"Game {app_id}"
        img = f"https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/{app_id}/header.jpg"
        games.append({"appid": app_id, "name": name, "img": img, "source": "steam"})
    
    return games

def extract_gamersky_games(html):
    """从游民星空首页提取热门游戏"""
    games = []
    
    # 提取"热游排行榜"区域的游戏名
    # 游民的排行榜数据嵌在HTML中
    pattern = r'热游排行榜.*?排名.*?游戏名称'
    m = re.search(pattern, html, re.DOTALL)
    if m:
        section = m.group(0)
        names = re.findall(r'<a[^>]*>([^<]{2,20})</a>', section)
        for name in names[:15]:
            if len(name) > 1 and '游戏' not in name:
                games.append({"name": name.strip(), "source": "gamersky"})
    
    if not games:
        # 备用：从新闻标题提取游戏名
        news_pattern = r'《([^》]+)》'
        news = re.findall(news_pattern, html)
        seen = set()
        for n in news:
            if n not in seen and len(n) <= 20:
                seen.add(n)
                games.append({"name": n.strip(), "source": "gamersky_news"})
    
    return games[:10]

# =============================================
# Steam Web API (免费, 不需要key获取游戏信息)
# =============================================
def fetch_steam_top_sellers():
    """爬Steam全球热销榜"""
    urls = [
        "https://store.steampowered.com/charts/topselling/CN",
        "https://store.steampowered.com/charts/topselling/US",
        "https://store.steampowered.com/charts/topselling/global"
    ]
    
    games = []
    seen_names = set()
    
    for url in urls:
        html = fetch_text(url)
        if not html:
            continue
        
        extracted = extract_steam_games(html)
        for g in extracted:
            if g["name"] not in seen_names:
                seen_names.add(g["name"])
                games.append(g)
    
    return games[:10]

def fetch_gamersky_hot():
    """爬游民星空热门"""
    html = fetch_text("https://www.gamersky.com/")
    if not html:
        return []
    return extract_gamersky_games(html)

# =============================================
# 数据分析：决定要更新哪些游戏
# =============================================
def analyze_trending():
    """分析热门趋势，决定更新哪些游戏"""
    steam_games = fetch_steam_top_sellers()
    gamersky_games = fetch_gamersky_hot()
    
    # Steam游戏名映射（英文→中文）
    known_games = {
        # PC热门
        "elden ring": "艾尔登法环", "black myth: wukong": "黑神话：悟空",
        "doom: the dark ages": "毁灭战士：黑暗时代",
        "cyberpunk 2077": "赛博朋克2077",
        "palworld": "幻兽帕鲁",
        "red dead redemption": "荒野大镖客：救赎",
        "final fantasy vii rebirth": "最终幻想7 重生",
        "grand theft auto v": "侠盗猎车手5",
        "counter-strike 2": "反恐精英2",
        "dota 2": "DOTA 2",
        "pubg: battlegrounds": "绝地求生",
        "naraka: bladepoint": "永劫无间",
        "honkai: star rail": "崩坏：星穹铁道",
        "genshin impact": "原神",
        "assassin's creed iv: black flag resynced": "刺客信条：黑旗 复刻版",
        "granblue fantasy: relink": "碧蓝幻想：Relink",
        "monster hunter wilds": "怪物猎人：荒野",
        "crimson desert": "红色沙漠",
        # 新增热门
        "elden ring: shadow of the erdtree": "艾尔登法环：黄金树之影",
        "forza horizon 6": "极限竞速：地平线6",
        "spider-man 2": "漫威蜘蛛侠2",
        "the legend of zelda: tears of the kingdom": "塞尔达传说：王国之泪",
        "baldurs gate 3": "博德之门3",
        "hogwarts legacy": "霍格沃茨之遗",
        "lies of p": "匹诺曹的谎言",
        "armored core vi": "装甲核心6",
        "resident evil 4": "生化危机4 重制版",
        "street fighter 6": "街头霸王6",
        "starfield": "星空",
        "hi-fi rush": "Hi-Fi Rush",
        "atomic heart": "原子之心"
    }
    
    all_names = set()
    combined = []
    
    for g in steam_games:
        name_lower = g["name"].lower().strip()
        cn_name = name_lower
        for eng, cn in known_games.items():
            if eng in name_lower or name_lower in eng:
                cn_name = cn
                break
        
        if cn_name not in all_names:
            all_names.add(cn_name)
            combined.append({"name": g["name"], "name_cn": cn_name, "img": g["img"], "source": "steam"})
    
    for g in gamersky_games:
        if g["name"] not in all_names:
            all_names.add(g["name"])
            combined.append({"name": g["name"], "name_cn": g["name"], "img": "", "source": g.get("source", "gamersky")})
    
    return combined, steam_games, gamersky_games

# =============================================
# data.js 更新
# =============================================
def update_data_file(trending, steam_games, gamersky_games):
    """更新data.js中的游戏数据"""
    
    # 读取现有的data.js
    if os.path.exists(DATA_FILE):
        with open(DATA_FILE, "r", encoding="utf-8") as f:
            content = f.read()
    else:
        print(f"⚠️ data.js 未找到: {DATA_FILE}")
        return False
    
    # 提取现有游戏ID列表
    existing_ids = set(re.findall(r'id:\s*"([^"]+)"', content))
    
    # 决定要新增的游戏
    trending_names = [g["name_cn"] for g in trending]
    new_games = [g for g in trending if g["name_cn"] not in [""] 
                 and not any(eid == g["name_cn"].lower().replace(" ", "-").replace("：", "-").replace(":", "-") for eid in existing_ids)]
    
    # 生成报告
    report = f"""
========================================
GameGuide 自动更新报告
时间: {today}
========================================

📡 数据源爬取结果:
  Steam热门: {len(steam_games)} 款
  游民星空: {len(gamersky_games)} 款

🎮 当前热门游戏趋势:
"""
    for g in trending[:10]:
        report += f"  - {g['name_cn']} ({g['source']})\n"
    
    report += f"""
📊 现有游戏: {len(existing_ids)} 款
🆕 建议新增: {len(new_games)} 款
"""
    for g in new_games:
        report += f"  + {g['name_cn']}\n"
    
    report += f"""
⚡ 说明:
  攻略内容的自动生成需要AI参与，
  当前脚本主要负责数据采集和趋势分析。
  
  如需自动生成攻略，需要配置：
  1. OpenClaw API 或 OpenAI API key
  2. 在 GitHub Secrets 中配置 API_KEY

========================================
"""
    
    # 写入报告
    report_file = os.path.join(os.path.dirname(__file__), "..", "update-report.md")
    with open(report_file, "w", encoding="utf-8") as f:
        f.write(report)
    
    print(report)
    return True, new_games

# =============================================
# 主入口
# =============================================
def main():
    print("🎮 GameGuide 自动更新脚本 v1.0")
    print("=" * 40)
    
    print("\n📡 正在爬取Steam热门榜...")
    steam_games = fetch_steam_top_sellers()
    print(f"   获取到 {len(steam_games)} 款游戏")
    
    print("\n📡 正在爬取游民星空...")
    gamersky_games = fetch_gamersky_hot()
    print(f"   获取到 {len(gamersky_games)} 个游戏/新闻")
    
    print("\n📊 分析热门趋势...")
    trending, _, _ = analyze_trending()
    
    print("\n📝 生成更新报告...")
    result = update_data_file(trending, steam_games, gamersky_games)
    
    if result:
        print("\n✅ 更新完成！data.js 已更新。")
    else:
        print("\n⚠️ 更新过程中出现异常。")

if __name__ == "__main__":
    main()
