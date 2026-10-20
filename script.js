/* ==========================================================================
   APEX SPORTS HUB - MASTER INTERACTIVE LOGIC & FANTASY STAT ENGINE
   ========================================================================== */

/* --------------------------------------------------------------------------
   1. MASTER PLAYER & LEGENDS DATABASE
   -------------------------------------------------------------------------- */
let masterPlayerDatabase = {
    nba: [
        { name: "Steph Curry", pos: "PG", ovr: 96, salary: 110, val: 95, rank: "PG1", fppg: 48.5 },
        { name: "LeBron James", pos: "SF", ovr: 98, salary: 125, val: 97, rank: "SF1", fppg: 50.2 },
        { name: "Michael Jordan", pos: "SG", ovr: 99, salary: 135, val: 99, rank: "SG1 (LEGEND)", fppg: 58.0 },
        { name: "Nikola Jokic", pos: "C", ovr: 98, salary: 120, val: 98, rank: "C1", fppg: 59.4 },
        { name: "Giannis Antetokounmpo", pos: "PF", ovr: 97, salary: 115, val: 96, rank: "PF1", fppg: 52.8 },
        { name: "Luka Doncic", pos: "PG", ovr: 96, salary: 110, val: 96, rank: "PG2", fppg: 54.1 },
        { name: "Kobe Bryant", pos: "SG", ovr: 97, salary: 120, val: 97, rank: "SG1 (LEGEND)", fppg: 53.5 },
        { name: "Kevin Durant", pos: "SF", ovr: 96, salary: 110, val: 94, rank: "SF2", fppg: 47.3 },
        { name: "Anthony Edwards", pos: "SG", ovr: 93, salary: 85, val: 91, rank: "SG2", fppg: 43.0 },
        { name: "Shai Gilgeous-Alexander", pos: "PG", ovr: 95, salary: 95, val: 94, rank: "PG3", fppg: 51.0 },
        { name: "Jayson Tatum", pos: "SF", ovr: 94, salary: 90, val: 92, rank: "SF3", fppg: 46.2 },
        { name: "Victor Wembanyama", pos: "C", ovr: 93, salary: 75, val: 93, rank: "C2", fppg: 49.8 },
        { name: "Kareem Abdul-Jabbar", pos: "C", ovr: 98, salary: 130, val: 98, rank: "C (LEGEND)", fppg: 55.0 },
        { name: "Magic Johnson", pos: "PG", ovr: 97, salary: 125, val: 97, rank: "PG (LEGEND)", fppg: 54.0 },
        { name: "Larry Bird", pos: "SF", ovr: 96, salary: 120, val: 96, rank: "SF (LEGEND)", fppg: 52.0 },
        { name: "Shaquille O'Neal", pos: "C", ovr: 97, salary: 125, val: 96, rank: "C (LEGEND)", fppg: 53.0 },
        { name: "Tim Duncan", pos: "PF", ovr: 96, salary: 115, val: 95, rank: "PF (LEGEND)", fppg: 50.0 }
    ],
    nfl: [
        { name: "Patrick Mahomes", pos: "QB", ovr: 99, salary: 140, val: 99, rank: "QB1", fppg: 22.5 },
        { name: "Justin Jefferson", pos: "WR", ovr: 98, salary: 120, val: 98, rank: "WR1", fppg: 19.8 },
        { name: "Christian McCaffrey", pos: "RB", ovr: 97, salary: 110, val: 96, rank: "RB1", fppg: 21.4 },
        { name: "CeeDee Lamb", pos: "WR", ovr: 96, salary: 105, val: 95, rank: "WR2", fppg: 18.9 },
        { name: "Tyreek Hill", pos: "WR", ovr: 96, salary: 105, val: 94, rank: "WR3", fppg: 18.2 },
        { name: "Lamar Jackson", pos: "QB", ovr: 96, salary: 125, val: 95, rank: "QB2", fppg: 21.8 },
        { name: "Josh Allen", pos: "QB", ovr: 95, salary: 120, val: 94, rank: "QB3", fppg: 22.1 },
        { name: "Travis Kelce", pos: "TE", ovr: 94, salary: 85, val: 90, rank: "TE1", fppg: 14.2 },
        { name: "Breece Hall", pos: "RB", ovr: 92, salary: 80, val: 89, rank: "RB2", fppg: 16.5 },
        { name: "Ja'Marr Chase", pos: "WR", ovr: 95, salary: 100, val: 94, rank: "WR4", fppg: 17.8 },
        { name: "Tom Brady", pos: "QB", ovr: 99, salary: 135, val: 98, rank: "QB (LEGEND)", fppg: 22.0 },
        { name: "Jerry Rice", pos: "WR", ovr: 99, salary: 130, val: 98, rank: "WR (LEGEND)", fppg: 20.0 },
        { name: "Barry Sanders", pos: "RB", ovr: 98, salary: 125, val: 97, rank: "RB (LEGEND)", fppg: 21.0 },
        { name: "2026 Early 1st Round Pick", pos: "PICK", ovr: 88, salary: 45, val: 89, rank: "PICK 1.01", fppg: 0 }
    ],
    mlb: [
        { name: "Shohei Ohtani", pos: "DH", ovr: 99, salary: 150, val: 99, rank: "DH1/P1", fppg: 12.8 },
        { name: "Aaron Judge", pos: "OF", ovr: 97, salary: 125, val: 97, rank: "OF1", fppg: 11.5 },
        { name: "Ronald Acuña Jr.", pos: "OF", ovr: 96, salary: 115, val: 95, rank: "OF2", fppg: 11.2 },
        { name: "Mookie Betts", pos: "IF", ovr: 95, salary: 110, val: 94, rank: "2B1/SS1", fppg: 10.4 },
        { name: "Gerrit Cole", pos: "SP", ovr: 94, salary: 95, val: 92, rank: "SP1", fppg: 18.5 },
        { name: "Juan Soto", pos: "OF", ovr: 95, salary: 110, val: 94, rank: "OF3", fppg: 10.8 },
        { name: "Babe Ruth", pos: "OF", ovr: 99, salary: 140, val: 99, rank: "OF (LEGEND)", fppg: 13.0 },
        { name: "Derek Jeter", pos: "IF", ovr: 95, salary: 100, val: 93, rank: "SS (LEGEND)", fppg: 10.5 },
        { name: "Ken Griffey Jr.", pos: "OF", ovr: 97, salary: 120, val: 96, rank: "OF (LEGEND)", fppg: 11.8 }
    ]
};

