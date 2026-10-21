/* ==========================================================================
   APEX SPORTS HUB - MASTER INTERACTIVE LOGIC & FANTASY ENGINE
   ========================================================================== */

/* --------------------------------------------------------------------------
   1. GLOBAL STATE & MASTER PLAYER DATABASES
   -------------------------------------------------------------------------- */
let currentGMSport = 'nba';
let userGMRoster = [];
let formatSettings = { dynasty: true, ppr: true };

const positionRequirements = {
    nba: ["PG", "SG", "SF", "PF", "C"],
    nfl: ["QB", "RB", "WR", "TE", "DEF"],
    mlb: ["SP", "C", "IF", "OF", "DH"]
};

const seasonLengths = { nba: 82, nfl: 17, mlb: 162 };

function normalizePlayerName(value = '') {
    return String(value || '')
        .toLowerCase()
        .replace(/[^a-z0-9\s]/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();
}

let masterPlayerDatabase = {
    nba: [
        { name: "Steph Curry", pos: "PG", ovr: 96, val: 95, rank: "PG1", fppg: 48.5 },
        { name: "Luka Doncic", pos: "PG", ovr: 96, val: 96, rank: "PG2", fppg: 54.1 },
        { name: "Shai Gilgeous-Alexander", pos: "PG", ovr: 95, val: 94, rank: "PG3", fppg: 51.0 },
        { name: "Jalen Brunson", pos: "PG", ovr: 92, val: 90, rank: "PG4", fppg: 44.2 },
        { name: "Damian Lillard", pos: "PG", ovr: 91, val: 88, rank: "PG5", fppg: 42.5 },
        { name: "Magic Johnson", pos: "PG", ovr: 97, val: 97, rank: "PG (LEGEND)", fppg: 54.0 },
        { name: "Michael Jordan", pos: "SG", ovr: 99, val: 99, rank: "SG (LEGEND)", fppg: 58.0 },
        { name: "Kobe Bryant", pos: "SG", ovr: 97, val: 97, rank: "SG (LEGEND)", fppg: 53.5 },
        { name: "Anthony Edwards", pos: "SG", ovr: 93, val: 91, rank: "SG1", fppg: 43.0 },
        { name: "Devin Booker", pos: "SG", ovr: 92, val: 90, rank: "SG2", fppg: 42.8 },
        { name: "LeBron James", pos: "SF", ovr: 98, val: 97, rank: "SF1", fppg: 50.2 },
        { name: "Kevin Durant", pos: "SF", ovr: 96, val: 94, rank: "SF2", fppg: 47.3 },
        { name: "Jayson Tatum", pos: "SF", ovr: 94, val: 92, rank: "SF3", fppg: 46.2 },
        { name: "Larry Bird", pos: "SF", ovr: 96, val: 96, rank: "SF (LEGEND)", fppg: 52.0 },
        { name: "Giannis Antetokounmpo", pos: "PF", ovr: 97, val: 96, rank: "PF1", fppg: 52.8 },
        { name: "Anthony Davis", pos: "PF", ovr: 94, val: 92, rank: "PF2", fppg: 48.0 },
        { name: "Tim Duncan", pos: "PF", ovr: 96, val: 95, rank: "PF (LEGEND)", fppg: 50.0 },
        { name: "Nikola Jokic", pos: "C", ovr: 98, val: 98, rank: "C1", fppg: 59.4 },
        { name: "Joel Embiid", pos: "C", ovr: 97, val: 96, rank: "C2", fppg: 55.1 },
        { name: "Victor Wembanyama", pos: "C", ovr: 93, val: 93, rank: "C3", fppg: 49.8 },
        { name: "Kareem Abdul-Jabbar", pos: "C", ovr: 98, val: 98, rank: "C (LEGEND)", fppg: 55.0 },
        { name: "Shaquille O'Neal", pos: "C", ovr: 97, val: 96, rank: "C (LEGEND)", fppg: 53.0 }
    ],
    nfl: [
        { name: "Patrick Mahomes", pos: "QB", ovr: 99, val: 99, rank: "QB1", fppg: 22.5 },
        { name: "Lamar Jackson", pos: "QB", ovr: 96, val: 95, rank: "QB2", fppg: 21.8 },
        { name: "Josh Allen", pos: "QB", ovr: 95, val: 94, rank: "QB3", fppg: 22.1 },
        { name: "Tom Brady", pos: "QB", ovr: 99, val: 98, rank: "QB (LEGEND)", fppg: 22.0 },
        { name: "Christian McCaffrey", pos: "RB", ovr: 97, val: 96, rank: "RB1", fppg: 21.4 },
        { name: "Breece Hall", pos: "RB", ovr: 92, val: 89, rank: "RB2", fppg: 16.5 },
        { name: "Saquon Barkley", pos: "RB", ovr: 93, val: 90, rank: "RB3", fppg: 17.2 },
        { name: "Barry Sanders", pos: "RB", ovr: 98, val: 97, rank: "RB (LEGEND)", fppg: 21.0 },
        { name: "Justin Jefferson", pos: "WR", ovr: 98, val: 98, rank: "WR1", fppg: 19.8 },
        { name: "CeeDee Lamb", pos: "WR", ovr: 96, val: 95, rank: "WR2", fppg: 18.9 },
        { name: "Tyreek Hill", pos: "WR", ovr: 96, val: 94, rank: "WR3", fppg: 18.2 },
        { name: "Ja'Marr Chase", pos: "WR", ovr: 95, val: 94, rank: "WR4", fppg: 17.8 },
        { name: "Jerry Rice", pos: "WR", ovr: 99, val: 98, rank: "WR (LEGEND)", fppg: 20.0 },
        { name: "Travis Kelce", pos: "TE", ovr: 94, val: 90, rank: "TE1", fppg: 14.2 },
        { name: "Sam LaPorta", pos: "TE", ovr: 91, val: 88, rank: "TE2", fppg: 12.8 },
        { name: "San Francisco 49ers", pos: "DEF", ovr: 92, val: 85, rank: "DEF1", fppg: 9.5 },
        { name: "Baltimore Ravens", pos: "DEF", ovr: 91, val: 84, rank: "DEF2", fppg: 9.2 }
    ],
    mlb: [
        { name: "Shohei Ohtani", pos: "DH", ovr: 99, val: 99, rank: "DH1/P1", fppg: 12.8 },
        { name: "Aaron Judge", pos: "OF", ovr: 97, val: 97, rank: "OF1", fppg: 11.5 },
        { name: "Ronald Acuña Jr.", pos: "OF", ovr: 96, val: 95, rank: "OF2", fppg: 11.2 },
        { name: "Juan Soto", pos: "OF", ovr: 95, val: 94, rank: "OF3", fppg: 10.8 },
        { name: "Babe Ruth", pos: "OF", ovr: 99, val: 99, rank: "OF (LEGEND)", fppg: 13.0 },
        { name: "Mookie Betts", pos: "IF", ovr: 95, val: 94, rank: "2B1/SS1", fppg: 10.4 },
        { name: "Freddie Freeman", pos: "IF", ovr: 93, val: 90, rank: "1B1", fppg: 9.6 },
        { name: "Derek Jeter", pos: "IF", ovr: 95, val: 93, rank: "SS (LEGEND)", fppg: 10.5 },
        { name: "Adley Rutschman", pos: "C", ovr: 91, val: 88, rank: "C1", fppg: 8.5 },
        { name: "Gerrit Cole", pos: "SP", ovr: 94, val: 92, rank: "SP1", fppg: 18.5 },
        { name: "Zack Wheeler", pos: "SP", ovr: 93, val: 90, rank: "SP2", fppg: 17.8 }
    ]
};

const loadedPlayerNames = { nba: new Set(), nfl: new Set(), mlb: new Set() };
Object.keys(masterPlayerDatabase).forEach(sport => {
    masterPlayerDatabase[sport].forEach(p => loadedPlayerNames[sport].add(normalizePlayerName(p.name)));
});

/* --------------------------------------------------------------------------
   2. BULK SINGLE-ENDPOINT API FETCHERS
   -------------------------------------------------------------------------- */
function buildSleeperPlayerRecord(player) {
    const fullName = (player.full_name || [player.first_name, player.last_name].filter(Boolean).join(' ') || '').trim();
    if (!fullName) return null;

    const normalizedPosition = (player.position || '').toUpperCase();
    const teamCode = player.team || player.team_abbr || 'FA';
    const activeStatus = player.status || player.injury_status || 'ACTIVE';
    const searchRank = Number(player.search_rank) || 9999;
    const val = Math.max(15, Math.min(99, Math.round(100 - (searchRank / 18))));
    const ovr = Math.max(68, Math.min(99, Math.round(99 - (searchRank / 28))));
    const fantasyValue = Number(player.fantasy_points) || Number((val / 4.2).toFixed(1));

    return {
        name: fullName,
        pos: normalizedPosition || 'FLEX',
        team: teamCode,
        status: activeStatus,
        ovr,
        val,
        rank: `${normalizedPosition || 'FLEX'}${Math.max(1, Math.round(searchRank / 25))}`,
        fppg: fantasyValue
    };
}

async function loadSleeperNFLBulk() {
    try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 10000);
        const response = await fetch('https://api.sleeper.app/v1/players/nfl', { signal: controller.signal, mode: 'cors' });
        clearTimeout(timeoutId);

        if (!response.ok) {
            console.warn('Sleeper NFL bulk API returned non-OK status:', response.status);
            return;
        }

        const playersData = await response.json();
        let bulkCount = 0;
        const nflPool = masterPlayerDatabase.nfl || [];

        Object.values(playersData || {}).forEach(player => {
            const record = buildSleeperPlayerRecord(player);
            if (!record) return;

            const key = normalizePlayerName(record.name);
            if (loadedPlayerNames.nfl.has(key)) return;

            loadedPlayerNames.nfl.add(key);
            nflPool.push(record);
            bulkCount++;
        });

        console.log(`Loaded ${bulkCount} active NFL players from Sleeper bulk API.`);
        updateAutocompleteDropdown('nfl', '');
    } catch (err) {
        console.warn('Sleeper bulk API unavailable:', err);
    }
}

