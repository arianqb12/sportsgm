/* ==================================================
   APEX SPORTS HUB - ESPN LIVE API & MASTER CONTROLLER
================================================== */

// COMPREHENSIVE LEAGUE PLAYER DATABASE (FOR FANTASY & GM SIMULATOR)
const masterPlayerDatabase = {
    nba: [
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
        { name: "Victor Wembanyama", pos: "C", ovr: 92, salary: 75, val: 90 },
        { name: "Kareem Abdul-Jabbar", pos: "C", ovr: 98, salary: 130, val: 98 },
        { name: "Magic Johnson", pos: "PG", ovr: 97, salary: 125, val: 97 },
        { name: "Larry Bird", pos: "SF", ovr: 96, salary: 120, val: 96 }
    ],
    nfl: [
        { name: "Patrick Mahomes", pos: "QB", ovr: 99, salary: 140, val: 99 },
        { name: "Justin Jefferson", pos: "WR", ovr: 98, salary: 120, val: 98 },
        { name: "Christian McCaffrey", pos: "RB", ovr: 97, salary: 110, val: 96 },
        { name: "CeeDee Lamb", pos: "WR", ovr: 96, salary: 105, val: 95 },
        { name: "Tyreek Hill", pos: "WR", ovr: 96, salary: 105, val: 94 },
        { name: "Lamar Jackson", pos: "QB", ovr: 96, salary: 125, val: 95 },
        { name: "Josh Allen", pos: "QB", ovr: 95, salary: 120, val: 94 },
        { name: "Travis Kelce", pos: "TE", ovr: 94, salary: 85, val: 90 },
        { name: "Breece Hall", pos: "RB", ovr: 92, salary: 80, val: 89 },
        { name: "Nick Bosa", pos: "DE", ovr: 95, salary: 90, val: 88 },
        { name: "Tom Brady", pos: "QB", ovr: 99, salary: 135, val: 98 },
        { name: "Jerry Rice", pos: "WR", ovr: 99, salary: 130, val: 98 },
        { name: "Barry Sanders", pos: "RB", ovr: 98, salary: 125, val: 97 }
    ],
    mlb: [
        { name: "Shohei Ohtani", pos: "DH/P", ovr: 99, salary: 150, val: 99 },
        { name: "Aaron Judge", pos: "OF", ovr: 97, salary: 125, val: 97 },
        { name: "Ronald Acuña Jr.", pos: "OF", ovr: 96, salary: 115, val: 95 },
        { name: "Mookie Betts", pos: "IF", ovr: 95, salary: 110, val: 94 },
        { name: "Gerrit Cole", pos: "SP", ovr: 94, salary: 95, val: 92 },
        { name: "Juan Soto", pos: "OF", ovr: 95, salary: 110, val: 94 },
        { name: "Babe Ruth", pos: "OF", ovr: 99, salary: 140, val: 99 },
        { name: "Derek Jeter", pos: "SS", ovr: 95, salary: 100, val: 93 }
    ]
};

/* --------------------------------------------------
   1. LIVE ESPN API SCOREBOARD
-------------------------------------------------- */
async function fetchLiveESPNScores(sportKey) {
    const container = document.getElementById('live-games-container');
    const title = document.getElementById('scoreboard-title');
    if (!container) return;

    document.querySelectorAll('.sport-tabs .tab-btn').forEach(btn => btn.classList.remove('active'));
    if (event) event.target.classList.add('active');

    const leagueMap = {
        nba: { path: "basketball/nba", label: "🏀 NBA Basketball" },
        mlb: { path: "baseball/mlb", label: "⚾ MLB Baseball" },
        nfl: { path: "football/nfl", label: "🏈 NFL Football" }
    };

    const target = leagueMap[sportKey];
    title.textContent = `${target.label} Live Scoreboard`;
    container.innerHTML = `<p class="loading-text">⏳ Contacting ESPN API for live ${sportKey.toUpperCase()} games...</p>`;

    try {
        const url = `https://site.api.espn.com/apis/site/v2/sports/${target.path}/scoreboard`;
        const res = await fetch(url);
        const data = await res.json();

        if (!data.events || data.events.length === 0) {
            container.innerHTML = `<div class="feedback-box">📅 No live games scheduled today for ${sportKey.toUpperCase()}. Check back soon!</div>`;
            return;
        }

        container.innerHTML = '';
        data.events.forEach(eventData => {
            const comp = eventData.competitions[0];
            const home = comp.competitors.find(c => c.homeAway === 'home');
            const away = comp.competitors.find(c => c.homeAway === 'away');
            const statusDetail = eventData.status.type.detail;
            const isLive = eventData.status.type.state === 'in';
            const isFinal = eventData.status.type.state === 'post';

            let statusClass = "status-upcoming";
            if (isLive) statusClass = "status-live";
            if (isFinal) statusClass = "status-final";

            const venue = comp.venue ? comp.venue.fullName : "Stadium Arena";

            container.innerHTML += `
                <div class="game-card">
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
                </div>
            `;
        });
    } catch (err) {
        container.innerHTML = `<div class="feedback-box">⚠️ Unable to load ESPN API live data directly. Check internet connection.</div>`;
    }
}

