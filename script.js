// Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyBVgv_rsdH28fL75PtcimN9t9cVA_1LKJc",
    authDomain: "berna-18cec.firebaseapp.com",
    projectId: "berna-18cec",
    storageBucket: "berna-18cec.firebasestorage.app",
    messagingSenderId: "108075319198",
    appId: "1:108075319198:web:9ebf6d1cb10c4e8686e08f",
    measurementId: "G-61ELZGJV24"
};

// Initialize Firebase
try {
    // Explicitly defines the databaseURL to avoid region detection issues
    const configWithUrl = {
        ...firebaseConfig,
        databaseURL: "https://berna-18cec-default-rtdb.firebaseio.com"
    };
    firebase.initializeApp(configWithUrl);
    const db = firebase.database();

    console.log("Firebase initialized. Connecting...");

    // Note: If using a specific region (Belgium), URL might need to be explicit if not auto-detected correctly.
    // or europe-west1: https://<project-id>-default-rtdb.europe-west1.firebasedatabase.app

    // Presence Logic
    const connectedRef = db.ref(".info/connected");
    const connectionsRef = db.ref("connections");

    // Shakespeare Character Names
    const shakespeareNames = [
        "Hamlet", "Macbeth", "Othello", "Romeo", "Juliet", "King Lear", "Viola",
        "Ophelia", "Desdemona", "Iago", "Prospero", "Ariel", "Caliban", "Miranda",
        "Mercutio", "Tybalt", "Lysander", "Hermia", "Puck", "Titania", "Oberon",
        "Falstaff", "Shylock", "Portia", "Cleopatra", "Antony", "Brutus", "Cassius",
        "Cordelia", "Goneril", "Regan", "Banquo", "Duncan", "Malcolm", "Horatio"
    ];

    function getRandomName() {
        return shakespeareNames[Math.floor(Math.random() * shakespeareNames.length)];
    }

    // Track local connection ref to update it on name change
    let myConRef = null;
    let myName = localStorage.getItem("playerName");

    if (!myName) {
        myName = getRandomName();
        localStorage.setItem("playerName", myName);
    }

    connectedRef.on("value", (snap) => {
        if (snap.val() === true) {
            console.log("Connected to Firebase!");
            // We're connected (or reconnected)!

            // Generate a random ID if not exists or use simple push
            myConRef = connectionsRef.push();

            // When I disconnect, remove this device
            myConRef.onDisconnect().remove();

            // Set initial state
            updateMyPresence();
        } else {
            console.warn("Disconnected from Firebase.");
        }
    });

    // Function to update my presence data
    window.updateMyPresence = function () {
        if (!myConRef) return;

        myConRef.set({
            name: myName,
            id: myConRef.key, // Save key to identify myself in list
            onlineAt: firebase.database.ServerValue.TIMESTAMP
        });
    }

    // Count Online Users & Render List
    connectionsRef.on("value", (snap) => {
        const users = snap.val() || {};
        const count = Object.keys(users).length;

        // Update Count Header in Floating Bubble
        const countEl = document.getElementById("floating-count");
        if (countEl) {
            countEl.innerText = count;
        }

        // Update List UI in Floating Bubble
        const listEl = document.getElementById("floating-list-content");
        if (listEl) {
            listEl.innerHTML = '';

            // Convert to array
            let userList = Object.values(users);

            // Sort: My self first, then others alphabetically
            userList.sort((a, b) => {
                const isMeA = (a.id === myConRef?.key);
                const isMeB = (b.id === myConRef?.key);

                if (isMeA && !isMeB) return -1;
                if (!isMeA && isMeB) return 1;
                return (a.name || "").localeCompare(b.name || "");
            });

            userList.forEach(user => {
                const div = document.createElement("div");
                div.className = "online-user-item";

                let displayName = user.name || "Unknown";

                // Highlight myself
                if (myConRef && user.id === myConRef.key) {
                    div.style.fontWeight = "bold";
                    div.style.color = "#4ade80";
                    displayName += " (Sen)";
                }

                div.textContent = displayName;
                listEl.appendChild(div);
            });
        }
    });
} catch (e) {
    console.warn("Firebase not initialized correctly. Please check API keys.", e);
}

