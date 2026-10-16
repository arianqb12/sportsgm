/* ==========================================================================
   APEX SPORTS HUB - MASTER INTERACTIVE LOGIC & ESPN API CONTROLLER
   ==========================================================================
   File: script.js
   Description: Complete multi-page interactive logic engine providing:
                1. Live ESPN API News & Scoreboard fetching
                2. 82-0.com Style $500M Multi-Sport GM Franchise Engine
                3. Flock Fantasy / KeepTradeCut Data-Driven Trade Grader
                4. Global Datalist Search Autocomplete & Format Toggles
   ========================================================================== */

/* --------------------------------------------------------------------------
   1. MASTER PLAYER & DRAFT PICK DATABASE (NBA, NFL, MLB)
   -------------------------------------------------------------------------- */
const masterPlayerDatabase = {
    nba: [
        /* Active Superstars & Legends */
        { name: "Steph Curry", pos: "PG", ovr: 96, salary: 110, val: 95 },
        { name: "LeBron James", pos: "SF", ovr: 98, salary: 125, val: 97 },
        { name: "Michael Jordan", pos: "SG", ovr: 99, salary: 135, val: 99 },
        { name: "Nikola Jokic", pos: "C", ovr: 98, salary: 120, val: 98 },
        { name: "Giannis Antetokounmpo", pos: "PF", ovr: 97, salary: 115, val: 96 },
        { name: "Luka Doncic", pos: "PG", ovr: 96, salary: 110, val: 96 },
        { name: "Kobe Bryant", pos: "SG", ovr: 97, salary: 120, val: 97 },
        { name: "Kevin Durant", pos: "SF", ovr: 96, salary: 110, val: 94 },
        { name: "Anthony Edwards", pos: "SG", ovr: 93, salary: 85, val: 91 },
        { name: "Shai Gilgeous-Alexander", pos: "PG", ovr: 95, salary: 95, val: 94 },
        { name: "Jayson Tatum", pos: "SF", ovr: 94, salary: 90, val: 92 },
        { name: "Victor Wembanyama", pos: "C", ovr: 93, salary: 75, val: 93 },
        { name: "Kareem Abdul-Jabbar", pos: "C", ovr: 98, salary: 130, val: 98 },
        { name: "Magic Johnson", pos: "PG", ovr: 97, salary: 125, val: 97 },
        { name: "Larry Bird", pos: "SF", ovr: 96, salary: 120, val: 96 },
        { name: "Shaquille O'Neal", pos: "C", ovr: 97, salary: 125, val: 96 },
        { name: "Tim Duncan", pos: "PF", ovr: 96, salary: 115, val: 95 },
        { name: "Allen Iverson", pos: "SG", ovr: 92, salary: 80, val: 89 },
        { name: "Damian Lillard", pos: "PG", ovr: 91, salary: 80, val: 88 },
        { name: "Ja Morant", pos: "PG", ovr: 90, salary: 75, val: 87 },
        /* Dynasty Draft Picks */
        { name: "2026 Early 1st Round Pick", pos: "PICK", ovr: 88, salary: 45, val: 88 },
        { name: "2026 Mid 1st Round Pick", pos: "PICK", ovr: 84, salary: 35, val: 82 },
        { name: "2026 Late 1st Round Pick", pos: "PICK", ovr: 80, salary: 25, val: 75 }
    ],
    nfl: [
        /* Active Superstars & Legends */
        { name: "Patrick Mahomes", pos: "QB", ovr: 99, salary: 140, val: 99 },
        { name: "Justin Jefferson", pos: "WR", ovr: 98, salary: 120, val: 98 },
        { name: "Christian McCaffrey", pos: "RB", ovr: 97, salary: 110, val: 96 },
        { name: "CeeDee Lamb", pos: "WR", ovr: 96, salary: 105, val: 95 },
        { name: "Tyreek Hill", pos: "WR", ovr: 96, salary: 105, val: 94 },
        { name: "Lamar Jackson", pos: "QB", ovr: 96, salary: 125, val: 95 },
        { name: "Josh Allen", pos: "QB", ovr: 95, salary: 120, val: 94 },
        { name: "Travis Kelce", pos: "TE", ovr: 94, salary: 85, val: 90 },
        { name: "Breece Hall", pos: "RB", ovr: 92, salary: 80, val: 89 },
        { name: "Amon-Ra St. Brown", pos: "WR", ovr: 94, salary: 90, val: 92 },
        { name: "San Francisco 49ers", pos: "DEF", ovr: 92, salary: 60, val: 85 },
        { name: "Tom Brady", pos: "QB", ovr: 99, salary: 135, val: 98 },
        { name: "Jerry Rice", pos: "WR", ovr: 99, salary: 130, val: 98 },
        { name: "Barry Sanders", pos: "RB", ovr: 98, salary: 125, val: 97 },
        { name: "Lawrence Taylor", pos: "DEF", ovr: 98, salary: 110, val: 95 },
        { name: "Joe Burrow", pos: "QB", ovr: 93, salary: 100, val: 91 },
        { name: "Ja'Marr Chase", pos: "WR", ovr: 95, salary: 100, val: 94 },
        { name: "Saquon Barkley", pos: "RB", ovr: 93, salary: 85, val: 90 },
        { name: "Baltimore Ravens", pos: "DEF", ovr: 91, salary: 55, val: 84 },
        /* Dynasty Draft Picks */
        { name: "2026 Early 1st Round Pick", pos: "PICK", ovr: 88, salary: 45, val: 89 },
        { name: "2026 Mid 1st Round Pick", pos: "PICK", ovr: 84, salary: 35, val: 83 },
        { name: "2026 Late 1st Round Pick", pos: "PICK", ovr: 80, salary: 25, val: 76 }
    ],
    mlb: [
        /* Active Superstars & Legends */
        { name: "Shohei Ohtani", pos: "DH", ovr: 99, salary: 150, val: 99 },
        { name: "Aaron Judge", pos: "OF", ovr: 97, salary: 125, val: 97 },
        { name: "Ronald Acuña Jr.", pos: "OF", ovr: 96, salary: 115, val: 95 },
        { name: "Mookie Betts", pos: "IF", ovr: 95, salary: 110, val: 94 },
        { name: "Gerrit Cole", pos: "SP", ovr: 94, salary: 95, val: 92 },
        { name: "Juan Soto", pos: "OF", ovr: 95, salary: 110, val: 94 },
        { name: "Adley Rutschman", pos: "C", ovr: 91, salary: 70, val: 88 },
        { name: "Freddie Freeman", pos: "IF", ovr: 93, salary: 85, val: 90 },
        { name: "Babe Ruth", pos: "OF", ovr: 99, salary: 140, val: 99 },
        { name: "Derek Jeter", pos: "IF", ovr: 95, salary: 100, val: 93 },
        { name: "Ken Griffey Jr.", pos: "OF", ovr: 97, salary: 120, val: 96 },
        { name: "Pedro Martinez", pos: "SP", ovr: 98, salary: 115, val: 96 },
        { name: "Johnny Bench", pos: "C", ovr: 95, salary: 90, val: 92 },
        { name: "Mike Trout", pos: "OF", ovr: 93, salary: 90, val: 91 },
        { name: "Bryce Harper", pos: "IF", ovr: 92, salary: 85, val: 89 },
        /* Dynasty Draft Picks */
        { name: "2026 Early 1st Round Pick", pos: "PICK", ovr: 86, salary: 40, val: 85 },
        { name: "2026 Mid 1st Round Pick", pos: "PICK", ovr: 82, salary: 30, val: 80 },
        { name: "2026 Late 1st Round Pick", pos: "PICK", ovr: 78, salary: 20, val: 72 }
    ]
};

