const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Canvas Größe
canvas.width = 400;
canvas.height = 400;

const unit = 20; // Snake Körpergröße
let snake = [{x: 160, y: 160}]; // Snake Startposition
let direction = {x: 0, y: 0}; // Startdirection
let food = generateFood();
let score = 0;

// Tastatursteuerung
window.addEventListener('keydown', changeDirection);

// Snake Bewegung
function gameLoop() {
    update();
    draw();
    
    setTimeout(gameLoop, 100);
}

function update() {
    // Bewegung der Schlange
    const head = {x: snake[0].x + direction.x * unit, y: snake[0].y + direction.y * unit};
    
    // Kollisionsüberprüfung (Wände und Eigenkörper)
    if (head.x < 0 || head.y < 0 || head.x >= canvas.width || head.y >= canvas.height || snakeCollision(head)) {
        alert(`Game Over! Dein Punktestand: ${score}`);
        resetGame();
        return;
    }
    
    snake.unshift(head); // neue Position an den Anfang der Schlange
    
    // Überprüfung, ob die Schlange das Futter erreicht
    if (head.x === food.x && head.y === food.y) {
        score += 1;
        food = generateFood();
    } else {
        snake.pop(); // Entferne das letzte Segment der Schlange
    }
}

function draw() {
    // Bildschirm löschen
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Schlange zeichnen
    snake.forEach(segment => {
        ctx.fillStyle = 'lime';
        ctx.fillRect(segment.x, segment.y, unit, unit);
    });

    // Futter zeichnen
    ctx.fillStyle = 'red';
    ctx.fillRect(food.x, food.y, unit, unit);
}

function generateFood() {
    return {
        x: Math.floor(Math.random() * (canvas.width / unit)) * unit,
        y: Math.floor(Math.random() * (canvas.height / unit)) * unit
    };
}

function changeDirection(event) {
    const key = event.keyCode;
    if (key === 37 && direction.x === 0) { // Links
        direction = {x: -1, y: 0};
    } else if (key === 38 && direction.y === 0) { // Hoch
        direction = {x: 0, y: -1};
    } else if (key === 39 && direction.x === 0) { // Rechts
        direction = {x: 1, y: 0};
    } else if (key === 40 && direction.y === 0) { // Runter
        direction = {x: 0, y: 1};
    }
}

function snakeCollision(head) {
    for (let i = 1; i < snake.length; i++) {
        if (head.x === snake[i].x && head.y === snake[i].y) {
            return true;
        }
    }
    return false;
}

function resetGame() {
    snake = [{x: 160, y: 160}];
    direction = {x: 0, y: 0};
    food = generateFood();
    score = 0;
}

// Spiel starten
gameLoop();
