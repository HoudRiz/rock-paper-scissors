const buttons = Array.from(document.querySelectorAll('button'));
const button = document.querySelector('button');
const restartButton = document.querySelector('.restart-button')
const scoreDisplayP = document.querySelector('.player-score')
const scoreDisplayC = document.querySelector('.computer-score')
const winner = document.querySelector('.winner')

// machine choosing function
let getComputerChoice = function (choiceOption) {
  let random =  Math.floor(Math.random() * choiceOption.length);
  return (choiceOption[random]);    
}

computerScore = 0 //initializing score of computer
playerScore = 0 //initializing score of player

//function  for winning or losing
function playRound(playerSelection , computerSelection){
  
  if ((playerSelection == 'Rock') || (playerSelection == 'Paper') || (playerSelection == 'Scissor')){
    if (playerSelection == computerSelection) {
      console.log('It is a draw!');  
    }   else if ((playerSelection  == 'Rock' && computerSelection == 'Scissor') ||
    (playerSelection  == 'Paper' && computerSelection == 'Rock') ||
    (playerSelection  == 'Scissor' && computerSelection == 'Paper'))
    {
      console.log (`you win! ${playerSelection} beats ${computerSelection}`)
      playerScore++
    }   else {
      console.log (`you have lost! ${computerSelection} beats ${playerSelection}`);
      computerScore++
    }}}

//finds out who wins the game
let gameWinner= function (computerScore, playerScore) {
  if (computerScore >= 5) {
    winner.innerHTML = 'The computer has won the game';
    
    
} else if (playerScore >= 5) {
    winner.innerHTML = 'The player has won the game';
    
  
} 
};

function restart () {
  computerScore = 0
  playerScore = 0
  winner.innerHTML = '';
}

//loop to make game into 5 rounds
restartButton.addEventListener ('click' , function() {
  restart()
} )
let computerValue;
buttons.forEach(button => {
  button.addEventListener('click', function() {
    computerValue = getComputerChoice(['Rock', 'Paper', 'Scissor']);
    playRound(this.textContent, computerValue);
    gameWinner(computerScore, playerScore);
    console.log(computerScore)
    scoreDisplayP.innerHTML = playerScore;
    scoreDisplayC.innerHTML = computerScore;

  });
});
