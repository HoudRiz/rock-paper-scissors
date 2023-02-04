// Machine chooses a random value within array
const choiceOption = ['Rock', 'Paper', 'Scissor'];
const random = Math.floor(Math.random() * choiceOption.length);
console.log(choiceOption[random]);    

// Human chooses random value 

let playerInput = prompt('Enter Rock, Paper or Scissor').toLowerCase();
console.log(playerInput);

// Convert raw input into correct form
let playerSelection =  playerInput.charAt(0).toUpperCase() + playerInput.slice(1);
console.log (playerSelection);