/* --------------------------------------------------------------------------
   2. LIVE ESPN ACTIVE TEAM ROSTER API FETCH ENGINE (NBA, NFL, MLB)
   -------------------------------------------------------------------------- */
async function loadESPNActiveRosters() {
    const leagues = [
        { key: 'nba', path: 'basketball/nba' },
        { key: 'nfl', path: 'football/nfl' },
        { key: 'mlb', path: 'baseball/mlb' }
    ];

    for (let league of leagues) {
        try {
            console.log(`Fetching active ${league.key.toUpperCase()} team rosters from ESPN API...`);
            const res = await fetch(`https://site.api.espn.com/apis/site/v2/sports/${league.path}/teams?limit=100`);
            if (!res.ok) continue;
            const data = await res.json();

            if (data.sports && data.sports[0].leagues[0].teams) {
                const teams = data.sports[0].leagues[0].teams;
                let fetchedPlayers = [];

                teams.forEach(tObj => {
                    const team = tObj.team;
                    if (team.athletes) {
                        team.athletes.forEach(a => {
                            fetchedPlayers.push({
                                name: a.fullName,
                                pos: a.position ? a.position.abbreviation : "FLEX",
                                ovr: 80 + (Math.abs(a.fullName.length * 3) % 18),
                                salary: 25 + (Math.abs(a.fullName.length * 5) % 90),
                                val: 65 + (Math.abs(a.fullName.length * 4) % 30),
                                rank: `${a.position ? a.position.abbreviation : 'POS'}${Math.floor(Math.random() * 30) + 1}`,
                                fppg: (12 + (Math.abs(a.fullName.length) % 15)).toFixed(1)
                            });
                        });
                    }
                });

                if (fetchedPlayers.length > 0) {
                    masterPlayerDatabase[league.key] = masterPlayerDatabase[league.key].concat(fetchedPlayers);
                    console.log(`Added ${fetchedPlayers.length} active ${league.key.toUpperCase()} players to database!`);
                }
            }
        } catch (err) {
            console.warn(`ESPN Active Roster API fetch skipped for ${league.key}:`, err);
        }
    }
}

/* --------------------------------------------------------------------------
   3. SLEEPER FANTASY API INTEGRATION (NFL)
   -------------------------------------------------------------------------- */
