
var firebaseConfig = {
    apiKey: "AIzaSyBmUhP2LdVReR9gRDX5el0lpUfgqE7Jt6A",
    authDomain: "bernavocab.firebaseapp.com",
    databaseURL: "https://bernavocab-default-rtdb.europe-west1.firebasedatabase.app",
    experimentalForceLongPolling: true, // Force long polling for older devices/networks
    projectId: "bernavocab",
    storageBucket: "bernavocab.firebasestorage.app",
    messagingSenderId: "234781292902",
    appId: "1:234781292902:web:617492bb14db69363cf0a7",
    measurementId: "G-048H1LQCC0"
};

// Global Error Handler for Debugging (Alert only for critical, or remove if annoying)
window.onerror = function (msg, url, lineNo, columnNo, error) {
    alert("HATA ALGILANDI:\n" + msg + "\nSatır: " + lineNo); // Enabled for user feedback
    console.error(msg, lineNo);
    return false;
};

if (typeof firebase === 'undefined') {
    alert("KRİTİK HATA: Firebase kütüphanesi yüklenemedi.\n\nİnternet bağlantınızı kontrol edin veya reklam engelleyici (AdBlock) varsa kapatın.");
}

let isFirebaseConnected = false;

// Initialize Firebase
try {
    // Initialize Firebase directly with the config object
    firebase.initializeApp(firebaseConfig);
    const db = firebase.database();

    console.log("Firebase initialized. Connecting...");

    // Presence Logic
    const connectedRef = db.ref(".info/connected");
    const connectionsRef = db.ref("connections");

    // Location Logic
    let userCity = "";
    fetch("https://ipapi.co/json/")
        .then(function (res) { return res.json(); })
        .then(function (data) {
            if (data && data.city) {
                userCity = data.city;
                if (window.updateMyPresence) window.updateMyPresence();
            }
        })
        .catch(function (err) { console.log("Loc err:", err); });

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
    let myName;
    try {
        myName = localStorage.getItem("playerName");
        if (!myName) {
            myName = getRandomName();
            localStorage.setItem("playerName", myName);
        }
    } catch (e) {
        console.warn("LocalStorage error (Private Mode?):", e);
        myName = getRandomName(); // Fallback
    }

    connectedRef.on("value", (snap) => {
        const headerEl = document.querySelector(".floating-header");

        if (snap.val() === true) {
            console.log("Connected to Firebase!");
            isFirebaseConnected = true; // Mark as connected

            // Update UI status
            if (headerEl) {
                headerEl.style.color = "#4ade80";
            }

            // Fix Duplicate Issue: Remove old ref if exists before pushing new one
            if (myConRef) {
                myConRef.onDisconnect().cancel();
                myConRef.remove();
            }

            // Generate a random ID if not exists or use simple push
            myConRef = connectionsRef.push();

            // When I disconnect, remove this device
            myConRef.onDisconnect().remove();

            // Set initial state
            updateMyPresence();
        } else {
            console.warn("Disconnected from Firebase.");
            // Update UI status to show offline/connecting
            if (headerEl) {
                headerEl.innerText = "Connecting...";
                headerEl.parentElement.style.color = "#ef4444"; // Red
            }
        }
    });

    // Toggle User List Visibility
    window.toggleUserList = function () {
        const listContent = document.getElementById('floating-list-content');
        const arrow = document.getElementById('user-list-arrow');

        console.log('toggleUserList called');
        console.log('listContent:', listContent);
        console.log('arrow:', arrow);

        if (listContent && arrow) {
            console.log('Before toggle - listContent classes:', listContent.className);
            console.log('Before toggle - arrow classes:', arrow.className);

            listContent.classList.toggle('collapsed');
            arrow.classList.toggle('collapsed');

            console.log('After toggle - listContent classes:', listContent.className);
            console.log('After toggle - arrow classes:', arrow.className);
        } else {
            console.error('Missing elements! listContent:', listContent, 'arrow:', arrow);
        }
    };

    // Function to update my presence data
    window.updateMyPresence = function () {
        if (!myConRef) return;

        myConRef.set({
            name: myName,
            city: userCity || "", // Add City
            id: myConRef.key, // Save key to identify myself in list
            onlineAt: firebase.database.ServerValue.TIMESTAMP
        });
    };

    // Count Online Users & Render List
    // Count Online Users & Render List
    connectionsRef.on("value", (snap) => {
        const users = snap.val() || {};
        const count = Object.keys(users).length;

        // Update Count Header in Floating Bubble
        const headerEl = document.querySelector(".floating-header");
        if (headerEl) {
            headerEl.innerHTML = `<span class="online-dot">●</span> <span id="floating-count">${count}</span> Online<span class="toggle-arrow" id="user-list-arrow">▼</span>`;
            headerEl.style.color = "#4ade80";
            // Re-attach click handler after innerHTML update
            headerEl.onclick = toggleUserList;
        }

        // Update List UI in Floating Bubble
        const listEl = document.getElementById("floating-list-content");
        if (listEl) {
            listEl.innerHTML = '';

            if (users) {
                let userList = Object.keys(users).map(function (key) { return users[key]; });
                // Sort: newer first
                userList.sort((a, b) => b.onlineAt - a.onlineAt);

                const processedNames = new Set();
                const finalDisplayList = [];

                userList.forEach(user => {
                    const normName = (user.name || "").trim().toLowerCase();
                    if (normName && processedNames.has(normName)) return; // Strict dedupe

                    if (normName) processedNames.add(normName);
                    finalDisplayList.push(user);
                });

                // Update count based on FILTERED list
                const headerEl = document.querySelector(".floating-header");
                if (headerEl) {
                    // Note: We update header here again with correct count
                    const count = finalDisplayList.length;
                    headerEl.innerHTML = `<span class="online-dot">●</span> <span id="floating-count">${count}</span> Online<span class="toggle-arrow" id="user-list-arrow">▼</span>`;
                    // Re-attach click handler after innerHTML update
                    headerEl.onclick = toggleUserList;
                }

                finalDisplayList.sort((a, b) => {
                    const isMeA = (a.name === myName);
                    const isMeB = (b.name === myName);
                    if (isMeA && !isMeB) return -1;
                    if (!isMeA && isMeB) return 1;
                    return (a.name || "").localeCompare(b.name || "");
                });

                finalDisplayList.forEach(user => {
                    const div = document.createElement("div");
                    div.className = "online-user-item";
                    let displayName = user.name || "Unknown";
                    if (user.city) displayName += " (" + user.city + ")";
                    if (user.name === myName) {
                        div.style.fontWeight = "bold";
                        div.style.color = "#4ade80";
                        displayName += " (Sen)";
                    }
                    div.textContent = displayName;
                    listEl.appendChild(div);
                });
            }
        }
    }, (error) => {
        console.error("Connections Read Error:", error);
        if (error.code === "PERMISSION_DENIED") {
            const headerEl = document.querySelector(".floating-header");
            if (headerEl) headerEl.innerText = "YETKİ HATASI (RULES)";
            if (headerEl) headerEl.style.color = "red";
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
    // Clear all intervals
    clearInterval(globalTimerInterval);
    clearInterval(millionaireTimer);

    // Stop any audio
    if (typeof wheelSpinSound !== 'undefined' && wheelSpinSound) { // Check if wheelSpinSound is defined and not null
        wheelSpinSound.stop();
        // Re-create oscillator/gain nodes if needed next time, but simple stop is enough for now
    }

    // Stop Millionaire Audio
    if (typeof MillionaireSounds !== 'undefined') {
        MillionaireSounds.stopAll();
    }

    window.speechSynthesis.cancel();

    // Hide all containers
    document.getElementById('landing-page').style.display = 'flex'; // Show landing page

    const containers = [
        'game-board', 'score-board', 'unit-selection', 'hangman-container',
        'wheel-container', 'millionaire-container', 'millionaire-game-over',
        'level-selector-container', 'game-mode-selection', 'play-type-selection',
        'taboo-container'
    ];

    if (typeof tabooTimer !== 'undefined') clearInterval(tabooTimer);

    // Disable Game Flag
    isGameActive = false;
    previousDistractors = [];

    containers.forEach(id => {
        const el = document.getElementById(id);
        if (el && id !== 'landing-page') el.style.display = 'none'; // Don't hide landing page itself
    });

    // Reset specific mode states if needed
    millionaireCurrentQuestion = 0;
    selectedVocabMode = null;
    selectedPlayMode = null;
    selectedUnit = null;
    pendingGameMode = null;
    pendingWheelWord = null;

    // Provide a clean slate log
    console.log("Returned to Home - Game State Cleared");
}

// Store the selected vocabulary mode globally
let selectedVocabMode = null;
let selectedPlayMode = null; // 'team', 'wheel', 'millionaire', 'hangman'
let selectedUnit = null; // Selected unit for wheel/millionaire/hangman
let playType = 'team'; // 'team' or 'individual'
let individualScore = 0; // Score for individual mode
let pendingGameMode = null; // Store game mode while selecting play type
let pendingWheelWord = null; // Track word removed from wheel to restore if modal closed without answering

function setGameMode(mode) {
    selectedVocabMode = mode;
    hideLandingPage();

    // Hide old game elements
    const levelSelector = document.getElementById('level-selector-container');
    const gameBoard = document.getElementById('game-board');
    const scoreboard = document.getElementById('score-board');

    if (levelSelector) levelSelector.style.display = 'none';
    if (gameBoard) gameBoard.style.display = 'none';
    if (scoreboard) scoreboard.style.display = 'none';

    // Show game mode selection screen
    const gameModeScreen = document.getElementById('game-mode-selection');
    if (gameModeScreen) {
        gameModeScreen.style.display = 'flex';
    }

    // History API for TV Back Button
    try {
        history.pushState({ vocabMode: mode }, "", `?mode=${mode}`);
    } catch (e) {
        console.warn("History API not supported (likely running locally via file://)", e);
    }
}

function selectGameMode(gameMode) {
    // Hide game mode selection
    const gameModeScreen = document.getElementById('game-mode-selection');
    if (gameModeScreen) {
        gameModeScreen.style.display = 'none';
    }

    if (gameMode === 'team') {
        // Team Competition - always team mode
        selectedPlayMode = 'team';
        playType = 'team';

        // RESTORE UI ELEMENTS HIDDEN BY setGameMode
        document.getElementById('level-selector-container').style.display = 'flex';
        document.getElementById('game-board').style.display = 'grid';
        document.querySelector('.score-board').style.display = 'flex';

        initTeamMode();
    } else if (gameMode === 'wheel' || gameMode === 'millionaire' || gameMode === 'hangman' || gameMode === 'taboo') {
        // These modes can be team or individual - show play type selection
        pendingGameMode = gameMode;
        showPlayTypeSelection();
    }
}

// Show play type selection screen
function showPlayTypeSelection() {
    const playTypeScreen = document.getElementById('play-type-selection');
    if (playTypeScreen) {
        playTypeScreen.style.display = 'flex';
    }
}

// Handle play type selection (team or individual)
function selectPlayType(type) {
    playType = type;
    individualScore = 0; // Reset individual score

    // Hide play type selection
    const playTypeScreen = document.getElementById('play-type-selection');
    if (playTypeScreen) {
        playTypeScreen.style.display = 'none';
    }

    // Set the selected play mode and proceed to unit selection
    selectedPlayMode = pendingGameMode;
    showUnitSelection(pendingGameMode);
}

function backToLanding() {
    // Hide game mode selection
    const gameModeScreen = document.getElementById('game-mode-selection');
    if (gameModeScreen) {
        gameModeScreen.style.display = 'none';
    }

    // Show landing page
    showLandingPage();
    selectedVocabMode = null;
    selectedPlayMode = null;
}

function backToGameModes() {
    // Hide all game containers
    const wheelContainer = document.getElementById('wheel-container');
    const millContainer = document.getElementById('millionaire-container');
    const hangmanContainer = document.getElementById('hangman-container');
    const tabooContainer = document.getElementById('taboo-container');
    const unitSelection = document.getElementById('unit-selection');
    const playTypeSelection = document.getElementById('play-type-selection');

    if (wheelContainer) wheelContainer.style.display = 'none';
    if (millContainer) millContainer.style.display = 'none';
    if (hangmanContainer) hangmanContainer.style.display = 'none';
    if (tabooContainer) tabooContainer.style.display = 'none';
    if (unitSelection) unitSelection.style.display = 'none';
    if (playTypeSelection) playTypeSelection.style.display = 'none';

    // Clear any active timers
    if (millionaireTimer) clearInterval(millionaireTimer);
    if (typeof tabooTimer !== 'undefined') clearInterval(tabooTimer); // Clear Taboo Timer

    // Stop all audio
    if (typeof MillionaireSounds !== 'undefined') {
        MillionaireSounds.stopAll();
    }
    window.speechSynthesis.cancel();
    if (typeof wheelSpinSound !== 'undefined' && wheelSpinSound) {
        wheelSpinSound.stop();
    }

    // Reset Game Active Flag
    isGameActive = false;
    previousDistractors = [];

    // Reset play mode and selected unit but keep vocab mode
    selectedPlayMode = null;
    selectedUnit = null;
    pendingGameMode = null;

    // Show game mode selection screen again
    const gameModeScreen = document.getElementById('game-mode-selection');
    if (gameModeScreen) {
        gameModeScreen.style.display = 'flex';
    }
}

function initTeamMode() {
    currentGameMode = selectedVocabMode;

    const container = document.querySelector('.level-container');
    container.innerHTML = ''; // Clear existing buttons

    if (selectedVocabMode === 'standard') {
        const levels = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
        levels.forEach(lvl => {
            const btn = document.createElement('button');
            btn.className = 'level-btn';
            btn.innerText = lvl;
            btn.dataset.level = lvl;
            btn.onclick = () => changeLevel(lvl);
            container.appendChild(btn);
        });
        changeLevel('A1');
    } else if (selectedVocabMode === 'grade9') {
        for (let i = 1; i <= 8; i++) {
            const btn = document.createElement('button');
            btn.className = 'level-btn';
            btn.innerText = `Unit ${i}`;
            const lvlId = `Grade9_Unit${i}`;
            btn.dataset.level = lvlId;
            btn.onclick = () => changeLevel(lvlId);
            container.appendChild(btn);
        }
        changeLevel('Grade9_Unit1');
    } else if (selectedVocabMode === 'ydt') {
        for (let i = 1; i <= 10; i++) {
            const btn = document.createElement('button');
            btn.className = 'level-btn';
            btn.innerText = `Unit ${i}`;
            const lvlId = `YDT_Unit${i}`;
            btn.dataset.level = lvlId;
            btn.onclick = () => changeLevel(lvlId);
            container.appendChild(btn);
        }
        changeLevel('YDT_Unit1');
    }
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
            closeModal(true); // true = skip history.back()
            return;
        }

        // --- NEW SAFETY FEATURE ---
        // If we are "in-game" (isGameActive is true), treating Back as "Quit Game" 
        // helps ensure everything (audio, timers) stops cleanly.
        if (typeof isGameActive !== 'undefined' && isGameActive) {
            goHome();
            return;
        }
        // --------------------------

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
    Object.keys(gameData.levelData).forEach(function (key) {
        var level = gameData.levelData[key];
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
            // For YDT and Grade9 modes: Reset to 1-5 for each column
            let pts;
            if (currentGameMode === 'ydt' || currentGameMode === 'grade9') {
                // Each column has 5 rows, so points should be 1-5 per column
                pts = (index % 5) + 1;
            } else {
                pts = index + 1;
            }

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
                    // For YDT and Grade9: use row index (r + 1) for points 1-5
                    // For standard: use the pre-calculated q.points
                    let pointValue;
                    if (currentGameMode === 'ydt' || currentGameMode === 'grade9') {
                        pointValue = r + 1; // Row 0 = 1 point, Row 4 = 5 points
                    } else {
                        pointValue = q.points || 0;
                    }
                    card.innerText = safeText(pointValue);
                    // Store the actual point value for scoring
                    card.dataset.points = pointValue;

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
    const langToggle = document.getElementById('lang-toggle');
    if (langToggle) langToggle.innerText = currentLanguage;
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

// ========================================
// UNIFIED FLASHCARD SYSTEM
// ========================================
// This single function handles flashcard display for ALL game modes
// (Team Competition, Wheel of Fortune, etc.)
// Update this one place to change all flashcards!

let currentFlashcardMode = 'team'; // 'team' or 'wheel'
let currentFlashcardCallback = null;

function showFlashcard(wordData, options = {}) {
    // wordData: { english, turkish, pronunciation, example, exampleTR }
    // options: { category, number, mode, onTeamSelect }

    const category = options.category || 'Flashcard';
    const number = options.number || 1;
    currentFlashcardMode = options.mode || 'team';
    currentFlashcardCallback = options.onTeamSelect || null;

    // Store current word data for audio functions
    window.currentWordData = {
        answer: wordData.english,
        question: wordData.turkish,
        example: wordData.example || '',
        exampleTR: wordData.exampleTR || '',
        pronunciation: wordData.pronunciation || ''
    };

    // Populate Header
    document.getElementById('modal-category').textContent = category;
    document.getElementById('modal-question-number').textContent = number;

    // Populate Main Word (English)
    document.getElementById('modal-word').textContent = wordData.english || '';

    // Populate Pronunciation
    const pronEl = document.getElementById('modal-pronunciation');
    if (wordData.pronunciation) {
        pronEl.textContent = `[${wordData.pronunciation}]`;
        pronEl.style.display = 'block';
    } else {
        pronEl.style.display = 'none';
    }

    // Populate Example Sentence (English + Turkish)
    const exampleSection = document.getElementById('example-section');
    const exampleEl = document.getElementById('modal-example');
    const exampleTrEl = document.getElementById('modal-example-tr');
    if (wordData.example) {
        exampleEl.textContent = wordData.example;
        // Show Turkish translation if available
        if (exampleTrEl && wordData.exampleTR) {
            exampleTrEl.textContent = wordData.exampleTR;
            exampleTrEl.style.display = 'block';
        } else if (exampleTrEl) {
            exampleTrEl.style.display = 'none';
        }
        exampleSection.style.display = 'flex';
    } else {
        exampleSection.style.display = 'none';
    }


    // Prepare Answer Section (hidden initially)
    document.getElementById('modal-answer').textContent = wordData.turkish || '';

    const answerPronEl = document.getElementById('modal-answer-pronunciation');
    if (answerPronEl) {
        answerPronEl.textContent = '';
    }

    // Hide answer section initially
    document.getElementById('answer-section').style.display = 'none';

    // Show the Show Answer button
    const showAnswerBtn = document.getElementById('show-answer-btn');
    showAnswerBtn.style.display = 'block';
    showAnswerBtn.onclick = showAnswer;

    // Reset team buttons
    document.getElementById('modal-teams').innerHTML = '';

    // Show Modal
    document.getElementById('question-modal').style.display = 'flex';

    // Add history state for modal
    history.pushState({ modal: true }, "", "?modal=true");

    // Auto-focus "Show Answer" button
    setTimeout(() => {
        document.getElementById('show-answer-btn').focus();
    }, 100);
}

function showAnswer() {
    // Hide the Show Answer button
    document.getElementById('show-answer-btn').style.display = 'none';

    // Show the Answer Section
    document.getElementById('answer-section').style.display = 'block';

    // Auto-speak the English word THEN the sentence
    speakAnswerSequence();

    // Generate Buttons based on play type
    const teamsContainer = document.getElementById('modal-teams');
    teamsContainer.innerHTML = '';

    if (playType === 'individual') {
        // Individual mode - single Add Points button
        const btn = document.createElement('button');
        btn.className = 'add-points-btn';
        btn.textContent = '✓ Add Points (+10)';
        btn.onclick = () => {
            if (currentFlashcardCallback) {
                currentFlashcardCallback(-1); // -1 indicates individual mode
            } else {
                addIndividualPoints(10);
            }
        };
        teamsContainer.appendChild(btn);
    } else {
        // Team mode - show Team A/B/C/D buttons
        gameData.groupNames.forEach((name, index) => {
            const btn = document.createElement('button');
            btn.className = 'team-select-btn';
            btn.textContent = name;
            btn.onclick = () => {
                if (currentFlashcardCallback) {
                    currentFlashcardCallback(index);
                } else {
                    awardPointsToTeam(index);
                }
            };
            teamsContainer.appendChild(btn);
        });
    }
}

// Add points in individual mode
function addIndividualPoints(points) {
    individualScore += points;

    // Update scoreboard if visible
    updateIndividualScoreboard();

    closeModal(true); // Skip history.back() to prevent navigation to homepage
}

// ========================================
// TEAM COMPETITION MODE - Uses Unified Flashcard
// ========================================
function openQuestion(catIndex, qIndex, cardElement) {
    if (cardElement.classList.contains('disabled')) return;

    const q = gameData.categories[catIndex].questions[qIndex];
    currentCardElement = cardElement;

    // Call unified flashcard function
    showFlashcard({
        english: q.answer,
        turkish: q.question,
        pronunciation: q.pronunciation || '',
        example: q.example || '',
        exampleTR: q.exampleTR || ''
    }, {
        category: gameData.categories[catIndex].name,
        number: qIndex + 1,
        mode: 'team',
        onTeamSelect: null // Uses default awardPointsToTeam
    });
}

// Audio functions for new flashcard
function speakWord() {
    if (window.currentWordData && window.currentWordData.answer) {
        speakText(window.currentWordData.answer);
    }
}

function speakExampleSentence() {
    if (window.currentWordData && window.currentWordData.example) {
        speakText(window.currentWordData.example);
    }
}

function formatContent(text) {
    const safeT = safeText(text);
    if (safeT.match(/\.(jpeg|jpg|gif|png)$/i)) {
        return `<img src="${safeT}" style="max-width:100%; max-height:400px; border-radius:5px;">`;
    }
    return safeT;
}

function awardPointsToTeam(teamIndex) {
    if (!currentCardElement) return;
    const catIndex = currentCardElement.dataset.catIndex;
    const qIndex = currentCardElement.dataset.qIndex;
    const q = gameData.categories[catIndex].questions[qIndex];

    // Award points directly
    updateScore(teamIndex, q.points);

    // Disable buttons to prevent double scoring
    const teamsContainer = document.getElementById('modal-teams');
    const buttons = teamsContainer.getElementsByTagName('button');
    for (let btn of buttons) {
        btn.disabled = true;
        btn.style.opacity = '0.5';
        btn.style.cursor = 'not-allowed';
    }

    // Close modal after short delay
    setTimeout(() => {
        closeModal(true, true); // Skip history.back() and disable the card
    }, 300);
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

// Wheel of Fortune Persistence (Declared at top of file)
window.pendingWheelWord = null;

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

function speakText(text, onEndCallback, shouldCancel = false) {
    // Cancel any current speech if requested
    if (shouldCancel && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
    }

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
    // Use unified word data (works for all game modes)
    if (!window.currentWordData) return;

    const wordData = window.currentWordData;

    // 1. Speak Word (English)
    speakText(wordData.answer, () => {
        // 2. After word finishes, check if there is an example
        if (wordData.example) {
            setTimeout(() => {
                speakText(wordData.example);
            }, 500);
        }
    });
}

function closeModal(skipHistory = false, disableCard = false) {
    document.getElementById('question-modal').style.display = 'none';
    document.getElementById('modal-pronunciation').style.display = 'none'; // Hide pronunciation
    stopTimer();

    // 1. Check if we need to restore a wheel word (CRITICAL: Do this BEFORE history.back)
    // If closed without answering (X button or Back button), restore the word
    if (window.pendingWheelWord) {
        console.log("DEBUG: closeModal - Restoring word:", window.pendingWheelWord);
        wheelWords.push(window.pendingWheelWord);
        document.getElementById('wheel-words-left').textContent = wheelWords.length;
        if (typeof drawWheel === 'function') {
            drawWheel();
        }
        window.pendingWheelWord = null;
    } else {
        console.log("DEBUG: closeModal - No pending word to restore");
    }

    // 2. If not triggered by back button (popstate), go back to clean history
    if (!skipHistory) {
        history.back();
    }

    // Only disable card if explicitly requested (when points are awarded)
    if (disableCard && currentCardElement) {
        currentCardElement.classList.add('disabled');
        currentCardElement.innerText = ''; // Clear points
    }

    // Reset current card element
    currentCardElement = null;
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
    const timerEl = document.getElementById('modal-timer');
    if (timerEl) {
        timerEl.innerText = "--";
    }
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


// ============================================
// HOMEWORK CONTROL SYSTEM
// ============================================
var currentHwClass = "";
var currentHwStudents = [];
var selectedHomeworkId = null;
var pendingAction = null; // To store function to execute after password check

function openHomeworkControl() {
    // Open Password Modal instead of Prompt
    pendingAction = function () {
        document.getElementById('homework-modal').style.display = 'flex';
        renderClassSelector();
    };
    openPasswordModal("Öğretmen Girişi");
}

window.openPasswordModal = function (title) {
    if (title) {
        var h3 = document.querySelector("#password-modal h3");
        if (h3) h3.innerText = title;
    }

    var modal = document.getElementById('password-modal');
    if (!modal) return;

    document.getElementById('teacher-password').value = "";
    modal.style.display = 'flex';
    modal.style.zIndex = "99999"; // Ensure it is on top of everything
    var input = document.getElementById('teacher-password');
    setTimeout(function () { input.focus(); }, 100);

    input.onkeydown = function (e) {
        if (e.key === 'Enter') checkTeacherPassword();
    };
}

function closePasswordModal() {
    document.getElementById('password-modal').style.display = 'none';
    pendingAction = null;
}

function checkTeacherPassword() {
    var password = document.getElementById('teacher-password').value;
    if (password === "2702") {
        var action = pendingAction; // Capture locally before it's cleared
        closePasswordModal();
        if (action) action();
    } else {
        // Flash error or alert
        alert("Hatalı Şifre!");
        document.getElementById('teacher-password').value = "";
    }
}

function closeHomeworkModal() {
    document.getElementById('homework-modal').style.display = 'none';
    resetHomeworkModal();
}

function resetHomeworkModal() {
    document.getElementById('hw-step-1').style.display = 'block';
    document.getElementById('hw-step-2').style.display = 'none';
    document.getElementById('hw-back-btn').style.display = 'none';
    currentHwClass = "";
    selectedHomeworkId = null;
    document.getElementById('hw-name').value = "";
    // Date is now auto-managed or not shown in input
    document.getElementById('active-homework-container').style.display = 'none';
}

function renderClassSelector() {
    var container = document.getElementById('class-selector');
    container.innerHTML = "";

    var classes = Object.keys(studentData).sort();

    classes.forEach(function (cls) {
        var btn = document.createElement('button');
        btn.className = "class-selector-btn";
        btn.innerText = cls;
        btn.onclick = function () { selectClassForHomework(cls); };
        container.appendChild(btn);
    });
}

function selectClassForHomework(className) {
    currentHwClass = className;
    document.getElementById('hw-step-1').style.display = 'none';
    document.getElementById('hw-step-2').style.display = 'block';
    document.getElementById('hw-back-btn').style.display = 'block'; // Show Back Button
    document.getElementById('hw-class-title').innerText = className + " - Ödev Ekleme/Düzenleme";

    // Load student data locally
    currentHwStudents = JSON.parse(JSON.stringify(studentData[className] || []));

    // Clear list
    document.getElementById('student-list-container').innerHTML = "";
    document.getElementById('active-homework-container').style.display = 'none';
    document.getElementById('hw-name').value = "";
    selectedHomeworkId = null;

    // Load existing homeworks
    loadPreviousHomeworks(className);
}

function goBackInHomework() {
    // If in Step 2, go back to Step 1
    if (document.getElementById('hw-step-2').style.display === 'block') {
        resetHomeworkModal();
        renderClassSelector();
        // Modal is still open, just Step 1 is visible
    }
}

function triggerAddHomework() {
    var hwName = document.getElementById('hw-name').value;
    // Date is strictly Today
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();
    var hwDate = yyyy + '-' + mm + '-' + dd;

    if (!hwName) {
        alert("Lütfen ödev konusunu yazınız.");
        return;
    }

    // Show student list to start marking
    document.getElementById('active-homework-container').style.display = 'block';
    document.getElementById('active-homework-title').innerText = hwName + " (" + hwDate + ")";

    renderStudentListForMarking();
}

// Helper function to format student names as initials (e.g., "S. C.")
function formatStudentDisplayName(fullName) {
    if (!fullName) return "";
    var parts = fullName.trim().split(/\s+/);
    if (parts.length < 1) return fullName;
    // Abbreviate all parts to initials
    var initials = parts.map(function (part) {
        return part.charAt(0).toUpperCase() + ".";
    });
    return initials.join(" ");
}

function renderStudentListForMarking() {
    var container = document.getElementById('student-list-container');
    container.innerHTML = "";

    if (currentHwStudents.length === 0) {
        container.innerHTML = "<div style='padding:20px; text-align:center;'>Bu sınıfta öğrenci kaydı yok. Lütfen settings.js dosyasını düzenleyin.</div>";
        return;
    }

    currentHwStudents.forEach(function (student, index) {
        var row = document.createElement('div');
        row.className = "student-row row-pending";
        row.id = "student-row-" + index;

        // No
        var noDiv = document.createElement('div');
        noDiv.innerText = student.no;
        row.appendChild(noDiv);

        // Name
        var nameDiv = document.createElement('div');
        nameDiv.innerText = formatStudentDisplayName(student.name);
        row.appendChild(nameDiv);

        // Status Buttons
        var actionsDiv = document.createElement('div');
        actionsDiv.className = "status-actions";

        // Missing (Yapmadı)
        var btnMissing = document.createElement('button');
        btnMissing.className = "status-btn btn-missing";
        btnMissing.innerText = "Yapmadı";
        btnMissing.onclick = function () { setStudentStatus(index, 'missing'); };

        // Done (Yaptı)
        var btnDone = document.createElement('button');
        btnDone.className = "status-btn btn-done";
        btnDone.innerText = "Yaptı";
        btnDone.onclick = function () { setStudentStatus(index, 'done'); };

        // Half (Yarım Yaptı)
        var btnHalf = document.createElement('button');
        btnHalf.className = "status-btn btn-half";
        btnHalf.innerText = "Yarım";
        btnHalf.onclick = function () { setStudentStatus(index, 'half'); };

        // Unknown (Kontrol Edilemedi)
        var btnPending = document.createElement('button');
        btnPending.className = "status-btn btn-pending selected";
        btnPending.innerText = "?";
        btnPending.onclick = function () { setStudentStatus(index, 'pending'); };

        actionsDiv.appendChild(btnMissing);
        actionsDiv.appendChild(btnDone);
        actionsDiv.appendChild(btnHalf);
        actionsDiv.appendChild(btnPending);

        row.appendChild(actionsDiv);
        container.appendChild(row);

        // Initialize status
        if (!student.status) student.status = 'pending';
        // Apply visual state
        setStudentStatus(index, student.status);
    });
}

function setStudentStatus(index, status) {
    currentHwStudents[index].status = status;

    var row = document.getElementById('student-row-' + index);
    row.className = "student-row row-" + status;

    // Update button states
    var buttons = row.querySelectorAll('.status-btn');
    buttons.forEach(function (btn) {
        btn.classList.remove('selected');
        if (btn.classList.contains('btn-' + status)) {
            btn.classList.add('selected');
        }
    });
}

function saveHomeworkToFirebase() {
    var hwName = document.getElementById('hw-name').value;
    // Recalculate date or use existing date if editing?
    // If editing, we should keep original date.
    // NOTE: For simplicity, if editing, we might update date or keep it. 
    // The previous implementation used input value. 
    // Now input is hidden.

    // We need to store 'date' in dataset or memory if editing.
    // If new, use today.
    var hwDate;
    if (selectedHomeworkId) {
        // Editing - logic to get original date needed. 
        // For now let's just use today's date on update OR find a way to store it.
        // Simplest: Add a hidden attribute or variable.
        // For now, assume date is managed elsewhere or implicitly 'today' for new entries
        // Let's assume Update sets it to Today or we can fetch it. 
        // Better: We stored it in 'currentHwData' maybe?
        // Let's use Today for simplicity as per "Automatic" request.
        var today = new Date(); // Or parse from title? Title has date.
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0');
        var yyyy = today.getFullYear();
        hwDate = yyyy + '-' + mm + '-' + dd;
    } else {
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0');
        var yyyy = today.getFullYear();
        hwDate = yyyy + '-' + mm + '-' + dd;
    }

    if (!hwName || !currentHwClass) return;

    var newHomework = {
        name: hwName,
        date: hwDate,
        updatedAt: firebase.database.ServerValue.TIMESTAMP,
        results: {}
    };

    currentHwStudents.forEach(function (s) {
        newHomework.results[s.no] = s.status || 'pending';
    });

    var hwRef = firebase.database().ref('homeworks/' + currentHwClass);

    var onComplete = function (error) {
        if (error) {
            alert("Kaydetme başarısız: " + error);
        } else {
            // alert("Ödev ve kontrol başarıyla kaydedildi!"); // Removed as per request
            // Don't close modal.
            // Reset form partly?
            document.getElementById('active-homework-container').style.display = 'none';
            document.getElementById('hw-name').value = "";
            selectedHomeworkId = null;

            // Reload list and flash
            loadPreviousHomeworks(currentHwClass, true); // True for highlighting
        }
    };

    if (selectedHomeworkId) {
        hwRef.child(selectedHomeworkId).update(newHomework, onComplete);
    } else {
        newHomework.createdAt = firebase.database.ServerValue.TIMESTAMP;
        hwRef.push().set(newHomework, onComplete);
    }
}

function loadPreviousHomeworks(className, highlightNewest) {
    var container = document.getElementById('previous-homeworks');
    container.innerHTML = "Yükleniyor...";

    var hwRef = firebase.database().ref('homeworks/' + className).orderByChild('date');
    hwRef.limitToLast(10).once('value').then(function (snapshot) {
        container.innerHTML = "";
        var data = snapshot.val();
        if (!data) {
            container.innerHTML = "Henüz kayıtlı ödev yok.";
            return;
        }

        var list = [];
        snapshot.forEach(function (child) {
            list.push({ key: child.key, val: child.val() });
        });
        list.reverse();

        list.forEach(function (item, index) {
            var div = document.createElement('div');
            div.className = "prev-hw-item";
            // Flash animation if requested (e.g. valid for first item)
            if (highlightNewest && index === 0) {
                div.classList.add("flash-item");
            }

            // Inline onclick for robustness against re-renders
            // Note: we use quote escaping for security but keys are usually safe.
            div.innerHTML = `
                <span>${item.val.date} - <b>${item.val.name}</b></span> 
                <span>
                    <button type="button" class="hw-action-btn edit-btn" onclick="window.confirmEditHomework('${item.key}')">Düzenle</button>
                    <button type="button" class="hw-action-btn del-btn" onclick="window.confirmDeleteHomework('${item.key}')">Sil</button>
                </span>
            `;
            container.appendChild(div);
        });

        // No extra listeners needed
    });
}

window.confirmEditHomework = function (hwId) {
    if (!hwId) { alert("Hata: Ödev ID eksik."); return; }
    pendingAction = function () { loadHomeworkForEdit(hwId); };
    openPasswordModal("Düzenlemek İçin Şifre Girin");
}

window.confirmDeleteHomework = function (hwId) {
    if (!hwId) { alert("Hata: Ödev ID eksik."); return; }
    pendingAction = function () { deleteHomework(hwId); };
    openPasswordModal("Silmek İçin Şifre Girin");
}

function deleteHomework(hwId) {
    if (confirm("Bu ödevi silmek istediğinize emin misiniz?")) {
        firebase.database().ref('homeworks/' + currentHwClass + '/' + hwId).remove()
            .then(function () {
                loadPreviousHomeworks(currentHwClass);
            })
            .catch(function (err) {
                alert("Silinemedi: " + err);
            });
    }
}

function loadHomeworkForEdit(hwId) {
    firebase.database().ref('homeworks/' + currentHwClass + '/' + hwId).once('value').then(function (snapshot) {
        var data = snapshot.val();
        if (!data) return;

        selectedHomeworkId = hwId;
        document.getElementById('hw-name').value = data.name;
        // Date is hidden but we load it to memory if we wanted.

        // Restore student statuses
        // We reload student list from settings to ensure we have all students (even new ones)
        // Then apply status keys
        currentHwStudents = JSON.parse(JSON.stringify(studentData[currentHwClass] || []));

        var results = data.results || {};
        currentHwStudents.forEach(function (s) {
            if (results[s.no]) {
                s.status = results[s.no];
            } else {
                s.status = 'pending';
            }
        });

        // Show UI
        document.getElementById('active-homework-container').style.display = 'block';
        document.getElementById('active-homework-title').innerText = data.name + " (" + data.date + ") - DÜZENLENİYOR";

        renderStudentListForMarking();
        // Scroll to top
        document.getElementById('homework-modal').querySelector('.modal-content').scrollTop = 0;
    });
}

// ===================
// REPORT SYSTEM
// ===================
function openHomeworkReport() {
    document.getElementById('report-modal').style.display = 'flex';
    generateReportControls();
    loadReportData('all');
}

function closeReportModal() {
    document.getElementById('report-modal').style.display = 'none';
}

function generateReportControls() {
    var container = document.getElementById('report-class-filters');
    container.innerHTML = "";

    var classes = Object.keys(studentData).sort();
    classes.forEach(function (cls) {
        var btn = document.createElement('button');
        btn.className = "filter-btn";
        btn.innerText = cls;

        btn.onclick = function () {
            window.filterReport(cls);
        };

        container.appendChild(btn);
    });
}

function loadReportData(filterClass) {
    var body = document.getElementById('report-body');
    body.innerHTML = "<tr><td colspan='8' style='text-align:center'>Veriler yükleniyor...</td></tr>";

    firebase.database().ref('homeworks').once('value').then(function (snapshot) {
        var allData = snapshot.val();
        if (!allData) {
            body.innerHTML = "<tr><td colspan='8' style='text-align:center'>Hiç veri yok.</td></tr>";
            return;
        }

        var stats = {};
        var classTotalHw = {}; // Keep track of total homeworks per class

        // Initialize stats
        Object.keys(studentData).forEach(function (cls) {
            if (filterClass !== 'all' && cls !== filterClass) return;
            classTotalHw[cls] = 0;

            studentData[cls].forEach(function (s) {
                var key = cls + "-" + s.no;
                stats[key] = {
                    class: cls,
                    no: s.no,
                    name: s.name,
                    done: 0,
                    missing: 0,
                    half: 0,
                    pending: 0,
                    totalHws: 0 // Will set later
                };
            });
        });

        // Count homeworks and stats
        Object.keys(allData).forEach(function (clsKey) {
            if (filterClass !== 'all' && clsKey !== filterClass) return;

            var classHws = allData[clsKey];
            var hwCount = Object.keys(classHws).length;
            if (classTotalHw[clsKey] !== undefined) {
                classTotalHw[clsKey] = hwCount;
            }

            Object.values(classHws).forEach(function (hw) {
                var results = hw.results || {};
                Object.keys(results).forEach(function (studentNo) {
                    var key = clsKey + "-" + studentNo;
                    if (stats[key]) {
                        var status = results[studentNo];
                        if (status === 'done') stats[key].done++;
                        else if (status === 'missing') stats[key].missing++;
                        else if (status === 'half') stats[key].half++;
                        else stats[key].pending++;
                    }
                });
            });
        });

        // Update totalHws from classTotalHw
        Object.values(stats).forEach(function (s) {
            s.totalHws = classTotalHw[s.class] || 0;
        });

        // Sort by MISSING
        var sortedStats = Object.values(stats).sort(function (a, b) {
            return b.missing - a.missing;
        });

        renderReportTable(sortedStats);
    });
}

function renderReportTable(data) {
    var body = document.getElementById('report-body');
    body.innerHTML = "";

    if (data.length === 0) {
        body.innerHTML = "<tr><td colspan='8' style='text-align:center'>Bu kriterde öğrenci bulunamadı.</td></tr>";
        return;
    }

    data.forEach(function (item) {
        var tr = document.createElement('tr');
        if (item.missing > 3) tr.style.background = "rgba(255, 71, 87, 0.2)";

        tr.innerHTML = `
            <td>${item.class}</td>
            <td>${item.no}</td>
            <td>${formatStudentDisplayName(item.name)}</td>
            <td style="color:#ff4757; font-weight:bold;">${item.missing}</td>
            <td style="color:#2ecc71;">${item.done}</td>
            <td style="color:#f59e0b; font-weight:bold;">${item.half}</td>
            <td style="color:#f1c40f;">${item.pending}</td>
            <td style="font-weight:bold;">${item.totalHws}</td>
        `;
        body.appendChild(tr);
    });
}

window.openHomeworkControl = openHomeworkControl;
window.closeHomeworkModal = closeHomeworkModal;
window.triggerAddHomework = triggerAddHomework;
window.saveHomeworkToFirebase = saveHomeworkToFirebase;
window.openHomeworkReport = openHomeworkReport;
window.closeReportModal = closeReportModal;
window.checkTeacherPassword = checkTeacherPassword;
window.closePasswordModal = closePasswordModal;
window.goBackInHomework = goBackInHomework;
window.confirmEditHomework = confirmEditHomework;
window.confirmDeleteHomework = confirmDeleteHomework;
window.filterReport = function (cls) {
    document.querySelectorAll('.filter-btn').forEach(b => b.style.background = "rgba(255,255,255,0.1)");
    var activeBtn = cls === 'all' ? document.getElementById('filter-all-btn') : null;
    if (activeBtn) activeBtn.style.background = "var(--accent-color)";
    else {
        // Find button by text? Cleaner to allow 'this' context but logic is separate
        // Just reset all and highlight clicked in generation?
        // Since we regenerate buttons, we can highlight there?
        // Actually, I should update loop to set active class.
        // Let's rely on simple hack:
        var buttons = document.querySelectorAll('.filter-btn');
        buttons.forEach(b => {
            if (b.innerText === cls) b.style.background = "var(--accent-color)";
        });
    }
    loadReportData(cls);
};

// Version is now statically defined in HTML (updated manually before each deployment)

// ========================================
// UNIT SELECTION SYSTEM
// ========================================
function showUnitSelection(gameMode) {
    const unitScreen = document.getElementById('unit-selection');
    const unitGrid = document.getElementById('unit-grid');

    if (!unitScreen || !unitGrid) return;

    // Clear previous units
    unitGrid.innerHTML = '';

    // Get units for current vocab mode
    const units = getUnitsForVocabMode();

    // Create unit cards
    units.forEach(unit => {
        const card = document.createElement('button');
        card.className = 'unit-card';
        card.textContent = unit.name;
        card.onclick = () => selectUnit(unit.id, gameMode);
        unitGrid.appendChild(card);
    });

    // Show unit selection screen
    unitScreen.style.display = 'flex';
}

function selectUnit(unitId, gameMode) {
    selectedUnit = unitId;

    // Hide unit selection
    const unitScreen = document.getElementById('unit-selection');
    if (unitScreen) unitScreen.style.display = 'none';

    // Start the selected game mode
    if (gameMode === 'wheel') {
        initWheelMode();
    } else if (gameMode === 'millionaire') {
        initMillionaireMode();
    } else if (gameMode === 'hangman') {
        initHangmanMode();
    } else if (gameMode === 'taboo') {
        initTabooMode();
    }
}

function getUnitsForVocabMode() {
    const units = [];

    if (selectedVocabMode === 'standard') {
        // Standard English levels
        units.push(
            { id: 'A1', name: 'A1' },
            { id: 'A2', name: 'A2' },
            { id: 'B1', name: 'B1' },
            { id: 'B2', name: 'B2' },
            { id: 'C1', name: 'C1' },
            { id: 'C2', name: 'C2' }
        );
    } else if (selectedVocabMode === 'grade9') {
        // 9th grade units
        for (let i = 1; i <= 8; i++) {
            units.push({ id: `Grade9_Unit${i}`, name: `Unit ${i}` });
        }
    } else if (selectedVocabMode === 'ydt') {
        // YDT units
        for (let i = 1; i <= 10; i++) {
            units.push({ id: `YDT_Unit${i}`, name: `Unit ${i}` });
        }
    }

    return units;
}

function getWordsForVocabMode() {
    if (!selectedUnit) return [];

    let words = [];

    if (selectedVocabMode === 'standard') {
        // Get words from selected level in standard mode
        // Format: { question: "English", answer: "Turkish", pronunciation: "..." }
        const levelData = gameData.levelData[selectedUnit];
        if (levelData) {
            levelData.forEach(category => {
                category.pool.forEach(word => {
                    words.push({
                        english: word.answer,
                        turkish: word.question,
                        pronunciation: word.pronunciation || '',
                        example: word.example || '',
                        exampleTR: word.exampleTR || ''
                    });
                });
            });
        }
    } else if (selectedVocabMode === 'grade9' || selectedVocabMode === 'ydt') {
        // Get words from selected 9th grade or YDT unit
        // Format: { answer: "English", question: "Turkish", pronunciation: "..." }
        const unitData = gameData.levelData[selectedUnit];
        if (unitData) {
            unitData.forEach(category => {
                category.pool.forEach(word => {
                    words.push({
                        english: word.answer,
                        turkish: word.question,
                        pronunciation: word.pronunciation || '',
                        example: word.example || '',
                        exampleTR: word.exampleTR || ''
                    });
                });
            });
        }
    }

    // Shuffle words
    return shuffleArray(words);
}

// ========================================
// WHEEL OF FORTUNE MODE
// ========================================
let wheelWords = [];
let wheelPoints = 0;
let wheelCanvas, wheelCtx;
let currentWheelRotation = 0;
let isSpinning = false;

function initWheelMode() {
    // Get words based on vocabulary mode
    wheelWords = getWordsForVocabMode();
    wheelPoints = 0;

    // Show wheel container
    const wheelContainer = document.getElementById('wheel-container');
    wheelContainer.style.display = 'flex';

    // Update score display
    document.getElementById('wheel-points').textContent = wheelPoints;
    document.getElementById('wheel-words-left').textContent = wheelWords.length;

    // Initialize canvas
    wheelCanvas = document.getElementById('wheel-canvas');
    wheelCtx = wheelCanvas.getContext('2d');

    // Set canvas size
    const size = Math.min(window.innerWidth * 0.8, 600);
    wheelCanvas.width = size;
    wheelCanvas.height = size;

    // Draw initial wheel
    drawWheel();

    // Show header
    document.querySelector('header').style.display = 'flex';

    // Initialize team scores for wheel mode (Always reset on entry)
    if (playType === 'team') {
        gameData.scores = [0, 0, 0, 0];
    }

    // Initialize team scoreboard for wheel mode
    renderWheelScoreboard();
}

function shuffleArray(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

function drawWheel() {
    const centerX = wheelCanvas.width / 2;
    const centerY = wheelCanvas.height / 2;
    const radius = wheelCanvas.width / 2 - 10;
    const segmentAngle = (2 * Math.PI) / wheelWords.length;

    // Clear canvas
    wheelCtx.clearRect(0, 0, wheelCanvas.width, wheelCanvas.height);

    // Save context
    wheelCtx.save();
    wheelCtx.translate(centerX, centerY);
    wheelCtx.rotate(currentWheelRotation);

    // Draw segments
    const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#f9ca24', '#6c5ce7', '#fd79a8',
        '#a29bfe', '#00b894', '#e17055', '#0984e3', '#fdcb6e', '#d63031'];

    for (let i = 0; i < wheelWords.length; i++) {
        const startAngle = i * segmentAngle;
        const endAngle = startAngle + segmentAngle;

        // Draw segment
        wheelCtx.beginPath();
        wheelCtx.arc(0, 0, radius, startAngle, endAngle);
        wheelCtx.lineTo(0, 0);
        wheelCtx.fillStyle = colors[i % colors.length];
        wheelCtx.fill();
        wheelCtx.strokeStyle = '#fff';
        wheelCtx.lineWidth = 2;
        wheelCtx.stroke();

        // Draw text (word)
        wheelCtx.save();
        wheelCtx.rotate(startAngle + segmentAngle / 2);
        wheelCtx.textAlign = 'right';
        wheelCtx.fillStyle = '#fff';
        wheelCtx.font = 'bold 16px Poppins';
        wheelCtx.shadowColor = 'rgba(0,0,0,0.5)';
        wheelCtx.shadowBlur = 3;

        const word = wheelWords[i];
        // Always show English word on the wheel
        const displayText = word.english;
        wheelCtx.fillText(displayText.substring(0, 15), radius - 10, 5);


        wheelCtx.restore();
    }

    // Draw center circle
    wheelCtx.beginPath();
    wheelCtx.arc(0, 0, 30, 0, 2 * Math.PI);
    wheelCtx.fillStyle = '#ffd700';
    wheelCtx.fill();

    wheelCtx.restore();

    // Draw pointer at top
    wheelCtx.save();
    wheelCtx.translate(centerX, 0);
    wheelCtx.beginPath();
    wheelCtx.moveTo(0, 20);
    wheelCtx.lineTo(-15, 0);
    wheelCtx.lineTo(15, 0);
    wheelCtx.closePath();
    wheelCtx.fillStyle = '#ff4757';
    wheelCtx.fill();
    wheelCtx.strokeStyle = '#fff';
    wheelCtx.lineWidth = 2;
    wheelCtx.stroke();
    wheelCtx.restore();
}

// Web Audio API Context
let audioCtx;

function initAudio() {
    if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
}

function playTickSound() {
    if (!audioCtx) return;

    // Create oscillator
    const oscillator = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();

    oscillator.type = 'triangle';
    oscillator.frequency.setValueAtTime(800, audioCtx.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(100, audioCtx.currentTime + 0.1);

    gainNode.gain.setValueAtTime(0.1, audioCtx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.1);

    oscillator.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    oscillator.start();
    oscillator.stop(audioCtx.currentTime + 0.1);
}

function spinWheel() {
    if (isSpinning || wheelWords.length === 0) return;

    // Initialize audio on user interaction
    initAudio();
    if (audioCtx && audioCtx.state === 'suspended') {
        audioCtx.resume();
    }

    isSpinning = true;

    // Random spin (5-8 full rotations + random position)
    const spins = 5 + Math.random() * 3;
    const extraDegrees = Math.random() * 360;
    const totalRotation = (spins * 360 + extraDegrees) * Math.PI / 180;

    const duration = 4000; // 4 seconds
    const startTime = Date.now();
    const startRotation = currentWheelRotation;

    // For sound tracking
    let lastSegmentIndex = -1;
    const segmentAngle = (2 * Math.PI) / wheelWords.length;

    function animate() {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Easing function (ease out cubic)
        const easeProgress = 1 - Math.pow(1 - progress, 3);

        const currentRot = startRotation + totalRotation * easeProgress;
        currentWheelRotation = currentRot;

        // Calculate current segment for sound
        // Pointer is at TOP (PI/2), so we adjust rotation
        // The wheel rotates, so the segment passing the pointer changes
        const normalizedRot = currentRot % (2 * Math.PI);
        const effectiveAngle = (2 * Math.PI - normalizedRot + Math.PI / 2) % (2 * Math.PI);
        const currentSegmentIndex = Math.floor(effectiveAngle / segmentAngle);

        if (lastSegmentIndex !== -1 && currentSegmentIndex !== lastSegmentIndex) {
            playTickSound();
        }
        lastSegmentIndex = currentSegmentIndex;

        drawWheel();

        if (progress < 1) {
            requestAnimationFrame(animate);
        } else {
            // Spin complete - determine winner
            isSpinning = false;
            selectWheelWord();
        }
    }

    animate();
}

function selectWheelWord() {
    // Normalize rotation to 0-2π
    const normalizedRotation = currentWheelRotation % (2 * Math.PI);

    // Pointer is at top (π/2), calculate which segment it points to
    const pointerAngle = Math.PI / 2;
    const adjustedAngle = (2 * Math.PI - normalizedRotation + pointerAngle) % (2 * Math.PI);

    const segmentAngle = (2 * Math.PI) / wheelWords.length;
    const segmentIndex = Math.floor(adjustedAngle / segmentAngle) % wheelWords.length;

    const selectedWord = wheelWords[segmentIndex];
    window.pendingWheelWord = selectedWord; // Store to restore if needed
    console.log("DEBUG: selectWheelWord - Set pendingWheelWord:", window.pendingWheelWord);

    // Remove word from array
    wheelWords.splice(segmentIndex, 1);
    document.getElementById('wheel-words-left').textContent = wheelWords.length;

    // Show question modal
    showWheelQuestion(selectedWord);

    // Redraw wheel with fewer segments
    drawWheel();

    // Check if game over
    if (wheelWords.length === 0) {
        setTimeout(() => {
            alert(`Game Over! Total Points: ${wheelPoints}`);
            goHome();
        }, 500);
    }
}

// Store current word for audio playback
let currentModalWord = null;

// ========================================
// WHEEL OF FORTUNE - Uses Unified Flashcard
// ========================================
function showWheelQuestion(word) {
    currentModalWord = word;

    // Call unified flashcard function
    showFlashcard({
        english: word.english || '',
        turkish: word.turkish || word.turkish_translation || '',
        pronunciation: word.pronunciation || '',
        example: word.example || '',
        exampleTR: word.exampleTR || ''
    }, {
        category: 'Wheel of Fortune',
        number: wheelPoints || 10,
        mode: 'wheel',
        onTeamSelect: handleWheelTeamSelection
    });
}

// Audio playback using Web Speech API
function playAudio(type) {
    if (!currentModalWord) return;

    let textToSpeak = '';
    let lang = 'en-US';

    if (type === 'question') {
        textToSpeak = currentModalWord.english || '';
        lang = 'en-US';
    } else if (type === 'answer') {
        textToSpeak = currentModalWord.turkish || currentModalWord.turkish_translation || '';
        lang = 'tr-TR';
    } else if (type === 'example') {
        textToSpeak = currentModalWord.example || '';
        lang = 'en-US';
    }

    if (!textToSpeak) return;

    // Cancel any ongoing speech
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();

        const utterance = new SpeechSynthesisUtterance(textToSpeak);
        utterance.lang = lang;
        utterance.rate = 0.9; // Slightly slower for clarity
        utterance.pitch = 1;
        utterance.volume = 1;

        window.speechSynthesis.speak(utterance);
    }
}

// Render scoreboard for Wheel mode (team or individual)
function renderWheelScoreboard() {
    const scoreboard = document.getElementById('wheel-scoreboard');
    if (!scoreboard) return;

    scoreboard.innerHTML = '';

    if (playType === 'individual') {
        // Individual mode - single score display
        const scoreDiv = document.createElement('div');
        scoreDiv.className = 'individual-score-card';
        scoreDiv.innerHTML = `
            <div class="individual-score-label">Your Score</div>
            <div class="individual-score-value" id="wheel-individual-score">${individualScore}</div>
        `;
        scoreboard.appendChild(scoreDiv);
    } else {
        // Team mode - show all team scores
        if (!gameData.groupNames) return;

        gameData.groupNames.forEach((name, index) => {
            const teamDiv = document.createElement('div');
            teamDiv.className = 'wheel-team-score';
            teamDiv.id = `wheel-team-${index}`;
            teamDiv.innerHTML = `
                <div class="wheel-team-name">${name}</div>
                <div class="wheel-team-points">${gameData.scores[index]}</div>
            `;
            scoreboard.appendChild(teamDiv);
        });
    }
}

// Update individual scoreboard display
function updateIndividualScoreboard() {
    const scoreEl = document.getElementById('wheel-individual-score');
    if (scoreEl) {
        scoreEl.textContent = individualScore;
    }
}

// Handle selection in Wheel mode (team or individual)
function handleWheelTeamSelection(teamIndex) {
    if (teamIndex === -1 || playType === 'individual') {
        // Individual mode - add to individual score
        individualScore += 10;
        wheelPoints += 10;
        document.getElementById('wheel-points').textContent = wheelPoints;
    } else {
        // Team mode - award to team directly (don't use updateScore which targets Team Competition board)
        if (gameData.scores && teamIndex >= 0 && teamIndex < gameData.scores.length) {
            gameData.scores[teamIndex] += 10;
        }
        wheelPoints += 10;
        document.getElementById('wheel-points').textContent = wheelPoints;
    }

    // Update words count
    document.getElementById('wheel-words-left').textContent = wheelWords.length;

    // Update wheel scoreboard
    renderWheelScoreboard();

    // Confirm word usage (so it doesn't get restored)
    window.pendingWheelWord = null;
    console.log("DEBUG: handleWheelTeamSelection - Cleared pendingWheelWord");

    closeModal(true); // Skip history.back() to prevent navigation to homepage

    // Check if game over
    if (wheelWords.length === 0) {
        setTimeout(() => {
            if (playType === 'individual') {
                alert(`Game Over! Your Score: ${individualScore}`);
            } else {
                alert(`Game Over! Check team scores.`);
            }
            goHome();
        }, 500);
    }
}



// ========================================
// MILLIONAIRE QUIZ MODE
// ========================================
let millionaireQuestions = [];
let millionaireCurrentQuestion = 0;
let millionaireTotalPoints = 0;
let millionaireTimer;
let millionaireTimeLeft = 30;
let millionaireLifelines = {
    '5050': false,
    'teacher': false,
    'time': false
};

let isGameActive = false; // Flag to prevent audio race conditions
let previousDistractors = []; // Track used wrong answers to prevent repeats
let millionaireWordPool = []; // Store ALL words from unit for contextual distractors

const prizeLadder = [1, 2, 3, 5, 10, 15, 25, 50, 75, 100];

// Audio Handler for Millionaire Mode (Synthesized)
const MillionaireSounds = {
    audioCtx: null,
    suspenseOsc: null,
    suspenseGain: null,

    init() {
        if (!this.audioCtx) {
            this.audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        }
        if (this.audioCtx.state === 'suspended') {
            this.audioCtx.resume();
        }
    },

    playSuspense() {
        this.init();
        if (this.suspenseOsc) return; // Already playing

        this.suspenseOsc = this.audioCtx.createOscillator();
        this.suspenseGain = this.audioCtx.createGain();

        this.suspenseOsc.type = 'sine';
        this.suspenseOsc.frequency.setValueAtTime(100, this.audioCtx.currentTime); // Low drone

        // LFO for pulsing effect
        const lfo = this.audioCtx.createOscillator();
        lfo.type = 'sine';
        lfo.frequency.setValueAtTime(0.5, this.audioCtx.currentTime);
        const lfoGain = this.audioCtx.createGain();
        lfoGain.gain.setValueAtTime(0.05, this.audioCtx.currentTime);

        lfo.connect(lfoGain);
        lfoGain.connect(this.suspenseGain.gain);

        this.suspenseOsc.connect(this.suspenseGain);
        this.suspenseGain.connect(this.audioCtx.destination);

        this.suspenseGain.gain.setValueAtTime(0.05, this.audioCtx.currentTime); // Low volume

        this.suspenseOsc.start();
        lfo.start();

        // Store for stopping
        this.lfo = lfo;
    },

    stopSuspense() {
        if (this.suspenseOsc) {
            try {
                this.suspenseOsc.stop();
                this.lfo.stop();
                this.suspenseOsc.disconnect();
                this.lfo.disconnect();
            } catch (e) { console.log(e); }
            this.suspenseOsc = null;
        }
    },

    playCorrect() {
        this.init();
        const now = this.audioCtx.currentTime;

        // Maj Chord Arpeggio
        [523.25, 659.25, 783.99, 1046.50].forEach((freq, i) => {
            const osc = this.audioCtx.createOscillator();
            const gain = this.audioCtx.createGain();

            osc.frequency.setValueAtTime(freq, now + i * 0.1);
            osc.type = 'triangle';

            gain.gain.setValueAtTime(0, now + i * 0.1);
            gain.gain.linearRampToValueAtTime(0.2, now + i * 0.1 + 0.05);
            gain.gain.exponentialRampToValueAtTime(0.01, now + i * 0.1 + 0.5);

            osc.connect(gain);
            gain.connect(this.audioCtx.destination);

            osc.start(now + i * 0.1);
            osc.stop(now + i * 0.1 + 0.6);
        });
    },

    playWrong() {
        this.init();
        const now = this.audioCtx.currentTime;

        const osc = this.audioCtx.createOscillator();
        const gain = this.audioCtx.createGain();

        osc.frequency.setValueAtTime(150, now);
        osc.frequency.linearRampToValueAtTime(50, now + 0.5); // Slide down
        osc.type = 'sawtooth';

        gain.gain.setValueAtTime(0.3, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.5);

        osc.connect(gain);
        gain.connect(this.audioCtx.destination);

        osc.start(now);
        osc.stop(now + 0.5);
    },

    stopAll() {
        this.stopSuspense();
        if (this.audioCtx) {
            // this.audioCtx.close(); // Don't close, keep for reuse
        }
    }
};

function initMillionaireMode() {
    // Get and prepare questions
    millionaireQuestions = prepareMillionaireQuestions();
    millionaireCurrentQuestion = 0;
    millionaireTotalPoints = 0;
    millionaireLifelines = { '5050': false, 'teacher': false, 'time': false };

    // Show millionaire container
    const millContainer = document.getElementById('millionaire-container');
    millContainer.style.display = 'flex';

    // Build prize ladder
    buildPrizeLadder();

    // Start first question
    // Start first question
    showMillionaireQuestion();

    // Background music disabled
    // MillionaireSounds.playSuspense();

    // Set Game Active Flag
    isGameActive = true;
    previousDistractors = []; // Reset distractor history on new game

    // Reset lifeline buttons
    document.querySelectorAll('.lifeline-btn').forEach(btn => {
        btn.classList.remove('used');
    });

    // Show header
    document.querySelector('header').style.display = 'flex';
}

function prepareMillionaireQuestions() {
    let allWords = [];

    // Get words from all levels for progressive difficulty
    if (selectedVocabMode === 'standard') {
        const levels = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
        levels.forEach(lvl => {
            const levelData = gameData.levelData[lvl];
            if (levelData) {
                levelData.forEach(cat => {
                    cat.pool.forEach(w => {
                        allWords.push({
                            english: w.answer,
                            turkish: w.question,
                            pronunciation: w.pronunciation || '',
                            example: w.example || '',
                            exampleTR: w.exampleTR || '',
                            difficulty: lvl
                        });
                    });
                });
            }
        });
    } else if (selectedVocabMode === 'grade9') {
        // Use multiple units for variety
        for (let i = 1; i <= 8; i++) {
            const unitKey = `Grade9_Unit${i}`;
            if (gameData.levelData[unitKey]) {
                gameData.levelData[unitKey].forEach(cat => {
                    cat.pool.forEach(w => {
                        allWords.push({
                            english: w.answer,
                            turkish: w.question,
                            pronunciation: w.pronunciation || '',
                            example: w.example || '',
                            exampleTR: w.exampleTR || '',
                            difficulty: `U${i}`
                        });
                    });
                });
            }
        }
    } else if (selectedVocabMode === 'ydt') {
        for (let i = 1; i <= 10; i++) {
            const unitKey = `YDT_Unit${i}`;
            if (gameData.levelData[unitKey]) {
                gameData.levelData[unitKey].forEach(category => {
                    category.pool.forEach(w => {
                        allWords.push({
                            english: w.answer,
                            turkish: w.question,
                            pronunciation: w.pronunciation || '',
                            example: w.example || '',
                            exampleTR: w.exampleTR || '',
                            difficulty: `U${i}`
                        });
                    });
                });
            }
        }
    }

    // Shuffle and select 10 questions
    // Store FULL pool for distractor generation
    millionaireWordPool = allWords;

    // Now slice for the game questions
    allWords = shuffleArray(allWords);
    return allWords.slice(0, 10);
}

function buildPrizeLadder() {
    const ladder = document.getElementById('prize-ladder');
    ladder.innerHTML = '';

    // Reverse order: Start from lowest point (Index 0) at the top/start of list?
    // User asked "puan kısmı da en yüksek puandan değil en düşük puandan başlasın"
    // Usually standard Millionaire has lowest at bottom, climbing up. 
    // If they want "start from lowest", it likely means 1 Point at top? Or just rendered 0..N?
    // Let's assume standard list order: 1, 2, 3 ... 10 (Ascending visual order)

    for (let i = 0; i < prizeLadder.length; i++) {
        const step = document.createElement('div');
        step.className = 'prize-step';
        step.textContent = `${prizeLadder[i]} Points`;
        step.dataset.index = i;
        ladder.appendChild(step);
    }
}

function showMillionaireQuestion() {
    if (millionaireCurrentQuestion >= millionaireQuestions.length) {
        // Game complete!
        setTimeout(() => {
            alert(`Congratulations! You won ${millionaireTotalPoints} points!`);
            goHome();
        }, 500);
        return;
    }

    const word = millionaireQuestions[millionaireCurrentQuestion];

    // Update ladder highlighting
    document.querySelectorAll('.prize-step').forEach((step, idx) => {
        step.classList.remove('current', 'completed');
        if (idx === millionaireCurrentQuestion) {
            step.classList.add('current');
        } else if (idx < millionaireCurrentQuestion) {
            step.classList.add('completed');
        }
    });

    // Set question
    const questionEl = document.getElementById('millionaire-question');
    questionEl.textContent = word.english;

    // Generate 4 answer options (1 correct + 3 wrong)
    const correctAnswer = word.turkish || word.turkish_translation;
    const wrongAnswers = generateWrongAnswers(correctAnswer);
    const allAnswers = shuffleArray([correctAnswer, ...wrongAnswers]);

    // Display answers
    const answersContainer = document.getElementById('millionaire-answers');
    answersContainer.innerHTML = '';

    const letters = ['A', 'B', 'C', 'D'];
    allAnswers.forEach((ans, idx) => {
        const btn = document.createElement('button');
        btn.className = 'mill-answer-btn';
        btn.dataset.letter = letters[idx];
        btn.innerHTML = `<span class="answer-text">${ans}</span>`;
        btn.onclick = () => checkMillionaireAnswer(ans, correctAnswer, btn);
        answersContainer.appendChild(btn);
    });

    // Start timer
    millionaireTimeLeft = 30;
    document.getElementById('millionaire-timer').textContent = millionaireTimeLeft;
    clearInterval(millionaireTimer);
    millionaireTimer = setInterval(() => {
        millionaireTimeLeft--;
        document.getElementById('millionaire-timer').textContent = millionaireTimeLeft;

        if (millionaireTimeLeft <= 0) {
            clearInterval(millionaireTimer);
            // Time's up - wrong answer
            alert("Time's up!");
            gameOverMillionaire();
        }
    }, 1000);

    // Play sequential audio
    playMillionaireAudioSequence(word.english, allAnswers);
}

function playMillionaireAudioSequence(questionWord, options) {
    // Cancel any existing speech
    window.speechSynthesis.cancel();

    // Only read the question, not the options
    const questionUtterance = new SpeechSynthesisUtterance(`What is the meaning of ${questionWord}?`);
    questionUtterance.lang = 'en-US';
    questionUtterance.rate = 0.9;

    window.speechSynthesis.speak(questionUtterance);

    // Option voice-overs disabled
}

function generateWrongAnswers(correctAnswer) {
    // 1. Get raw words from the CURRENT UNIT's pool (millionaireWordPool)
    // 2. Map them to their 'Turkish' answer string (since that's what we display on buttons)
    // 3. Filter out the correct answer and previously used distractors

    let potentialDistractors = [];

    if (millionaireWordPool && millionaireWordPool.length > 0) {
        // Map to Turkish answers or translations
        potentialDistractors = millionaireWordPool.map(w => w.turkish || w.turkish_translation);
    } else {
        // Fallback if pool is empty for some reason
        potentialDistractors = [
            'Kitap', 'Masa', 'Sandalye', 'Araba', 'Ev', 'Okul', 'Öğretmen', 'Öğrenci',
            'Kalem', 'Defter', 'Su', 'Yemek', 'Telefon', 'Bilgisayar', 'Pencere', 'Kapı'
        ];
    }

    // Filter out:
    // a) The correct answer itself
    // b) Any distractors we just used in the last round (to prevent repeats)
    const candidates = potentialDistractors.filter(ans =>
        ans !== correctAnswer && !previousDistractors.includes(ans)
    );

    // If we have less than 3 candidates (very small units?), fallback to allowing standard distractors
    // or just drop the "unique check" constraint
    let finalPool = candidates;
    if (candidates.length < 3) {
        finalPool = potentialDistractors.filter(ans => ans !== correctAnswer);
    }

    // Still empty? Use hardcoded fallback
    if (finalPool.length < 3) {
        finalPool = [
            'Kitap', 'Masa', 'Sandalye', 'Araba', 'Ev', 'Okul', 'Öğretmen', 'Öğrenci'
        ].filter(ans => ans !== correctAnswer);
    }

    const wrongAnswers = shuffleArray(finalPool).slice(0, 3);

    // Update history
    previousDistractors = wrongAnswers;

    return wrongAnswers;
}

function checkMillionaireAnswer(selected, correct, btnElement) {
    clearInterval(millionaireTimer);
    window.speechSynthesis.cancel(); // Stop audio immediately
    MillionaireSounds.stopSuspense(); // Stop music



    // Disable all buttons
    document.querySelectorAll('.mill-answer-btn').forEach(btn => {
        btn.style.pointerEvents = 'none';
    });

    if (selected === correct) {
        // Correct!
        btnElement.classList.add('correct');
        millionaireTotalPoints += prizeLadder[millionaireCurrentQuestion];
        MillionaireSounds.playCorrect();

        setTimeout(() => {
            millionaireCurrentQuestion++;
            showMillionaireQuestion();
            // MillionaireSounds.playSuspense(); // Background music disabled
        }, 2000);
    } else {
        // Wrong - game over
        btnElement.classList.add('wrong');
        MillionaireSounds.playWrong();

        setTimeout(() => {
            alert(`Wrong answer! Final score: ${millionaireTotalPoints} points`);
            gameOverMillionaire();
        }, 2000);
    }
}

function gameOverMillionaire() {
    // Show custom overlay instead of goHome
    const overlay = document.getElementById('millionaire-game-over');
    const scoreText = document.getElementById('millionaire-final-score');
    scoreText.textContent = `Final Score: ${millionaireTotalPoints} Points`;
    overlay.style.display = 'flex';
}

function restartMillionaireMode() {
    // Hide overlay
    document.getElementById('millionaire-game-over').style.display = 'none';

    // Reset game state
    millionaireCurrentQuestion = 0;
    millionaireTotalPoints = 0;

    // Reset lifelines
    millionaireLifelines = { '5050': false, 'teacher': false, 'time': false };
    document.querySelectorAll('.lifeline-btn').forEach(btn => btn.classList.remove('used'));

    // Re-init
    // Re-init
    initMillionaireMode();
    // initMillionaireMode starts suspense
}

function useLifeline(type) {
    if (millionaireLifelines[type]) return; // Already used

    millionaireLifelines[type] = true;
    document.getElementById(`lifeline-${type}`).classList.add('used');

    if (type === '5050') {
        // Remove 2 wrong answers
        const buttons = Array.from(document.querySelectorAll('.mill-answer-btn'));
        const correctAnswer = millionaireQuestions[millionaireCurrentQuestion].turkish ||
            millionaireQuestions[millionaireCurrentQuestion].turkish_translation;

        const wrongButtons = buttons.filter(btn =>
            btn.querySelector('.answer-text').textContent !== correctAnswer
        );

        // Hide 2 wrong answers
        shuffleArray(wrongButtons).slice(0, 2).forEach(btn => {
            btn.classList.add('hidden');
        });
    } else if (type === 'teacher') {
        // Show a hint (first letter)
        const word = millionaireQuestions[millionaireCurrentQuestion];
        // Determine correct answer
        const correctAnswer = word.turkish || word.turkish_translation;
        alert(`Teacher's Hint: The answer starts with "${correctAnswer.charAt(0)}"`);
    } else if (type === 'time') {
        // Add 15 seconds
        millionaireTimeLeft += 15;
        document.getElementById('millionaire-timer').textContent = millionaireTimeLeft;
    }
}

// ========================================
// HANGMAN GAME MODE
// ========================================
let hangmanWords = [];
let hangmanCurrentWord = null;
let hangmanGuessedLetters = [];
let hangmanWrongGuesses = 0;
let hangmanPoints = 0;
const MAX_WRONG_GUESSES = 6;
let hangmanCanvas, hangmanCtx;

function initHangmanMode() {
    // Get words based on vocabulary mode
    hangmanWords = getWordsForVocabMode();
    hangmanPoints = 0;

    if (hangmanWords.length === 0) {
        alert('No words available for this unit!');
        backToGameModes();
        return;
    }

    // Show hangman container
    const hangmanContainer = document.getElementById('hangman-container');
    hangmanContainer.style.display = 'flex';

    // Initialize canvas
    hangmanCanvas = document.getElementById('hangman-canvas');
    hangmanCtx = hangmanCanvas.getContext('2d');

    // Create keyboard
    createHangmanKeyboard();

    // Start first word
    startHangmanGame();
}

function createHangmanKeyboard() {
    const keyboard = document.getElementById('hangman-keyboard');
    keyboard.innerHTML = '';

    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

    letters.forEach(letter => {
        const key = document.createElement('button');
        key.className = 'hangman-key';
        key.textContent = letter;
        key.dataset.letter = letter;
        key.onclick = () => guessLetter(letter);
        keyboard.appendChild(key);
    });
}

function startHangmanGame() {
    if (hangmanWords.length === 0) {
        alert(`Game Over! Final Score: ${hangmanPoints} points`);
        backToGameModes();
        return;
    }

    // Get random word
    const randomIndex = Math.floor(Math.random() * hangmanWords.length);
    hangmanCurrentWord = hangmanWords.splice(randomIndex, 1)[0];

    // Reset game state
    hangmanGuessedLetters = [];
    hangmanWrongGuesses = 0;

    // Reset keyboard
    document.querySelectorAll('.hangman-key').forEach(key => {
        key.classList.remove('used', 'correct', 'wrong');
    });

    // Update displays
    updateHangmanDisplay();
    drawHangman(0);
    document.getElementById('hangman-points').textContent = hangmanPoints;
    document.getElementById('hangman-words-left').textContent = hangmanWords.length;
    document.getElementById('hangman-lives').textContent = MAX_WRONG_GUESSES;
}

function guessLetter(letter) {
    if (hangmanGuessedLetters.includes(letter)) return;

    hangmanGuessedLetters.push(letter);

    const key = document.querySelector(`[data-letter="${letter}"]`);
    key.classList.add('used');

    // Check if letter is in word
    const word = hangmanCurrentWord.english.toUpperCase();
    if (word.includes(letter)) {
        // Correct guess
        key.classList.add('correct');
        updateHangmanDisplay();

        // Check for win
        if (checkHangmanWin()) {
            setTimeout(() => {
                hangmanPoints += 10;
                alert(`Correct! +10 points\nWord: ${hangmanCurrentWord.english}\nTurkish: ${hangmanCurrentWord.turkish}`);
                startHangmanGame();
            }, 500);
        }
    } else {
        // Wrong guess
        key.classList.add('wrong');
        hangmanWrongGuesses++;
        document.getElementById('hangman-lives').textContent = MAX_WRONG_GUESSES - hangmanWrongGuesses;
        drawHangman(hangmanWrongGuesses);

        // Check for loss
        if (hangmanWrongGuesses >= MAX_WRONG_GUESSES) {
            setTimeout(() => {
                alert(`Game Over!\nWord was: ${hangmanCurrentWord.english}\nTurkish: ${hangmanCurrentWord.turkish}`);
                startHangmanGame();
            }, 500);
        }
    }
}

function updateHangmanDisplay() {
    const wordDisplay = document.getElementById('hangman-word');
    const hintDisplay = document.getElementById('hangman-hint');

    const word = hangmanCurrentWord.english.toUpperCase();
    let display = '';

    for (let letter of word) {
        if (letter === ' ') {
            display += '  '; // Space
        } else if (hangmanGuessedLetters.includes(letter)) {
            display += letter + ' ';
        } else {
            display += '_ ';
        }
    }

    wordDisplay.textContent = display;
    hintDisplay.textContent = `(${hangmanCurrentWord.turkish})`;
}

function checkHangmanWin() {
    const word = hangmanCurrentWord.english.toUpperCase();
    for (let letter of word) {
        if (letter !== ' ' && !hangmanGuessedLetters.includes(letter)) {
            return false;
        }
    }
    return true;
}

function drawHangman(wrongCount) {
    const ctx = hangmanCtx;
    const canvas = hangmanCanvas;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.strokeStyle = '#fff';
    ctx.lineWidth = 3;
    ctx.lineCap = 'round';

    // Base
    if (wrongCount >= 0) {
        ctx.beginPath();
        ctx.moveTo(20, 380);
        ctx.lineTo(280, 380);
        ctx.stroke();
    }

    // Pole
    if (wrongCount >= 1) {
        ctx.beginPath();
        ctx.moveTo(50, 380);
        ctx.lineTo(50, 50);
        ctx.stroke();
    }

    // Top bar
    if (wrongCount >= 2) {
        ctx.beginPath();
        ctx.moveTo(50, 50);
        ctx.lineTo(200, 50);
        ctx.stroke();
    }

    // Rope
    if (wrongCount >= 3) {
        ctx.beginPath();
        ctx.moveTo(200, 50);
        ctx.lineTo(200, 100);
        ctx.stroke();
    }

    // Head
    if (wrongCount >= 4) {
        ctx.beginPath();
        ctx.arc(200, 130, 30, 0, Math.PI * 2);
        ctx.stroke();
    }

    // Body
    if (wrongCount >= 5) {
        ctx.beginPath();
        ctx.moveTo(200, 160);
        ctx.lineTo(200, 260);
        ctx.stroke();
    }

    // Left arm
    if (wrongCount >= 6) {
        ctx.beginPath();
        ctx.moveTo(200, 180);
        ctx.lineTo(160, 220);
        ctx.stroke();

        // Right arm
        ctx.beginPath();
        ctx.moveTo(200, 180);
        ctx.lineTo(240, 220);
        ctx.stroke();

        // Left leg
        ctx.beginPath();
        ctx.moveTo(200, 260);
        ctx.lineTo(160, 320);
        ctx.stroke();

        // Right leg
        ctx.beginPath();
        ctx.moveTo(200, 260);
        ctx.lineTo(240, 320);
        ctx.stroke();
    }
}

// ========================================
// TABOO GAME MODE
// ========================================
let tabooTimer;
let tabooTimeLeft = 180;
let tabooCards = [];
let tabooCurrentCardIndex = 0;
let tabooScores = [0, 0, 0, 0];

function initTabooMode() {
    // Reset Scores
    tabooScores = [0, 0, 0, 0];
    updateTabooScoreDisplay();

    // Prepare Cards
    tabooCards = prepareTabooCards();
    tabooCurrentCardIndex = 0;

    // Show UI
    document.getElementById('taboo-container').style.display = 'flex';
    document.getElementById('taboo-game-over').style.display = 'none';
    document.getElementById('taboo-start-screen').style.display = 'flex'; // Show start screen

    // Do NOT start round yet. Wait for user to click "Start Game"
}

function beginTabooGame() {
    document.getElementById('taboo-start-screen').style.display = 'none';
    startTabooRound();
}

function prepareTabooCards() {
    const rawWords = getWordsForVocabMode();
    const cards = [];

    rawWords.forEach(word => {
        // Generate forbidden words from Example Sentence + fill with randoms
        let forbidden = [];

        // 1. Extract from Example (if exists)
        if (word.example) {
            // Remove punctuation and split
            const wordsInExample = word.example.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "").split(/\s+/);
            // Filter out the answer itself and common keywords
            const stopWords = ['a', 'an', 'the', 'in', 'on', 'at', 'to', 'for', 'of', 'is', 'are', 'was', 'were', 'be', 'have', 'has', 'it', 'this', 'that', 'my', 'your', 'his', 'her', 'we', 'they'];

            wordsInExample.forEach(w => {
                if (w.toLowerCase() !== word.english.toLowerCase() && !stopWords.includes(w.toLowerCase()) && w.length > 2) {
                    if (!forbidden.includes(w)) forbidden.push(w);
                }
            });
        }

        // 2. Fill with random words from same unit if less than 5
        // Safety for small units
        let safeCount = 0;
        while (forbidden.length < 5 && safeCount < 50) {
            safeCount++;
            const randomWord = rawWords[Math.floor(Math.random() * rawWords.length)];
            const candidate = randomWord.english;
            if (candidate !== word.english && !forbidden.includes(candidate)) {
                forbidden.push(candidate);
            }
        }

        cards.push({
            main: word.english,
            forbidden: forbidden.slice(0, 5)
        });
    });

    return shuffleArray(cards);
}

function startTabooRound() {
    document.getElementById('taboo-game-over').style.display = 'none';
    tabooCurrentCardIndex = 0;

    if (tabooCards.length === 0) {
        tabooCards = prepareTabooCards();
    }

    // Timer
    tabooTimeLeft = 180;
    updateTabooTimerDisplay();
    if (tabooTimer) clearInterval(tabooTimer);

    tabooTimer = setInterval(() => {
        tabooTimeLeft--;
        updateTabooTimerDisplay();
        if (tabooTimeLeft <= 0) {
            endTabooRound();
        }
    }, 1000);

    showTabooCard();
}

function updateTabooTimerDisplay() {
    const m = Math.floor(tabooTimeLeft / 60).toString().padStart(2, '0');
    const s = (tabooTimeLeft % 60).toString().padStart(2, '0');
    const el = document.getElementById('taboo-timer');
    if (el) el.innerText = `${m}:${s}`;
}

function showTabooCard() {
    if (tabooCurrentCardIndex >= tabooCards.length) {
        // Deck finished, reshuffle
        tabooCards = shuffleArray(tabooCards);
        tabooCurrentCardIndex = 0;
    }

    const cardData = tabooCards[tabooCurrentCardIndex];
    document.getElementById('taboo-main-word').innerText = cardData.main;

    const list = document.getElementById('taboo-forbidden-list');
    list.innerHTML = '';

    cardData.forbidden.forEach(w => {
        const div = document.createElement('div');
        div.className = 'taboo-forbidden-item';
        div.innerText = w;
        list.appendChild(div);
    });
}

function passTabooCard() {
    tabooCurrentCardIndex++;
    showTabooCard();
}

function handleTabooScore(teamIndex) {
    // Add Points
    tabooScores[teamIndex] += 10;
    updateTabooScoreDisplay();

    // Play Sound?
    if (typeof MillionaireSounds !== 'undefined' && MillionaireSounds.playCorrect) {
        MillionaireSounds.playCorrect();
    }

    // Next Card
    passTabooCard();
}

function updateTabooScoreDisplay() {
    for (let i = 0; i < 4; i++) {
        const el = document.getElementById(`taboo-score-${i}`);
        if (el) el.innerText = tabooScores[i];
    }
}

function endTabooRound() {
    clearInterval(tabooTimer);
    document.getElementById('taboo-game-over').style.display = 'flex';

    // Show Final Scores
    const container = document.getElementById('taboo-final-scores');
    container.innerHTML = '';
    const teams = ['A', 'B', 'C', 'D'];
    teams.forEach((t, i) => {
        const box = document.createElement('div');
        box.className = 'final-score-box';
        box.innerHTML = `<div>Team ${t}</div><div>${tabooScores[i]}</div>`;
        container.appendChild(box);
    });
}