/* --------------------------------------------------------------------------
   2. GLOBAL AUTOCOMPLETE DATALIST POPULATOR
   -------------------------------------------------------------------------- */
function populateGlobalDatalist(sport = 'nba') {
    const list = document.getElementById('all-players-list');
    if (!list) return;

    const pool = masterPlayerDatabase[sport] || [];
    list.innerHTML = pool.map(p => 
        `<option value="${p.name}">${p.pos} | ${p.ovr} OVR | $${p.salary}M | Val: ${p.val} pts</option>`
    ).join('');
}

/* --------------------------------------------------------------------------
   3. ESPN LIVE NEWS FEED API INTEGRATION
   -------------------------------------------------------------------------- */
async function loadESPNNews(sportKey = 'nba') {
    const grid = document.getElementById('espn-news-grid');
    const title = document.getElementById('news-section-title');
    const tickerText = document.getElementById('live-ticker-text');
    if (!grid) return;

    // Update active tab buttons
    document.querySelectorAll('.sport-tabs .tab-btn').forEach(btn => btn.classList.remove('active'));
    if (window.event && window.event.target) window.event.target.classList.add('active');

    const leagueMap = {
        nba: { path: "basketball/nba", name: "NBA Basketball" },
        nfl: { path: "football/nfl", name: "NFL Football" },
        mlb: { path: "baseball/mlb", name: "MLB Baseball" }
    };

    const league = leagueMap[sportKey];
    if (title) title.textContent = `${league.name} Live ESPN News Feed`;
    grid.innerHTML = `<p class="loading-text">⏳ Connecting to ESPN API for latest ${league.name} headlines...</p>`;

    try {
        const response = await fetch(`https://site.api.espn.com/apis/site/v2/sports/${league.path}/news`);
        const data = await response.json();

        if (!data.articles || data.articles.length === 0) {
            grid.innerHTML = `<div class="feedback-box">No live news articles currently returned by ESPN. Please try again shortly.</div>`;
            return;
        }

        grid.innerHTML = '';
        let tickerItems = [];

        data.articles.slice(0, 6).forEach(art => {
            const headline = art.headline || "Breaking Sports Headline";
            const desc = art.description || "Read full analysis and game breakdown on ESPN's official network.";
            const imgUrl = (art.images && art.images.length > 0) ? art.images[0].url : "https://images.unsplash.com/photo-1504450758481-7338eba7524a?auto=format&fit=crop&w=600&q=80";
            const link = (art.links && art.links.web) ? art.links.web.href : "https://www.espn.com";

            tickerItems.push(headline);

            grid.innerHTML += `
                <article class="news-card">
                    <img src="${imgUrl}" alt="${headline}" loading="lazy">
                    <span class="badge badge-${sportKey}">${sportKey.toUpperCase()}</span>
                    <h3>${headline}</h3>
                    <p>${desc}</p>
                    <a href="${link}" target="_blank" rel="noopener noreferrer" class="action-link">Read Full Story on ESPN ➔</a>
                </article>
            `;
        });

        if (tickerText && tickerItems.length > 0) {
            tickerText.innerHTML = `🔥 <strong>ESPN LIVE HEADLINES:</strong> ` + tickerItems.join(' &nbsp;&nbsp;|&nbsp;&nbsp; 🔥 ');
        }
    } catch (err) {
        console.error("ESPN News API Fetch Error:", err);
        grid.innerHTML = `<div class="feedback-box">⚠️ Unable to retrieve live news feed from ESPN API. Please verify your network connection.</div>`;
    }
}