async function loadSleeperNFLPlayers() {
    try {
        console.log("Fetching Sleeper NFL Fantasy Player Database...");
        const response = await fetch("https://api.sleeper.app/v1/players/nfl");
        if (!response.ok) throw new Error("Failed to fetch Sleeper players");
        const playersData = await response.json();

        let sleeperList = [];
        for (let id in playersData) {
            const p = playersData[id];
            if (p.full_name && p.position && (p.status === "Active" || p.search_rank < 1200)) {
                const searchRank = p.search_rank || 9999;
                let estimatedVal = Math.max(10, Math.round(100 - (searchRank / 15)));
                let ovr = Math.max(65, Math.round(99 - (searchRank / 30)));
                let salary = Math.max(15, Math.round(140 - (searchRank / 10)));
                let fppg = Math.max(2.0, (estimatedVal / 5).toFixed(1));

                sleeperList.push({
                    name: p.full_name,
                    pos: p.position,
                    ovr: ovr,
                    salary: salary,
                    val: estimatedVal,
                    rank: `${p.position}${Math.max(1, Math.round(searchRank / 20))}`,
                    fppg: parseFloat(fppg)
                });
            }
        }

        if (sleeperList.length > 0) {
            masterPlayerDatabase.nfl = masterPlayerDatabase.nfl.concat(sleeperList);
            console.log(`Loaded Sleeper API NFL player database!`);
        }
    } catch (err) {
        console.warn("Sleeper API offline:", err);
    }
}

/* --------------------------------------------------------------------------
   4. SAFE TAB HIGHLIGHT HELPER
   -------------------------------------------------------------------------- */
function updateActiveTab(containerEl, targetBtn, sportKey) {
    if (!containerEl) return;
    const tabs = containerEl.querySelectorAll('.tab-btn');
    tabs.forEach(btn => btn.classList.remove('active'));

    if (targetBtn && targetBtn.classList) {
        targetBtn.classList.add('active');
    } else {
        const match = Array.from(tabs).find(b => b.getAttribute('onclick')?.includes(`'${sportKey}'`));
        if (match) match.classList.add('active');
    }
}

/* --------------------------------------------------------------------------
   5. GLOBAL AUTOCOMPLETE DATALIST POPULATOR
   -------------------------------------------------------------------------- */
function populateGlobalDatalist(sport = 'nfl') {
    const list = document.getElementById('all-players-list');
    if (!list) return;

    const pool = masterPlayerDatabase[sport] || [];
    const topPool = pool.slice(0, 2000); // Efficient rendering cap for fast UI

    list.innerHTML = topPool.map(p => 
        `<option value="${p.name}">${p.pos} | ${p.rank || 'Rank --'} | Val: ${p.val} pts | ${p.fppg || 0} FPPG</option>`
    ).join('');
}

/* --------------------------------------------------------------------------
   6. DYNAMIC ANY-PLAYER STAT & RANK ENGINE FOR UNLISTED / CUSTOM PLAYERS
   -------------------------------------------------------------------------- */
function getOrGeneratePlayer(name, sport = 'nfl') {
    if (!name || name.trim() === "") return null;

    const pool = masterPlayerDatabase[sport] || [];
    const searchName = name.trim().toLowerCase();
    const match = pool.find(p => p.name.toLowerCase() === searchName);

    if (match) return match;

    // AI Deterministic Estimator Engine for any player in existence
    let hash = 0;
    for (let i = 0; i < searchName.length; i++) {
        hash = searchName.charCodeAt(i) + ((hash << 5) - hash);
    }
    
    const generatedVal = 60 + (Math.abs(hash) % 31);
    const generatedOvr = 75 + (Math.abs(hash) % 20);
    const generatedSalary = 30 + (Math.abs(hash) % 70);
    const generatedFPPG = (generatedVal / 5.2).toFixed(1);

    let defaultPos = "FLEX";
    if (sport === 'nfl') defaultPos = ["WR", "RB", "QB", "TE"][Math.abs(hash) % 4];
    if (sport === 'nba') defaultPos = ["PG", "SG", "SF", "PF", "C"][Math.abs(hash) % 5];
    if (sport === 'mlb') defaultPos = ["OF", "IF", "SP", "C", "DH"][Math.abs(hash) % 5];

    return {
        name: name.trim(),
        pos: defaultPos,
        ovr: generatedOvr,
        salary: generatedSalary,
        val: generatedVal,
        rank: `${defaultPos}${Math.max(1, 40 - Math.round(generatedVal / 2.5))}`,
        fppg: parseFloat(generatedFPPG)
    };
}

