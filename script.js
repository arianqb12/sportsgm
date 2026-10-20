/* ==========================================================================
   APEX SPORTS HUB - MASTER INTERACTIVE LOGIC & FANTASY STAT ENGINE
   ========================================================================== */

/* --------------------------------------------------------------------------
   1. MASTER MULTI-SPORT PLAYER & LEGENDS DATABASE
   -------------------------------------------------------------------------- */
let masterPlayerDatabase = {
    nba: [
        /* PG */
        { name: "Steph Curry", pos: "PG", ovr: 96, val: 95, rank: "PG1", fppg: 48.5 },
        { name: "Luka Doncic", pos: "PG", ovr: 96, val: 96, rank: "PG2", fppg: 54.1 },
        { name: "Shai Gilgeous-Alexander", pos: "PG", ovr: 95, val: 94, rank: "PG3", fppg: 51.0 },
        { name: "Jalen Brunson", pos: "PG", ovr: 92, val: 90, rank: "PG4", fppg: 44.2 },
        { name: "Damian Lillard", pos: "PG", ovr: 91, val: 88, rank: "PG5", fppg: 42.5 },
        { name: "Tyrese Haliburton", pos: "PG", ovr: 91, val: 89, rank: "PG6", fppg: 43.1 },
        { name: "Ja Morant", pos: "PG", ovr: 90, val: 87, rank: "PG7", fppg: 41.8 },
        { name: "De'Aaron Fox", pos: "PG", ovr: 89, val: 86, rank: "PG8", fppg: 40.2 },
        { name: "Trae Young", pos: "PG", ovr: 89, val: 86, rank: "PG9", fppg: 41.0 },
        { name: "Jamal Murray", pos: "PG", ovr: 88, val: 85, rank: "PG10", fppg: 38.5 },
        { name: "Magic Johnson", pos: "PG", ovr: 97, val: 97, rank: "PG (LEGEND)", fppg: 54.0 },
        
        /* SG */
        { name: "Michael Jordan", pos: "SG", ovr: 99, val: 99, rank: "SG (LEGEND)", fppg: 58.0 },
        { name: "Kobe Bryant", pos: "SG", ovr: 97, val: 97, rank: "SG (LEGEND)", fppg: 53.5 },
        { name: "Anthony Edwards", pos: "SG", ovr: 93, val: 91, rank: "SG1", fppg: 43.0 },
        { name: "Devin Booker", pos: "SG", ovr: 92, val: 90, rank: "SG2", fppg: 42.8 },
        { name: "Donovan Mitchell", pos: "SG", ovr: 92, val: 89, rank: "SG3", fppg: 42.1 },
        { name: "Kyrie Irving", pos: "SG", ovr: 91, val: 88, rank: "SG4", fppg: 41.5 },
        { name: "James Harden", pos: "SG", ovr: 88, val: 85, rank: "SG5", fppg: 39.0 },
        { name: "Derrick White", pos: "SG", ovr: 86, val: 83, rank: "SG6", fppg: 34.0 },
        { name: "Dwyane Wade", pos: "SG", ovr: 95, val: 94, rank: "SG (LEGEND)", fppg: 48.0 },

        /* SF */
        { name: "LeBron James", pos: "SF", ovr: 98, val: 97, rank: "SF1", fppg: 50.2 },
        { name: "Kevin Durant", pos: "SF", ovr: 96, val: 94, rank: "SF2", fppg: 47.3 },
        { name: "Jayson Tatum", pos: "SF", ovr: 94, val: 92, rank: "SF3", fppg: 46.2 },
        { name: "Kawhi Leonard", pos: "SF", ovr: 92, val: 89, rank: "SF4", fppg: 43.5 },
        { name: "Jimmy Butler", pos: "SF", ovr: 90, val: 87, rank: "SF5", fppg: 40.1 },
        { name: "Jaylen Brown", pos: "SF", ovr: 90, val: 87, rank: "SF6", fppg: 39.8 },
        { name: "Mikal Bridges", pos: "SF", ovr: 85, val: 82, rank: "SF7", fppg: 32.5 },
        { name: "Larry Bird", pos: "SF", ovr: 96, val: 96, rank: "SF (LEGEND)", fppg: 52.0 },

        /* PF */
        { name: "Giannis Antetokounmpo", pos: "PF", ovr: 97, val: 96, rank: "PF1", fppg: 52.8 },
        { name: "Anthony Davis", pos: "PF", ovr: 94, val: 92, rank: "PF2", fppg: 48.0 },
        { name: "Zion Williamson", pos: "PF", ovr: 89, val: 86, rank: "PF3", fppg: 39.5 },
        { name: "Pascal Siakam", pos: "PF", ovr: 87, val: 84, rank: "PF4", fppg: 37.2 },
        { name: "Karl-Anthony Towns", pos: "PF", ovr: 89, val: 87, rank: "PF5", fppg: 41.0 },
        { name: "Tim Duncan", pos: "PF", ovr: 96, val: 95, rank: "PF (LEGEND)", fppg: 50.0 },

        /* C */
        { name: "Nikola Jokic", pos: "C", ovr: 98, val: 98, rank: "C1", fppg: 59.4 },
        { name: "Joel Embiid", pos: "C", ovr: 97, val: 96, rank: "C2", fppg: 55.1 },
        { name: "Victor Wembanyama", pos: "C", ovr: 93, val: 93, rank: "C3", fppg: 49.8 },
        { name: "Bam Adebayo", pos: "C", ovr: 89, val: 86, rank: "C4", fppg: 39.0 },
        { name: "Domantas Sabonis", pos: "C", ovr: 90, val: 88, rank: "C5", fppg: 43.2 },
        { name: "Chet Holmgren", pos: "C", ovr: 87, val: 85, rank: "C6", fppg: 36.8 },
        { name: "Kareem Abdul-Jabbar", pos: "C", ovr: 98, val: 98, rank: "C (LEGEND)", fppg: 55.0 },
        { name: "Shaquille O'Neal", pos: "C", ovr: 97, val: 96, rank: "C (LEGEND)", fppg: 53.0 }
    ],
    nfl: [
        /* QB */
        { name: "Patrick Mahomes", pos: "QB", ovr: 99, val: 99, rank: "QB1", fppg: 22.5 },
        { name: "Lamar Jackson", pos: "QB", ovr: 96, val: 95, rank: "QB2", fppg: 21.8 },
        { name: "Josh Allen", pos: "QB", ovr: 95, val: 94, rank: "QB3", fppg: 22.1 },
        { name: "Joe Burrow", pos: "QB", ovr: 93, val: 91, rank: "QB4", fppg: 19.5 },
        { name: "C.J. Stroud", pos: "QB", ovr: 91, val: 89, rank: "QB5", fppg: 18.2 },
        { name: "Jalen Hurts", pos: "QB", ovr: 92, val: 90, rank: "QB6", fppg: 20.4 },
        { name: "Jordan Love", pos: "QB", ovr: 88, val: 85, rank: "QB7", fppg: 17.5 },
        { name: "Tom Brady", pos: "QB", ovr: 99, val: 98, rank: "QB (LEGEND)", fppg: 22.0 },

        /* RB */
        { name: "Christian McCaffrey", pos: "RB", ovr: 97, val: 96, rank: "RB1", fppg: 21.4 },
        { name: "Breece Hall", pos: "RB", ovr: 92, val: 89, rank: "RB2", fppg: 16.5 },
        { name: "Bijan Robinson", pos: "RB", ovr: 91, val: 88, rank: "RB3", fppg: 15.8 },
        { name: "Saquon Barkley", pos: "RB", ovr: 93, val: 90, rank: "RB4", fppg: 17.2 },
        { name: "Jahmyr Gibbs", pos: "RB", ovr: 90, val: 87, rank: "RB5", fppg: 15.1 },
        { name: "Derrick Henry", pos: "RB", ovr: 91, val: 88, rank: "RB6", fppg: 16.0 },
        { name: "Barry Sanders", pos: "RB", ovr: 98, val: 97, rank: "RB (LEGEND)", fppg: 21.0 },

        /* WR */
        { name: "Justin Jefferson", pos: "WR", ovr: 98, val: 98, rank: "WR1", fppg: 19.8 },
        { name: "CeeDee Lamb", pos: "WR", ovr: 96, val: 95, rank: "WR2", fppg: 18.9 },
        { name: "Tyreek Hill", pos: "WR", ovr: 96, val: 94, rank: "WR3", fppg: 18.2 },
        { name: "Ja'Marr Chase", pos: "WR", ovr: 95, val: 94, rank: "WR4", fppg: 17.8 },
        { name: "Amon-Ra St. Brown", pos: "WR", ovr: 94, val: 92, rank: "WR5", fppg: 17.0 },
        { name: "A.J. Brown", pos: "WR", ovr: 93, val: 91, rank: "WR6", fppg: 16.5 },
        { name: "Puka Nacua", pos: "WR", ovr: 91, val: 89, rank: "WR7", fppg: 15.8 },
        { name: "Jerry Rice", pos: "WR", ovr: 99, val: 98, rank: "WR (LEGEND)", fppg: 20.0 },

        /* TE */
        { name: "Travis Kelce", pos: "TE", ovr: 94, val: 90, rank: "TE1", fppg: 14.2 },
        { name: "Sam LaPorta", pos: "TE", ovr: 91, val: 88, rank: "TE2", fppg: 12.8 },
        { name: "Trey McBride", pos: "TE", ovr: 89, val: 86, rank: "TE3", fppg: 11.9 },
        { name: "George Kittle", pos: "TE", ovr: 91, val: 87, rank: "TE4", fppg: 12.5 },

        /* DEF */
        { name: "San Francisco 49ers", pos: "DEF", ovr: 92, val: 85, rank: "DEF1", fppg: 9.5 },
        { name: "Baltimore Ravens", pos: "DEF", ovr: 91, val: 84, rank: "DEF2", fppg: 9.2 },
        { name: "Dallas Cowboys", pos: "DEF", ovr: 89, val: 82, rank: "DEF3", fppg: 8.8 },
        { name: "2026 Early 1st Round Pick", pos: "PICK", ovr: 88, val: 89, rank: "PICK 1.01", fppg: 0 }
    ],
    mlb: [
        /* DH / OF */
        { name: "Shohei Ohtani", pos: "DH", ovr: 99, val: 99, rank: "DH1/P1", fppg: 12.8 },
        { name: "Aaron Judge", pos: "OF", ovr: 97, val: 97, rank: "OF1", fppg: 11.5 },
        { name: "Ronald Acuña Jr.", pos: "OF", ovr: 96, val: 95, rank: "OF2", fppg: 11.2 },
        { name: "Juan Soto", pos: "OF", ovr: 95, val: 94, rank: "OF3", fppg: 10.8 },
        { name: "Julio Rodríguez", pos: "OF", ovr: 92, val: 90, rank: "OF4", fppg: 9.8 },
        { name: "Babe Ruth", pos: "OF", ovr: 99, val: 99, rank: "OF (LEGEND)", fppg: 13.0 },
        { name: "Ken Griffey Jr.", pos: "OF", ovr: 97, val: 96, rank: "OF (LEGEND)", fppg: 11.8 },

        /* IF */
        { name: "Mookie Betts", pos: "IF", ovr: 95, val: 94, rank: "2B1/SS1", fppg: 10.4 },
        { name: "Freddie Freeman", pos: "IF", ovr: 93, val: 90, rank: "1B1", fppg: 9.6 },
        { name: "Corey Seager", pos: "IF", ovr: 92, val: 89, rank: "SS2", fppg: 9.3 },
        { name: "Trea Turner", pos: "IF", ovr: 91, val: 88, rank: "SS3", fppg: 9.1 },
        { name: "Derek Jeter", pos: "IF", ovr: 95, val: 93, rank: "SS (LEGEND)", fppg: 10.5 },

        /* C */
        { name: "Adley Rutschman", pos: "C", ovr: 91, val: 88, rank: "C1", fppg: 8.5 },
        { name: "J.T. Realmuto", pos: "C", ovr: 88, val: 85, rank: "C2", fppg: 8.0 },
        { name: "Will Smith", pos: "C", ovr: 89, val: 86, rank: "C3", fppg: 8.2 },

        /* SP */
        { name: "Gerrit Cole", pos: "SP", ovr: 94, val: 92, rank: "SP1", fppg: 18.5 },
        { name: "Zack Wheeler", pos: "SP", ovr: 93, val: 90, rank: "SP2", fppg: 17.8 },
        { name: "Corbin Burnes", pos: "SP", ovr: 92, val: 89, rank: "SP3", fppg: 17.2 },
        { name: "Tarik Skubal", pos: "SP", ovr: 94, val: 91, rank: "SP4", fppg: 18.0 }
    ]
};