/* --------------------------------------------------------------------------
   4. ESPN LIVE SCOREBOARD API INTEGRATION
   -------------------------------------------------------------------------- */
async function fetchLiveESPNScores(sportKey = 'nba') {
    const container = document.getElementById('live-games-container');
    const title = document.getElementById('scoreboard-title');
    if (!container) return;

    // Update active tab buttons
    document.querySelectorAll('.sport-tabs .tab-btn').forEach(btn => btn.classList.remove('active'));
    if (window.event && window.event.target) window.event.target.classList.add('active');

    const leagueMap = {
        nba: { path: "basketball/nba", name: "🏀 NBA Basketball" },
        mlb: { path: "baseball/mlb", name: "⚾ MLB Baseball" },
        nfl: { path: "football/nfl", name: "🏈 NFL Football" }
    };

    const target = leagueMap[sportKey];
    if (title) title.textContent = `${target.name} Live Scoreboard`;
    container.innerHTML = `<p class="loading-text">⏳ Fetching live game scores and period telemetry from ESPN API...</p>`;

    try {
        const response = await fetch(`https://site.api.espn.com/apis/site/v2/sports/${target.path}/scoreboard`);
        const data = await response.json();

        if (!data.events || data.events.length === 0) {
            container.innerHTML = `<div class="feedback-box">📅 No live games scheduled today for ${sportKey.toUpperCase()}. Check back soon for upcoming matchups!</div>`;
            return;
        }

        container.innerHTML = '';
        data.events.forEach(eventData => {
            const comp = eventData.competitions[0];
            const home = comp.competitors.find(c => c.homeAway === 'home');
            const away = comp.competitors.find(c => c.homeAway === 'away');
            const statusDetail = eventData.status.type.detail;
            const state = eventData.status.type.state;

            let statusClass = "status-upcoming";
            if (state === 'in') statusClass = "status-live";
            if (state === 'post') statusClass = "status-final";

            const venue = comp.venue ? comp.venue.fullName : "Stadium Arena";

            container.innerHTML += `
                <article class="game-card">
                    <div class="game-header">
                        <span class="badge badge-${sportKey}">${sportKey.toUpperCase()}</span>
                        <span class="${statusClass}">${statusDetail.toUpperCase()}</span>
                    </div>
                    <div class="game-matchup">
                        <div class="team">${away.team.displayName} <strong>${away.score || '0'}</strong></div>
                        <div class="vs">VS</div>
                        <div class="team">${home.team.displayName} <strong>${home.score || '0'}</strong></div>
                    </div>
                    <div class="game-info">
                        <p>📍 ${venue}</p>
                    </div>
                    <div class="ticket-actions">
                        <a href="https://seatgeek.com/sports-tickets" target="_blank" rel="noopener noreferrer" class="ticket-btn btn-seatgeek">Find Deals on SeatGeek ➔</a>
                        <a href="https://www.stubhub.com" target="_blank" rel="noopener noreferrer" class="ticket-btn btn-stubhub">Compare on StubHub ➔</a>
                        <a href="https://www.ticketmaster.com" target="_blank" rel="noopener noreferrer" class="ticket-btn btn-ticketmaster">Buy on Ticketmaster ➔</a>
                    </div>
                </article>
            `;
        });
    } catch (err) {
        console.error("ESPN Scoreboard API Error:", err);
        container.innerHTML = `<div class="feedback-box">⚠️ Unable to connect to ESPN scoreboard endpoint. Please check your internet connection.</div>`;
    }
}

