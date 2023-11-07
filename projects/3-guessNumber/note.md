# Guess Game

## solution code

```javascript
console.log("Guess Game !!");

let randomNumber = parseInt(Math.random() * 100 + 1);

const userInput = document.getElementById("guessField");
const guessButton = document.querySelector("#guess-btn");
const guessSlot = document.querySelector("#prev-guess");
const guessRemaning = document.querySelector("#guess-rem");
const messageArea = document.querySelector(".message-area");
const startOver = document.querySelector(".start-over");

const p = document.createElement("p");

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  guessButton.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = userInput.value;
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("Please enter a valid number");
  } else if (guess < 1) {
    alert("Please enter number greater than 1");
  } else if (guess > 100) {
    alert("Please enter a number less than 100");
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuessesList(guess);
      displayMessage(`Game over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuessesList(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (Number(guess) === Number(randomNumber)) {
    displayMessage("Congrats !!! , Your guess is right");
    endGame();
  } else if (guess < randomNumber) {
    displayMessage("Number is too low");
  } else if (guess > randomNumber) {
    displayMessage("Number is too high");
  }
}

function displayMessage(message) {
  messageArea.innerHTML = message;
}

function displayGuessesList(guess) {
  userInput.value = "";
  guessSlot.innerHTML += ` ${guess} ,`;
  numGuess++;
  guessRemaning.innerHTML = `${11 - numGuess}`;
}

function endGame() {
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  p.classList.add("btn-new-game");
  p.innerHTML = `<h2 id="newGame" style="background-color: #2c9c93; padding: 10px; border-radius: 10px; cursor: pointer;">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGamebtn = document.querySelector("#newGame");
  newGamebtn.addEventListener("click", function (e) {
    e.preventDefault();
    playGame = true;
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = "";
    guessRemaning.innerHTML = `${11 - numGuess}`;
    messageArea.innerHTML = "";
    startOver.innerHTML = "";
    userInput.removeAttribute("disabled");
  });
}
```