// Global state
let currentGameMode = 'standard'; // 'standard' or 'grade9'
let score = 0;
let timerInterval;
let timeLeft = 60;
let currentCardElement = null;
let currentLanguage = 'ENG'; // Default to ENG as requested
let currentLevel = 'A1'; // Default Level

let globalTimerInterval;
let globalSeconds = 0;

// Landing Page Logic
// Landing Page Logic
function showLandingPage() {
    document.getElementById('landing-page').style.display = 'flex';
    document.getElementById('level-selector-container').style.display = 'none';
    document.getElementById('game-board').style.display = 'none';
    document.querySelector('.score-board').style.display = 'none';
    document.querySelector('.header-controls').style.visibility = 'hidden'; // Hide helper buttons

    // Reset confetti if any
    const confettiContainer = document.getElementById('confetti-container');
    if (confettiContainer) confettiContainer.innerHTML = '';
}

function hideLandingPage() {
    document.getElementById('landing-page').style.display = 'none';
    document.getElementById('level-selector-container').style.display = 'flex';
    document.getElementById('game-board').style.display = 'grid'; // Ensure grid is restored
    document.querySelector('.score-board').style.display = 'flex';
    document.querySelector('.header-controls').style.visibility = 'visible';
}

function safeText(val) {
    if (typeof val === 'object') return "";
    if (val === undefined || val === null) return "";
    return String(val);
}

function goHome() {
    showLandingPage();
}

function setGameMode(mode) {
    currentGameMode = mode;
    hideLandingPage();

    const container = document.querySelector('.level-container');
    container.innerHTML = ''; // Clear existing buttons

    if (mode === 'standard') {
        const levels = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
        levels.forEach(lvl => {
            const btn = document.createElement('button');
            btn.className = 'level-btn';
            btn.innerText = lvl;
            btn.dataset.level = lvl; // Store level ID
            btn.onclick = () => changeLevel(lvl);
            container.appendChild(btn);
        });
        changeLevel('A1'); // Load first level
    } else if (mode === 'grade9') {
        // Create buttons for Units 1-8
        for (let i = 1; i <= 8; i++) {
            const btn = document.createElement('button');
            btn.className = 'level-btn';
            btn.innerText = `Unit ${i}`;
            // Store specific level ID
            const lvlId = `Grade9_Unit${i}`;
            btn.dataset.level = lvlId;
            btn.onclick = () => changeLevel(lvlId);
            container.appendChild(btn);
        }
        changeLevel('Grade9_Unit1'); // Load first unit

        // Ensure Unit 1 is active
        const btns = container.querySelectorAll('.level-btn');
        // changeLevel handles active class, but let's be safe
    }
    // History API for TV Back Button
    history.pushState({ mode: mode }, "", `?mode=${mode}`);
}