/* --------------------------------------------------------------------------
   5. 82-0.com STYLE $500M GM FRANCHISE ENGINE LOGIC
   -------------------------------------------------------------------------- */
let currentGMSport = 'nba';
let userGMRoster = [];

const positionRequirements = {
    nba: ["PG", "SG", "SF", "PF", "C"],
    nfl: ["QB", "RB", "WR", "TE", "DEF"],
    mlb: ["SP", "C", "IF", "OF", "DH"]
};

const seasonLengths = {
    nba: 82,
    nfl: 17,
    mlb: 162
};

function switchGMSport(sport) {
    currentGMSport = sport;
    
    // Toggle active tabs
    document.querySelectorAll('.sport-tabs .tab-btn').forEach(btn => btn.classList.remove('active'));
    if (window.event && window.event.target) window.event.target.classList.add('active');

    const label = document.getElementById('current-sport-label');
    if (label) label.textContent = sport.toUpperCase();

    // Reset buttons
    const sim10 = document.getElementById('sim-10-btn');
    const simSeason = document.getElementById('sim-season-btn');
    if (sim10) sim10.textContent = `🚀 Simulate 10 Games`;
    if (simSeason) simSeason.textContent = `🏆 Simulate Full Season (${seasonLengths[sport]} Games)`;

    userGMRoster = [];
    populateGlobalDatalist(sport);
    updateGMRosterUI();
}