async function loadESPNLeagueRosters() {
    const leagues = [
        { key: 'nba', path: 'basketball/nba' },
        { key: 'mlb', path: 'baseball/mlb' }
    ];

    for (let league of leagues) {
        try {
            const res = await fetch(`https://site.api.espn.com/apis/site/v2/sports/${league.path}/teams?limit=50`);
            if (!res.ok) continue;
            const data = await res.json();

            if (data.sports && data.sports[0].leagues[0].teams) {
                const teams = data.sports[0].leagues[0].teams;
                teams.forEach(tObj => {
                    const team = tObj.team;
                    if (team.athletes) {
                        team.athletes.forEach(a => {
                            if (a.fullName && !loadedPlayerNames[league.key].has(normalizePlayerName(a.fullName))) {
                                loadedPlayerNames[league.key].add(normalizePlayerName(a.fullName));
                                const posAbbr = a.position ? a.position.abbreviation : "FLEX";
                                masterPlayerDatabase[league.key].push({
                                    name: a.fullName,
                                    pos: posAbbr,
                                    ovr: 78 + (Math.abs(a.fullName.length * 3) % 19),
                                    val: 60 + (Math.abs(a.fullName.length * 4) % 35),
                                    rank: `${posAbbr}${Math.floor(Math.random() * 40) + 1}`,
                                    fppg: (10 + (Math.abs(a.fullName.length) % 16)).toFixed(1)
                                });
                            }
                        });
                    }
                });
            }
        } catch (err) {
            console.warn(`ESPN fetch skipped for ${league.key}:`, err);
        }
    }
}

