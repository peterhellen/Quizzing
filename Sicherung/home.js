// home.js

document.getElementById('playerCount').addEventListener('change', function() {
    const playerCount = parseInt(this.value);
    const playerNamesDiv = document.getElementById('playerNames');
    const playerCountLabel = document.getElementById('playerCountLabel');
    
    // Update the player count label with a descriptive text
    if (playerCount > 0) {
        playerCountLabel.textContent = `Bitte gebe die Team- bzw Spielernamen ein`;
    } else {
        playerCountLabel.textContent = '';
    }

    playerNamesDiv.innerHTML = ''; // Reset player names div

    for (let i = 1; i <= playerCount; i++) {
        const input = document.createElement('input');
        input.type = 'text';
        input.placeholder = 'Spieler ' + i;
        input.name = 'player' + i;
        input.className = 'player-input';
        playerNamesDiv.appendChild(input);
    }
});

document.getElementById('startGame').addEventListener('click', function() {
    const playerCount = document.getElementById('playerCount').value;
    const playerNames = [];

    for (let i = 1; i <= playerCount; i++) {
        const playerName = document.querySelector(`input[name='player${i}']`).value;
        playerNames.push(playerName);
    }

    // Hier könntest du die Logik zum Speichern der Spielernamen und zum Weiterleiten zur Spielseite einfügen
    localStorage.setItem('players', JSON.stringify(playerNames));
    window.location.href = 'game.html'; // Weiterleitung zur Spielseite
});
