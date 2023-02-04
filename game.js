// Machine chooses a random value within array
const choiceOption = ['rock', 'paper', 'scissor'];
const random = Math.floor(Math.random() * choiceOption.length);
console.log(choiceOption[random]);    

// Human chooses random value  Convert raw input into correct form

let playerSelector = function(string) {
    return string.toLowerCase() ;
  }
  
  console.log(playerSelector(prompt('Type Rock, paper or Scissors')))
  