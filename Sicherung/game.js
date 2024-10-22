document.addEventListener('DOMContentLoaded', function() {
    console.log('Spiel geladen');

    // Spieler aus dem localStorage laden
    const players = JSON.parse(localStorage.getItem('players'));
    let currentPlayerIndex = 0;

    // Punktestände initialisieren
    const playerScores = players.map(player => ({ name: player, score: 0 }));

    // Spieleranzeige und Scoreboard
    const playerDisplay = document.createElement('div');
    playerDisplay.id = 'player-display';
    document.body.insertBefore(playerDisplay, document.getElementById('categories'));

    const scoreboard = document.createElement('div');
    scoreboard.id = 'scoreboard';
    playerDisplay.appendChild(scoreboard);

    updatePlayerDisplay();

    // Kategorien und Fragen laden
    const categoriesDiv = document.getElementById('categories');
    const modal = document.getElementById('modal');
    const modalContent = document.getElementById('modal-content');

    const categories = Object.keys(questions);
    
    categories.forEach(category => {
        const categoryDiv = document.createElement('div');
        categoryDiv.classList.add('category');
        
        const categoryTitle = document.createElement('h2');
        categoryTitle.textContent = category;
        categoryDiv.appendChild(categoryTitle);

        questions[category].forEach(q => {
            const questionButton = document.createElement('button');
            questionButton.textContent = `${q.points} Punkte`;
            questionButton.classList.add('question-button');
            questionButton.addEventListener('click', function() {
                showQuestionInModal(category, q.points);
                questionButton.disabled = true; // Disable the button after it has been clicked
            });
            categoryDiv.appendChild(questionButton);
        });

        categoriesDiv.appendChild(categoryDiv);
    });

function showQuestionInModal(category, points) {
    const question = questions[category].find(q => q.points === points);
    if (question) {
        modalContent.innerHTML = `
            <div class="category-points">
                <span id="category">${category}</span>
                <span id="points">${points} Punkte</span>
            </div>
            <p class="question-text" id="question">${question.question}</p>
            <button id="showTip">Tipp</button>
            <p id="tip" style="display: none;">${question.tip}</p>
            <button id="showOptions">Auswahl</button>
            <ul id="options" style="display: none;">
                ${question.options.map(option => `<li>${option}</li>`).join('')}
            </ul>
            <button id="showAnswer">Antwort anzeigen</button>
            <p id="answer" style="display: none;">${question.answer}</p>
            <h3>Bewertung der Antworten:</h3>
            <div class="evaluation-grid"> <!-- Grid Container für Bewertungen -->
        `;

        playerScores.forEach(player => {
            const playerDiv = document.createElement('div');
            playerDiv.classList.add('player-evaluation');
            playerDiv.innerHTML = `
                <span>${player.name}</span>
                <div class="button-group">
                    <button class="correct" data-player="${player.name}" data-points="${points}">Richtig</button>
                    <button class="wrong" data-player="${player.name}" data-points="${points}">Falsch</button>
                </div>
            `;
            document.querySelector('.evaluation-grid').appendChild(playerDiv);
        });

        modalContent.innerHTML += `</div><button id="closeModal">Fertig</button>`;
        document.getElementById('closeModal').addEventListener('click', closeModal);

        document.getElementById('showTip').addEventListener('click', function() {
            document.getElementById('tip').style.display = 'block';
        });

        document.getElementById('showOptions').addEventListener('click', function() {
            document.getElementById('options').style.display = 'flex';
        });

        document.getElementById('showAnswer').addEventListener('click', function() {
            document.getElementById('answer').style.display = 'block';
        });

        // Event Listener für Richtig/Falsch Buttons
        document.querySelectorAll('.correct').forEach(button => {
            button.addEventListener('click', function() {
                const playerName = this.getAttribute('data-player');
                const points = parseInt(this.getAttribute('data-points'));
                updateScore(playerName, points);
            });
        });

        document.querySelectorAll('.wrong').forEach(button => {
            button.addEventListener('click', function() {
                const playerName = this.getAttribute('data-player');
                const points = parseInt(this.getAttribute('data-points'));
                updateScore(playerName, -points);
            });
        });

        modal.style.display = 'block';
    }
}



    function closeModal() {
        modal.style.display = 'none';
    }

    function updateScore(playerName, points) {
        const player = playerScores.find(p => p.name === playerName);
        if (player) {
            player.score = Math.max(0, player.score + points); // Punktzahl darf nicht unter 0 fallen
            updatePlayerDisplay();
            console.log(`Punkte für ${player.name}: ${player.score}`);
        }
    }

function updatePlayerDisplay() {
    const playerDisplay = document.getElementById('player-display');
    playerDisplay.innerHTML = playerScores.map(player => `
        <div class="player-score">
            <h3>${player.name}</h3>
            <p>${player.score} Punkte</p>
        </div>
    `).join('');
}

});