/* Track loaded player names to prevent duplicates */
const loadedPlayerNames = { nba: new Set(), nfl: new Set(), mlb: new Set() };
Object.keys(masterPlayerDatabase).forEach(sport => {
    masterPlayerDatabase[sport].forEach(p => loadedPlayerNames[sport].add(p.name.toLowerCase()));
});

/* --------------------------------------------------------------------------
   2. LIVE ESPN & SLEEPER ACTIVE ROSTER API FETCHERS
   -------------------------------------------------------------------------- */
async function loadESPNActiveRosters() {
    const leagues = [
        { key: 'nba', path: 'basketball/nba' },
        { key: 'nfl', path: 'football/nfl' },
        { key: 'mlb', path: 'baseball/mlb' }
    ];

    for (let league of leagues) {
        try {
            const res = await fetch(`https://site.api.espn.com/apis/site/v2/sports/${league.path}/teams?limit=100`);
            if (!res.ok) continue;
            const data = await res.json();

            if (data.sports && data.sports[0].leagues[0].teams) {
                const teams = data.sports[0].leagues[0].teams;

                const rosterPromises = teams.map(tObj => 
                    fetch(`https://site.api.espn.com/apis/site/v2/sports/${league.path}/teams/${tObj.team.id}/roster`)
                        .then(r => r.ok ? r.json() : null)
                        .catch(() => null)
                );

                const rosterResults = await Promise.all(rosterPromises);
                let fetchedPlayers = [];

                rosterResults.forEach(rosterData => {
                    if (rosterData && rosterData.athletes) {
                        rosterData.athletes.forEach(group => {
                            const items = group.items || (group.fullName ? [group] : []);
                            items.forEach(a => {
                                if (a.fullName && !loadedPlayerNames[league.key].has(a.fullName.toLowerCase())) {
                                    loadedPlayerNames[league.key].add(a.fullName.toLowerCase());
                                    const posAbbr = a.position ? a.position.abbreviation : "FLEX";
                                    fetchedPlayers.push({
                                        name: a.fullName,
                                        pos: posAbbr,
                                        ovr: 78 + (Math.abs(a.fullName.length * 3) % 19),
                                        val: 60 + (Math.abs(a.fullName.length * 4) % 35),
                                        rank: `${posAbbr}${Math.floor(Math.random() * 40) + 1}`,
                                        fppg: (10 + (Math.abs(a.fullName.length) % 16)).toFixed(1)
                                    });
                                }
                            });
                        });
                    }
                });

                if (fetchedPlayers.length > 0) {
                    masterPlayerDatabase[league.key] = masterPlayerDatabase[league.key].concat(fetchedPlayers);
                    console.log(`Loaded ${fetchedPlayers.length} active ${league.key.toUpperCase()} players from ESPN.`);
                    populateGlobalDatalist(league.key);
                }
            }
        } catch (err) {
            console.warn(`ESPN Roster API fetch skipped for ${league.key}:`, err);
        }
    }
}