/* --------------------------------------------------
   2. SEARCHABLE FANTASY TRADE GRADER
-------------------------------------------------- */
let currentFantasySport = 'nba';

function switchFantasySport(sport) {
    currentFantasySport = sport;
    document.querySelectorAll('.sport-tabs .tab-btn').forEach(btn => btn.classList.remove('active'));
    if (event) event.target.classList.add('active');
    populateGlobalDatalist();
}

function populateGlobalDatalist() {
    const list = document.getElementById('all-players-list');
    if (!list) return;

    const pool = masterPlayerDatabase[currentFantasySport];
    list.innerHTML = pool.map(p => `<option value="${p.name}">${p.pos} - OVR: ${p.ovr} (Val: ${p.val} pts)</option>`).join('');
}

function getPlayerValueByName(name) {
    if (!name || name.trim() === "") return 0;
    const pool = masterPlayerDatabase[currentFantasySport];
    const match = pool.find(p => p.name.toLowerCase() === name.trim().toLowerCase());
    return match ? match.val : 85; // Baseline default if custom player entered
}

function calculateFantasyTrade() {
    const a1Name = document.getElementById('fantasy-input-A1')?.value || "";
    const a2Name = document.getElementById('fantasy-input-A2')?.value || "";
    const b1Name = document.getElementById('fantasy-input-B1')?.value || "";
    const b2Name = document.getElementById('fantasy-input-B2')?.value || "";

    const valA = getPlayerValueByName(a1Name) + getPlayerValueByName(a2Name);
    const valB = getPlayerValueByName(b1Name) + getPlayerValueByName(b2Name);

    const elA = document.getElementById('val-teamA');
    const elB = document.getElementById('val-teamB');
    if (elA) elA.textContent = `${valA} pts`;
    if (elB) elB.textContent = `${valB} pts`;

    const badge = document.getElementById('grade-badge');
    const verdict = document.getElementById('grade-verdict');
    const breakdown = document.getElementById('grade-breakdown-box');
    if (!badge) return;

    if (valA === 0 && valB === 0) {
        badge.className = "grade-badge badge-neutral";
        badge.textContent = "N/A";
        verdict.textContent = "Type player names above to evaluate trade!";
        return;
    }

    const diff = valA - valB;

    if (Math.abs(diff) <= 5) {
        badge.className = "grade-badge badge-a";
        badge.textContent = "A+";
        verdict.textContent = "EVEN & FAIR TRADE! Both sides exchange balanced rest-of-season value.";
    } else if (diff > 5 && diff <= 15) {
        badge.className = "grade-badge badge-c";
        badge.textContent = "B-";
        verdict.textContent = "SLIGHT WIN FOR TEAM A. Team A receives modest value edge.";
    } else if (diff > 15) {
        badge.className = "grade-badge badge-f";
        badge.textContent = "F";
        verdict.textContent = "FLEECE ALERT! Team A severely overpays Team B in total value.";
    } else {
        badge.className = "grade-badge badge-a";
        badge.textContent = "A";
        verdict.textContent = "GREAT DEAL FOR TEAM A! Team A receives significantly higher ROS value.";
    }

    breakdown.innerHTML = `
        <p>📊 <strong>Flock Analysis Summary (${currentFantasySport.toUpperCase()}):</strong></p>
        <ul>
            <li>Team A Total Rest-Of-Season Value: <strong>${valA} pts</strong></li>
            <li>Team B Total Rest-Of-Season Value: <strong>${valB} pts</strong></li>
            <li>Net Value Difference: <strong>${Math.abs(diff)} pts</strong></li>
        </ul>
    `;
}

/* --------------------------------------------------
   3. FIXED $500M GM SIMULATOR LOGIC
-------------------------------------------------- */
let currentGMSport = 'nba';
let userGMRoster = [];

