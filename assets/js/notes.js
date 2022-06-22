
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



// modal - the idea of this website is just --see where your luck takes you. Are you gonna get lucky, or unlucky? Dessert, or vegan?



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



    // dynamically create HTML, that shows two rectangles that are opaque/hidden

    // spade - https://svgsilh.com/svg/145116.svg

    // id="${cardOneValue}" id="${cardTwoValue}"
    // makes it so that inside of the div for the class
    // var cardOneValue = cardOne.substring(0, cardOne.length - 1);
    // var cardTwoValue = cardTwo.substring(0, cardTwo.length - 1);

    // here I can say which is high and which is low. 



    // takes the value of the 2 cards drawn, and tests to see which is higher/lower
    // if higher, it assigns an Id of "true"
    // if lower, it assigns an Id of "false"
    // if the two cards are the same, it assigns an id to both of "equal", i.e. "cardChoice"
    // var cardChoice = highCard(cardOne, cardTwo);
    // if (cardOne === cardChoice) {
    //     var cardOneId = "true";
    //     var cardTwoId = "false";
    // } else if (cardTwo === cardChoice) {
    //     var cardOneId = "false";
    //     var cardTwoId = "true";
    // } else if (cardChoice === "equal") {
    //     var cardOneId = cardChoice;
    //     var cardTwoId = cardChoice;
    // }

    // cardOne, cardTwo, cardOneImg, cardTwoImg
    // dynamically creates HTMl to display both cards 

    // <!-- <header>
    //     <div id="myModal" class="px-10 py-6">
    //         <div class="modal-content">
    //             <img class="modal-icon"
    //                 src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Noun_Project_question_mark_icon_1101884_cc.svg">
    //             <div class="modal hidden" id="modal-content">
    //                 <h2 class="text-center text-6xl">Welcome to Eat Your Luck!</h2>
    //                 <br>
    //                 <p class="text-2xl">Are you hungry right now? I bet you are. <br> Wondering what you should make?
    //                     Aren't we all! <br> With Eat Your Luck,
    //                     it's now easier than ever to pick the meal for you, a winner! Or, a <span
    //                         class="italic">loser?</span>
    //                 </p>
    //                 <br>
    //                 <p class="text-4xl">Why don't you test your luck and find out?</p>
    //             </div>
    //         </div>
    //     </div>
    // </header> --></div>


    
// if (cardOne === cardChoice) {
//     var cardOneId = "true";
//     var cardTwoId = "false";
// } else if (cardTwo === cardChoice) {
//     var cardOneId = "false";
//     var cardTwoId = "true";
// } else if (cardChoice === "equal") {
//     var cardOneId = cardChoice;
//     var cardTwoId = cardChoice;
// }



// if (userCard === "true") {
//     // then user picked the high card, and they win, and perform fetch for that
//     getFood("dessert");
// } else if (userCard === "false") {
//     // then user picked the low card, and they lose, and perform fetch for that
//     getFood("vegan");
// } else if (userCard === "equal") {
//     // then user got same card, congratulate and show the probability 
//     displayEqual();
// }

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



    // create some sort of background, perhaps transparent, that would allow me to target it below--normally it is hidden
    // when this function runs, we make it not hidden
    // then if you click on the background, then modal.style.display = "none";

    // ^element to target that background, add event listener, run some function -> modal.style.display = "none" and make background hidden again. modal should be x+1

    // position absolute, top left bottom right 0. z index could be X - for background image

    // add

    // when you click OUTSIDE OF THE MODAL, the modal closes.
    // window.onclick = function () {
    //     // if (event.target != modal) {
    //     //     modal.style.display = "none";
    //     // }
    //     modal.style.display = "none";
    // }


    // console.log(cardDrawnOneImg,cardDrawnTwoImg, cardDrawnOne,cardDrawnTwo);
// cardOne, cardTwo, cardOneImg, cardTwoImg

//data-url="${cardOneImg}"  data-url="${cardTwoImg}" ${cardOneId} ${cardTwoId}

    // <!-- <link rel="stylesheet" href="./assets/css/style.css" /> -->
    // <!-- <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet"> -->


    // console.log(cardDrawnOneImg, cardDrawnTwoImg, cardDrawnOne, cardDrawnTwo);
    // if I don't include this, it gives me an error...even though I don't need to pass these into the function. What???
    // displayCards(data.cards[0].value, data.cards[1].value, data.cards[0].images.png, data.cards[1].images.png);

//data-url="${cardOneImg}"  data-url="${cardTwoImg}" ${cardOneId} ${cardTwoId}






