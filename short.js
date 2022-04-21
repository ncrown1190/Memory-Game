const arrayOfCards = [
  {
    name: "CSS",
    img: "assets/css.png",
  },
  {
    name: "HTML",
    img: "assets/html5.png",
  },
  {
    name: "JS",
    img: "assets/JS.png",
  },
  {
    name: "node-JS",
    img: "assets/nodeJs.png",
  },
  {
    name: "React",
    img: "assets/react.png",
  },
  {
    name: "SQL",
    img: "assets/sql.png",
  },
  {
    name: "Python",
    img: "assets/python.png",
  },
  {
    name: "Angular",
    img: "assets/angular.png",
  },
  {
    name: "CSS",
    img: "assets/css.png",
  },
  {
    name: "HTML",
    img: "assets/html5.png",
  },
  {
    name: "JS",
    img: "assets/JS.png",
  },
  {
    name: "node-JS",
    img: "assets/nodeJs.png",
  },
  {
    name: "React",
    img: "assets/react.png",
  },
  {
    name: "SQL",
    img: "assets/sql.png",
  },
  {
    name: "Python",
    img: "assets/python.png",
  },
  {
    name: "Angular",
    img: "assets/angular.png",
  },
];

// randomizing the card array
let ar1 = arrayOfCards.sort(() => 0.5 - Math.random());
console.log(ar1);

const cardsDiv = document.querySelector(".cards-div");
const displayScore = document.querySelector("#score");
let chosenCard = [];
let chosencardId = [];
let count = 0;

//create the game board
function createBoard() {
  //creating a loopover for arrayOfCards and for each card creating ab image element and calling it a card
  for (let i = 0; i < arrayOfCards.length; i++) {
    const card = document.createElement("img");
    card.setAttribute("src", "assets/pattern.png");
    //giving each an id that goes from 0 to i
    card.setAttribute("data-id", i);
    // adding eventlistner for the card and invoke cardFlipped function
    card.addEventListener("click", cardFlipped);
    cardsDiv.appendChild(card);
  }
}

//check for matching cards

const checkForCardMatch = () => {
  const cards = document.querySelectorAll("img");
  const firstOption = chosencardId[0];
  const secondOption = chosencardId[1];

  if (firstOption == secondOption) {
    cards[firstOption].setAttribute("src", "assets/pattern.png");
    cards[secondOption].setAttribute("src", "assets/pattern.png");
    alert("You have clicked the same image!");
  } else if (chosenCard[0] === chosenCard[1]) {
    let matched = new Audio("sounds/matched.wav");
    matched.play();
    alert("Your cards match! you got a point.");
    cards[firstOption].setAttribute("src", "assets/white.png");
    cards[secondOption].setAttribute("src", "assets/white.png");
    cards[firstOption].removeEventListener("click", cardFlipped);
    cards[secondOption].removeEventListener("click", cardFlipped);
    //putting the the two chosen card in an empty array i.e cardsWon array
    count++;
    //cardsWon.push(chosenCard);
  } else {
    //if the cards dont match it will be flipped over and placed back
    cards[firstOption].setAttribute("src", "assets/pattern.png");
    cards[secondOption].setAttribute("src", "assets/pattern.png");
    // let sorry = new Audio("sounds/sorry.m4a");
    // sorry.play();
    alert("Sorry, try again");
  }
  chosenCard = [];
  chosencardId = [];
  //score is 1 point for every match
  //displayScore.textContent = cardsWon.length;
  displayScore.textContent = `${count}`;
  //if (cardsWon.length === arrayOfCards.length / 2) {
  if (count === arrayOfCards.length / 2) {
    //if we have collected all the possible cards in our cards array
    displayScore.textContent = "Congratulations! You won the game!";
    let congts = new Audio("sounds/Congratulations.mp3");
    congts.play();
  }
};

//flip your card
function cardFlipped() {
  let cardId = this.getAttribute("data-id"); //date-id attribute which we created above
  // push the card in an empty array based on cardId once we located this card we get the name
  chosenCard.push(arrayOfCards[cardId].name);
  // we will push the card Id in a separate empty cardChosenId array
  chosencardId.push(cardId);
  //now set attribute wii let us add an image to that div based on card id
  this.setAttribute("src", arrayOfCards[cardId].img);
  if (chosenCard.length === 2) {
    // setTime out will give some buffer time 5ms
    setTimeout(checkForCardMatch, 100);
  }
}
let counter = 5;
const timeOut = () => {
  let interval = setInterval(function () {
    document.getElementById("counter").innerHTML = counter;
    counter--;
    if (counter === 0) {
      clearInterval(interval);
      document.getElementById("counter").innerHTML = "Done";
      // or...
      alert("You're out of time! Please stop");
    }
  }, 10000);
  clearTimeout();
};

createBoard();
//document.querySelector("#counter").addEventListener("click", timeOut);
timeOut();