function switchGMSport(sport) {
    currentGMSport = sport;
    document.querySelectorAll('.sport-tabs .tab-btn').forEach(btn => btn.classList.remove('active'));
    if (event) event.target.classList.add('active');
    
    const label = document.getElementById('current-sport-label');
    if (label) label.textContent = sport.toUpperCase();
    
    userGMRoster = [];
    updateGMRosterUI();
    populateGlobalDatalist();
}

function addSearchedPlayerToRoster() {
    const input = document.getElementById('gm-search-input');
    if (!input || !input.value.trim()) return;

    const name = input.value.trim();
    const pool = masterPlayerDatabase[currentGMSport];
    let match = pool.find(p => p.name.toLowerCase() === name.toLowerCase());

    if (!match) {
        match = { name: name, pos: "FLEX", ovr: 90, salary: 80 };
    }

    let currentSalary = userGMRoster.reduce((sum, p) => sum + p.salary, 0);
    if (currentSalary + match.salary > 500) {
        alert(`Cannot add ${match.name}! Over the $500M salary cap limit.`);
        return;
    }

    userGMRoster.push(match);
    input.value = '';
    updateGMRosterUI();
}

function autoDraftGMRoster() {
    const pool = masterPlayerDatabase[currentGMSport];
    userGMRoster = [];
    let spent = 0;

    for (let p of pool) {
        if (spent + p.salary <= 500 && userGMRoster.length < 5) {
            userGMRoster.push(p);
            spent += p.salary;
        }
    }
    updateGMRosterUI();
}

function updateGMRosterUI() {
    const grid = document.getElementById('gm-roster-grid');
    if (!grid) return;
    grid.innerHTML = '';
    let totalSalary = 0;

    userGMRoster.forEach((p, idx) => {
        totalSalary += p.salary;
        grid.innerHTML += `
            <div class="gm-slot-card">
                <strong>${p.pos}</strong>
                <div>${p.name}</div>
                <small>${p.ovr} OVR | $${p.salary}M</small>
                <button onclick="removeGMRosterItem(${idx})" style="display:block; width:100%; margin-top:8px; background:var(--danger); color:white; border:none; border-radius:4px; cursor:pointer;">Remove</button>
            </div>
        `;
    });

    const remaining = 500 - totalSalary;
    const capEl = document.getElementById('cap-remaining');
    if (capEl) {
        capEl.textContent = `$${remaining}M`;
        capEl.className = remaining < 0 ? "text-accent" : "text-success";
    }

    const fill = document.getElementById('cap-progress-fill');
    if (fill) fill.style.width = `${Math.min((totalSalary / 500) * 100, 100)}%`;

    populateGMTradeSelect();
}

function removeGMRosterItem(idx) {
    userGMRoster.splice(idx, 1);
    updateGMRosterUI();
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
        if (feedback) feedback.innerHTML = "⚠️ Draft players and enter a target player to evaluate trade.";
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

    feedback.innerHTML = `✅ <strong>TRADE APPROVED!</strong> Traded ${userP.name} ($${userP.salary}M) for ${targetP.name} ($${targetP.salary}M). Roster updated!`;
}

function simulateGMGames(numGames) {
    const ticker = document.getElementById('sim-ticker-box');
    const standings = document.getElementById('gm-standings-box');
    if (!ticker || !standings) return;

    if (userGMRoster.length === 0) {
        alert("Draft at least 1 player to your roster before simulating!");
        return;
    }

    ticker.style.display = 'block';
    standings.style.display = 'block';

    let avgOvr = userGMRoster.reduce((sum, p) => sum + p.ovr, 0) / userGMRoster.length;
    let winRate = Math.min(Math.max((avgOvr - 70) / 30, 0.2), 0.95);
    
    let wins = 0;
    for (let i = 0; i < numGames; i++) {
        if (Math.random() < winRate) wins++;
    }
    let losses = numGames - wins;

    ticker.innerHTML = `🚀 Simulated ${numGames} Games! Win Rate: ${(winRate * 100).toFixed(1)}%`;
    standings.innerHTML = `🏆 <strong>Franchise Record:</strong> ${wins} Wins - ${losses} Losses | Team Rating: ${avgOvr.toFixed(1)} OVR`;
}

// INITIALIZE PAGE ON LOAD
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('live-games-container')) {
        fetchLiveESPNScores('nba');
    }
    populateGlobalDatalist();
});