function draftSinglePosition(pos) {
    const pool = masterPlayerDatabase[currentGMSport].filter(p => p.pos === pos || p.pos === "FLEX");
    if (pool.length === 0) return;

    const randomPlayer = pool[Math.floor(Math.random() * pool.length)];
    
    // Replace existing or add
    const existingIdx = userGMRoster.findIndex(p => p.pos === pos);
    if (existingIdx !== -1) {
        userGMRoster[existingIdx] = { ...randomPlayer, requiredPos: pos };
    } else {
        userGMRoster.push({ ...randomPlayer, requiredPos: pos });
    }

    updateGMRosterUI();
}

function autoDraftGMRoster() {
    const required = positionRequirements[currentGMSport];
    userGMRoster = [];

    required.forEach(pos => {
        const pool = masterPlayerDatabase[currentGMSport].filter(p => p.pos === pos || p.pos === "FLEX" || p.pos === "PICK");
        if (pool.length > 0) {
            const randomPlayer = pool[Math.floor(Math.random() * pool.length)];
            userGMRoster.push({ ...randomPlayer, requiredPos: pos });
        }
    });

    updateGMRosterUI();
}

function addSearchedPlayerToRoster() {
    const input = document.getElementById('gm-search-input');
    if (!input || !input.value.trim()) return;

    const name = input.value.trim();
    const pool = masterPlayerDatabase[currentGMSport];
    let match = pool.find(p => p.name.toLowerCase() === name.toLowerCase());

    if (!match) {
        match = { name: name, pos: "FLEX", ovr: 90, salary: 85 };
    }

    let currentSalary = userGMRoster.reduce((sum, p) => sum + p.salary, 0);
    if (currentSalary + match.salary > 500) {
        alert(`⚠️ Cannot draft ${match.name}! Payroll exceeds the $500M salary cap limit.`);
        return;
    }

    if (userGMRoster.length >= 5) {
        userGMRoster.shift(); // Remove first to keep starting 5
    }

    userGMRoster.push(match);
    input.value = '';
    updateGMRosterUI();
}

function updateGMRosterUI() {
    const grid = document.getElementById('gm-roster-grid');
    if (!grid) return;
    grid.innerHTML = '';
    let totalSalary = 0;

    const required = positionRequirements[currentGMSport];

    required.forEach((reqPos, idx) => {
        const player = userGMRoster[idx] || userGMRoster.find(p => p.requiredPos === reqPos);

        if (player) {
            totalSalary += player.salary;
            grid.innerHTML += `
                <article class="gm-slot-card">
                    <strong>${player.pos || reqPos}</strong>
                    <div style="font-weight: 800; margin: 4px 0;">${player.name}</div>
                    <small>${player.ovr} OVR | $${player.salary}M</small>
                    <button class="btn-secondary" style="width: 100%; margin-top: 8px; font-size: 11px; padding: 4px;" onclick="draftSinglePosition('${reqPos}')">🎲 Roll ${reqPos}</button>
                </article>
            `;
        } else {
            grid.innerHTML += `
                <article class="gm-slot-card" style="border-style: dashed;">
                    <strong>${reqPos}</strong>
                    <div style="font-weight: 700; color: var(--text-muted); margin: 6px 0;">[Empty Slot]</div>
                    <button class="btn-primary" style="width: 100%; font-size: 11px; padding: 4px;" onclick="draftSinglePosition('${reqPos}')">➕ Draft ${reqPos}</button>
                </article>
            `;
        }
    });

    const remaining = 500 - totalSalary;
    const capEl = document.getElementById('cap-remaining');
    if (capEl) {
        capEl.textContent = `$${remaining}M`;
        capEl.className = remaining < 0 ? "text-danger" : "text-success";
    }

    const fill = document.getElementById('cap-progress-fill');
    if (fill) fill.style.width = `${Math.min(Math.max((totalSalary / 500) * 100, 0), 100)}%`;

    populateGMTradeSelect();
}

function populateGMTradeSelect() {
    const select = document.getElementById('user-trade-select');
    if (!select) return;
    select.innerHTML = userGMRoster.map((p, i) => `<option value="${i}">${p.name} ($${p.salary}M)</option>`).join('');
}

