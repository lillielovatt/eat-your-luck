// fetch for 2 random cards
const currentPageEl = document.querySelector(".current-page");
const pickCardEl = document.querySelector(".two-cards");
const searchBtn = document.querySelector("#search-btn");


getEqual();

highOrLow();

function clearPage() {
    while (currentPageEl.firstChild) {
        currentPageEl.removeChild(currentPageEl.lastChild);
    };
}

function highOrLow() {
    clearPage();
    var apiUrl = "https://deckofcardsapi.com/api/deck/new/draw/?count=2";
    fetch(apiUrl).then(function (response) {
        if (response.ok) {
            // now 2 cards are drawn, need to call function to display them on the page--but hidden, display or opacity?
            response.json().then(function (data) {
                displayCards(data.cards[0].value, data.cards[1].value, data.cards[0].images.png, data.cards[1].images.png);
            });
        } else {
            // display an error in case deck of cards API fails for some reason? 404?
            console.log("error")
        }
    });
}

function displayCards(cardOne, cardTwo, cardOneImg, cardTwoImg) {
    console.log(cardOne, cardTwo);
  
    // dynamically create HTML, that shows two rectangles that are opaque/hidden

    // spade - https://svgsilh.com/svg/145116.svg

    // id="${cardOneValue}" id="${cardTwoValue}"
    // makes it so that inside of the div for the class
    // var cardOneValue = cardOne.substring(0, cardOne.length - 1);
    // var cardTwoValue = cardTwo.substring(0, cardTwo.length - 1);

    // here I can say which is high and which is low. 
    var cardChoice = highCard(cardOne, cardTwo);
    if (cardOne === cardChoice) {
        var cardOneId = "true";
        var cardTwoId = "false";
    } else if (cardTwo === cardChoice) {
        var cardOneId = "false";
        var cardTwoId = "true";
    } else if (cardChoice === "equal") {
        var cardOneId = "equal";
        var cardTwoId = "equal";
    }

    currentPageEl.innerHTML = `
        <div id="card-rend" class="pick-card hide">
            <h1 id="card-h1" >Pick a card!</h1>
            <div id="card-div" class="two-cards">
                <div class="card-one cards">
                    <img src=${cardOneImg} id="${cardOneId}">
                </div>
                <div class="card-two cards">
                    <img src=${cardTwoImg} id="${cardTwoId}">
                </div>
            </div>
        </div>
    `;
   
    
}
function showCardsDiv(){
    var searchEl = document.querySelector("#search-main");
    searchEl.setAttribute("class", "hide");
    var cardEl = document.querySelector("#card-rend");
  cardEl.removeAttribute("class");
    }
    searchBtn.addEventListener("click", showCardsDiv);
    console.log("buttonClick");

function highCard(cardOne, cardTwo) {
    var cardArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "JACK", "QUEEN", "KING", "ACE"];
    console.log(typeof (cardOne) + " ", typeof (cardTwo));
    var valueCardOne = cardArray.indexOf(cardOne);
    console.log(valueCardOne);
    var valueCardTwo = cardArray.indexOf(cardTwo);
    console.log(valueCardTwo);

    // test which card is higher
    if (valueCardOne > valueCardTwo) {
        return cardOne;
    } else if (valueCardTwo > valueCardOne) {
        return cardTwo;
    } else if (valueCardOne === valueCardTwo) {
        return "equal";
    }
}

function pickCard(event) {
    //     console.log(12);
    //     // console.log(event.target);
    //     // var ted=event.target;
    //     // console.log(ted[38]);
    //     // console.log(event.target.className);

    //     // "https://deckofcardsapi.com/static/img/AH.svg"
    //     // var cardSelected = event.target.className;
    // console.log("high card")

    // put here insead of inside getfood/getdrink?

    // while (currentPageEl.firstChild) {
    //     currentPageEl.removeChild(currentPageEl.lastChild);
    // }

    if (event.target.tagName === "IMG") {
        var userCard = event.target.getAttribute("id");
        if (userCard === "true") {
            // then user picked the high card, and they win, and perform fetch for that
            getFood("dessert");
            console.log("high card")
        } else if (userCard === "false") {
            // then user picked the low card, and they lose, and perform fetch for that
            getFood("vegan");
            console.log("low card")
        } else if (userCard === "equal") {
            // then user got same card, congratulate and show the probability 
            // displayProbability();
            console.log("equal card")
            getEqual();
        }
    }
};

currentPageEl.addEventListener("click", pickCard);

function getFood(typeOfFood) {
    var apiUrl = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${typeOfFood}`;

    fetch(apiUrl).then(function (response) {
        if (response.ok) {
            response.json().then(function (data) {
                var foodChoice = randomNumber(0, data.meals.length - 1)
                displayFood(data.meals[foodChoice], typeOfFood);
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

function displayFood(foodChoice, typeOfFood) {
    // while (currentPageEl.firstChild) {
    //     currentPageEl.removeChild(currentPageEl.lastChild);
    // }
    clearPage();

    var foodName = foodChoice.strMeal;
    var foodImg = foodChoice.strMealThumb;
    if (typeOfFood === "vegan") {
        var sassyString = "You picked the low card. Here's a vegan meal, loser. ;)";
    } else if (typeOfFood === "dessert") {
        var sassyString = "You picked the high card! Dessert's on us, champ."
    }

    currentPageEl.innerHTML = `
        <div class="food-display">
            <h1>${sassyString}</h1>
            <div class="food-name-img">
                <h2>${foodName}</h2>
                <img src=${foodImg} id="food-img">
                <button class="btn" id="restart-game" type="submit">Wanna try your luck again?</button>
            </div>
        </div>
    `;
    var foodDisplayEl = document.querySelector("#restart-game");
    foodDisplayEl.addEventListener("click", highOrLow);
}

function getEqual() {
    // clearPage();
    var apiUrl = "https://random-d.uk/api/v2/random";

    fetch(apiUrl).then(function (response) {
        if (response.ok) {
            response.json().then(function (data) {
                console.log(data);
                displayEqual(data.url);
            });
        } else {
            // if error, then?
        }
    });
}

function displayEqual(imgUrl){
    // clearPage();
    currentPageEl.innerHTML = `
    <div class="current-page">
        <div class="equal-card">
            <h1>Wow, what luck! The probability of getting the same card is less than 0.5%. You're a lucky bug!</h1>
            <img src=${imgUrl} id="equal-img">
        </div>
    </div>
`
}

// // var foodDisplayEl = document.querySelector("#restart-game");
// // foodDisplayEl.addEventListener("click", highOrLow);





// // Access to fetch at 'https://random-d.uk/api/v2/random' from origin 'null' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.








// // function getDrink() {
// //     while (currentPageEl.firstChild) {
// //         currentPageEl.removeChild(currentPageEl.lastChild);
// //     }
// //     var apiUrl = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Vegan";
// // }


// // if(pickCardEl){
// //     console.log(11);
// //     pickCardEl.addEventListener("click", pickCard);
// // }

// // click element--when you click on one of the display cards, then you

// // if you picked the lower of the two cards, then--drink
// // if you picked the higher of the two cards, then--dessert
// // if the two cards are the same, then--tell them the odds of that

// // display button to head back to the beginning 

