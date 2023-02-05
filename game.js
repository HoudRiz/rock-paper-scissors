// machine choosing function
let getComputerChoice = function (choiceOption) {
  let random =  Math.floor(Math.random() * choiceOption.length);
  return (choiceOption[random]);    
}

//function to convert string into desired format
let playerInput = (string) => string.toLowerCase() 

computerScore = 0
playerScore = 0
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
      console.log (playerScore)

}else {
    alert (`you have lost! ${computerSelection} beats ${playerSelection}`);
    computerScore++
    console.log(computerScore)
};

}




for (let i = 0; i < 5; i++) {
  let playerValue = playerInput(prompt('Type Rock, paper or Scissors') );
  let computerValue =getComputerChoice(['rock','paper', 'scissor']);
  playRound(playerValue,computerValue)

  


}