document.addEventListener('DOMContentLoaded', () => {
    initGame();
    startGlobalTimer();

    // Handle Back Button (TV Remote returns to previous page)
    window.addEventListener('popstate', (event) => {
        const modal = document.getElementById('question-modal');
        // If modal is open during popstate (meaning we went back), close it
        if (modal.style.display === 'flex') {
            closeModal(true); // true = skip history.back()
            return;
        }

        // If we have a state with 'mode', we are still in game mode. Do NOT show landing page.
        if (event.state && event.state.mode) {
            // Ensure landing page is hidden and game board is visible (just in case)
            if (document.getElementById('landing-page').style.display !== 'none') {
                hideLandingPage();
            }
            return;
        }

        // Only go to landing page if we have no state (e.g. initial load or actual back to start)
        // or explicitly if we want to handle it that way.
        if (document.getElementById('landing-page').style.display === 'none') {
            showLandingPage();
        }
    });

    // TV Remote Spatial Navigation (Arrow Keys)
    document.addEventListener('keydown', (e) => {
        const navKeys = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'];
        if (!navKeys.includes(e.key)) return;

        e.preventDefault(); // Prevent default scroll

        const focusable = getFocusableElements();
        const active = document.activeElement;

        // If nothing is focused, or body is focused, focus the first available element
        if (!active || active === document.body) {
            if (focusable.length > 0) focusable[0].focus();
            return;
        }

        const next = getNextElement(active, e.key, focusable);
        if (next) {
            next.focus();
            // Ensure element is visible (especially if in scrollable modal)
            next.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
    });
});

function getFocusableElements() {
    const modal = document.getElementById('question-modal');
    let container = document;

    // Trap focus in modal if open
    if (modal && modal.style.display === 'flex') {
        container = modal.querySelector('.modal-content');
    }

    // Select all interactive elements that are visible
    const selectors = [
        'button:not([disabled]):not([style*="display: none"])',
        '.card:not(.disabled)',
        'input',
        'select',
        '.level-btn'
    ];

    // Note: container.querySelectorAll might not work for '.card' if container is modal-content
    // because .card are NOT in modal. But that's what we want!
    // Inside modal, we only want buttons usually.

    return Array.from(container.querySelectorAll(selectors.join(','))).filter(el => {
        // Simple visibility check
        return el.offsetParent !== null;
    });
}

function getNextElement(current, direction, candidates) {
    const currentRect = current.getBoundingClientRect();
    const currentCenter = {
        x: currentRect.left + currentRect.width / 2,
        y: currentRect.top + currentRect.height / 2
    };

    let bestCandidate = null;
    let minDistance = Infinity;

    candidates.forEach(cand => {
        if (cand === current) return;

        const candRect = cand.getBoundingClientRect();
        const candCenter = {
            x: candRect.left + candRect.width / 2,
            y: candRect.top + candRect.height / 2
        };

        // Filter based on direction
        let isValid = false;
        switch (direction) {
            case 'ArrowUp': isValid = candCenter.y < currentCenter.y; break;
            case 'ArrowDown': isValid = candCenter.y > currentCenter.y; break;
            case 'ArrowLeft': isValid = candCenter.x < currentCenter.x; break;
            case 'ArrowRight': isValid = candCenter.x > currentCenter.x; break;
        }

        if (isValid) {
            // Calculate Euclidean distance
            const dx = candCenter.x - currentCenter.x;
            const dy = candCenter.y - currentCenter.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            // Penalize alignment mismatch to prefer orthagonal movement
            let penalty = 0;
            if (direction === 'ArrowUp' || direction === 'ArrowDown') {
                penalty = Math.abs(dx) * 2;
            } else {
                penalty = Math.abs(dy) * 2;
            }

            const totalScore = dist + penalty;

            if (totalScore < minDistance) {
                minDistance = totalScore;
                bestCandidate = cand;
            }
        }
    });

    return bestCandidate;
}

function initGame() {
    // Set Title
    if (gameData.title) {
        const titleEl = document.getElementById('game-title');
        if (titleEl) titleEl.innerText = gameData.title;
    }

    // Default Mode Logic: Show Landing Page first
    showLandingPage();

    // Load Default Level (in background, though it will be hidden)
    loadLevel(currentLevel);

    // Calculate Total Words
    updateTotalWordCount();
}

function updateTotalWordCount() {
    let total = 0;
    Object.values(gameData.levelData).forEach(level => {
        level.forEach(cat => {
            total += cat.pool.length;
        });
    });
    document.getElementById('word-count').innerText = `Words: ${total} `;
}

function changeLevel(level) {
    currentLevel = level;

    // Update UI
    document.querySelectorAll('.level-btn').forEach(btn => {
        btn.classList.remove('active');
        // Compare with dataset.level
        if (btn.dataset.level === level) btn.classList.add('active');
    });

    loadLevel(level);
}

function loadLevel(level) {
    // 1. Get Categories for this level
    const levelCategories = gameData.levelData[level];

    if (!levelCategories) {
        console.error("Level data not found for:", level);
        return;
    }

    // 2. Select 6 Random Categories (if more than 6 exist)
    let selectedCategories = [...levelCategories];

    if (currentGameMode === 'standard' && selectedCategories.length > 6) {
        // Shuffle categories to get random 6
        for (let i = selectedCategories.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [selectedCategories[i], selectedCategories[j]] = [selectedCategories[j], selectedCategories[i]];
        }
        selectedCategories = selectedCategories.slice(0, 6);
    }

    // 3. Prepare Game Data Structure
    // We need to map this back to gameData.categories for the existing render logic to work
    // But we also need to assign points based on level


    // Level Multiplier (Now simpler 1-5 logic, maybe just flat 1-5 for transparency)
    // User wants "single digits".
    // Let's just make points 1, 2, 3, 4, 5 based on row index.
    // BasePoint logic might be redundant if we strictly want 1-5.
    // Or maybe Level A1 = 1, 2, 3... and Level C2 = 1, 2, 3...
    // The previous logic was (index + 1) * basePoint.
    // New logic: Just (index + 1).

    gameData.categories = selectedCategories.map(cat => {
        // Shuffle pool using Fisher-Yates algorithm
        const shuffledPool = [...cat.pool];
        for (let i = shuffledPool.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledPool[i], shuffledPool[j]] = [shuffledPool[j], shuffledPool[i]];
        }

        // Standard Mode: Limit to 5 words per category for cleaner UI
        // Grade9 Mode: Show ALL words (will split columns)
        let safePool = shuffledPool;
        if (currentGameMode === 'standard') {
            safePool = shuffledPool.slice(0, 5);
        }

        const questions = safePool.map((q, index) => {
            // New Single Digit Logic: Just 1, 2, 3, 4, 5...
            // If it's a split column, it continues: 6, 7...
            let pts = index + 1;

            // Exception: COUNTRIES & LANGUAGES should always be 1 point
            if (cat.name === 'COUNTRIES & LANGUAGES') {
                pts = 1;
            }

            if (cat.fixedPoints) {
                pts = cat.fixedPoints;
            }
            return {
                ...q,
                points: pts
            };
        });

        return {
            name: cat.name,
            questions: questions
        };
    });

    renderBoard();
    renderScoreBoard(); // Reset scores? Maybe keep scores across levels? 
    // User didn't specify, but usually changing level resets the board.
    // Let's NOT reset score to allow progression, but re-render board is must.
}

