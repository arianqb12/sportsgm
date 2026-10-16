/* ==================================================
   APEX SPORTS HUB - UNIFIED JS CONTROLLER & SIMULATOR
================================================== */

/* 1. NEWS FILTER LOGIC */
function filterNews(league) {
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    const articles = document.querySelectorAll('.news-item');
    articles.forEach(article => {
        if (league === 'all' || article.classList.contains(league)) {
            article.style.display = 'block';
        } else {
            article.style.display = 'none';
        }
    });
}

/* 2. GM FRANCHISE SIMULATOR DATA & LOGIC */
const gmDatabase = {
    nba: [
        { name: "Steph Curry", pos: "PG", ovr: 96, salary: 110 },
        { name: "Michael Jordan", pos: "SG", ovr: 99, salary: 130 },
        { name: "LeBron James", pos: "SF", ovr: 98, salary: 125 },
        { name: "Giannis Antetokounmpo", pos: "PF", ovr: 97, salary: 115 },
        { name: "Nikola Jokic", pos: "C", ovr: 98, salary: 120 },
        { name: "Luka Doncic", pos: "PG", ovr: 95, salary: 100 },
        { name: "Kobe Bryant", pos: "SG", ovr: 97, salary: 120 },
        { name: "Kevin Durant", pos: "SF", ovr: 96, salary: 110 }
    ],
    nfl: [
        { name: "Patrick Mahomes", pos: "QB", ovr: 99, salary: 140 },
        { name: "Christian McCaffrey", pos: "RB", ovr: 96, salary: 95 },
        { name: "Justin Jefferson", pos: "WR", ovr: 97, salary: 110 },
        { name: "Nick Bosa", pos: "DE", ovr: 95, salary: 90 },
        { name: "Travis Kelce", pos: "TE", ovr: 94, salary: 85 },
        { name: "Lamar Jackson", pos: "QB", ovr: 96, salary: 125 }
    ],
    mlb: [
        { name: "Shohei Ohtani", pos: "DH/P", ovr: 99, salary: 150 },
        { name: "Aaron Judge", pos: "OF", ovr: 97, salary: 120 },
        { name: "Mookie Betts", pos: "IF", ovr: 95, salary: 110 },
        { name: "Gerrit Cole", pos: "SP", ovr: 94, salary: 95 },
        { name: "Ronald Acuña Jr.", pos: "OF", ovr: 96, salary: 115 }
    ]
};

let currentGMSport = 'nba';
let userGMRoster = [];

