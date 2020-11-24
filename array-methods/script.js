const main = document.getElementById("main");
const addUserBtn = document.getElementById("add-user");
const doubleBtn = document.getElementById("double");
const showMillionairsBtn = document.getElementById("show-millionaires");
const sortBtn = document.getElementById("sort");
const calculateWealthBtn = document.getElementById("calculate-wealth");

let data = [];

getRandomUser()
getRandomUser()
getRandomUser()
// add random user and add wealth
async function getRandomUser() {
    const res = await fetch('https://randomuser.me/api');
    const data = await res.json();

    const user = data.results[0];

    const newUser = {
        name: `${user.name.first} ${user.name.last}`,
        money: Math.floor(Math.random()  * 1000000)
    };

    addData(newUser);
}

// Add the new data to data array
function addData(obj) {
    data.push(obj);
    
    updateDOM();
};

// Update DOM
function updateDOM(providedData = data) {
    // Clear main div
    main.innerHTML = '<h2><strong>Person</strong> Wealth</h2>'

    providedData.forEach( item => {
        const element = document.createElement('div');
        element.classList.add('person');
        element.innerHTML = `<strong>${item.name}</strong> ${formatMoney(item.money)}`
        main.appendChild(element)
    } );
}

// format nuber as money - https://stackoverflow.com/questions/149055/how-to-format-numbers-as-currency-string
function formatMoney(number) {
    return '$' + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');  
}

// double money 
function doubleMoney() {
    data = data.map(user => {
        return {...user, money: user.money * 2};
    });

    updateDOM();
}

// Sort by richest 
function sortByRichest() {
    data.sort((a ,b) => b.money - a.money);

    updateDOM(); 
}

// Show only millionairs
function showMillionairs() {
    data = data.filter(user => user.money > 1000000);

    updateDOM();
}

// Calculate total wealth
function calcTotalWealth() {
    const total = data.reduce((acc, user) => (acc += user.money), 0)

    const totalEl = document.createElement('div');
    totalEl.innerHTML = `<h3>Total Wealth: <strong>${formatMoney(total)}</strong></h3>`;
    main.appendChild(totalEl)
}

// Event listneres
addUserBtn.addEventListener('click', getRandomUser)
doubleBtn.addEventListener('click', doubleMoney)
sortBtn.addEventListener('click', sortByRichest)
showMillionairsBtn.addEventListener('click', showMillionairs)
calculateWealthBtn.addEventListener('click', calcTotalWealth)