/* I need a function to allow the computer to return one of the three options: `Rock`, `Paper` or `Scissors`. */
function computerPlay() {
  let computerInput = Math.random(0, 0.9999);
  if (computerInput < 0.3333 /* The more floating point I have, the more accurate the result of computerPlay function should be*/ ) {
    return `Rock`;
  } else if (computerInput < 0.6666 ) {
    return `Paper`;
  } else if (computerInput < 0.9999) {
      return `Scissors`;
  }
}

/* I want a funtion that makes the first letter of the user input capital while the rest of them remain lower case. */
function firstLetterCapital(userInput) {
    let lowerCase = userInput.slice(1).toLowerCase();
    let upperCase = userInput.slice(0,1).toUpperCase();
    return `${upperCase}${lowerCase}`;
}

/* I need a function to allow the user to input `Rock`, `Paper` or `Scissors`. */
function humanPlay() {
  let userInput = prompt(`Please type in 'Rock', 'Paper' or 'Scissors'`);
  
  if (userInput === `Rock` || userInput === `Paper` || userInput === `Scissors`) {
    return userInput;
  } else { /* I assume here that the user has either entered the right input but not with the first letter capital, or has given a wrong input alltogether. */
    userInput = firstLetterCapital(userInput);
    if (userInput === `Rock` || userInput === `Paper` || userInput === `Scissors`) {
      return userInput;
    } else {
      userInput = prompt(`Wrong input! Please, try again!`);
      if (userInput === `Rock` || userInput === `Paper` || userInput === `Scissors`) {
        return userInput;
      } else { /* The same assumption as above. */
        userInput = firstLetterCapital(userInput);
        if (userInput === `Rock` || userInput === `Paper` || userInput === `Scissors`) {
          return userInput;
        }else {
          return undefined;
        }

      }
    }
  }
} 

/* I need a funtion to decide the winner when human and computer play one round together. */
function playRound(playerSelection, computerSelection) {
  
  if (playerSelection === undefined) {
    return undefined;
  } 

  console.log(playerSelection);
  console.log(computerSelection);

  if (playerSelection === `Rock`) {
    if (computerSelection === `Paper`) {
      return `Computer won round!`;
    } else if (computerSelection === `Scissors`) {
      return `Human won round!`;
    } else {
      return `Draw!`;
    } 
  } else if (playerSelection === `Paper`) {
      if (computerSelection === `Scissors`) {
        return `Computer won round!`;
      } else if (computerSelection === `Rock`) {
        return `Human won round!`;
      }else {
        return `Draw!`;
      }
  } else {
      if (computerSelection === `Rock`) {
        return `Computer won round!`;
      } else if (computerSelection === `Paper`) {
        return `Human won round!`;
      } else {
        return `Draw!`;
      }
  }
}

/* I need a function to decide and print the winner in the console when human and computer play five rounds together.  */
function game() {
  
let humanScore = 0;
let computerScore = 0;

for (let i = 0; i < 5; i++) {
  let playRoundResult = playRound(humanPlay(), computerPlay());

  if (playRoundResult === undefined) {
    alert(`Wrong input!`);
    alert(`Not possible to play game!`);
    alert(`Terminating game...`)
    return;
  } else if (playRoundResult === `Computer won round!`) {
      computerScore++;
      console.log(`Human ${humanScore} - ${computerScore} Computer`);
  } else if (playRoundResult === `Human won round!`) {
      humanScore++;
      console.log(`Human ${humanScore} - ${computerScore} Computer`);
  } else if (playRoundResult === `Draw!`) {
      console.log(`Human ${humanScore} - ${computerScore} Computer`);
  }
  
}

console.log(`Final Result: Human ${humanScore} - ${computerScore} Computer`);

if (humanScore > computerScore) {
  console.log(`Human won game!`);
} else if (humanScore < computerScore) {
    console.log(`Computer won game!`);
} else {
    console.log(`Draw!`);
}

let startOverGame = prompt(`Do you want to play another game?`, `Answer with 'Yes' or 'No'`);

if (startOverGame === `Yes` || startOverGame === `No`) {
  switch(startOverGame) {
    case `Yes`:
      game();
      break;
    case `No`:
      alert(`Game Over!`);
      break;
  }
} else { /* The user has three choices here. To either type in yes or no in lower case, or to type in something else, whatever that is. */
    startOverGame = firstLetterCapital(startOverGame);
    console.log(startOverGame);
    switch(startOverGame) {
      case `Yes`:
        game();
        break;
      case `No`:
        alert(`Game Over!`);
        break;
      default:
        alert(`Invalid input. Game Over!`);
    }
  }
} 







/* I need to test computerPlay() to see if it returns `Rock`, `Paper` and `Scissors` the same amount of times. */
/******* Testing computerPlay() *******/
let rock = 0;
let paper = 0;
let scissors = 0;
for (let i = 0; i < 1000000; i++) {
  if (computerPlay() === `Rock`) {
    rock++;
  } else if (computerPlay() === `Paper`) {
    paper++;
  } else {
    scissors++;
  }
}

console.log(`Rock: ${rock}`);
console.log(`Paper: ${paper}`);
console.log(`Scissors ${scissors}`);

/*Unfortunately computerPlay() is not very accurate. According to the test computerPlay() most of the times it return numbers from the upper range (between 0.6666 and 0.9999) */

