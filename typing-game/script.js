const word = document.getElementById('word');
const text = document.getElementById('text');
const scoreEl = document.getElementById('score');
const timeEl = document.getElementById('time');
const endGameEl = document.getElementById('end-game-container');
const settingsBtn = document.getElementById('settings-btn');
const settings = document.getElementById('settings');
const settingsForm = document.getElementById('settings-form');
const difficultySelect = document.getElementById('difficulty');

let randomWord;

// Init score
let score = 0;

// Init time
let time = 10; 

let level = localStorage.getItem('difficulty') !== null ? localStorage.getItem('difficulty') : 'medium';

// Set difficulty select value
difficultySelect.value = localStorage.getItem('difficulty') !==null ? localStorage.getItem('difficulty') : 'medium';

// focus on input from start
text.focus();

// Start counting down
const timeInterval = setInterval(updateTime, 1000);

// Get a random word from https://random-word-api.herokuapp.com
function getRandomWord() {
    fetch('https://random-word-api.herokuapp.com/word?number=1')
    .then(res => res.json())
    .then(data => {
        randomWord = data[0]

        addWordToDOM(randomWord)
    })
}

// Add word to DOM 
function addWordToDOM(randomWord) {
    word.innerText = randomWord
}

// update scort
function updateScore() {
    score++;
    scoreEl.innerText = score;
}

// Update time 
function updateTime() {
    time--;
    timeEl.innerText = time + 's';

    if( time === 0) {
        clearInterval(timeInterval)
        gameOver()
    } 
}

function gameOver() {
    endGameEl.innerHTML = `
        <h1>Time ran out</h1>
        <p>Your final score is ${score}</p>
        <button onClick="location.reload()">Reload</button>
    `;
    endGameEl.style.display = 'flex';
}

getRandomWord()

// Event listeners 

text.addEventListener('input', e => {
    const insertedText = e.target.value;

    if(insertedText === randomWord) {
        getRandomWord()
        updateScore();

        e.target.value = '';

        if(level === 'hard') {
            time += 2;
        } else if(level === 'medium') {
            time += 4;
        } else {
            time += 5;
        }
    }
})

settingsBtn.addEventListener('click', () => {
    settings.classList.toggle('hide')

})

settingsForm.addEventListener('change', e => {
    level = e.target.value;
    localStorage.setItem('difficulty', level)
})