/* --------------------------------------------------------------------------
   3. AUTOCOMPLETE & DYNAMIC SEARCH ENGINE
   -------------------------------------------------------------------------- */
function updateAutocompleteDropdown(sport = currentGMSport, query = '') {
    const list = document.getElementById('all-players-list');
    if (!list) return;

    let pool = masterPlayerDatabase[sport] || masterPlayerDatabase.nfl;

    if (query && query.trim().length > 0) {
        const q = normalizePlayerName(query);
        pool = pool.filter(p => normalizePlayerName(p.name).includes(q));
    }

    const matches = pool.slice(0, 40);
    list.innerHTML = matches.map(p => {
        const statusText = p.status || 'ACTIVE';
        const teamText = p.team || 'FA';
        return `<option value="${p.name}">${p.pos} | ${teamText} | ${statusText} | ${p.ovr} OVR | ${p.rank || 'Rank --'} | Val: ${p.val} pts</option>`;
    }).join('');
}

function setActiveTabFromSport(sportName) {
    const sportKey = String(sportName || '').toLowerCase();
    document.querySelectorAll('.sport-tabs .tab-btn').forEach(button => {
        const buttonText = (button.textContent || '').toLowerCase();
        const isActive = buttonText.includes(sportKey);
        button.classList.toggle('active', isActive);
        button.setAttribute('aria-selected', String(isActive));
    });
}