function randomizeQuestions() {
    // Deprecated in favor of loadLevel, but kept for safety if called elsewhere
    loadLevel(currentLevel);
}

function renderBoard() {
    const board = document.getElementById('game-board');
    board.innerHTML = '';

    const MAX_ROWS = 5;

    // 1. Calculate Columns Config
    // We need to know how many columns each category takes
    // And build a map to iterate easily
    const colConfig = gameData.categories.map(cat => {
        const count = cat.questions.length;
        const cols = Math.ceil(count / MAX_ROWS);
        return {
            name: cat.name,
            cols: cols,
            questions: cat.questions
        };
    });

    // Total Grid Columns
    const totalCols = colConfig.reduce((sum, c) => sum + c.cols, 0);
    board.style.gridTemplateColumns = `repeat(${totalCols}, 1fr)`;

    // 2. Render Category Headers
    colConfig.forEach(config => {
        const header = document.createElement('div');
        header.className = 'category-header';
        header.innerText = config.name;
        // Span across all sub-columns
        if (config.cols > 1) {
            header.style.gridColumn = `span ${config.cols}`;
        }
        board.appendChild(header);
    });

    // 3. Render Questions Grid (Row by Row, fixed to MAX_ROWS)
    for (let r = 0; r < MAX_ROWS; r++) {
        colConfig.forEach((config, catIndex) => {
            // For each category, iterate through its sub-columns
            for (let c = 0; c < config.cols; c++) {
                const qIndex = c * MAX_ROWS + r;
                const q = config.questions[qIndex];

                const card = document.createElement('div');
                card.className = 'card';

                if (q) {
                    const pointValue = q.points || 0;
                    card.innerText = safeText(pointValue);

                    // Indices logic needs to be careful:
                    // openQuestion uses catIndex and qIndex.
                    // We can reuse the original catIndex (from gameData.categories)
                    // and the calculated qIndex.
                    card.dataset.catIndex = catIndex;
                    card.dataset.qIndex = qIndex;

                    // Accessibility / TV Focus
                    card.tabIndex = 0;
                    card.onkeydown = (e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                            openQuestion(catIndex, qIndex, card);
                        }
                    };

                    // We need to pass the *element* to openQuestion
                    card.onclick = () => openQuestion(catIndex, qIndex, card);
                } else {
                    // Empty slot in the last column
                    card.classList.add('disabled');
                    card.tabIndex = -1; // Skip focus if empty
                    card.style.visibility = 'hidden'; // Hide completely or just disable?
                    // User wants "single page", empty slots might take up space but look fine.
                    // Let's keep them as placeholders to maintain grid structure.
                    card.style.opacity = '0.3';
                }

                board.appendChild(card);
            }
        });
    }
}

