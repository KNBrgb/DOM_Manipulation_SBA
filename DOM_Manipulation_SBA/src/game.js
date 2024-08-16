function startGame () {
    // let currentNumber = 1
    let currentNumber = Math.floor(Math.random()*6) + 1;

    for (let i=0; i < 3; i++ ){
    let guess = prompt("Pick a number between 1 and 6:")

    // const answerEl = answerEl.querySelector("div.answer")
    // console.log(answerEl)
    // console.log(currentNumber);
    // Creating random number gen.
    if (guess == currentNumber) {
        alert("Correct! You win!")
        answer.innerHTML = "Congratulations, you've won!" }
    else (guess != currentNumber); {
        // prompt("So close, try again! Pick a number between 1 and 6:")
        answer.innerHTML = "Good guess! Try again!"}
    // else if (guess != currentNumber)
    //     console.log(guess)
        
    // const answerEl = answerEl.querySelector("div.answer")
    // console.log(answerEl)
    
    }
}
// startGame()
// console.log(window.prompt);
document.getElementById("whack").addEventListener("click",startGame)
// document.querySelector.style.backgroundColor = "blue"
const whackButton = document.getElementById("whack")
whackButton.style.backgroundColor = "blue"