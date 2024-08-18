// function startGame() {
//     let currentNum = Math.floor(Math.random()*7) + 1;

//     for(let i=0; i<5; i++){
//     let holeContainer = document.getElementsByClassName('.holeContainer');

// document.holeContainer.style.backgroundColor = ('var(--main-bg)')

//}};
// const gardenColor = document.querySelector(".garden");
// gardenColor.style.backgroundColor = 'var(--main-bg)';

// const dEl = document.innerHTML = document.innerHTML = "<div class='solution'></div>";
// dEl.classList.remove('solution');
// dEl.classList.add('answer');
// dEl.textContent = 'lol';
// console.log(dEl);

function startGame() {
  // let currentNumber = 1
  let currentNumber = Math.floor(Math.random() * 7) + 1;

  for (let i = 0; i < 3; i++) {
    let guess = prompt("Pick a number between 1 and 7:");

    // const answerEl = answerEl.querySelector("div.answer")
    // console.log(answerEl)
    // console.log(currentNumber);
    // Creating random number gen.
    if (guess == currentNumber) {
      answer.innerHTML = "Holy moly, you got 'em!";
      window.document,style.backgroundColor = 'var(--winner-bg)'
      break;
      //   alert('Holy moly, you got 'em!')
    } else;
    {
      // prompt("So close, try again! Pick a number between 1 and 6:")
      answer.innerHTML = "He got away to dig another day...";
    }

    if (i === 2) {
      answer.innerHTML = `Sorry, the correct hole was number ${currentNumber}! He got away to dig another day. `;
      answer.style.color = "red";
      window.document.body.style.backgroundColor = 'var(--loser-bg)';
      document.getElementById("revealButton").addEventListener("click", function () {
          alert(`The correct number was ${currentNumber}`);
        });
      // else if (guess != currentNumber)
      //     console.log(guess)

      // const answerEl = answerEl.querySelector("div.answer")
      // console.log(answerEl)
    }
  }
}
// startGame()
// console.log(window.prompt);
window.innerHeight = "100%";
window.document.getElementById("whack").addEventListener("click", startGame);
// document.querySelector.style.backgroundColor = "blue"
const whackButton = document.getElementById("whack");
whackButton.style.backgroundColor = "blue";
