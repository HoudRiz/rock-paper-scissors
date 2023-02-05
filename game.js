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

//conditions for winning or losing
if (playerValue == computerValue) {
  alert('It is a draw!');

} else if (playerValue  == 'rock' && computerValue == 'scissor') {
   alert (`you win! ${playerValue} beats ${computerValue}`)

} else if (playerValue  == 'paper' && computerValue == 'rock') {
    alert (`you win! ${playerValue} beats ${computerValue}`)

} else if (playerValue  == 'scissor' && computerValue == 'paper') {
    alert (`you win! ${playerValue} beats ${computerValue}`)

}else {
    alert (`you have lost! ${computerValue} beats ${playerValue}`);
};

