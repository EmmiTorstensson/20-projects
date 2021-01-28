const rulesBtn = document.getElementById('rules-btn');
const closeBtn = document.getElementById('close-btn');
const rules = document.getElementById('rules');
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d'); // Contex

let score = 0;

const brickRowCount = 9;
const brickColumnCount = 5;

// Create ball props
const ball = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    size: 10,
    speed: 8,
    dx: 4, // Direction to move on x-axel 
    dy: -4, // Direction to move on y-axel 
}

// Create paddle props
const paddle = {
    x: canvas.width / 2 - 40,
    y: canvas.height - 20,
    w: 80,
    h: 10,
    speed: 4,
    dx: 0, // Direction to move on x-axel 
}

// Create bricks props
const brickInfo = {
    w: 70,
    h: 20,
    padding: 10,
    offsetX: 45,
    offsetY: 60,
    visible: true
}

// create brics 
const bricks = [];
for(let i = 0; i < brickRowCount; i++) {
    bricks[i] = []
    for(let j = 0; j < brickColumnCount; j++) {
        const x = i * (brickInfo.w + brickInfo.padding) + brickInfo.offsetX;
        const y = j * (brickInfo.h + brickInfo.padding) + brickInfo.offsetY;
        bricks[i][j] = { x, y, ...brickInfo}
    }
}

// Draw paddle on canvas
function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddle.x, paddle.y, paddle.w, paddle.h);
    ctx.fillStyle = '#D95D39';
    ctx.fill();
    ctx.closePath();
}

// Draw ball on canvas
function drawBall() {
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ball.size, 0, 2 * Math.PI);
    ctx.fillStyle = '#D95D39';
    ctx.fill();
    ctx.closePath();
}

// Draw bricks on canvas 
function drawBricks() {
    bricks.forEach(column => {
        column.forEach(brick => {
            ctx.beginPath();
            ctx.rect(brick.x, brick.y, brick.w, brick.h);
            ctx.fillStyle = brick.visible ? '#D95D39' : 'transparent';
            ctx.fill();
            ctx.closePath();
        })
    })
}

// Move paddle on convas 
function movePaddle() {
    paddle.x += paddle.dx;

    // Wall ditection 
    if(paddle.x + paddle.w > canvas.width) {
        paddle.x = paddle.width - paddle.w;
    }

    if(paddle.x < 0) {
        paddle.x = 0;
    }
}

function draw() {
    // clear canvas 
    ctx.clearRect(0, 0, canvas.width, canvas.height); 

    drawBall();
    drawPaddle();
    drawScore();
    drawBricks();
}

// Score 
function drawScore() {
    ctx.font = '20px Montserrat';
    ctx.fillText(`Score: ${score}`, canvas.width - 100, 30)
}


// update canvas drawing and animation 
function update() {
    movePaddle()

    // Draw everything 
    draw();

    requestAnimationFrame(update)
}

update();

function keyDown(e) {
    if(e.key === 'ArrowRight' || e.key === 'Right') {
        paddle.dx = paddle.speed;
    } else if (e.key === 'ArrowLeft' || e.key === 'Left') {
        paddle.dx = -paddle.speed
    }
}

function keyUp(e) {
    if(e.key === 'ArrowRight' || e.key === 'ArrowRight' || e.key === 'ArrowLeft' || e.key === 'Left') {
        paddle.dx = 0;
    } 
}

// Keyboard event handlers
document.addEventListener('keydown', keyDown) 
document.addEventListener('keyup', keyUp) 

// Event listeners 
rulesBtn.addEventListener('click', () => rules.classList.add('show'))
closeBtn.addEventListener('click', () => rules.classList.remove('show'))