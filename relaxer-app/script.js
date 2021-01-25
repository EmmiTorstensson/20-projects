container = document.getElementById('container')
text = document.getElementById('text')

const totalTime = 7500;
const breathTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

function breathAnimation () {
    text.innerText = 'Breath in...'
    container.className = 'container grow'

    setTimeout(() => {
        text.innerText = 'Hold'

        setTimeout(() => {
            text.innerText = 'Breath out...'
            container.className = 'container shrink'

        }, holdTime);
    }, breathTime); 
}

setInterval(breathAnimation, totalTime);

breathAnimation()

// function animation() {
//     grow()
//     setTimeout(() => {
//         shrink
//     }, 5500);
// }

// function grow(){
//     container.classList.add('grow').setTimeout(() => {
//         container.classList.remove('grow')
//     }, 3000);
// }

// function shrink(){
//     container.classList.add('shrink').setTimeout(() => {
//         container.classList.remove('shrink')
//     }, 3000);
// }

// animation()