const answerEl = document.querySelector("#answer");
const winEl = document.getElementById("win");
const lossEl = document.getElementById("loss");
const whackButton = document.getElementById("whack");
const resetButton = document.getElementById("resetButton");
const guessForm = document.getElementById("guessForm");
const guessInput = document.getElementById("guessInput");

let currentNumber;
let tries;

function startGame() {
  currentNumber = (Math.floor(Math.random() * 7) + 1).toString();
  tries = 3;
  resetButton.style.display = "none";
  guessInput.value = "";
  answerEl.innerHTML = "";
  guessInput.style.display = "block";
  // guessForm.style.display = '';
  guessInput.focus();
}

function nextTry() {
  const tryGuess = guessInput.value;
  // document.body.innerHTML.querySelector("#guessInput");
  // guessInput.style.display = 'block'

  if (!/^[1-7]$/.test(tryGuess)) {
    alert("Your guess should only include a number between 1 and 7.");
    guessInput.focus();
    return;
  }

  if (tryGuess == currentNumber) {
    document.body.style.backgroundColor = "var(--winner-bg)";
    winEl.style.display = "block";
    answerEl.innerHTML = "Holy moly, you got 'em!";
    resetButton.style.display = "block"; 
  } else {
    tries--;
    if (tries > 0) {
      answerEl.innerHTML = `Try again! You have ${tries} tries left.`;
      guessInput.style.display = 'block';

    } else {
      document.body.style.backgroundColor = "var(--loser-bg)";
      answerEl.style.color = "red";
      answerEl.innerHTML = `Sorry, the correct hole was number ${currentNumber}. He got away to dig another day...`;
      resetButton.style.display = "block";
      lossEl.style.display = "block";
      guessInput.style.display = 'none';
      // guessForm.style.display = 'none';
      

      // ADD A BREAK TO STOP THE LOOP, THEN AND FUNCTION TO BUTTON TO RESTART (button = startGame)
    }
  }
  // if (tries >=3) {
  //   document.getElementById(`hole${mole}`).innerHTML =
  //   "<img id='shockedMole' src='./img/shockedmole.png' alt='mole'>";
  // }
  //}
}
// return;

function resetGame() {
  winEl.style.display = "none";
  lossEl.style.display = "none";
  answerEl.innerHTML = "";
  answerEl.style.color = "";
  document.body.style.backgroundColor = "";
  startGame();
}


guessForm.addEventListener('submit', function(event) {
  // event.preventDefault();
  nextTry();
});

startGame();

// resetButton.style.display = "none";

// function numberGuess() {
//   let guessInput = document.getElementById("guessInput");
//   let tryGuess = guessInput.value;
//   if (/^[1-7]$/.test(tryGuess)) {
//     return true;
//   } else {
//     nextTry();
//   }
// }

// whackButton.style.backgroundColor = "blue";
//}
// window.innerHeight = "10%";
// document.getElementById("whack").addEventListener("click", startGame);
// const whackButton = document.getElementById("whack");
