// machine choosing function
let getComputerChoice = function (choiceOption) {
  let random =  Math.floor(Math.random() * choiceOption.length);
  return (choiceOption[random]);    
}

//function to convert string into desired format
let playerInput = (string) => string.toLowerCase() 

computerScore = 0 //initializing score of computer
playerScore = 0 //initializing score of player

//function  for winning or losing
function playRound(playerSelection , computerSelection){
if (playerSelection == computerSelection) {
  alert('It is a draw!');
  
} else if ((playerSelection  == 'rock' && computerSelection == 'scissor') ||
  (playerSelection  == 'paper' && computerSelection == 'rock') ||
  (playerSelection  == 'scissor' && computerSelection == 'paper'))
         
{
    alert (`you win! ${playerSelection} beats ${computerSelection}`)
    playerScore++

}else {
    alert (`you have lost! ${computerSelection} beats ${playerSelection}`);
    computerScore++
}}

//finds out who wins the game
let gameWinner= function (computerScore, playerScore) {
  if (computerScore > playerScore) {
    alert('The computer has won the game');

  } else if (playerScore > computerScore) {
    alert('The player has won the game');

  } else {
    alert('it was a draw!');
  }
};

//loop to make game into 5 rounds (need to convert into a function?)
for (let i = 0; i < 5; i++) {
  let playerValue = playerInput(prompt('Type Rock, paper or Scissors') );
  let computerValue =getComputerChoice(['rock','paper', 'scissor']);
  playRound(playerValue,computerValue)

}

gameWinner(computerScore,playerScore)