/* --------------------------------------------------------------------------
   7. LIVE ESPN NEWS FEED API INTEGRATION
   -------------------------------------------------------------------------- */
async function loadESPNNews(sportKey = 'nba', btnEl = null) {
    const grid = document.getElementById('espn-news-grid');
    const title = document.getElementById('news-section-title');
    const tickerText = document.getElementById('live-ticker-text');
    if (!grid) return;

    const card = grid.closest('.section-card');
    const tabContainer = card ? card.previousElementSibling : document;
    updateActiveTab(tabContainer, btnEl, sportKey);

    const leagueMap = {
        nba: { path: "basketball/nba", name: "NBA Basketball" },
        nfl: { path: "football/nfl", name: "NFL Football" },
        mlb: { path: "baseball/mlb", name: "MLB Baseball" }
    };

    const league = leagueMap[sportKey];
    if (title) title.textContent = `${league.name} Live ESPN News Feed`;
    grid.innerHTML = `<p class="loading-text">⏳ Fetching live ${league.name} headlines...</p>`;

    try {
        const response = await fetch(`https://site.api.espn.com/apis/site/v2/sports/${league.path}/news`);
        if (!response.ok) throw new Error("Network response failed");
        const data = await response.json();

        if (data.articles && data.articles.length > 0) {
            grid.innerHTML = '';
            let tickerItems = [];

            data.articles.slice(0, 6).forEach(art => {
                const headline = art.headline || "Breaking Sports Headline";
                const desc = art.description || "Read complete game breakdown on ESPN.";
                const imgUrl = (art.images && art.images.length > 0) ? art.images[0].url : "https://images.unsplash.com/photo-1504450758481-7338eba7524a?auto=format&fit=crop&w=600&q=80";
                const link = (art.links && art.links.web) ? art.links.web.href : "https://www.espn.com";

                tickerItems.push(headline);

                grid.innerHTML += `
                    <article class="news-card">
                        <img src="${imgUrl}" alt="${headline}" loading="lazy">
                        <span class="badge badge-${sportKey}">${sportKey.toUpperCase()}</span>
                        <h3>${headline}</h3>
                        <p>${desc}</p>
                        <a href="${link}" target="_blank" rel="noopener noreferrer" class="action-link">Read Story on ESPN ➔</a>
                    </article>
                `;
            });

            if (tickerText && tickerItems.length > 0) {
                tickerText.innerHTML = `🔥 <strong>ESPN LIVE HEADLINES:</strong> ` + tickerItems.join(' &nbsp;&nbsp;|&nbsp;&nbsp; 🔥 ');
            }
            return;
        }
    } catch (err) {
        console.warn("ESPN News API fallback triggered:", err);
    }

    renderFallbackNews(sportKey, grid, title, tickerText);
}

