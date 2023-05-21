let attemptsNumber = document.getElementById("attemptsnumber");
let guessInput = document.getElementById("guessinput");
let guessButton = document.getElementById("guessbutton");
let displayResult = document.getElementById("displayresult");
let myForm = document.getElementById("myform");
let targetNumber;
let targetNumber2;
let attempts = 5;

myForm.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
  e.preventDefault();
  guessButton.disabled = false;
  attemptsNumber.innerText = attempts;
  guessButton.addEventListener("click", handleClick);

  function handleClick() {
    let userGuess = parseInt(guessInput.value);
    let sum = targetNumber + targetNumber2;
    displayResults(userGuess, sum);
    attempts--;
    attemptsNumber.innerText = attempts;
    if (attempts === 0) {
      guessButton.disabled = true;
      displayResult.innerText = `The correct answer was ${sum} GAME OVER! You lost :( You have finished your attempts. You can try again by refreshing the page.`;
    }
  }
}

function displayResults(userGuess, sum) {
  if (userGuess < 2 || userGuess > 12 || isNaN(userGuess)) {
    displayResult.innerText =
      "Invalid number, please enter a number between 2 and 12";
  } else if (userGuess === sum) {
    guessButton.disabled = true;
    displayResult.innerText = "Congratulations, your guess is correct!";
  } else {
    displayResult.innerText = `Wrong answer :( Try again. The correct answer was ${sum}`;
  }
}

let dice1Image;
let dice2Image;

function start() {
  guessButton.addEventListener("click", rollDice, false);
  dice1Image = document.getElementById("Die1");
  dice2Image = document.getElementById("Die2");
}

function rollDice() {
  targetNumber = Math.ceil(Math.random() * 6);
  targetNumber2 = Math.ceil(Math.random() * 6);

  dice1Image.setAttribute("src", "Die" + targetNumber + ".png");
  dice2Image.setAttribute("src", "Die" + targetNumber2 + ".png");
}

window.addEventListener("load", start, false);