async function loadSleeperNFLPlayers() {
    try {
        const response = await fetch("https://api.sleeper.app/v1/players/nfl");
        if (!response.ok) throw new Error("Failed to fetch Sleeper players");
        const playersData = await response.json();

        let sleeperList = [];
        for (let id in playersData) {
            const p = playersData[id];
            if (p.full_name && p.position && (p.status === "Active" || (p.search_rank && p.search_rank < 3000))) {
                const nameKey = p.full_name.toLowerCase();
                if (!loadedPlayerNames.nfl.has(nameKey)) {
                    loadedPlayerNames.nfl.add(nameKey);
                    const searchRank = p.search_rank || 9999;
                    let estimatedVal = Math.max(15, Math.round(100 - (searchRank / 30)));
                    let ovr = Math.max(68, Math.round(99 - (searchRank / 45)));

                    sleeperList.push({
                        name: p.full_name,
                        pos: p.position,
                        ovr: ovr,
                        val: estimatedVal,
                        rank: `${p.position}${Math.max(1, Math.round(searchRank / 25))}`,
                        fppg: parseFloat((estimatedVal / 5).toFixed(1))
                    });
                }
            }
        }

        if (sleeperList.length > 0) {
            masterPlayerDatabase.nfl = masterPlayerDatabase.nfl.concat(sleeperList);
            console.log(`Loaded ${sleeperList.length} active NFL players from Sleeper API.`);
            populateGlobalDatalist('nfl');
        }
    } catch (err) {
        console.warn("Sleeper API unavailable:", err);
    }
}

