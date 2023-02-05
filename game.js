// machine choosing function
let computerSelector = function (choiceOption) {
  let random =  Math.floor(Math.random() * choiceOption.length);
  return (choiceOption[random]);    
}

console.log(computerSelector(['rock','paper', 'scissor']))
  
// Human chooses random value  Convert raw input into correct form

let playerSelector = function(string) {
    return string.toLowerCase() ;
  }
  
  console.log(playerSelector(prompt('Type Rock, paper or Scissors')))

//conditions for winning or losing

