const word = document.getElementById('word');
const text = document.getElementById('text');
const scoreEl = document.getElementById('score');
const timeEl = document.getElementById('time');
const endGameEl = document.getElementById('end-game');
const settingsBtn = document.getElementById('settings-btn');
const settings = document.getElementById('settings');
const settingsForm = document.getElementById('settings-form');
const difficultySelect = document.getElementById('difficulty');

let randomWord;

// Init score
let score = 0;

// Init time
let time = 10; 

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

function updateScore() {
    score++;
    scoreEl.innerText = score;
}

getRandomWord()

// Event listeners 

text.addEventListener('input', e => {
    const insertedText = e.target.value;

    if(insertedText === randomWord) {
        getRandomWord()
        updateScore();

        e.target.value = '';
    }
})

settingsBtn.addEventListener('click', () => {
    settings.classList.toggle('hide')

})
