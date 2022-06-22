// global variables, for the current page div element
const currentPageEl = document.querySelector(".current-page");
console.log(currentPageEl.getAttribute("id"));
var cardDrawnOne = "";
var cardDrawnTwo = "";
var cardDrawnOneImg = "";
var cardDrawnTwoImg = "";
var array = [];

// runs function that displays the backs of 2 cards
displayCards();

// askName();

// function that erases any HTML in the current page element, which is really just a pseudo body element
function clearPage() {
    while (currentPageEl.firstChild) {
        currentPageEl.removeChild(currentPageEl.lastChild);
    };
}

// dynamically create HTML for the "enter name" functionality for user to enter name and be addressed as such.
function askName() {
    clearPage();
    currentPageEl.innerHTML = `
    <div class="mx-auto bg-grey-400 grid place-items-center card">
        <div class="search flex-column content-center">
            <h1 class="text-xl font-bold text-center flex w-100">
                What's your name, Bozo?
            </h1>
            <input type="text" class="search-bar rounded flex-auto content-evenly">
            <button><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em"
                    width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M10,18c1.846,0,3.543-0.635,4.897-1.688l4.396,4.396l1.414-1.414l-4.396-4.396C17.365,13.543,18,11.846,18,10 c0-4.411-3.589-8-8-8s-8,3.589-8,8S5.589,18,10,18z M10,4c3.309,0,6,2.691,6,6s-2.691,6-6,6s-6-2.691-6-6S6.691,4,10,4z">
                    </path>
                    <path
                        d="M11.412,8.586C11.791,8.966,12,9.468,12,10h2c0-1.065-0.416-2.069-1.174-2.828c-1.514-1.512-4.139-1.512-5.652,0 l1.412,1.416C9.346,7.83,10.656,7.832,11.412,8.586z">
                    </path>
                </svg></button>
        </div>
    </div>
    `
    // add event Listener for when user has entered name and clicked submit?
}

// API call to draw 2 random cards
function drawCard() {
    var apiUrl = "https://deckofcardsapi.com/api/deck/new/draw/?count=2";

    fetch(apiUrl).then(function (response) {
        if (response.ok) {
            // now 2 cards are drawn, need to call function to display them on the page (the value of the cards, and png image files)
            response.json().then(function (data) {
                cardDrawnOneImg = data.cards[0].images.png;
                cardDrawnTwoImg = data.cards[1].images.png;
                cardDrawnOne = data.cards[0].value;
                cardDrawnTwo = data.cards[1].value;
            });
        } else {
            // display an error in case deck of cards API fails for some reason
            clearPage();
            currentPageEl.innerHTML = "There was an error. How terrible."
            setTimeout(function(){displayCards();}, 2000);
        }
    });
}

function displayCards() {
    clearPage();
    currentPageEl.innerHTML = `
        <div class="pick-card">
            <div class="flex justify-center">
                <h1 class="text-6xl mb-6">Pick a card!</h1>
            </div>
            <div class="two-cards flex md:flex-row md:justify-center flex-col items-center">
                <div class="card-one">
                    <img src="./assets/images/card_back.png" id="card-one" class="mystery-card">
                </div>
                <div class='md:pr-6'></div>
                <div class="card-two py-6 md:py-0">
                    <img src="./assets/images/card_back.png" id="card-two" class="mystery-card">
                </div>
            </div>
        </div>
    `;
    drawCard();
}

// determines which of the 2 cards drawn is higher
function highCard(cardOne, cardTwo) {
    // Ace is high, so the cards go from low to high, and the index of the card in the array can be used to test high/low
    var cardArray = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "JACK", "QUEEN", "KING", "ACE"];

    // returns the index of cardOne and cardTwo's value in the array
    // for ex, "4" has an indexOf -> 2, and "JACK" has an indexOf -> 9
    var valueCardOne = cardArray.indexOf(cardOne);
    var valueCardTwo = cardArray.indexOf(cardTwo);

    // returns the value of the higher card, or else, "equal" if the same card is drawn in different suits
    if (valueCardOne > valueCardTwo) {
        return "card-one";
    } else if (valueCardTwo > valueCardOne) {
        return "card-two";
    } else if (valueCardOne === valueCardTwo) {
        return "equal";
    }
}

