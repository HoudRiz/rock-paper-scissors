// machine choosing function
let getComputerChoice = function (choiceOption) {
  let random =  Math.floor(Math.random() * choiceOption.length);
  return (choiceOption[random]);    
}

let computerValue =getComputerChoice(['rock','paper', 'scissor']);
console.log (computerValue) //calling the function
  
// Human chooses random value  Convert raw input into correct form

let playerInput = function(string) {
    return string.toLowerCase() ;
  } 
let playerValue = playerInput(prompt('Type Rock, paper or Scissors') );
console.log (playerValue); // calling the function

//function  for winning or losing
function playRound(playerSelection , computerSelection){
if (playerSelection == computerSelection) {
  alert('It is a draw!');

} else if (playerSelection  == 'rock' && computerSelection == 'scissor') {
   alert (`you win! ${playerSelection} beats ${computerSelection}`)

} else if (playerSelection  == 'paper' && computerSelection == 'rock') {
    alert (`you win! ${playerSelection} beats ${computerSelection}`)

} else if (playerSelection  == 'scissor' && computerSelection == 'paper') {
    alert (`you win! ${playerSelection} beats ${computerSelection}`)

}else {
    alert (`you have lost! ${computerSelection} beats ${playerSelection}`);
};
}
playRound(playerValue,computerValue)