/* --------------------------------------------------------------------------
   3. SAFE TAB HIGHLIGHT HELPER
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
   4. GLOBAL AUTOCOMPLETE DATALIST POPULATOR WITH DYNAMIC FILTERING
   -------------------------------------------------------------------------- */
function populateGlobalDatalist(sport = currentGMSport, filterQuery = '') {
    const list = document.getElementById('all-players-list');
    if (!list) return;

    let pool = masterPlayerDatabase[sport] || [];

    if (filterQuery && filterQuery.trim().length > 0) {
        const query = filterQuery.trim().toLowerCase();
        pool = pool.filter(p => p.name.toLowerCase().includes(query));
    }

    const displayPool = pool.slice(0, 1500);

    list.innerHTML = displayPool.map(p => 
        `<option value="${p.name}">${p.pos} | ${p.ovr} OVR | ${p.rank || 'Rank --'} | Val: ${p.val} pts</option>`
    ).join('');
}

document.addEventListener('input', (e) => {
    if (e.target && e.target.getAttribute('list') === 'all-players-list') {
        const activeSport = (document.getElementById('grade-badge')) ? 'nfl' : currentGMSport;
        populateGlobalDatalist(activeSport, e.target.value);
    }
});

/* --------------------------------------------------------------------------
   5. UNIVERSAL DYNAMIC ANY-PLAYER STAT & RATING ENGINE
   -------------------------------------------------------------------------- */