function evaluateGMTrade() {
    const select = document.getElementById('user-trade-select');
    const targetInput = document.getElementById('target-trade-input');
    const feedback = document.getElementById('trade-feedback');

    if (!select || !targetInput || userGMRoster.length === 0 || !targetInput.value.trim()) {
        if (feedback) feedback.innerHTML = "⚠️ Draft players and enter a target acquisition to evaluate trade.";
        return;
    }

    const userIdx = select.value;
    const userP = userGMRoster[userIdx];
    const targetName = targetInput.value.trim();

    const pool = masterPlayerDatabase[currentGMSport];
    let targetP = pool.find(p => p.name.toLowerCase() === targetName.toLowerCase()) || { name: targetName, pos: "FLEX", ovr: 91, salary: 85 };

    userGMRoster[userIdx] = targetP;
    targetInput.value = '';
    updateGMRosterUI();

    if (feedback) {
        feedback.innerHTML = `✅ <strong>TRADE APPROVED!</strong> Traded ${userP.name} ($${userP.salary}M) for ${targetP.name} ($${targetP.salary}M). Roster updated!`;
    }
}

/* 82-0.com Style Game-by-Game Simulation Loop */
function simulateGMGames(numGames) {
    const progressBox = document.getElementById('sim-progress-box');
    const progressBar = document.getElementById('sim-progress-fill');
    const ticker = document.getElementById('sim-ticker-box');
    const standings = document.getElementById('gm-standings-box');
    if (!ticker || !standings) return;

    if (userGMRoster.length < 5) {
        alert("Draft a full 5-player starting lineup before running the season simulation!");
        return;
    }

    let totalSalary = userGMRoster.reduce((sum, p) => sum + p.salary, 0);
    if (totalSalary > 500) {
        alert("⚠️ Your roster exceeds the $500M salary cap! Lower payroll before simulating.");
        return;
    }

    if (progressBox) progressBox.style.display = 'block';
    ticker.style.display = 'block';
    standings.style.display = 'none';

    let totalOvr = userGMRoster.reduce((sum, p) => sum + p.ovr, 0);
    let avgOvr = totalOvr / userGMRoster.length;
    let winChance = (avgOvr - 72) / 28;

    let game = 0;
    let wins = 0;
    let losses = 0;

    const opponentPool = ["Celtics", "Lakers", "Warriors", "Chiefs", "Eagles", "Yankees", "Dodgers", "Bulls", "Heat", "Nuggets"];

    const interval = setInterval(() => {
        game++;
        const isWin = Math.random() < winChance;
        if (isWin) wins++; else losses++;

        const opp = opponentPool[Math.floor(Math.random() * opponentPool.length)];
        const ptsA = Math.floor(95 + Math.random() * 25 + (isWin ? 8 : 0));
        const ptsB = isWin ? ptsA - Math.floor(1 + Math.random() * 12) : ptsA + Math.floor(1 + Math.random() * 12);

        ticker.innerHTML = `Game ${game}/${numGames}: ${isWin ? '<strong style="color:var(--success)">WIN</strong>' : '<strong style="color:var(--danger)">LOSS</strong>'} vs ${opp} (${ptsA}-${ptsB}) | Current Record: <strong>${wins}-${losses}</strong>`;
        
        if (progressBar) progressBar.style.width = `${(game / numGames) * 100}%`;

        if (game >= numGames) {
            clearInterval(interval);
            showFinalSeasonResult(wins, losses, numGames, avgOvr);
        }
    }, 25);
}

