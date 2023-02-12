// machine choosing function
let getComputerChoice = function (choiceOption) {
  let random =  Math.floor(Math.random() * choiceOption.length);
  return (choiceOption[random]);    
}

//function to convert string into desired format
let playerInput = (string) => string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()


computerScore = 0 //initializing score of computer
playerScore = 0 //initializing score of player

//function  for winning or losing
function playRound(playerSelection , computerSelection){
  if ((playerSelection == 'Rock') || (playerSelection == 'Paper') || (playerSelection == 'Scissor')){
    if (playerSelection == computerSelection) {
          alert('It is a draw!');  
}   else if ((playerSelection  == 'Rock' && computerSelection == 'Scissor') ||
            (playerSelection  == 'Paper' && computerSelection == 'Rock') ||
            (playerSelection  == 'Scissor' && computerSelection == 'Paper'))
{
              alert (`you win! ${playerSelection} beats ${computerSelection}`)
              playerScore++
}   else {
        alert (`you have lost! ${computerSelection} beats ${playerSelection}`);
        computerScore++
}}else{
    alert ('The input you have entered is invalid.')
}}

//finds out who wins the game
let gameWinner= function (computerScore, playerScore) {
  if (computerScore > playerScore) {
    alert('The computer has won the game');

} else if (playerScore > computerScore) {
    alert('The player has won the game');

} else {
    alert('it was a draw!');
    
}};

//loop to make game into 5 rounds
function game(){

  let playerValue = playerInput(prompt('Type Rock, Paper or Scissor') );
  let computerValue =getComputerChoice(['Rock','Paper', 'Scissor']);
  playRound(playerValue,computerValue)
  gameWinner(computerScore,playerScore)
}

game()