function getOrGeneratePlayer(name, sport = currentGMSport) {
    if (!name || name.trim() === "") return null;

    const pool = masterPlayerDatabase[sport] || [];
    const searchName = name.trim().toLowerCase();
    const match = pool.find(p => p.name.toLowerCase() === searchName);

    if (match) return match;

    /* AI Deterministic Estimator Engine for any player name typed in human history */
    let hash = 0;
    for (let i = 0; i < searchName.length; i++) {
        hash = searchName.charCodeAt(i) + ((hash << 5) - hash);
    }
    
    const generatedVal = 60 + (Math.abs(hash) % 35);
    const generatedOvr = 78 + (Math.abs(hash) % 21); // 78 to 98 OVR
    const generatedFPPG = (generatedVal / 5.2).toFixed(1);

    let defaultPos = "FLEX";
    if (sport === 'nfl') defaultPos = ["WR", "RB", "QB", "TE"][Math.abs(hash) % 4];
    if (sport === 'nba') defaultPos = ["PG", "SG", "SF", "PF", "C"][Math.abs(hash) % 5];
    if (sport === 'mlb') defaultPos = ["OF", "IF", "SP", "C", "DH"][Math.abs(hash) % 5];

    return {
        name: name.trim(),
        pos: defaultPos,
        ovr: generatedOvr,
        val: generatedVal,
        rank: `${defaultPos}${Math.max(1, 40 - Math.round(generatedVal / 2.5))}`,
        fppg: parseFloat(generatedFPPG)
    };
}

/* --------------------------------------------------------------------------
   6. LIVE ESPN NEWS FEED API INTEGRATION
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
   7. LIVE ESPN SCOREBOARD API INTEGRATION
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
   8. UNDEFEATED GM FRANCHISE ENGINE (FIXED SPORT SWITCHING & NO SALARY CAP)
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
    
    /* Safely update active tab highlight */
    const tabContainer = document.querySelector('.sport-tabs');
    updateActiveTab(tabContainer, btnEl, sport);

    /* Update current sport labels in DOM */
    const label = document.getElementById('current-sport-label');
    if (label) label.textContent = sport.toUpperCase();

    const sim10 = document.getElementById('sim-10-btn');
    const simSeason = document.getElementById('sim-season-btn');
    if (sim10) sim10.textContent = `🚀 Simulate 10 Games`;
    if (simSeason) simSeason.textContent = `🏆 Simulate Full Season (${seasonLengths[sport]} Games)`;

    /* Clear current roster and re-populate datalist specifically for switched sport */
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

    if (userGMRoster.length >= 5) userGMRoster.shift();
    userGMRoster.push(match);
    input.value = '';
    updateGMRosterUI();
}

