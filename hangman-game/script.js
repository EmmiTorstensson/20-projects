const wordEl = document.getElementById('word');
const wrongLetterEl = document.getElementById('wrong-letters');
const playAgainBtn = document.getElementById('play-again');
const popup = document.getElementById('popup-container');
const finalMsg = document.getElementById('final-msg');

const figureParts = document.querySelectorAll('figure-part');

const words = ['application', 'programming', 'interface'];

let selectedWord = words[Math.floor(Math.random() * words.length)]

const correctLetters = [];
const wrongLetters = [];

// Show hidden word
function displayWord() {
     wordEl.innerHTML = `
     ${selectedWord
        .split('')
        .map(
            letter => `
                <span class="letter">
                    ${correctLetters.includes(letter) ? letter : ''}    
                </span>
            `
        )
        .join('')}
    `;

    const innerWord = wordEl.innerText.replace(/\n/g, "")
    
    if(innerWord === selectedWord) {
        finalMsg.innerText = 'Congratulations! You won! 😃';
        popup.style.display = 'flex'
    } 
};

// Keydown letter press
window.addEventListener("keydown", e => {
    if(e.keyCode)
})

displayWord();