function renderScoreBoard() {
    const scoreBoard = document.getElementById('score-board');
    scoreBoard.innerHTML = '';

    gameData.groupNames.forEach((name, index) => {
        const teamDiv = document.createElement('div');
        teamDiv.className = 'team-score';

        teamDiv.innerHTML = `
    <div class="team-name">${name}</div>
            <div class="score-value" id="score-${index}">0</div>
            <div class="score-controls">
                <button class="subtract" onclick="updateScore(${index}, -1)">-</button>
                <button class="add" onclick="updateScore(${index}, 1)">+</button>
            </div>
`;
        scoreBoard.appendChild(teamDiv);
    });
}

function updateScore(teamIndex, amount) {
    const scoreEl = document.getElementById(`score-${teamIndex}`);
    let current = parseInt(scoreEl.innerText);
    scoreEl.innerText = current + amount;

    if (amount > 0) {
        // Pass the score element as the target for confetti
        // And the amount for density (multiply by 20 to simulate density of 100 pts)
        triggerCelebration(scoreEl.parentElement, amount * 20);
    }
}

function toggleLanguage() {
    currentLanguage = currentLanguage === 'TR' ? 'ENG' : 'TR';
    document.getElementById('lang-toggle').innerText = currentLanguage;
}

function triggerCelebration(targetElement, points) {
    const container = document.getElementById('confetti-container');
    const colors = ['#f0c419', '#ff4757', '#2ecc71', '#3498db', '#ffffff'];

    // Determine quantity based on points (e.g., 100 points = 30 particles, 500 points = 100 particles)
    const count = Math.min(Math.max(points / 3, 30), 150);

    // Determine position
    let leftStart = 0;
    let widthRange = 100; // Default full screen (vw)

    if (targetElement) {
        const rect = targetElement.getBoundingClientRect();
        // Convert px to vw
        leftStart = (rect.left / window.innerWidth) * 100;
        widthRange = (rect.width / window.innerWidth) * 100;
    }

    for (let i = 0; i < count; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';

        // Random position within the target element's width
        const randomLeft = leftStart + (Math.random() * widthRange);
        confetti.style.left = randomLeft + 'vw';

        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animationDuration = (Math.random() * 2 + 1) + 's';

        // Random size variation
        const size = Math.random() * 0.5 + 0.5; // 0.5x to 1.0x
        confetti.style.transform = `scale(${size})`;

        container.appendChild(confetti);

        setTimeout(() => {
            confetti.remove();
        }, 3000);
    }
}

function startGlobalTimer() {
    const timerEl = document.getElementById('global-timer');
    // Modern format: ⏱ 00:00
    if (globalTimerInterval) clearInterval(globalTimerInterval);

    globalTimerInterval = setInterval(() => {
        globalSeconds++;
        const m = Math.floor(globalSeconds / 60).toString().padStart(2, '0');
        const s = (globalSeconds % 60).toString().padStart(2, '0');
        timerEl.innerHTML = `<span style="opacity:0.7">⏱</span> ${m}:${s}`;
    }, 1000);
}

function toggleFullScreen() {
    const doc = window.document;
    const docEl = doc.documentElement;

    const requestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen;
    const cancelFullScreen = doc.exitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen || doc.msExitFullscreen;

    if (!doc.fullscreenElement && !doc.mozFullScreenElement && !doc.webkitFullscreenElement && !doc.msFullscreenElement) {
        if (requestFullScreen) {
            requestFullScreen.call(docEl).catch(err => {
                alert(`Error attempting to enable full - screen mode: ${err.message} (${err.name})`);
            });
        } else {
            alert("Full screen is not supported by your browser.");
        }
    } else {
        if (cancelFullScreen) {
            cancelFullScreen.call(doc);
        }
    }
}

// Modal Logic