function updateGMRosterUI() {
    const grid = document.getElementById('gm-roster-grid');
    if (!grid) return;
    grid.innerHTML = '';

    const required = positionRequirements[currentGMSport];

    required.forEach((reqPos, idx) => {
        const player = userGMRoster[idx] || userGMRoster.find(p => p.requiredPos === reqPos);

        if (player) {
            grid.innerHTML += `
                <article class="gm-slot-card">
                    <strong>${player.pos || reqPos}</strong>
                    <div style="font-weight: 800; margin: 4px 0;">${player.name}</div>
                    <small style="color:var(--primary); font-weight:700;">${player.ovr} OVR Rating</small>
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

    if (progressBox) progressBox.style.display = 'block';
    ticker.style.display = 'block';
    standings.style.display = 'none';

    let totalOvr = userGMRoster.reduce((sum, p) => sum + p.ovr, 0);
    let avgOvr = totalOvr / userGMRoster.length;
    
    let winChance = Math.min(Math.max((avgOvr - 68) / 30, 0.35), 0.98);

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
            <h3 style="color:var(--accent); font-size:1.4rem;">🏆 ${totalGames}-0 PERFECT UNDEFEATED SEASON!</h3>
            <p><strong>PERFECT DYNASTY!</strong> Average Team Rating: ${avgOvr.toFixed(1)} OVR. You assembled an untouchable championship lineup!</p>
            <div style="font-size:1.8rem; font-weight:900; color:var(--primary); margin-top:8px;">${wins} - ${losses} (100% Win PCT)</div>
        `;
    } else if (wins >= totalGames * 0.8) {
        standings.className = 'feedback-box';
        standings.innerHTML = `
            <h3 style="color:var(--success);">🔥 Championship Contender!</h3>
            <p>Average Team Rating: ${avgOvr.toFixed(1)} OVR. Outstanding season! Re-roll or search higher OVR players to chase the 100% perfect record!</p>
            <div style="font-size:1.8rem; font-weight:900; color:var(--success); margin-top:8px;">${wins} - ${losses} (${winPct}% Win PCT)</div>
        `;
    } else {
        standings.className = 'feedback-box';
        standings.innerHTML = `
            <h3>🏀 Playoff Competitor</h3>
            <p>Average Team Rating: ${avgOvr.toFixed(1)} OVR. Solid season performance. Draft higher OVR superstars to increase your win probability!</p>
            <div style="font-size:1.8rem; font-weight:900; color:var(--text-main); margin-top:8px;">${wins} - ${losses} (${winPct}% Win PCT)</div>
        `;
    }
}

/* --------------------------------------------------------------------------
   9. FLOCK FANTASY AI TRADE GRADER ENGINE (NFL ONLY)
   -------------------------------------------------------------------------- */
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

    if (!formatSettings.dynasty) {
        teamAPlayers.forEach(p => { if (p.name.includes("Pick")) valA *= 0.3; });
        teamBPlayers.forEach(p => { if (p.name.includes("Pick")) valB *= 0.3; });
    }

    if (formatSettings.ppr) {
        teamAPlayers.forEach(p => { if (p.pos === "WR" || p.pos === "RB") valA *= 1.08; });
        teamBPlayers.forEach(p => { if (p.pos === "WR" || p.pos === "RB") valB *= 1.08; });
    }

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
            <li><strong>Stud Tax Applied:</strong> ${(maxValA > maxValB && teamBPlayers.length > 1) ? "Team B Depth Package Penalty (-12%)" : (maxValB > maxValA && teamAPlayers.length > 1) ? "Team A Depth Package Penalty (-12%)" : "None"}</li>
        </ul>
    `;
}

/* --------------------------------------------------------------------------
   10. SAFE DOM LOAD INITIALIZER
   -------------------------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', async () => {
    populateGlobalDatalist(document.getElementById('grade-badge') ? 'nfl' : 'nba');

    await loadESPNActiveRosters();
    await loadSleeperNFLPlayers();

    if (document.getElementById('espn-news-grid')) {
        loadESPNNews('nba');
    }
    if (document.getElementById('live-games-container')) {
        fetchLiveESPNScores('nba');
    }
    if (document.getElementById('gm-roster-grid')) {
        populateGlobalDatalist(currentGMSport);
        updateGMRosterUI();
    }
    if (document.getElementById('grade-badge')) {
        populateGlobalDatalist('nfl');
    }
});