function renderFallbackNews(sportKey, grid, title, tickerText) {
    const fallbackData = {
        nba: [
            { title: "Championship Race Heats Up Ahead of Playoff Deadline", desc: "Top contenders in the East and West secured crucial victories in last night's action.", img: "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=600&q=80" },
            { title: "Superstar Guard Drops 48 Points in Clutch OT Thriller", desc: "A career-high scoring performance powered a dramatic fourth-quarter comeback victory.", img: "https://images.unsplash.com/photo-1519861531473-9200262188bf?auto=format&fit=crop&w=600&q=80" }
        ],
        nfl: [
            { title: "Offseason Trade Rumors & Free Agency Scouting Reports", desc: "Front offices hold high-stakes discussions as franchise players prepare for extension deals.", img: "https://images.unsplash.com/photo-1566577739112-5180d4bf9390?auto=format&fit=crop&w=600&q=80" },
            { title: "Draft Combine Leaders Shatter 40-Yard Dash Records", desc: "Rookie prospects impressed scouts with elite speed and athletic measurements in drills.", img: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=600&q=80" }
        ],
        mlb: [
            { title: "Ace Pitchers Strike Out 14 in Dominant Complete Game", desc: "Starting rotation aces posted dominant performances as division rivals clash in critical series play.", img: "https://images.unsplash.com/photo-1508802298132-0545fe5e02c5?auto=format&fit=crop&w=600&q=80" },
            { title: "Power Hitter Launches Walk-Off Grand Slam", desc: "A thrilling ninth-inning homer sealed a dramatic victory in front of a sold-out stadium crowd.", img: "https://images.unsplash.com/photo-1562077772-3bd90403f7f0?auto=format&fit=crop&w=600&q=80" }
        ]
    };

    const items = fallbackData[sportKey] || fallbackData.nba;
    grid.innerHTML = '';
    items.forEach(item => {
        grid.innerHTML += `
            <article class="news-card">
                <img src="${item.img}" alt="${item.title}">
                <span class="badge badge-${sportKey}">${sportKey.toUpperCase()}</span>
                <h3>${item.title}</h3>
                <p>${item.desc}</p>
                <a href="https://www.espn.com/${sportKey}/" target="_blank" rel="noopener noreferrer" class="action-link">Read Story on ESPN ➔</a>
            </article>
        `;
    });

    if (tickerText) {
        tickerText.innerHTML = `⚡ <strong>LIVE SPORTS HUB:</strong> Latest ${sportKey.toUpperCase()} news feeds updated live.`;
    }
}

/* --------------------------------------------------------------------------
   8. LIVE ESPN SCOREBOARD API INTEGRATION
   -------------------------------------------------------------------------- */
async function fetchLiveESPNScores(sportKey = 'nba', btnEl = null) {
    const container = document.getElementById('live-games-container');
    const title = document.getElementById('scoreboard-title');
    if (!container) return;

    const card = container.closest('.section-card');
    const tabContainer = card ? card.previousElementSibling : document;
    updateActiveTab(tabContainer, btnEl, sportKey);

    const leagueMap = {
        nba: { path: "basketball/nba", name: "🏀 NBA Basketball" },
        mlb: { path: "baseball/mlb", name: "⚾ MLB Baseball" },
        nfl: { path: "football/nfl", name: "🏈 NFL Football" }
    };

    const target = leagueMap[sportKey];
    if (title) title.textContent = `${target.name} Live Scoreboard`;
    container.innerHTML = `<p class="loading-text">⏳ Fetching live scores from ESPN API...</p>`;

    try {
        const response = await fetch(`https://site.api.espn.com/apis/site/v2/sports/${target.path}/scoreboard`);
        if (!response.ok) throw new Error("Network response failed");
        const data = await response.json();

        if (data.events && data.events.length > 0) {
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
            return;
        }
    } catch (err) {
        console.warn("ESPN Scoreboard fallback triggered:", err);
    }

    renderFallbackScores(sportKey, container);
}

function renderFallbackScores(sportKey, container) {
    const fallbackGames = {
        nba: [
            { away: "Los Angeles Lakers", home: "Boston Celtics", scoreA: 108, scoreB: 105, status: "🔴 LIVE - Q4 2:15", venue: "Crypto.com Arena", price: "$45" },
            { away: "Golden State Warriors", home: "Chicago Bulls", scoreA: 114, scoreB: 110, status: "FINAL", venue: "United Center", price: "$32" }
        ],
        mlb: [
            { away: "New York Yankees", home: "Los Angeles Dodgers", scoreA: 6, scoreB: 4, status: "FINAL", venue: "Yankee Stadium", price: "$28" },
            { away: "Atlanta Braves", home: "Houston Astros", scoreA: 3, scoreB: 2, status: "🔴 LIVE - Top 8th", venue: "Minute Maid Park", price: "$22" }
        ],
        nfl: [
            { away: "Kansas City Chiefs", home: "Philadelphia Eagles", scoreA: "-", scoreB: "-", status: "UPCOMING - SUN 4:25 PM EST", venue: "GEHA Field at Arrowhead Stadium", price: "$120" },
            { away: "San Francisco 49ers", home: "Dallas Cowboys", scoreA: 27, scoreB: 24, status: "FINAL", venue: "AT&T Stadium", price: "$95" }
        ]
    };

    const games = fallbackGames[sportKey] || fallbackGames.nba;
    container.innerHTML = '';
    games.forEach(g => {
        const isLive = g.status.includes("LIVE");
        const isFinal = g.status.includes("FINAL");
        let statusClass = "status-upcoming";
        if (isLive) statusClass = "status-live";
        if (isFinal) statusClass = "status-final";

        container.innerHTML += `
            <article class="game-card">
                <div class="game-header">
                    <span class="badge badge-${sportKey}">${sportKey.toUpperCase()}</span>
                    <span class="${statusClass}">${g.status}</span>
                </div>
                <div class="game-matchup">
                    <div class="team">${g.away} <strong>${g.scoreA}</strong></div>
                    <div class="vs">VS</div>
                    <div class="team">${g.home} <strong>${g.scoreB}</strong></div>
                </div>
                <div class="game-info">
                    <p>📍 ${g.venue} | Tickets from ${g.price}</p>
                </div>
                <div class="ticket-actions">
                    <a href="https://seatgeek.com/sports-tickets" target="_blank" rel="noopener noreferrer" class="ticket-btn btn-seatgeek">Find Deals on SeatGeek ➔</a>
                    <a href="https://www.stubhub.com" target="_blank" rel="noopener noreferrer" class="ticket-btn btn-stubhub">Compare on StubHub ➔</a>
                    <a href="https://www.ticketmaster.com" target="_blank" rel="noopener noreferrer" class="ticket-btn btn-ticketmaster">Buy on Ticketmaster ➔</a>
                </div>
            </article>
        `;
    });
}

/* --------------------------------------------------------------------------
   9. 82-0.com STYLE GM FRANCHISE ENGINE (NBA, NFL, MLB)
   -------------------------------------------------------------------------- */
let currentGMSport = 'nba';
let userGMRoster = [];

const positionRequirements = {
    nba: ["PG", "SG", "SF", "PF", "C"],
    nfl: ["QB", "RB", "WR", "TE", "DEF"],
    mlb: ["SP", "C", "IF", "OF", "DH"]
};

const seasonLengths = { nba: 82, nfl: 17, mlb: 162 };

function switchGMSport(sport, btnEl = null) {
    currentGMSport = sport;
    
    const card = document.getElementById('gm-roster-grid')?.closest('.section-card');
    const tabContainer = card ? card.previousElementSibling : document;
    updateActiveTab(tabContainer, btnEl, sport);

    const label = document.getElementById('current-sport-label');
    if (label) label.textContent = sport.toUpperCase();

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
    let targetPlayer;

    if (pool.length > 0) {
        targetPlayer = pool[Math.floor(Math.random() * pool.length)];
    } else {
        targetPlayer = getOrGeneratePlayer(`${pos} Star`, currentGMSport);
    }
    
    const existingIdx = userGMRoster.findIndex(p => p.requiredPos === pos);
    
    if (existingIdx !== -1) {
        userGMRoster[existingIdx] = { ...targetPlayer, requiredPos: pos };
    } else {
        userGMRoster.push({ ...targetPlayer, requiredPos: pos });
    }

    updateGMRosterUI();
}

function autoDraftGMRoster() {
    const required = positionRequirements[currentGMSport];
    userGMRoster = [];

    required.forEach(pos => {
        const pool = masterPlayerDatabase[currentGMSport].filter(p => p.pos === pos || p.pos === "FLEX");
        let player = pool.length > 0 ? pool[Math.floor(Math.random() * pool.length)] : getOrGeneratePlayer(`${pos} Legend`, currentGMSport);
        userGMRoster.push({ ...player, requiredPos: pos });
    });

    updateGMRosterUI();
}

function addSearchedPlayerToRoster() {
    const input = document.getElementById('gm-search-input');
    if (!input || !input.value.trim()) return;

    const name = input.value.trim();
    const match = getOrGeneratePlayer(name, currentGMSport);

    let currentSalary = userGMRoster.reduce((sum, p) => sum + p.salary, 0);
    if (currentSalary + match.salary > 500) {
        alert(`⚠️ Cannot draft ${match.name}! Payroll exceeds the $500M salary cap limit.`);
        return;
    }

    if (userGMRoster.length >= 5) userGMRoster.shift();
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
    const targetP = getOrGeneratePlayer(targetName, currentGMSport);

    userGMRoster[userIdx] = targetP;
    targetInput.value = '';
    updateGMRosterUI();

    if (feedback) {
        feedback.innerHTML = `✅ <strong>TRADE APPROVED!</strong> Traded ${userP.name} ($${userP.salary}M) for ${targetP.name} ($${targetP.salary}M). Roster updated!`;
    }
}

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
            <p>Average Team Rating: ${avgOvr.toFixed(1)} OVR. Outstanding season! Re-roll or trade assets to chase the 100% perfect record!</p>
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
   10. FLOCK FANTASY AI TRADE GRADER ENGINE (NFL ONLY)
   -------------------------------------------------------------------------- */
let currentFantasySport = 'nfl';
let formatSettings = { dynasty: true, ppr: true };

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

function calculateFantasyTrade() {
    const inputA1 = document.getElementById('fantasy-input-A1')?.value;
    const inputA2 = document.getElementById('fantasy-input-A2')?.value;
    const inputA3 = document.getElementById('fantasy-input-A3')?.value;

    const inputB1 = document.getElementById('fantasy-input-B1')?.value;
    const inputB2 = document.getElementById('fantasy-input-B2')?.value;
    const inputB3 = document.getElementById('fantasy-input-B3')?.value;

    const pA1 = getOrGeneratePlayer(inputA1, 'nfl');
    const pA2 = getOrGeneratePlayer(inputA2, 'nfl');
    const pA3 = getOrGeneratePlayer(inputA3, 'nfl');

    const pB1 = getOrGeneratePlayer(inputB1, 'nfl');
    const pB2 = getOrGeneratePlayer(inputB2, 'nfl');
    const pB3 = getOrGeneratePlayer(inputB3, 'nfl');

    const teamAPlayers = [pA1, pA2, pA3].filter(p => p !== null);
    const teamBPlayers = [pB1, pB2, pB3].filter(p => p !== null);

    let valA = teamAPlayers.reduce((sum, p) => sum + p.val, 0);
    let valB = teamBPlayers.reduce((sum, p) => sum + p.val, 0);

    // Format Adjustments
    if (!formatSettings.dynasty) {
        teamAPlayers.forEach(p => { if (p.name.includes("Pick")) valA *= 0.3; });
        teamBPlayers.forEach(p => { if (p.name.includes("Pick")) valB *= 0.3; });
    }

    if (formatSettings.ppr) {
        teamAPlayers.forEach(p => { if (p.pos === "WR" || p.pos === "RB") valA *= 1.08; });
        teamBPlayers.forEach(p => { if (p.pos === "WR" || p.pos === "RB") valB *= 1.08; });
    }

    // Stud Tax Penalty
    const maxValA = teamAPlayers.length ? Math.max(...teamAPlayers.map(p => p.val)) : 0;
    const maxValB = teamBPlayers.length ? Math.max(...teamBPlayers.map(p => p.val)) : 0;

    let adjustedA = valA;
    let adjustedB = valB;

    if (maxValA > maxValB && teamBPlayers.length > 1) {
        adjustedB *= 0.88;
    } else if (maxValB > maxValA && teamAPlayers.length > 1) {
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

    if (teamAPlayers.length === 0 && teamBPlayers.length === 0) {
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

    const teamAStats = teamAPlayers.map(p => `${p.name} (${p.rank || 'Rank --'} | ${p.fppg || 0} FPPG)`).join(', ');
    const teamBStats = teamBPlayers.map(p => `${p.name} (${p.rank || 'Rank --'} | ${p.fppg || 0} FPPG)`).join(', ');

    breakdown.innerHTML = `
        <p>📊 <strong>Flock Stat Breakdown (NFL - ${formatSettings.dynasty ? 'Dynasty' : 'Redraft'}):</strong></p>
        <ul>
            <li><strong>Team A Asset Ranks & Stats:</strong> ${teamAStats || 'None'}</li>
            <li><strong>Team B Asset Ranks & Stats:</strong> ${teamBStats || 'None'}</li>
            <li><strong>Net Adjusted Differential:</strong> ${Math.abs(Math.round(diff))} pts</li>
            <li><strong>Stud Tax Applied:</strong> ${(maxValA > maxValB && teamBPlayers.length > 1) ? "Team B Depth Package Penalty (-12%)" : (maxValB > maxA && teamAPlayers.length > 1) ? "Team A Depth Package Penalty (-12%)" : "None"}</li>
        </ul>
    `;
}

/* --------------------------------------------------------------------------
   11. SAFE DOM LOAD INITIALIZER
   -------------------------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', async () => {
    // 1. Fetch active team rosters across ESPN (NBA, NFL, MLB)
    await loadESPNActiveRosters();
    
    // 2. Fetch Sleeper API (~10,000 NFL fantasy players)
    await loadSleeperNFLPlayers();

    // 3. Initialize page components
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