function switchGMSport(sport) {
    currentGMSport = sport;
    document.querySelectorAll('.sport-tabs .tab-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    document.getElementById('current-sport-label').textContent = sport.toUpperCase();
    
    userGMRoster = [];
    updateGMRosterUI();
}

function autoDraftGMRoster() {
    const pool = gmDatabase[currentGMSport];
    userGMRoster = [];
    let spent = 0;

    // Pick random players under $500M cap
    for (let p of pool) {
        if (spent + p.salary <= 500 && userGMRoster.length < 5) {
            userGMRoster.push(p);
            spent += p.salary;
        }
    }

    updateGMRosterUI();
    document.getElementById('sim-10-btn').disabled = false;
    document.getElementById('sim-season-btn').disabled = false;
}

function updateGMRosterUI() {
    const grid = document.getElementById('gm-roster-grid');
    grid.innerHTML = '';
    let totalSalary = 0;

    userGMRoster.forEach((p, idx) => {
        totalSalary += p.salary;
        grid.innerHTML += `
            <div class="gm-slot-card">
                <strong>${p.pos}</strong>
                <div>${p.name}</div>
                <small>${p.ovr} OVR | $${p.salary}M</small>
            </div>
        `;
    });

    const remaining = 500 - totalSalary;
    document.getElementById('cap-remaining').textContent = `$${remaining}M`;
    document.getElementById('cap-progress-fill').style.width = `${(totalSalary / 500) * 100}%`;

    populateTradeSelects();
}

function populateTradeSelects() {
    const userSelect = document.getElementById('user-trade-select');
    const targetSelect = document.getElementById('target-trade-select');
    if (!userSelect || !targetSelect) return;

    userSelect.innerHTML = userGMRoster.map((p, i) => `<option value="${i}">${p.name} (${p.ovr} OVR - $${p.salary}M)</option>`).join('');
    
    const pool = gmDatabase[currentGMSport];
    targetSelect.innerHTML = pool.map((p, i) => `<option value="${i}">${p.name} (${p.ovr} OVR - $${p.salary}M)</option>`).join('');
}

function evaluateGMTrade() {
    const userIdx = document.getElementById('user-trade-select').value;
    const targetIdx = document.getElementById('target-trade-select').value;
    const feedback = document.getElementById('trade-feedback');

    if (userIdx === "" || targetIdx === "") {
        feedback.innerHTML = "⚠️ Select valid players on both sides to execute trade.";
        return;
    }

    const userP = userGMRoster[userIdx];
    const targetP = gmDatabase[currentGMSport][targetIdx];

    userGMRoster[userIdx] = targetP;
    updateGMRosterUI();
    feedback.innerHTML = `✅ <strong>TRADE APPROVED!</strong> Traded ${userP.name} ($${userP.salary}M) for ${targetP.name} ($${targetP.salary}M). Roster updated!`;
}

function simulateGMGames(numGames) {
    const ticker = document.getElementById('sim-ticker-box');
    const standings = document.getElementById('gm-standings-box');
    ticker.style.display = 'block';
    standings.style.display = 'block';

    let avgOvr = userGMRoster.reduce((sum, p) => sum + p.ovr, 0) / (userGMRoster.length || 1);
    let wins = Math.round(numGames * (avgOvr / 115));
    let losses = numGames - wins;

    ticker.innerHTML = `🚀 Simulating ${numGames} Games... Finished!`;
    standings.innerHTML = `🏆 <strong>Franchise Record:</strong> ${wins} Wins - ${losses} Losses (${((wins/numGames)*100).toFixed(1)}% Win Rate)`;
}

/* 3. FANTASY TRADE GRADER LOGIC (FLOCK FANTASY STYLE) */
const fantasyDatabase = {
    nfl: [
        { name: "Justin Jefferson", val: 98, tier: "Elite WR1" },
        { name: "Christian McCaffrey", val: 96, tier: "Elite RB1" },
        { name: "CeeDee Lamb", val: 95, tier: "WR1" },
        { name: "Breece Hall", val: 90, tier: "RB1" },
        { name: "Travis Kelce", val: 84, tier: "TE1" },
        { name: "Patrick Mahomes", val: 88, tier: "QB1" }
    ],
    nba: [
        { name: "Nikola Jokic", val: 99, tier: "Round 1 Alpha" },
        { name: "Luka Doncic", val: 97, tier: "Round 1 Alpha" },
        { name: "Giannis Antetokounmpo", val: 95, tier: "Tier 1 Star" },
        { name: "Steph Curry", val: 91, tier: "Tier 2 Star" }
    ],
    mlb: [
        { name: "Shohei Ohtani", val: 99, tier: "GOD Tier" },
        { name: "Ronald Acuña Jr.", val: 96, tier: "Tier 1" },
        { name: "Aaron Judge", val: 95, tier: "Tier 1" }
    ]
};

let currentFantasySport = 'nfl';

function switchFantasySport(sport) {
    currentFantasySport = sport;
    document.querySelectorAll('.sport-tabs .tab-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    populateFantasyDropdowns();
}

function populateFantasyDropdowns() {
    const list = fantasyDatabase[currentFantasySport];
    const dropdowns = ['fantasy-teamA-p1', 'fantasy-teamA-p2', 'fantasy-teamB-p1', 'fantasy-teamB-p2'];

    dropdowns.forEach(id => {
        const select = document.getElementById(id);
        if (!select) return;
        select.innerHTML = '<option value="0">-- Select Player (0 pts) --</option>' +
            list.map((p, i) => `<option value="${p.val}">${p.name} (Value: ${p.val} pts | ${p.tier})</option>`).join('');
    });

    calculateFantasyTrade();
}

function calculateFantasyTrade() {
    const a1 = parseInt(document.getElementById('fantasy-teamA-p1')?.value || 0);
    const a2 = parseInt(document.getElementById('fantasy-teamA-p2')?.value || 0);
    const b1 = parseInt(document.getElementById('fantasy-teamB-p1')?.value || 0);
    const b2 = parseInt(document.getElementById('fantasy-teamB-p2')?.value || 0);

    const totalA = a1 + a2;
    const totalB = b1 + b2;

    document.getElementById('val-teamA').textContent = `${totalA} pts`;
    document.getElementById('val-teamB').textContent = `${totalB} pts`;

    const badge = document.getElementById('grade-badge');
    const verdict = document.getElementById('grade-verdict');
    const breakdown = document.getElementById('grade-breakdown-box');

    if (totalA === 0 && totalB === 0) {
        badge.className = "grade-badge badge-neutral";
        badge.textContent = "N/A";
        verdict.textContent = "Select players on both sides to evaluate trade!";
        return;
    }

    const diff = totalA - totalB;

    if (Math.abs(diff) <= 5) {
        badge.className = "grade-badge badge-a";
        badge.textContent = "A+";
        verdict.textContent = "EVEN & FAIR TRADE! Both sides exchange equal rest-of-season value.";
    } else if (diff > 5 && diff <= 15) {
        badge.className = "grade-badge badge-c";
        badge.textContent = "B-";
        verdict.textContent = "SLIGHT WIN FOR TEAM A. Team A gains modest value advantage.";
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
        <p>📈 <strong>Flock Analysis Summary:</strong></p>
        <ul>
            <li>Team A Total Rest-Of-Season Value: <strong>${totalA} pts</strong></li>
            <li>Team B Total Rest-Of-Season Value: <strong>${totalB} pts</strong></li>
            <li>Net Value Difference: <strong>${Math.abs(diff)} pts</strong></li>
        </ul>
    `;
}

// INITIALIZE ON LOAD
document.addEventListener('DOMContentLoaded', () => {
    switchGMSport('nba');
    populateFantasyDropdowns();
});