function openQuestion(catIndex, qIndex, cardElement) {
    if (cardElement.classList.contains('disabled')) return;

    const q = gameData.categories[catIndex].questions[qIndex];
    currentCardElement = cardElement;

    // Populate Modal
    document.getElementById('modal-category').innerText = safeText(gameData.categories[catIndex].name);
    const pointsHeader = document.getElementById('modal-points');
    pointsHeader.innerText = safeText(q.points);
    pointsHeader.style.visibility = 'visible'; // Reset visibility in case it was hidden

    // Handle Question Type (1=Text, 2=Image)
    const questionContainer = document.getElementById('modal-question');
    const answerContainer = document.getElementById('modal-answer');

    let displayQuestion = q.question; // Default TR
    let displayAnswer = q.answer;     // Default ENG

    if (currentLanguage === 'ENG') {
        displayQuestion = q.answer;   // Show ENG
        displayAnswer = q.question;   // Answer TR
    }

    // Inject Listen Button AND Pronunciation logic
    // Inject Listen Button AND Pronunciation logic
    const listenBtnHtml = `<button class="modern-listen-btn" onclick="speakAnswer(event)">🔊</button>`;
    const pronunciationHtml = q.pronunciation ? `<div class="pronunciation-text" style="display:block; margin-top:10px; width:100%; text-align:center;">[${q.pronunciation}]</div>` : '';

    // Helper to wrap content in centered column
    const wrapContent = (btn, text, pron, exampleData) => {
        let exampleHtml = '';
        if (exampleData && exampleData.example) {
            // Use same class 'modern-listen-btn' but maybe slightly smaller or just same
            // User said "same as above". The above one is 50px.
            // Let's use the same class but add a style to scale it down slightly if needed, or just keep it same.
            // User said "üsttekiyle aynı olsun" (let it be the same as the one above).
            // I will use the exact same class.
            exampleHtml = `
    <div class="example-container">
                    <div class="example-line">
                        <button class="small-listen-btn" onclick="speakExample(event, '${exampleData.example.replace(/'/g, "\\'")}')">🔊</button>
                        <span class="example-text">${exampleData.example}</span>
                    </div>
    <div class="example-translation" style="display:none;">${exampleData.exampleTR || ''}</div>
                </div>
    `;
        }

        return `
    <div style="display:flex; flex-direction:column; align-items:center; justify-content:center; width:100%;">
        <div style="display:flex; align-items:center; justify-content:center; gap:10px;">
            ${btn}
            <span>${text}</span>
        </div>
                ${pron}
                ${exampleHtml}
            </div>
    `;
    };

    if (currentLanguage === 'ENG') {
        // ENG Mode: Question is English. Show Listen + Word + Pronunciation + Example
        const content = wrapContent(listenBtnHtml, formatContent(displayQuestion), pronunciationHtml, q);
        questionContainer.innerHTML = content;
    } else {
        // TR Mode: Question is Turkish.
        questionContainer.innerHTML = formatContent(displayQuestion);
    }

    if (currentLanguage === 'TR') {
        // TR Mode: Answer is English. Show Listen + Word + Pronunciation + Example
        const content = wrapContent(listenBtnHtml, formatContent(displayAnswer), pronunciationHtml, q);
        answerContainer.innerHTML = content;
    } else {
        // ENG Mode: Answer is Turkish. Just text.
        answerContainer.innerHTML = formatContent(displayAnswer);
    }

    answerContainer.style.display = 'none';

    document.getElementById('show-answer-btn').style.display = 'inline-block';

    // Hide the old standalone pronunciation div as we injected it manually
    document.getElementById('modal-pronunciation').style.display = 'none';

    // Show Modal
    document.getElementById('question-modal').style.display = 'flex';

    // Start Timer
    startTimer();

    // Reset Team Buttons
    document.getElementById('modal-teams').style.display = 'none';
    document.getElementById('modal-teams').innerHTML = '';

    // Add history state for modal
    history.pushState({ modal: true }, "", "?modal=true");

    // Auto-focus "Show Answer" button for easier navigation
    setTimeout(() => {
        document.getElementById('show-answer-btn').focus();
    }, 100);
}

