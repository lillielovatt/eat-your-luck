
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


