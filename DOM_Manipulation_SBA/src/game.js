const answerEl = document.querySelector("#answer");
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
  let tries = 3;
  let i = 0;

  function nextTry() {
    if (i < tries) {
      // var win = document.getElementById('win').setAttribute('id','box');

      let guess = prompt("Pick a number between 1 and 7:");

      if (guess == currentNumber.toString()) {
        alert("Holy moly, you got 'em!");
        document.body.style.backgroundColor = "var(--winner-bg)";
        document.getElementById("#win").setAttribute.style.display = "block";
        return;
      } else {
        i++;
        if (i < tries) {
          // answerEl.innerHTML = `Try again! You have ${tries - i - 1} tries left.`
          nextTry();
        } else {
        //   document.getElementById(`hole${mole}`).innerHTML =
        // "<img id='shockedMole' src='./img/shockedmole.png' alt='mole'>";
          alert(`Sorry, the correct hole was number ${currentNumber}. He got away to dig another day...`);
          document.body.style.backgroundColor = "var(--loser-bg)";
          answerEl.style.color = "red";
          return;
         

// ADD A BREAK TO STOP THE LOOP, THEN AND FUNCTION TO BUTTON TO RESTART (button = startGame)
        }
      }
    }
  }
  nextTry();
}
//}
window.innerHeight = "10%";
document.getElementById("whack").addEventListener("click", startGame);
const whackButton = document.getElementById("whack");
whackButton.style.backgroundColor = "brown";