function formatContent(text) {
    // Simple check if text looks like an image url
    const safeT = safeText(text);
    if (safeT.match(/\.(jpeg|jpg|gif|png)$/i)) {
        return `<img src="${safeT}" style="max-width:100%; max-height:400px; border-radius:5px;">`;
    }
    return safeT;
}

function showAnswer() {
    document.getElementById('modal-answer').style.display = 'block';
    document.getElementById('show-answer-btn').style.display = 'none';

    // Show Example Translation
    const translations = document.querySelectorAll('.example-translation');
    translations.forEach(el => el.style.display = 'block');

    // Auto-speak the English word THEN the sentence
    speakAnswerSequence();

    // Generate Team Scoring Buttons
    const teamsContainer = document.getElementById('modal-teams');
    teamsContainer.innerHTML = ''; // Clear previous
    teamsContainer.style.display = 'flex';

    gameData.groupNames.forEach((name, index) => {
        const btn = document.createElement('button');
        btn.className = 'team-select-btn';
        btn.innerText = name;
        btn.onclick = () => awardPointsToTeam(index);
        teamsContainer.appendChild(btn);
    });

    stopTimer();
}

function awardPointsToTeam(teamIndex) {
    if (!currentCardElement) return;
    const catIndex = currentCardElement.dataset.catIndex;
    const qIndex = currentCardElement.dataset.qIndex;
    const q = gameData.categories[catIndex].questions[qIndex];

    // 1. Get Coordinates
    const teamsContainer = document.getElementById('modal-teams');
    // const clickedBtn = teamsContainer.children[teamIndex]; // Old source
    const pointsHeader = document.getElementById('modal-points'); // New source
    const targetScore = document.getElementById(`score-${teamIndex}`);

    const startRect = pointsHeader.getBoundingClientRect();
    const endRect = targetScore.getBoundingClientRect();

    // 2. Create Flying Element (Simulate moving the actual element)
    const flyer = document.createElement('div');
    flyer.className = 'flying-points';
    flyer.innerText = pointsHeader.innerText; // Use actual text from header

    // Match styles of the header to make it look like the same element
    const computedStyle = window.getComputedStyle(pointsHeader);
    flyer.style.color = computedStyle.color;
    flyer.style.fontSize = computedStyle.fontSize;
    flyer.style.fontWeight = computedStyle.fontWeight;
    flyer.style.textShadow = computedStyle.textShadow;

    flyer.style.left = `${startRect.left}px`;
    flyer.style.top = `${startRect.top}px`;
    flyer.style.width = `${startRect.width}px`; // Ensure width matches for centering
    flyer.style.textAlign = 'center';

    document.body.appendChild(flyer);

    // Hide the original element to create the illusion it moved
    pointsHeader.style.visibility = 'hidden';

    // 3. Animate
    // Force reflow
    flyer.offsetHeight;

    flyer.style.left = `${endRect.left + endRect.width / 2 - startRect.width / 2}px`; // Center over target
    flyer.style.top = `${endRect.top}px`;
    flyer.style.opacity = '0';
    flyer.style.transform = 'scale(0.5)';

    // 4. On Finish
    setTimeout(() => {
        flyer.remove();
        updateScore(teamIndex, q.points);
        closeModal();
    }, 1000); // Match CSS transition duration

    // Disable buttons to prevent double scoring
    const buttons = teamsContainer.getElementsByTagName('button');
    for (let btn of buttons) {
        btn.disabled = true;
        btn.style.opacity = '0.5';
        btn.style.cursor = 'not-allowed';
    }
}

function getBritishVoice() {
    const voices = window.speechSynthesis.getVoices();
    // 1. Try specific high-quality British Female voices known on Mac/Chrome
    const preferredNames = ["Google UK English Female", "Martha", "Moira", "Tessa"];
    for (const name of preferredNames) {
        const found = voices.find(v => v.name.includes(name));
        if (found) return found;
    }

    // 2. Generic search for GB + Female
    const gbFemale = voices.find(v => (v.lang === 'en-GB' || v.lang === 'en-UK') && (v.name.includes('Female') || v.name.includes('Woman')));
    if (gbFemale) return gbFemale;

    // 3. Fallback: Any GB voice
    const gbAny = voices.find(v => v.lang === 'en-GB' || v.lang === 'en-UK');
    if (gbAny) return gbAny;

    // 4. Fallback: Any Female English voice (better to have female US than male GB if user wants female)
    return voices.find(v => v.lang.startsWith('en') && (v.name.includes('Female') || v.name.includes('Samantha') || v.name.includes('Victoria'))) || null;
}

