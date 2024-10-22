document.addEventListener("DOMContentLoaded", function() {
    const categories = Object.keys(questions);
    let players = [];

    const startScreen = document.getElementById("start-screen");
    const playerCountSelect = document.getElementById("playerCount");
    const playerNamesDiv = document.getElementById("playerNames");
    const startGameButton = document.getElementById("startGame");

    const categoriesDiv = document.getElementById("categories");
    const questionArea = document.getElementById("question-area");

    // Spielerfelder anzeigen
    playerCountSelect.addEventListener("change", updatePlayerFields);

    function updatePlayerFields() {
        const count = parseInt(playerCountSelect.value, 10);
        playerNamesDiv.innerHTML = "";

        for (let i = 1; i <= count; i++) {
            const input = document.createElement("input");
            input.type = "text";
            input.placeholder = `Spieler ${i} Name`;
            input.id = `player${i}`;
            input.required = true;
            playerNamesDiv.appendChild(input);
        }
    }

    startGameButton.addEventListener("click", startGame);

    function startGame() {
        const count = parseInt(playerCountSelect.value, 10);
        players = [];

        for (let i = 1; i <= count; i++) {
            const name = document.getElementById(`player${i}`).value.trim();
            if (name) {
                players.push(name);
            } else {
                alert(`Bitte gebe den Namen für Spieler ${i} ein.`);
                return;
            }
        }

        startScreen.style.display = "none";
        categoriesDiv.style.display = "flex";
        questionArea.style.display = "block";

        // Hier wird das Spiel mit den Spielern gestartet
        console.log(players);
        showCategories();
    }

    function showCategories() {
        categoriesDiv.innerHTML = "";
        categories.forEach(category => {
            const categoryDiv = document.createElement("div");
            categoryDiv.className = "category";
            categoryDiv.innerHTML = `<h3>${category}</h3>`;
            categoriesDiv.appendChild(categoryDiv);

            const pointValues = [100, 200, 300, 400];
            pointValues.forEach(value => {
                const valueDiv = document.createElement("div");
                valueDiv.className = "points";
                valueDiv.innerText = `${value} Punkte`;
                valueDiv.onclick = () => {
                    showQuestion(category, value, valueDiv);
                };
                categoryDiv.appendChild(valueDiv);
            });
        });
    }

    function showQuestion(category, points, element) {
        const question = getQuestion(category, points);
        if (!question) return;

        questionArea.innerHTML = "";

        const questionDiv = document.createElement("div");
        questionDiv.className = "question";
        questionDiv.innerHTML = `<p>${question.question}</p>`;

        const jokersDiv = document.createElement("div");
        jokersDiv.innerHTML = `
            <button id="choiceJoker">Auswahljoker</button>
            <button id="tipJoker">Tippjoker</button>
            <button id="answerButton">Antwort anzeigen</button>
        `;

        const answerDiv = document.createElement("div");
        answerDiv.className = "answer";
        answerDiv.innerHTML = `<p>Antwort: ${question.answer}</p>`;
        answerDiv.style.display = "none";

        jokersDiv.querySelector("#choiceJoker").onclick = () => {
            if (!jokersDiv.querySelector("ul")) {
                questionDiv.innerHTML += `<ul>${question.options.map(opt => `<li>${opt}</li>`).join('')}</ul>`;
                jokersDiv.querySelector("#choiceJoker").classList.add("grayed-out");
            }
        };

        jokersDiv.querySelector("#tipJoker").onclick = () => {
            if (!jokersDiv.querySelector(".tip")) {
                questionDiv.innerHTML += `<p class="tip">Tipp: ${question.tip}</p>`;
                jokersDiv.querySelector("#tipJoker").classList.add("grayed-out");
            }
        };

        jokersDiv.querySelector("#answerButton").onclick = () => {
            answerDiv.style.display = "block";
            element.classList.add("grayed-out");
        };

        questionDiv.appendChild(jokersDiv);
        questionDiv.appendChild(answerDiv);
        questionArea.appendChild(questionDiv);
    }

    function getQuestion(category, points) {
        return questions[category].find(q => q.points === points);
    }
});