// user selects a card, and pickCard function

// var pickCard = document.querySelector(".mystery-card");
// pickCard.onclick = (event) => {
//     var userCard = event.target.getAttribute("id");
//     var cardHigh = highCard(cardDrawnOne, cardDrawnTwo);
//     console.log(event.target);
//     console.log(userCard);
//     console.log("card picked");
//     console.log(cardDrawnOneImg);

//     clearPage();
//     currentPageEl.innerHTML = `
//             <div class="pick-card">
//                 <div class="flex justify-center">
//                     <h1 class="text-6xl mb-6">Pick a card!</h1>
//                 </div>
//                 <div class="two-cards flex md:flex-row md:justify-center flex-col items-center">
//                     <div class="card-one">
//                         <img src="${cardDrawnOneImg}">
//                     </div>
//                     <div class="card-two md:pl-6 py-6 md:py-0">
//                         <img src="${cardDrawnTwoImg}">
//                     </div>
//               </div>
//             </div>
//             `;
//     console.log("HTML updated");
//     // want time to pass before I run these functions
//     if (cardHigh === userCard) {
//         // high card
//         console.log("dessert");
//         setTimeout(function () { getFood("dessert"); }, 2000);
//     } else if (cardHigh === "equal") {
//         // equal card
//         console.log("equal");
//         setTimeout(function () { displayEqual(); }, 2000);
//     } else if (cardHigh != userCard) {
//         // low card
//         console.log("vegan");
//         setTimeout(function () { getFood("vegan"); }, 2000);
//     }

// };

// document.querySelector(".mystery-card").addEventListener("click", pickCard);

// When the user clicks on the mystery-card class (i.e. either back of card image), this function runs.
// function pickCard(event) {
//     var userCard = event.target.getAttribute("id");
//     var cardHigh = highCard(cardDrawnOne, cardDrawnTwo);
//     console.log("hello");
//     console.log(cardDrawnOneImg);

//     clearPage();
//     currentPageEl.innerHTML = `
//             <div class="pick-card">
//                 <div class="flex justify-center">
//                     <h1 class="text-6xl mb-6">Pick a card!</h1>
//                 </div>
//                 <div class="two-cards flex md:flex-row md:justify-center flex-col items-center">
//                     <div class="card-one">
//                         <img src="${cardDrawnOneImg}">
//                     </div>
//                     <div class="card-two md:pl-6 py-6 md:py-0">
//                         <img src="${cardDrawnTwoImg}">
//                     </div>
//               </div>
//             </div>
//             `;
//     console.log("again");
//     // want time to pass before I run these functions
//     if (cardHigh === userCard) {
//         // high card
//         console.log("dessert");
//         setTimeout(function () { getFood("dessert"); }, 2000);
//     } else if (cardHigh === "equal") {
//         // equal card
//         console.log("again");
//         setTimeout(function () { displayEqual(); }, 2000);
//     } else if (cardHigh != userCard) {
//         // low card
//         console.log("vegan");
//         setTimeout(function () { getFood("vegan"); }, 2000);
//     }
// };




// dynamically create HTML for the "enter name" functionality for user to enter name and be addressed as such.
// function askName() {
//     clearPage();
//     currentPageEl.innerHTML = `
//     <div class="mx-auto bg-grey-400 grid place-items-center card">
//         <div class="search flex-column content-center">
//             <h1 class="text-xl font-bold text-center flex w-100">
//                 What's your name, Bozo?
//             </h1>
//             <input type="text" class="search-bar rounded flex-auto content-evenly">
//             <button><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em"
//                     width="1em" xmlns="http://www.w3.org/2000/svg">
//                     <path
//                         d="M10,18c1.846,0,3.543-0.635,4.897-1.688l4.396,4.396l1.414-1.414l-4.396-4.396C17.365,13.543,18,11.846,18,10 c0-4.411-3.589-8-8-8s-8,3.589-8,8S5.589,18,10,18z M10,4c3.309,0,6,2.691,6,6s-2.691,6-6,6s-6-2.691-6-6S6.691,4,10,4z">
//                     </path>
//                     <path
//                         d="M11.412,8.586C11.791,8.966,12,9.468,12,10h2c0-1.065-0.416-2.069-1.174-2.828c-1.514-1.512-4.139-1.512-5.652,0 l1.412,1.416C9.346,7.83,10.656,7.832,11.412,8.586z">
//                     </path>
//                 </svg></button>
//         </div>
//     </div>
//     `
//     // add event Listener for when user has entered name and clicked submit?
// }