function showFinalSeasonResult(wins, losses, totalGames, avgOvr) {
    const standings = document.getElementById('gm-standings-box');
    if (!standings) return;

    standings.style.display = 'block';

    const winPct = ((wins / totalGames) * 100).toFixed(1);

    if (wins === totalGames) {
        standings.className = 'feedback-box';
        standings.style.borderColor = 'var(--accent)';
        standings.innerHTML = `
            <h3 style="color:var(--accent); font-size:1.4rem;">🏆 ${totalGames}-0 PERFECT UNDEFEATED DYNASTY!</h3>
            <p><strong>GOAT SQUAD!</strong> Average Team Rating: ${avgOvr.toFixed(1)} OVR. You created an untouchable championship team under the $500M cap!</p>
            <div style="font-size:1.8rem; font-weight:900; color:var(--primary); margin-top:8px;">${wins} - ${losses} (100% Win PCT)</div>
        `;
    } else if (wins >= totalGames * 0.8) {
        standings.className = 'feedback-box';
        standings.innerHTML = `
            <h3 style="color:var(--success);">🔥 Championship Contender!</h3>
            <p>Average Team Rating: ${avgOvr.toFixed(1)} OVR. Outstanding season! Re-roll or trade assets to chase the elusive 100% perfect record!</p>
            <div style="font-size:1.8rem; font-weight:900; color:var(--success); margin-top:8px;">${wins} - ${losses} (${winPct}% Win PCT)</div>
        `;
    } else {
        standings.className = 'feedback-box';
        standings.innerHTML = `
            <h3>🏀 Playoff Competitor</h3>
            <p>Average Team Rating: ${avgOvr.toFixed(1)} OVR. Solid season performance. Adjust your lineup to increase your win probability!</p>
            <div style="font-size:1.8rem; font-weight:900; color:var(--text-main); margin-top:8px;">${wins} - ${losses} (${winPct}% Win PCT)</div>
        `;
    }
}

/* --------------------------------------------------------------------------
   6. FLOCK-STYLE DATA-DRIVEN FANTASY TRADE GRADER LOGIC
   -------------------------------------------------------------------------- */
let currentFantasySport = 'nfl';
let formatSettings = { dynasty: true, ppr: true };

function switchFantasySport(sport) {
    currentFantasySport = sport;
    document.querySelectorAll('.sport-tabs .tab-btn').forEach(btn => btn.classList.remove('active'));
    if (window.event && window.event.target) window.event.target.classList.add('active');
    populateGlobalDatalist(sport);
    calculateFantasyTrade();
}

function toggleFormatSetting(setting) {
    if (setting === 'dynasty') {
        formatSettings.dynasty = !formatSettings.dynasty;
        const btn = document.getElementById('toggle-league-type');
        if (btn) btn.innerHTML = `Format: <span>${formatSettings.dynasty ? 'Dynasty' : 'Redraft'}</span>`;
    } else if (setting === 'scoring') {
        formatSettings.ppr = !formatSettings.ppr;
        const btn = document.getElementById('toggle-scoring-type');
        if (btn) btn.innerHTML = `Scoring: <span>${formatSettings.ppr ? 'Full PPR' : 'Standard'}</span>`;
    }
    calculateFantasyTrade();
}

function getPlayerValueByName(name) {
    if (!name || name.trim() === "") return 0;
    const pool = masterPlayerDatabase[currentFantasySport] || [];
    const match = pool.find(p => p.name.toLowerCase() === name.trim().toLowerCase());
    
    let baseVal = match ? match.val : 80;
    
    // Apply Format Modifiers
    if (!formatSettings.dynasty && name.includes("Pick")) baseVal *= 0.35; // Draft pick discount in redraft
    if (formatSettings.ppr && match && (match.pos === "WR" || match.pos === "RB")) baseVal *= 1.08;
    
    return Math.round(baseVal);
}

