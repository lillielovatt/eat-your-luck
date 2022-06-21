// global variables, for the current page and for whichever card user picked
const currentPageEl = document.querySelector(".current-page");
const pickCardEl = document.querySelector(".two-cards");
var b = [];

// runs function which draws 2 cards
drawCard();

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
    // clears HTML of page
    clearPage();
    var apiUrl = "https://deckofcardsapi.com/api/deck/new/draw/?count=2";

    fetch(apiUrl).then(function (response) {
        if (response.ok) {
            // now 2 cards are drawn, need to call function to display them on the page (the value of the cards, and png image files)
            response.json().then(function (data) {
                displayCards(data.cards[0].value, data.cards[1].value, data.cards[0].images.png, data.cards[1].images.png);
            });
        } else {
            // display an error in case deck of cards API fails for some reason? 404?
            console.log("error")
        }
    });
}

// takes the 2 random cards drawn in drawCard function and displays them on the page with dynamically created HTML
function displayCards(cardOne, cardTwo, cardOneImg, cardTwoImg) {
    // takes the value of the 2 cards drawn, and tests to see which is higher/lower
    // if higher, it assigns an Id of "true"
    // if lower, it assigns an Id of "false"
    // if the two cards are the same, it assigns an id to both of "equal", i.e. "cardChoice"
    var cardChoice = highCard(cardOne, cardTwo);
    if (cardOne === cardChoice) {
        var cardOneId = "true";
        var cardTwoId = "false";
    } else if (cardTwo === cardChoice) {
        var cardOneId = "false";
        var cardTwoId = "true";
    } else if (cardChoice === "equal") {
        var cardOneId = cardChoice;
        var cardTwoId = cardChoice;
    }

    // dynamically creates HTMl to display both cards 
    currentPageEl.innerHTML = `
        <div class="pick-card">
            <div class="flex justify-center">
                <h1 class="text-6xl mb-6">Pick a card!</h1>
            </div>
            <div class="two-cards flex justify-center">
                <div class="card-one">
                    <img src=${cardOneImg} id="${cardOneId}">
                </div>
                <div class="card-two pl-6">
                    <img src=${cardTwoImg} id="${cardTwoId}">
                </div>
            </div>
        </div>
    `;
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
        return cardOne;
    } else if (valueCardTwo > valueCardOne) {
        return cardTwo;
    } else if (valueCardOne === valueCardTwo) {
        return "equal";
    }
}

// When the user clicks on the currentPageEl, this function runs.
function pickCard(event) {
    if (event.target.tagName === "IMG") { //if you clicked on an image, then
        // retrieves the Id of that img user clicked on
        var userCard = event.target.getAttribute("id");
        if (userCard === "true") {
            // then user picked the high card, and they win, and perform fetch for that
            getFood("dessert");
        } else if (userCard === "false") {
            // then user picked the low card, and they lose, and perform fetch for that
            getFood("vegan");
        } else if (userCard === "equal") {
            // then user got same card, congratulate and show the probability 
            displayEqual();
        }
    }
};

currentPageEl.addEventListener("click", pickCard);

