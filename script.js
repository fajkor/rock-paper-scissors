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

/* I want a function that makes the first letter of the user input capital while the rest of them remain lower case. */
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
  } else { /* I assume here that the user has either entered the right input but not with the first letter capital, or has given a wrong input all together. */
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

/* I need a function to decide the winner when human and computer play one round together. */
function playRound(playerSelection, computerSelection) {
  
  if (playerSelection === undefined) {
    return undefined;
  }

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
  let playerSelection = humanPlay();
  let computerSelection = computerPlay();

  console.log(`Human: ${playerSelection}`);
  console.log(`Computer: ${computerSelection}`);

  let playRoundResult = playRound(playerSelection, computerSelection);

  if (playRoundResult === undefined) {
    alert(`Wrong input!`);
    alert(`Not possible to play game!`);
    alert(`Terminating game...`)
    return;

/*  I need the code below to decide who won the game. 
    Also, sometimes we won't need to play 5 rounds to decide the winner of the game. For this reason, if we have a winner before the fifth round, I want my program to output the winner and to get out of the iteration loop. */
  } else if (playRoundResult === `Computer won round!`) {
      computerScore++;
      if ((4 - i) < Math.abs(computerScore - humanScore)) {
        console.log(`Computer won game!`);
        console.log(`Final Result: Human ${humanScore} - ${computerScore} Computer`);
        break;
      } else {
        console.log(`Computer won round!`);
        console.log(`Human ${humanScore} - ${computerScore} Computer`);
      }
  } else if (playRoundResult === `Human won round!`) {
      humanScore++;
      if ((4 - i) < Math.abs(humanScore - computerScore)) {
        console.log(`Human won game!`);
        console.log(`Final Result: Human ${humanScore} - ${computerScore} Computer`);
        break;
      } else {
        console.log(`Human won round!`);
        console.log(`Human ${humanScore} - ${computerScore} Computer`);
      }
  } else if (playRoundResult === `Draw!`) {
        /* I need the code below to decide who won the game despite the last round of the game being draw. */
        if ((computerScore > humanScore) && (4 - i < computerScore - humanScore)) {
          console.log(`Computer won game!`);
          console.log(`Final Result: Human ${humanScore} - ${computerScore} Computer`);
          break;
        } else if ((humanScore > computerScore) && (4 - i < humanScore - computerScore)) {
          console.log(`Human won game!`);
          console.log(`Final Result: Human ${humanScore} - ${computerScore} Computer`);
          break;
          /* I need the code below to decide if the final result of the game is draw. */
        } else if ((humanScore === computerScore) && (i === 4)) {
          console.log(`It's a Draw!`);
          console.log(`Final Result: Human ${humanScore} - ${computerScore} Computer`);
        } else {
          console.log(`Neither won round! Score remains unchanged`);
          console.log(`Human ${humanScore} - ${computerScore} Computer`);
        }
      } 
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