function buildFallbackNewsCards(sport) {
    const labels = {
        nba: { title: 'NBA', badgeClass: 'badge-nba', prefix: '🏀 NBA' },
        nfl: { title: 'NFL', badgeClass: 'badge-nfl', prefix: '🏈 NFL' },
        mlb: { title: 'MLB', badgeClass: 'badge-mlb', prefix: '⚾ MLB' }
    };
    const info = labels[sport] || labels.nba;

    return [
        {
            title: 'Late-game injury updates and playoff race swings dominate the latest headlines',
            desc: 'Watch for late adjustments as contenders continue to shuffle rotations and closing lineups.',
            image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=600&q=80',
            link: 'https://www.espn.com/'
        },
        {
            title: 'Front offices remain active across trade talks and roster moves',
            desc: 'Teams are evaluating depth, value, and matchup leverage as the season ramps up.',
            image: 'https://images.unsplash.com/photo-1566577739112-5180d4bf9390?auto=format&fit=crop&w=600&q=80',
            link: 'https://www.espn.com/'
        },
        {
            title: 'Key matchups and scheduling shifts continue to reshape the title picture',
            desc: 'A rising trend of big performances and late surges is changing the playoff landscape.',
            image: 'https://images.unsplash.com/photo-1508802298132-0545fe5e02c5?auto=format&fit=crop&w=600&q=80',
            link: 'https://www.espn.com/'
        }
    ].map(story => `
        <article class="news-card">
            <img src="${story.image}" alt="${story.title}" loading="lazy">
            <span class="badge ${info.badgeClass}">${info.prefix}</span>
            <h3>${story.title}</h3>
            <p>${story.desc}</p>
            <a href="${story.link}" target="_blank" rel="noopener noreferrer" class="action-link">Read Full Story on ESPN ➔</a>
        </article>
    `).join('');
}

async function loadESPNNews(sport = 'nba') {
    const grid = document.getElementById('espn-news-grid');
    const heading = document.getElementById('news-section-title');
    if (!grid || !heading) return;

    setActiveTabFromSport(sport);

    const sportConfig = {
        nba: { label: 'NBA', path: 'basketball/nba' },
        nfl: { label: 'NFL', path: 'football/nfl' },
        mlb: { label: 'MLB', path: 'baseball/mlb' }
    };
    const config = sportConfig[sport] || sportConfig.nba;
    heading.textContent = `${config.label} Breaking News Feed`;

    try {
        const response = await fetch(`https://site.api.espn.com/apis/site/v2/sports/${config.path}/news`);
        if (!response.ok) throw new Error('News fetch failed');
        const data = await response.json();
        const stories = Array.isArray(data.articles) ? data.articles.slice(0, 6) : [];

        if (!stories.length) throw new Error('No news articles available');

        grid.innerHTML = stories.map(article => {
            const image = article.images && article.images[0] ? article.images[0].url : 'https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=600&q=80';
            const headline = article.headline || 'Sports update';
            const summary = article.description || article.story || 'More details available on ESPN.';
            const link = (article.links && article.links.web && article.links.web.href) ? article.links.web.href : 'https://www.espn.com/';
            const badgeClass = sport === 'nba' ? 'badge-nba' : sport === 'nfl' ? 'badge-nfl' : 'badge-mlb';
            return `
                <article class="news-card">
                    <img src="${image}" alt="${headline}" loading="lazy">
                    <span class="badge ${badgeClass}">🏆 ${config.label}</span>
                    <h3>${headline}</h3>
                    <p>${summary}</p>
                    <a href="${link}" target="_blank" rel="noopener noreferrer" class="action-link">Read Full Story on ESPN ➔</a>
                </article>
            `;
        }).join('');
    } catch (error) {
        console.warn('Falling back to static ESPN news content:', error);
        grid.innerHTML = buildFallbackNewsCards(sport);
    }
}

