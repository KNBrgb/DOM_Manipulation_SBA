const answerEl = document.querySelector("#answer");
const winEl = document.getElementById("win");
const lossEl = document.getElementById("loss");
const whackButton = document.getElementById("whack");
const resetButton = document.getElementById("resetButton");
const guessForm = document.getElementById("guessForm");
const guessInput = document.getElementById("guessInput");
const holes = document.querySelectorAll('.hole');
holes.forEach(hole => hole.innerHTML = '');

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
    guessInput.style.display = 'none';
    whackButton.style.display = 'none';
  } else {
    tries--;
    if (tries > 0) {
      answerEl.innerHTML = `Try again! You have ${tries} tries left.`;
      guessInput.style.display = "block";
      guessInput.value = "";
      guessInput.focus();
    } else {
      document.body.style.backgroundColor = "var(--loser-bg)";
      answerEl.style.color = "red";
      answerEl.innerHTML = `Sorry, the correct hole was number ${currentNumber}. He got away to dig another day...`;
      resetButton.style.display = "block";
      lossEl.style.display = "block";
      guessInput.style.display = "none";
      whackButton.style.display = 'none';

      // guessForm.style.display = 'none';

      // ADD A BREAK TO STOP THE LOOP, THEN AND FUNCTION TO BUTTON TO RESTART (button = startGame)
    }
  }
  // if (tries >=3) {
  //   document.getElementById(`hole${mole}`).innerHTML =
  //   "<img id='shockedMole' src='./img/shockedmole.png' alt='mole'>";
  // }
  //}
};
// return;

function resetGame() {
  winEl.style.display = "none";
  lossEl.style.display = "none";
  answerEl.innerHTML = "";
  answerEl.style.color = "";
  document.body.style.backgroundColor = "";
  // resetButton.focus();
  startGame();
};



document.getElementById('resetButton').addEventListener('click', function(event) {
  event.preventDefault();
  whackButton.style.display = 'block';
  resetGame();
});
guessForm.addEventListener("submit", function (event) {
  event.preventDefault();
  nextTry();
});

startGame();



// REQUIREMENTS
// Cache at least one element using selectElementById.

// Cache at least one element using querySelector or querySelectorAll.

// Use the parent-child-sibling relationship to navigate between elements at least once (firstChild, lastChild, parentNode, 
// nextElementSibling, etc.).

// Iterate over a collection of elements to accomplish some task.

// Create at least one element using createElement.

// Use appendChild and/or prepend to add new elements to the DOM.

// Use the DocumentFragment interface or HTML templating with the cloneNode method to create templated content. 

// Modify the HTML or text content of at least one element in response to user interaction using innerHTML, innerText, or textContent.

// Modify the style and/or CSS classes of an element in response to user interactions using the style or classList properties.

// Modify at least one attribute of an element in response to user interaction.

// Register at least two different event listeners and create the associated event handler functions.

// Use at least two Browser Object Model (BOM) properties or methods.

// Include at least one form and/or input with HTML attribute validation.

// Include at least one form and/or input with DOM event-based validation. (This can be the same form or input as the one above, but should include event-based validation in addition to the HTML attribute validation.)

// Ensure that the program runs without errors (comment out things that do not work, and explain your blockers - you can still receive partial credit).