// Global voice cache to solve "first time different voice" issue
let cachedVoice = null;

function loadVoices() {
    const voices = window.speechSynthesis.getVoices();
    if (voices.length > 0) {
        cachedVoice = getBritishVoice();
    }
}

// Ensure voices are loaded ASAP
if (window.speechSynthesis) {
    window.speechSynthesis.onvoiceschanged = loadVoices;
}

function speakText(text, onEndCallback) {
    // Cancel any current speech
    // window.speechSynthesis.cancel(); 

    const utterance = new SpeechSynthesisUtterance(text);

    // Use cached voice if available, otherwise try to get it
    if (!cachedVoice) {
        loadVoices();
    }

    // Explicitly check ensure we have a voice
    const voice = cachedVoice || getBritishVoice();

    if (voice) {
        utterance.voice = voice;
    }
    // If we fell back to a non-GB voice, we might want to force lang, but voice obj usually overrides.
    // utterance.lang = 'en-GB'; 

    utterance.rate = 1.0; // Normal speed
    utterance.pitch = 1.1; // Slightly higher pitch to sound less "thick" / more natural female

    if (onEndCallback) {
        utterance.onend = onEndCallback;
    }

    window.speechSynthesis.speak(utterance);
}

function speakAnswer(event) {
    if (event) event.stopPropagation();
    if (!currentCardElement) return;
    const catIndex = currentCardElement.dataset.catIndex;
    const qIndex = currentCardElement.dataset.qIndex;
    const q = gameData.categories[catIndex].questions[qIndex];

    // Just speak the word
    speakText(q.answer);
}

function speakExample(event, text) {
    if (event) event.stopPropagation();
    speakText(text);
}

function speakAnswerSequence() {
    if (!currentCardElement) return;
    const catIndex = currentCardElement.dataset.catIndex;
    const qIndex = currentCardElement.dataset.qIndex;
    const q = gameData.categories[catIndex].questions[qIndex];

    // 1. Speak Word
    speakText(q.answer, () => {
        // 2. After word finishes, check if there is an example
        if (q.example) {
            // Small pause? SpeechSynthesis queues, but let's just call it.
            // Maybe add a small delay for naturalness?
            setTimeout(() => {
                speakText(q.example);
            }, 500);
        }
    });
}

function closeModal(skipHistory = false) {
    document.getElementById('question-modal').style.display = 'none';
    document.getElementById('modal-pronunciation').style.display = 'none'; // Hide pronunciation
    stopTimer();

    // If not triggered by back button (popstate), go back to clean history
    if (!skipHistory) {
        history.back();
    }
    // Mark card as used
    if (currentCardElement) {
        currentCardElement.classList.add('disabled');
        currentCardElement.innerText = ''; // Clear points
        currentCardElement = null;
    }
}

// Timer Logic
function startTimer() {
    stopTimer();
    timeLeft = gameData.answerTime;
    updateTimerDisplay();

    timerInterval = setInterval(() => {
        timeLeft--;
        updateTimerDisplay();
        if (timeLeft <= 0) {
            stopTimer();
            // Optional: Play timeout sound
        }
    }, 1000);
}

function stopTimer() {
    if (timerInterval) clearInterval(timerInterval);
    document.getElementById('modal-timer').innerText = "--";
}

function updateTimerDisplay() {
    const timerEl = document.getElementById('modal-timer');
    timerEl.innerText = timeLeft;
    if (timeLeft <= 5) {
        timerEl.style.color = 'red';
        timerEl.style.borderColor = 'red';
    } else {
        timerEl.style.color = '#fff';
        timerEl.style.borderColor = 'var(--accent-color)';
    }
}

// Close modal when clicking outside
window.onclick = function (event) {
    const modal = document.getElementById('question-modal');
    if (event.target == modal) {
        closeModal();
    }
}

// Contact Button Logic
function toggleContact() {
    const info = document.getElementById('contact-info');
    info.classList.toggle('visible');
}