function buildFallbackGameCards(sport) {
    const matchups = {
        nba: [
            ['Lakers', '108', 'Celtics', '105'],
            ['Knicks', '103', 'Bucks', '99'],
            ['Nuggets', '116', 'Warriors', '112']
        ],
        mlb: [
            ['Yankees', '6', 'Dodgers', '4'],
            ['Braves', '7', 'Mets', '5'],
            ['Astros', '9', 'Phillies', '8']
        ],
        nfl: [
            ['Chiefs', '-', 'Eagles', '-'],
            ['Bills', '-', 'Rams', '-'],
            ['49ers', '-', 'Cowboys', '-']
        ]
    };

    const labels = {
        nba: '🏀 NBA BASKETBALL',
        mlb: '⚾ MLB BASEBALL',
        nfl: '🏈 NFL FOOTBALL'
    };

    return matchups[sport].map(([teamA, scoreA, teamB, scoreB], idx) => `
        <article class="game-card">
            <div class="game-header">
                <span class="badge ${sport === 'nba' ? 'badge-nba' : sport === 'nfl' ? 'badge-nfl' : 'badge-mlb'}">${labels[sport]}</span>
                <span class="${idx % 2 === 0 ? 'status-live' : 'status-final'}">${idx % 2 === 0 ? '🔴 LIVE' : 'FINAL'}</span>
            </div>
            <div class="game-matchup">
                <div class="team">${teamA} <strong>${scoreA}</strong></div>
                <div class="vs">VS</div>
                <div class="team">${teamB} <strong>${scoreB}</strong></div>
            </div>
            <div class="game-info">
                <p>📍 ${sport === 'nba' ? 'Crypto.com Arena | Los Angeles, CA' : sport === 'mlb' ? 'Yankee Stadium | Bronx, NY' : 'Arrowhead Stadium | Kansas City, MO'}</p>
                <p style="font-size: 13px; color: var(--accent); margin-top: 4px;">⚡ Entry pricing from $${25 + idx * 18}</p>
            </div>
            <div class="ticket-actions">
                <a href="https://seatgeek.com/sports-tickets" target="_blank" rel="noopener noreferrer" class="ticket-btn btn-seatgeek">Find Deals on SeatGeek ➔</a>
                <a href="https://www.stubhub.com" target="_blank" rel="noopener noreferrer" class="ticket-btn btn-stubhub">Compare on StubHub ➔</a>
                <a href="https://www.ticketmaster.com" target="_blank" rel="noopener noreferrer" class="ticket-btn btn-ticketmaster">Buy on Ticketmaster ➔</a>
            </div>
        </article>
    `).join('');
}

