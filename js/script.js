function fetchData(endpoint) {
    // Simulated API response
    const data = {
        news: [
            { title: "New Character Released", content: "Exciting new character joins the roster!" },
            { title: "Event Update", content: "Don't miss out on the latest in-game event!" }
        ],
        characters: [
            { name: "March 7th", rarity: 4, path: "Preservation", element: "Ice" },
            { name: "Dan Heng", rarity: 4, path: "Hunt", element: "Wind" },
            { name: "Asta", rarity: 4, path: "Harmony", element: "Fire"},
            { name: "Himeko", rarity: 5, path: "Erudition", element: "Fire" },
            { name: "Seele", rarity: 5, path: "Hunt", element: "Quantum" },
            { name: "Bronya", rarity: 5, path: "Harmony", element: "Wind" },
            { name: "Gepard", rarity: 5, path: "Preservation", element: "Ice" },
            { name: "Yanqing", rarity: 5, path: "Hunt", element: "Ice" },
            { name: "Bailu", rarity: 5, path: "Abundance", element: "Lightning" },
            { name: "Clara", rarity: 5, path: "Destruction", element: "Physical" },
            { name: "Welt", rarity: 5, path: "Nihility", element: "Imaginary" }
        ],
        tierList: [
            "S Tier: Himeko, Seele, Clara, Bronya, Bailu, Gepard", 
            "A Tier: Yanqing, Welt, Asta", 
            "B Tier: March 7th, Dan Heng, Herta"
        ],
        advancedTips: [
            "Master the weakness break mechanic for more efficient combat",
            "Prioritize character ascension and light cone upgrades",
            "Plan your team composition based on enemy weaknesses"
        ],
        gameModes: {
            story: "Experience the main storyline and uncover the secrets of the universe.",
            "simulated-universe": "Explore procedurally generated worlds for unique challenges and rewards.",
            "forgotten-hall": "Test your combat skills in this challenging endgame content."
        }
    };

    return data[endpoint];
}

// Load news on the home page
function loadNews() {
    const newsContent = document.getElementById('news-content');
    if (newsContent) {
        const news = fetchData('news');
        newsContent.innerHTML = news.map(item => 
            `<article class="news-item fade-in">
                <h3>${item.title}</h3>
                <p>${item.content}</p>
            </article>`
        ).join('');
    }
}

// Load character data on the characters page
function loadCharacters() {
    const charactersTable = document.getElementById('characters-table');
    if (charactersTable) {
        const characters = fetchData('characters');
        const tbody = charactersTable.querySelector('tbody');
        tbody.innerHTML = characters.map(char => 
            `<tr>
                <td>${char.name}</td>
                <td>${char.rarity}*</td>
                <td>${char.path}</td>
                <td>${char.element}</td>
            </tr>`
        ).join('');
    }
}

// Load tier list on the characters page
function loadTierList() {
    const tierListContent = document.getElementById('tier-list-content');
    if (tierListContent) {
        const tierList = fetchData('tierList');
        tierListContent.innerHTML = tierList.map(tier => `<li>${tier}</li>`).join('');
    }
}

// Load advanced tips on the gameplay page
function loadAdvancedTips() {
    const advancedTipsList = document.getElementById('advanced-tips-list');
    if (advancedTipsList) {
        const tips = fetchData('advancedTips');
        advancedTipsList.innerHTML = tips.map(tip => `<li><a href="">${tip}</a></li>`).join('');
    }
}

// Handle game mode selection
function handleGameModeSelection() {
    const gameModeSelect = document.getElementById('game-mode-select');
    const gameModeDescription = document.getElementById('game-mode-description');

    if (gameModeSelect && gameModeDescription) {
        gameModeSelect.addEventListener('change', () => {
            const selectedMode = gameModeSelect.value;
            if (selectedMode) {
                const gameModes = fetchData('gameModes');
                gameModeDescription.textContent = gameModes[selectedMode];
            } 
            else {
                gameModeDescription.textContent = '';
            }
        });
    }
}

// Handle form submissions
function handleForms() {
    const newsletterForm = document.getElementById('newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const emailInput = document.getElementById('email');
            const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

            if (emailRegex.test(emailInput.value)) {
                alert('Thank you for subscribing to our newsletter!');
                newsletterForm.reset();
            } 
            else {
                alert('Please enter a valid email address.');
            }
        });
    }

    const feedbackForm = document.getElementById('feedback-form');
    if (feedbackForm) {
        feedbackForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const usernameInput = document.getElementById('username');
            const feedbackInput = document.getElementById('feedback-content');
            const usernameRegex = /^[a-zA-Z0-9_]+$/;   //  Letters, numbers, and underscores
            const feedbackRegex = /^[\s\S]+$/;   // Any characters including newlines
            
            if (usernameRegex.test(usernameInput.value) && feedbackRegex.test(feedbackInput.value)) {
                alert('Thank you for your feedback!');
                feedbackForm.reset();
            } 
            else {
                if (!usernameRegex.test(usernameInput.value)) {
                    alert('Please enter a valid username (3-16 characters, letters, numbers, and underscores only).');
                } 
                else {
                    alert('Please enter feedback.');
                }
            }
        });
    }
}

// Run initialization.
document.addEventListener('DOMContentLoaded', () => {
    loadNews();
    loadCharacters();
    loadTierList();
    loadAdvancedTips();
    handleGameModeSelection();
    handleForms();
});