// When the user clicks on the mystery-card class (i.e. either back of card image), this function runs.
function pickCard(event) {
    var userCard = event.target.getAttribute("id");
    var cardHigh = highCard(cardDrawnOne, cardDrawnTwo);

    clearPage();
    currentPageEl.innerHTML = `
            <div class="pick-card">
                <div class="flex justify-center">
                    <h1 class="text-6xl mb-6">Pick a card!</h1>
                </div>
                <div class="two-cards flex md:flex-row md:justify-center flex-col items-center">
                    <div class="card-one">
                        <img src="${cardDrawnOneImg}">
                    </div>
                    <div class="card-two md:pl-6 py-6 md:py-0">
                        <img src="${cardDrawnTwoImg}">
                    </div>
              </div>
            </div>
            `;

    // want time to pass before I run these functions
    if (cardHigh === userCard) {
        // high card
        setTimeout(function () { getFood("dessert"); }, 2000);
    } else if (cardHigh === "equal") {
        // equal card
        setTimeout(function () { displayEqual(); }, 2000);
    } else if (cardHigh != userCard) {
        // low card
        setTimeout(function () { getFood("vegan"); }, 2000);
    }
};

// user selects a card, and pickCard function
document.querySelector(".mystery-card").addEventListener("click", pickCard);

// once the user has chosen a card, then we found out high OR low, and then type of food is chosen
function getFood(typeOfFood) {
    var apiUrl = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${typeOfFood}`;

    fetch(apiUrl).then(function (response) {
        if (response.ok) {
            response.json().then(function (data) {
                var foodChoice = randomNumber(0, data.meals.length - 1);
                getFoodDetails(data.meals[foodChoice].idMeal);
            });
        } else {
            // some error message in case the API call doesn't work
            clearPage();
            currentPageEl.innerHTML = "There was an error. How terrible."
            setTimeout(function(){displayCards();}, 2000);
        }
    });
}

// random number function, used solely for choosing a random dish to award the user
function randomNumber(min, max) {
    var value = Math.floor(Math.random() * (max - min + 1)) + min;
    return value;
}

// once the type of food is chosen (vegan, or dessert), and a random option is chosen from that category, then run API call to get details
function getFoodDetails(foodId) {
    var apiUrl = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${foodId}`;
    fetch(apiUrl).then(function (response) {
        if (response.ok) {
            response.json().then(function (data) {
                displayFood(data.meals[0]);
            });
        }
        else {
            // error message in case the API call doesn't work
            clearPage();
            currentPageEl.innerHTML = "There was an error. How terrible."
            setTimeout(function(){displayCards();}, 2000);
        }
    });
}