async function fetchLiveESPNScores(sport = 'nba') {
    const container = document.getElementById('live-games-container');
    const heading = document.getElementById('scoreboard-title');
    if (!container || !heading) return;

    setActiveTabFromSport(sport);

    const sportConfig = {
        nba: { label: 'NBA', path: 'basketball/nba' },
        mlb: { label: 'MLB', path: 'baseball/mlb' },
        nfl: { label: 'NFL', path: 'football/nfl' }
    };
    const config = sportConfig[sport] || sportConfig.nba;
    heading.textContent = `${config.label} Live Matchup Scoreboard`;

    try {
        const response = await fetch(`https://site.api.espn.com/apis/site/v2/sports/${config.path}/scoreboard`);
        if (!response.ok) throw new Error('Scoreboard fetch failed');
        const data = await response.json();
        const events = Array.isArray(data.events) ? data.events.slice(0, 6) : [];

        if (!events.length) throw new Error('No score data available');

        container.innerHTML = events.map(event => {
            const competition = (event.competitions && event.competitions[0]) || {};
            const competitors = Array.isArray(competition.competitors) ? competition.competitors : [];
            const homeTeam = competitors.find(team => team.homeAway === 'home') || competitors[0] || {};
            const awayTeam = competitors.find(team => team.homeAway === 'away') || competitors[1] || competitors[0] || {};
            const homeName = (homeTeam.team && homeTeam.team.displayName) || 'Home Team';
            const awayName = (awayTeam.team && awayTeam.team.displayName) || 'Away Team';
            const homeScore = homeTeam.score ?? '-';
            const awayScore = awayTeam.score ?? '-';
            const status = (event.status && event.status.type && event.status.type.detail) || 'Scheduled';
            const venue = (event.venue && event.venue.fullName) || 'Venue TBD';
            const price = 25 + Math.floor(Math.random() * 110);

            return `
                <article class="game-card">
                    <div class="game-header">
                        <span class="badge ${sport === 'nba' ? 'badge-nba' : sport === 'nfl' ? 'badge-nfl' : 'badge-mlb'}">${config.label}</span>
                        <span class="status-live">🔴 ${status}</span>
                    </div>
                    <div class="game-matchup">
                        <div class="team">${awayName} <strong>${awayScore}</strong></div>
                        <div class="vs">VS</div>
                        <div class="team">${homeName} <strong>${homeScore}</strong></div>
                    </div>
                    <div class="game-info">
                        <p>📍 ${venue}</p>
                        <p style="font-size: 13px; color: var(--accent); margin-top: 4px;">⚡ Starting from $${price}</p>
                    </div>
                    <div class="ticket-actions">
                        <a href="https://seatgeek.com/sports-tickets" target="_blank" rel="noopener noreferrer" class="ticket-btn btn-seatgeek">Find Deals on SeatGeek ➔</a>
                        <a href="https://www.stubhub.com" target="_blank" rel="noopener noreferrer" class="ticket-btn btn-stubhub">Compare on StubHub ➔</a>
                        <a href="https://www.ticketmaster.com" target="_blank" rel="noopener noreferrer" class="ticket-btn btn-ticketmaster">Buy on Ticketmaster ➔</a>
                    </div>
                </article>
            `;
        }).join('');
    } catch (error) {
        console.warn('Falling back to static scoreboard data:', error);
        container.innerHTML = buildFallbackGameCards(sport);
    }
}

let searchDebounceTimer;
document.addEventListener('input', (e) => {
    const target = e.target;
    if (!(target instanceof HTMLInputElement)) return;

    const fantasyInputIds = [
        'fantasy-input-A1', 'fantasy-input-A2', 'fantasy-input-A3',
        'fantasy-input-B1', 'fantasy-input-B2', 'fantasy-input-B3'
    ];

    if (!fantasyInputIds.includes(target.id)) return;

    clearTimeout(searchDebounceTimer);
    searchDebounceTimer = setTimeout(() => {
        updateAutocompleteDropdown('nfl', target.value);
    }, 100);
});

/* --------------------------------------------------------------------------
   4. DYNAMIC ANY-PLAYER STAT ENGINE
   -------------------------------------------------------------------------- */
function getOrGeneratePlayer(name, sport = 'nfl') {
    if (!name || name.trim() === '') return null;

    const pool = masterPlayerDatabase[sport] || masterPlayerDatabase.nfl;
    const targetName = name.trim();
    const normalizedTarget = normalizePlayerName(targetName);

    const exactMatch = pool.find(p => normalizePlayerName(p.name) === normalizedTarget);
    if (exactMatch) return exactMatch;

    const fuzzyMatch = pool.find(p => {
        const normalizedPlayer = normalizePlayerName(p.name);
        return normalizedPlayer.includes(normalizedTarget) || normalizedTarget.includes(normalizedPlayer);
    });
    if (fuzzyMatch) return fuzzyMatch;

    let hash = 0;
    for (let i = 0; i < normalizedTarget.length; i++) {
        hash = normalizedTarget.charCodeAt(i) + ((hash << 5) - hash);
    }
    
    const generatedVal = 60 + (Math.abs(hash) % 35);
    const generatedOvr = 78 + (Math.abs(hash) % 21);
    const generatedFPPG = (generatedVal / 5.2).toFixed(1);

    let defaultPos = "FLEX";
    if (sport === 'nfl') defaultPos = ["WR", "RB", "QB", "TE"][Math.abs(hash) % 4];
    if (sport === 'nba') defaultPos = ["PG", "SG", "SF", "PF", "C"][Math.abs(hash) % 5];
    if (sport === 'mlb') defaultPos = ["OF", "IF", "SP", "C", "DH"][Math.abs(hash) % 5];

    return {
        name: targetName,
        pos: defaultPos,
        ovr: generatedOvr,
        val: generatedVal,
        rank: `${defaultPos}${Math.max(1, 40 - Math.round(generatedVal / 2.5))}`,
        fppg: parseFloat(generatedFPPG)
    };
}