// once the user has chosen a card, then type of food is chosen
function getFood(typeOfFood) {
    var apiUrl = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${typeOfFood}`;

    fetch(apiUrl).then(function (response) {
        if (response.ok) {
            response.json().then(function (data) {
                var foodChoice = randomNumber(0, data.meals.length - 1)
                getFoodDetails(data.meals[foodChoice].idMeal);
            });
        } else {
            // some error message in case the API call doesn't work
        }
    });
}

function randomNumber(min, max) {
    var value = Math.floor(Math.random() * (max - min + 1)) + min;
    return value;
}

function getFoodDetails(foodId) {
    var apiUrl = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${foodId}`;
    fetch(apiUrl).then(function (response) {
        if (response.ok) {
            response.json().then(function (data) {
                displayFood(data.meals[0]);
            });
        }
        else{
            // error message in case the API call doesn't work
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

    // extracts the name and thumbnail image, and then determines what string will appear on the top of the page (dependent on if high or low card chosen)
    var foodName = foodChoiceObj.strMeal;
    var foodImg = foodChoiceObj.strMealThumb;
    if (foodChoiceObj.strCategory === "Vegan") {
        var sassyString = "You picked the low card. <br> <span class='text-4xl'>Here's a vegan meal. ;)</span>";
    } else if (foodChoiceObj.strCategory === "Dessert") {
        var sassyString = "You picked the high card! <br> <span class='text-4xl'>Dessert's on us, champ.</span>"
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

    // where 20 is the maximum number of ingredients in a recipe
    for (let i = 0; i < 19; i++) {
        // if there is an ingredient to list (i.e. it's not blank AND it's not null), then append the ingredient and amount
        if (ingArray[i][1] != "" && ingArray[i][1] != null) {
            // creates a table row, fills HTMl with classes and relevant info from array (you need to index twice because the first index is just 'strIngredienti')
            var tableItem = document.createElement("tr");
            tableItem.innerHTML = `
            <td class="px-6 py-2 text-left">${ingArray[i][1]}</td>
            <td class="px-6 py-2 text-left">${ingArray[i + 20][1]}</td>
            `;
            // add ingredient and amount to table body, i.e list
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
    }
    // creates an unordered list
    var instructionsListEl = document.createElement("ul");
    instructionsListEl.classList.add("p-7", "list-inside", "list-disc");
    // creates a list element for each 
    for (var i = 0; i < instructionsOrganized.length; i++) {
        var instructionsEl = document.createElement("li");
        instructionsEl.innerText = instructionsOrganized[i];
        instructionsListEl.appendChild(instructionsEl);
    }

    currentPageEl.innerHTML = `
        <div class="recipe-display px-10 py-6">
            <h1 class="recipe-header text-6xl flex flex-col">${sassyString}</h1>
            <div class="recipe-name-img flex flex-col text-right">
                <h2 class="text-6xl"><a href="${foodChoiceObj.strYoutube}">${foodName}</a></h2>
                <div class="flex justify-end">
                    <img src=${foodImg} id="food-img" alt="prepared food image">
                </div>
                
            </div>
            <div class ="recipe-instructions text-3xl">
            </div>
            <div class="recipe-ingredients flex justify-center pt-5">
            </div>
        </div>
        <div class="flex justify-center mt-5">
            <button class="btn text-5xl bg-green-500 hover:bg-green-700 p-3 px-5 rounded-full" id="restart-game" type="submit">Wanna try your luck again?</button>
        </div>
        
    `;
    var recipeTable = document.querySelector(".recipe-ingredients");
    recipeTable.appendChild(ingredientTable);
    document.querySelector(".recipe-instructions").appendChild(instructionsListEl);


    var foodDisplayEl = document.querySelector("#restart-game");
    foodDisplayEl.addEventListener("click", drawCard);
}

// would like to get this working but get weird error each time
// function getEqual() {
//     // clearPage();
//     var apiUrl = "https://random-d.uk/api/v2/random";

//     fetch(apiUrl).then(function (response) {
//         if (response.ok) {
//             response.json().then(function (data) {
//                 console.log(data);
//                 displayEqual(data.url);
//             });
//         } else {
//             // if error, then?
//         }
//     });
// }

function displayEqual() {
    clearPage();
    currentPageEl.innerHTML = `
        <div class="equal-card">
            <h1>Wow, what luck! The probability of getting the same card is less than 0.5%. You're a lucky bug!</h1>
        </div>
        <div class="flex justify-center mt-5">
        <button class="btn text-5xl bg-green-500 hover:bg-green-700 p-3 px-5 rounded-full" id="restart-game" type="submit">Wanna try your luck again?</button>
        </div>
    `
}

function modalOpen() {
    var modal = document.getElementById("modal-content");
    modal.style.display = "block";
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}


document.querySelector(".modal-icon").addEventListener("click", modalOpen);