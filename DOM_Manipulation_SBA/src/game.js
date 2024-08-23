const answerEl = document.querySelector("#answer");
const winEl = document.getElementById("win");
const lossEl = document.getElementById("loss");
const whackButton = document.getElementById("whack");
const resetButton = document.getElementById("resetButton");
const guessForm = document.getElementById("guessForm");
const guessInput = document.getElementById("guessInput");
const holes = document.querySelectorAll(".hole");
holes.forEach((hole) => (hole.innerHTML = ""));
const heading = document.createElement("h1");
heading.textContent = "Whack-a-Mole";
document.body.prepend(heading);

let currentNumber;
let tries;

function startGame() {
  currentNumber = (Math.floor(Math.random() * 7) + 1).toString();
  tries = 4;
  resetButton.style.display = "none";
  guessInput.value = "";
  answerEl.innerHTML = "";
  guessInput.style.display = "block";
  guessInput.focus();
}

function nextTry() {
  const tryGuess = guessInput.value;

  if (!/^[1-7]$/.test(tryGuess)) {
    alert("Your guess should only include a number between 1 and 7.");
    guessInput.focus();
    return;
  }

  if (tryGuess == currentNumber) {
    document.body.style.backgroundColor = "var(--winner-bg)";
    winEl.style.display = "block";
    const winMsg = document.createElement("p");
    winMsg.textContent = "Holy moly, you got 'em!";
    winEl.appendChild(winMsg);
    answerEl.style.display = "none";
    resetButton.style.display = "block";
    guessInput.style.display = "none";
    whackButton.style.display = "none";
    winMsg.style.fontSize = "25px";
    winMsg.style.fontWeight = "bold";
    resetButton.focus();
    return;
  } else {
    tries--;
    if (tries > 0) {
      function attempt() {
        answerEl.innerHTML = `Try again! You have ${tries} tries left.`;
        guessInput.style.display = "block";
        guessInput.value = "";
        guessInput.focus();
      }
      attempt();
    } else {
      document.body.style.backgroundColor = "var(--loser-bg)";
      answerEl.style.color = "red";
      answerEl.innerHTML = `Sorry, the correct hole was number ${currentNumber}. He got away to dig another day...`;
      resetButton.style.display = "block";
      lossEl.style.display = "block";
      guessInput.style.display = "none";
      whackButton.style.display = "none";
      resetButton.focus();
    }
  }
}

function resetGame() {
  winEl.style.display = "none";
  lossEl.style.display = "none";
  answerEl.innerHTML = "";
  answerEl.style.color = "";
  document.body.style.backgroundColor = "";
  startGame();
}

document
  .getElementById("resetButton")
  .addEventListener("click", function (event) {
    event.preventDefault();
    whackButton.style.display = "block";
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
