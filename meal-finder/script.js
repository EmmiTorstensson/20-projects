const search = document.getElementById("search"),
    submit = document.getElementById("submit"),
    random = document.getElementById("random"),
    mealsEl = document.getElementById("meals"),
    resultHeading = document.getElementById("result-heading"),
    single_mealEl = document.getElementById("single-meal");

// Search meal and fetch from API
function searchMeal(e) {
    e.preventDefault();

    // cleat single meal
    single_mealEl.innerHTML = '';

    // Get search word
    const searchWord = search.value;

    // check for empty 
    if(searchWord.trim()) {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchWord}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            resultHeading.innerHTML = `<h2>Search result for '${searchWord}':</h2>`;

            if(data.meals === null) {
                resultHeading.innerHTML = "No results. Try again!"
            } else {
                mealsEl.innerHTML = data.meals.map(meal => `
                    <div class="meal">
                        <img src="${meal.strMealThumb}" alt="${meal.strMeal}" />
                        <div class="meal-info" data-mealID="${meal.idMeal}">
                            <h3>${meal.strMeal}</h3>
                        </div>
                    </div>
                `).join('');
            }
        })
        // CLear search text
        search.value = '';
    } else {
        alert("please enter search value");
    }
}

// Fetch meal by ID
function getMealByID(mealID) {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`)
        .then(res => res.json())
        .then(data => {
            const meal = data.meals[0];

            addMealToDOM(meal)
        })
}

// Add meal to DOM
function addMealToDOM(meal) {
    const ingrediants = [];
    
    for(let i = 1; i <= 20; i++) {
        if(meal[`strIngrediants${i}`]) {
            ingrediants.push(`${meal[`strIngredient${i}`]} - ${meal[`strMeasure$${i}`]}`);
        } else {
            break;
        }
    }

    single_mealEl.innerHTML = `
        <div class="single-meal">
            <h2>${meal.strMeal}</h2>
        </div>
    `
}

// Event listeners
submit.addEventListener("submit", searchMeal);
mealsEl.addEventListener("click", e => {
    const mealInfo = e.path.find(item => {
        if(item.classList) {
            return item.classList.contains('meal-info')
        } else {
            return false;
        }
    })
    
    if(mealInfo) {
        const mealID = mealInfo.getAttribute('data-mealid')
        getMealByID(mealID)
    }
})