function calculateFantasyTrade() {
    const a1 = getPlayerValueByName(document.getElementById('fantasy-input-A1')?.value);
    const a2 = getPlayerValueByName(document.getElementById('fantasy-input-A2')?.value);
    const a3 = getPlayerValueByName(document.getElementById('fantasy-input-A3')?.value);

    const b1 = getPlayerValueByName(document.getElementById('fantasy-input-B1')?.value);
    const b2 = getPlayerValueByName(document.getElementById('fantasy-input-B2')?.value);
    const b3 = getPlayerValueByName(document.getElementById('fantasy-input-B3')?.value);

    const arrA = [a1, a2, a3].filter(v => v > 0);
    const arrB = [b1, b2, b3].filter(v => v > 0);

    let rawA = arrA.reduce((sum, v) => sum + v, 0);
    let rawB = arrB.reduce((sum, v) => sum + v, 0);

    // Apply Stud Premium Package Penalty (Flock & KeepTradeCut Algorithm)
    const maxA = arrA.length ? Math.max(...arrA) : 0;
    const maxB = arrB.length ? Math.max(...arrB) : 0;

    let adjustedA = rawA;
    let adjustedB = rawB;

    if (maxA > maxB && arrB.length > 1) {
        adjustedB *= 0.88; // Multi-asset side package tax
    } else if (maxB > maxA && arrA.length > 1) {
        adjustedA *= 0.88;
    }

    const elA = document.getElementById('val-teamA');
    const elB = document.getElementById('val-teamB');
    if (elA) elA.textContent = `${Math.round(adjustedA)} pts`;
    if (elB) elB.textContent = `${Math.round(adjustedB)} pts`;

    const badge = document.getElementById('grade-badge');
    const verdict = document.getElementById('grade-verdict');
    const breakdown = document.getElementById('grade-breakdown-box');
    const valueBar = document.getElementById('grade-value-bar');

    if (!badge) return;

    if (rawA === 0 && rawB === 0) {
        badge.className = "grade-badge badge-neutral";
        badge.textContent = "EVEN";
        verdict.textContent = "Type player names above to calculate trade value differential!";
        if (valueBar) valueBar.style.width = "50%";
        return;
    }

    const diff = adjustedA - adjustedB;
    const totalVal = adjustedA + adjustedB || 1;
    const percentA = Math.round((adjustedA / totalVal) * 100);

    if (valueBar) valueBar.style.width = `${percentA}%`;

    if (Math.abs(diff) <= 6) {
        badge.className = "grade-badge badge-a";
        badge.textContent = "A+";
        verdict.textContent = "FAIR & EVEN TRADE! Both teams exchange balanced rest-of-season market value.";
    } else if (diff > 6 && diff <= 18) {
        badge.className = "grade-badge badge-c";
        badge.textContent = "B+";
        verdict.textContent = "WIN FOR TEAM A. Team A receives a slight market value edge.";
    } else if (diff > 18) {
        badge.className = "grade-badge badge-f";
        badge.textContent = "FLEECE";
        verdict.textContent = "FLEECE ALERT! Team A heavily wins this trade package.";
    } else if (diff < -18) {
        badge.className = "grade-badge badge-f";
        badge.textContent = "FLEECE";
        verdict.textContent = "FLEECE ALERT! Team B heavily wins this trade package.";
    } else {
        badge.className = "grade-badge badge-a";
        badge.textContent = "B+";
        verdict.textContent = "WIN FOR TEAM B. Team B receives higher rest-of-season value density.";
    }

    breakdown.innerHTML = `
        <p>📊 <strong>Flock Analysis Summary (${currentFantasySport.toUpperCase()} - ${formatSettings.dynasty ? 'Dynasty' : 'Redraft'}):</strong></p>
        <ul>
            <li>Team A Adjusted Density Value: <strong>${Math.round(adjustedA)} pts</strong></li>
            <li>Team B Adjusted Density Value: <strong>${Math.round(adjustedB)} pts</strong></li>
            <li>Package Value Differential: <strong>${Math.abs(Math.round(diff))} pts</strong></li>
            <li>Stud Tax Applied: <strong>${(maxA > maxB && arrB.length > 1) ? "Team B Package Penalty (-12%)" : (maxB > maxA && arrA.length > 1) ? "Team A Package Penalty (-12%)" : "None"}</strong></li>
        </ul>
    `;
}

/* --------------------------------------------------------------------------
   7. DOM CONTENT LOADED INITIALIZER
   -------------------------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
    // Page-specific auto-triggers
    if (document.getElementById('espn-news-grid')) {
        loadESPNNews('nba');
    }
    
    if (document.getElementById('live-games-container')) {
        fetchLiveESPNScores('nba');
    }

    if (document.getElementById('gm-roster-grid')) {
        populateGlobalDatalist('nba');
        updateGMRosterUI();
    }

    if (document.getElementById('grade-badge')) {
        populateGlobalDatalist('nfl');
    }
});
