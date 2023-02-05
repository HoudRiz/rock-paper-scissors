// machine choosing function
let getComputerChoice = function (choiceOption) {
  let random =  Math.floor(Math.random() * choiceOption.length);
  return (choiceOption[random]);    
}

//function to convert string into desired format
let playerInput = (string) => string.toLowerCase() 

let lossCount = 0
let winCount = 0
//function  for winning or losing
function playRound(playerSelection , computerSelection,lossCount, winCount){
if (playerSelection == computerSelection) {
  alert('It is a draw!');

} else if (playerSelection  == 'rock' && computerSelection == 'scissor') {
   alert (`you win! ${playerSelection} beats ${computerSelection}`)
   let win = winCount++
   console.log(win)

} else if (playerSelection  == 'paper' && computerSelection == 'rock') {
    alert (`you win! ${playerSelection} beats ${computerSelection}`)
    let win = winCount++
    console.log(win)

} else if (playerSelection  == 'scissor' && computerSelection == 'paper') {
    alert (`you win! ${playerSelection} beats ${computerSelection}`)
    let win = winCount++
    console.log(win)

}else {
    alert (`you have lost! ${computerSelection} beats ${playerSelection}`);
    let loss = lossCount++
    console.log(loss)
};

}


for (let i = 0; i < 5; i++) {
  let playerValue = playerInput(prompt('Type Rock, paper or Scissors') );
  let computerValue =getComputerChoice(['rock','paper', 'scissor']);
  playRound(playerValue,computerValue)


}