/* --------------------------------------------------------------------------
   5. FLOCK FANTASY AI TRADE GRADER (BOTH SIDES CALCULATED LIVE)
   -------------------------------------------------------------------------- */
function updatePlayerPreview(elementId, player) {
    const el = document.getElementById(elementId);
    if (!el) return;
    if (!player) {
        el.innerHTML = '';
        return;
    }
    el.innerHTML = `
        <div class="player-card-preview">
            <span class="preview-name">👤 ${player.name}</span>
            <span class="preview-details">${player.pos} | ${player.team || 'FA'} | ${player.status || 'ACTIVE'} | ${player.rank || 'Rank --'} | ${player.fppg || 0} FPPG | <strong>${player.val} pts</strong></span>
        </div>
    `;
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

function calculateFantasyTrade() {
    const idsA = ['fantasy-input-A1', 'fantasy-input-A2', 'fantasy-input-A3'];
    const idsB = ['fantasy-input-B1', 'fantasy-input-B2', 'fantasy-input-B3'];

    const playersA = idsA.map((id, idx) => {
        const val = document.getElementById(id)?.value;
        const player = getOrGeneratePlayer(val, 'nfl');
        updatePlayerPreview(`preview-A${idx + 1}`, player);
        return player;
    }).filter(p => p !== null);

    const playersB = idsB.map((id, idx) => {
        const val = document.getElementById(id)?.value;
        const player = getOrGeneratePlayer(val, 'nfl');
        updatePlayerPreview(`preview-B${idx + 1}`, player);
        return player;
    }).filter(p => p !== null);

    let valA = playersA.reduce((sum, p) => sum + p.val, 0);
    let valB = playersB.reduce((sum, p) => sum + p.val, 0);

    if (!formatSettings.dynasty) {
        playersA.forEach(p => { if (p.name.includes("Pick")) valA *= 0.3; });
        playersB.forEach(p => { if (p.name.includes("Pick")) valB *= 0.3; });
    }

    if (formatSettings.ppr) {
        playersA.forEach(p => { if (p.pos === "WR" || p.pos === "RB") valA *= 1.08; });
        playersB.forEach(p => { if (p.pos === "WR" || p.pos === "RB") valB *= 1.08; });
    }

    const maxValA = playersA.length ? Math.max(...playersA.map(p => p.val)) : 0;
    const maxValB = playersB.length ? Math.max(...playersB.map(p => p.val)) : 0;

    let adjustedA = valA;
    let adjustedB = valB;

    if (maxValA > maxValB && playersB.length > 1) {
        adjustedB *= 0.88;
    } else if (maxValB > maxValA && playersA.length > 1) {
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

    if (playersA.length === 0 && playersB.length === 0) {
        badge.className = "grade-badge badge-neutral";
        badge.textContent = "EVEN";
        if (verdict) verdict.textContent = "Type player names above to calculate trade value differential!";
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
        if (verdict) verdict.textContent = "FAIR & EVEN TRADE! Both teams exchange balanced market value.";
    } else if (diff > 6 && diff <= 18) {
        badge.className = "grade-badge badge-c";
        badge.textContent = "B+";
        if (verdict) verdict.textContent = "WIN FOR TEAM A. Team A receives a slight market value edge.";
    } else if (diff > 18) {
        badge.className = "grade-badge badge-f";
        badge.textContent = "FLEECE";
        if (verdict) verdict.textContent = "FLEECE ALERT! Team A heavily wins this trade package.";
    } else if (diff < -18) {
        badge.className = "grade-badge badge-f";
        badge.textContent = "FLEECE";
        if (verdict) verdict.textContent = "FLEECE ALERT! Team B heavily wins this trade package.";
    } else {
        badge.className = "grade-badge badge-a";
        badge.textContent = "B+";
        if (verdict) verdict.textContent = "WIN FOR TEAM B. Team B receives higher rest-of-season value density.";
    }

    const teamAStats = playersA.map(p => `${p.name} (${p.team || 'FA'} | ${p.pos} | ${p.rank || 'Rank --'} | ${p.fppg || 0} FPPG)`).join(', ');
    const teamBStats = playersB.map(p => `${p.name} (${p.team || 'FA'} | ${p.pos} | ${p.rank || 'Rank --'} | ${p.fppg || 0} FPPG)`).join(', ');

    if (breakdown) {
        breakdown.innerHTML = `
            <p>📊 <strong>Flock Stat Breakdown (NFL - ${formatSettings.dynasty ? 'Dynasty' : 'Redraft'}):</strong></p>
            <ul>
                <li><strong>Team A Asset Ranks & Stats:</strong> ${teamAStats || 'None'}</li>
                <li><strong>Team B Asset Ranks & Stats:</strong> ${teamBStats || 'None'}</li>
                <li><strong>Net Adjusted Differential:</strong> ${Math.abs(Math.round(diff))} pts</li>
                <li><strong>Stud Tax Applied:</strong> ${(maxValA > maxValB && playersB.length > 1) ? 'Team B Depth Package Penalty (-12%)' : (maxValB > maxValA && playersA.length > 1) ? 'Team A Depth Package Penalty (-12%)' : 'No stud tax penalty'}</li>
            </ul>
        `;
    }
}

/* --------------------------------------------------------------------------
   6. GM FRANCHISE MODE (NO SALARY CAP, NO TRADES)
   -------------------------------------------------------------------------- */
function switchGMSport(sport, btnEl = null) {
    currentGMSport = sport;
    
    const tabsContainer = document.querySelector('.sport-tabs');
    if (tabsContainer) {
        const tabs = tabsContainer.querySelectorAll('.tab-btn');
        tabs.forEach(btn => btn.classList.remove('active'));
    }
    if (btnEl) btnEl.classList.add('active');

    const label = document.getElementById('current-sport-label');
    if (label) label.textContent = sport.toUpperCase();

    const sim10 = document.getElementById('sim-10-btn');
    const simSeason = document.getElementById('sim-season-btn');
    if (sim10) sim10.textContent = `🚀 Simulate 10 Games`;
    if (simSeason) simSeason.textContent = `🏆 Simulate Full Season (${seasonLengths[sport]} Games)`;

    userGMRoster = [];
    updateAutocompleteDropdown(sport, '');
    updateGMRosterUI();
}

function draftSinglePosition(pos) {
    const pool = masterPlayerDatabase[currentGMSport].filter(p => p.pos === pos || p.pos === "FLEX");
    let targetPlayer = pool.length > 0 
        ? pool[Math.floor(Math.random() * pool.length)]
        : getOrGeneratePlayer(`${pos} Star`, currentGMSport);
    
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
        let player = pool.length > 0 
            ? pool[Math.floor(Math.random() * pool.length)] 
            : getOrGeneratePlayer(`${pos} Legend`, currentGMSport);
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

        ticker.innerHTML = `Game ${game}/${numGames}: ${isWin ? '<strong style="color:var(--success)">WIN</strong>' : '<strong style="color:var(--danger)">LOSS</strong>'} vs ${opp} (${ptsA}-${ptsB})`;
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
   7. INITIALIZER
   -------------------------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
    const isFantasyPage = !!document.getElementById('grade-badge');
    updateAutocompleteDropdown(isFantasyPage ? 'nfl' : currentGMSport, '');

    if (document.getElementById('gm-roster-grid')) {
        updateGMRosterUI();
    }

    if (document.getElementById('espn-news-grid')) {
        loadESPNNews(currentGMSport || 'nba');
    }

    if (document.getElementById('live-games-container')) {
        fetchLiveESPNScores('nba');
    }

    loadSleeperNFLBulk();
    loadESPNLeagueRosters();
});
