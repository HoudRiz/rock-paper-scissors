// machine choosing function
let computerSelector = function (choiceOption) {
  let random =  Math.floor(Math.random() * choiceOption.length);
  return (choiceOption[random]);    
}
const option = ['rock','paper', 'scissor'];
let computerValue =computerSelector(option);
console.log (computerValue)
  
// Human chooses random value  Convert raw input into correct form

let playerSelector = function(string) {
    return string.toLowerCase() ;
  }
rawInput = prompt('Type Rock, paper or Scissors') 
console.log(playerSelector(rawInput))
let playerValue = playerSelector(rawInput);
  

//conditions for winning or losing
if (playerValue == computerValue) {
  alert('It is a draw!');
} else if (playerValue  == '' || computerValue == '') {
  alert ('you win! ' + playerSelector  + computerSelector)
} else {
  alert ('you have lost!');
};