// ugly function that extracts and organizes all information from meals API call and displays on the page using dynamically created HTMl elements
function displayFood(foodChoiceObj) {
    // clears the page (of cards)
    clearPage();

    // this is done to create an array that is only ingredients, and amounts, where 0-19 index are strIngredient1-20, and index 20-39 are strAmount1-20
    var ingArray = Object.entries(foodChoiceObj);
    ingArray = ingArray.slice(9, ingArray.length - 4);
    console.log(ingArray);
    b = ingArray;

    // extracts the name and thumbnail image, and then determines what string will appear on the top of the page (dependent on if high or low card chosen)
    // to be used later in the dynamically created HTML, just declaring them here to make it look nicer later
    var foodName = foodChoiceObj.strMeal;
    var foodImg = foodChoiceObj.strMealThumb;
    if (foodChoiceObj.strCategory === "Vegan") {
        var sassyString = "You picked the low card. <br> <span class='md:text-4xl sm:text-3xl'>Here's a vegan meal. ;)</span>";
    } else if (foodChoiceObj.strCategory === "Dessert") {
        var sassyString = "You picked the high card! <br> <span class='md:text-4xl sm:text-3xl'>Dessert's on us, champ.</span>"
    }

    // create a table, assign classes, and add inner HTML for the table headers
    var ingredientTable = document.createElement("table");
    ingredientTable.classList.add("table-auto", "pt-6", "pl-12");
    ingredientTable.innerHTML = `
        <thead>
            <tr class="text-3xl">
                <th class="px-6 py-4 text-left">Ingredient</th>
                <th class="px-6 py-4 text-left">Amount</th>
            </tr>
        </thead>
    `;

    // creates the body of the table, and gives it a text size via tailwind class
    var tableBody = document.createElement("tbody");
    tableBody.classList.add("text-2xl")

    // where 20 is the maximum number of ingredients in a recipe, this runs through and creates "td" elements for each ingredient and its corresponding amount
    for (let i = 0; i < 19; i++) {
        // if there is an ingredient to list (i.e. it's not blank AND it's not null), then append the ingredient and amount
        if (ingArray[i][1] != "" && ingArray[i][1] != null) {
            // creates a table row, fills HTMl with classes and relevant info from array (you need to index twice because the first index is just 'strIngredienti')
            var tableItem = document.createElement("tr");
            tableItem.innerHTML = `
            <td class="px-6 py-2 text-left">${ingArray[i][1]}</td>
            <td class="px-6 py-2 text-left">${ingArray[i + 20][1]}</td>
            `;
            // add ingredient and amount to table body
            tableBody.appendChild(tableItem);
        };
    };
    // add the entire ingredient and amount list to final table
    ingredientTable.appendChild(tableBody);

    // organizes and cleans and creates line breaks for recipe instructions
    var instructionsOrganized = foodChoiceObj.strInstructions.split("\r\n");
    for (var i = 0; i < instructionsOrganized.length; i++) {
        if (!instructionsOrganized[i]) {
            instructionsOrganized.splice(i, 1)
        }
    };
    // creates an unordered list
    var instructionsListEl = document.createElement("ul");
    instructionsListEl.classList.add("p-7", "list-inside", "list-disc");
    // creates a list element for each recipe line
    for (var i = 0; i < instructionsOrganized.length; i++) {
        var instructionsEl = document.createElement("li");
        instructionsEl.innerText = instructionsOrganized[i];
        instructionsListEl.appendChild(instructionsEl);
    };

    // dynamically created HTML, pulling together all of the pieces created above^
    currentPageEl.innerHTML = `
        <div class="recipe-display px-12 py-6">
            <div class="md:flex md:justify-between">
                <h1 class="recipe-header text-4xl md:text-7xl md:flex md:flex-col">${sassyString}</h1>
                <div class="recipe-name-img flex flex-col text-right sm:pt-6 md:pt-0">
                    <h2 class="md:text-6xl text-4xl"><a class="youtube-link" href="${foodChoiceObj.strYoutube}">${foodName}</a></h2>
                    <div class="flex justify-end">
                        <img src=${foodImg} id="food-img" alt="prepared food image">
                    </div>
                </div>
            </div>
            <div class ="recipe-instructions md:text-4xl text-2xl pt-10 md:px-16">
            </div>
            <div class="recipe-ingredients flex justify-center pt-10">
            </div>
        </div>
        <div class="flex justify-center my-5">
            <button class="btn md:text-5xl text-4xl bg-green-500 hover:bg-green-700 p-3 px-5 rounded-full" id="restart" type="submit">Wanna try your luck again?</button>
        </div>
        
    `;

    // these items cannot be added with template literals, so I appended them instead
    var recipeTable = document.querySelector(".recipe-ingredients");
    recipeTable.appendChild(ingredientTable);
    document.querySelector(".recipe-instructions").appendChild(instructionsListEl);

    // adds functionality for button to restart game, by calling drawCard function
    var foodDisplayEl = document.querySelector("#restart");
    foodDisplayEl.addEventListener("click", displayCards);
};

// for now, since the getEqual fetch is not working, going to run this instead.
function displayEqual() {
    clearPage();
    currentPageEl.innerHTML = `
        <div class="equal-card">
            <h1 class="md:text-6xl px-12 py-6 sm:text-3xl">Wow, what luck! The probability of getting the same card is less than 0.5%. You're a lucky bug!</h1>
        </div>
        <div class="flex justify-center my-5">
            <button class="btn md:text-5xl text-4xl bg-green-500 hover:bg-green-700 p-3 px-5 rounded-full" id="restart" type="submit">Wanna try your luck again?</button>
        </div>
    `;
    var foodDisplayEl = document.querySelector("#restart");
    foodDisplayEl.addEventListener("click", displayCards);
}

function modalOpen() {
    var modal = document.getElementById("modal-content");
    modal.style.display = "block";
    // modal.classList.remove("hidden");
    var backgroundImgEl = document.querySelector(".background-img");
    backgroundImgEl.classList.remove("hidden");

    function closeModal() {
        var modal = document.getElementById("modal-content");
        modal.style.display = "none";
        // modal.classList.add("hidden");
        var backgroundImgEl = document.querySelector(".background-img");
        backgroundImgEl.classList.add("hidden");
    }

    backgroundImgEl.addEventListener("click", closeModal);
}

// when you click on the ? image on the left header, then it opens a modal and explains the website.
document.querySelector(".modal-icon").addEventListener("click", modalOpen);