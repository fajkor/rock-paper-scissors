/* A function to allow the computer to return randomly one of these 3 options: `Rock`, `Paper` or `Scissors`. */
function computerPlay() {
  let computerInput = Math.random(0, 0.9999);
  if (computerInput < 0.3333) {
    return `Rock`;
  } else if (computerInput < 0.6666 ) {
    return `Paper`;
  } else if (computerInput < 0.9999) {
      return `Scissors`;
  }
}

function firstLetterCapital(userInput) {
    let lowerCase = userInput.slice(1).toLowerCase();
    let upperCase = userInput.slice(0,1).toUpperCase();
    return `${upperCase}${lowerCase}`;
}

/* A function to allow the user to input `Rock`, `Paper` or `Scissors`. */   
function humanPlay() {
  let userInput = prompt(`Please type in 'Rock', 'Paper' or 'Scissors'`);
  
  if (userInput === `Rock` || userInput === `Paper` || userInput === `Scissors`) {
    return userInput;
  } else { /* In case the user types in a wrong input or types in lower case, or all caps. */
    userInput = firstLetterCapital(userInput);
    if (userInput === `Rock` || userInput === `Paper` || userInput === `Scissors`) {
      return userInput;
    } else {
      userInput = prompt(`Wrong input! Please, try again!`);
      if (userInput === `Rock` || userInput === `Paper` || userInput === `Scissors`) {
        return userInput;
      } else { /* Give the user a second chance to type in the right input. */
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

/* A function to decide the winner when human and computer play one round together. */
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

/* A function to output the winner in the console when human and computer play 5 rounds together. */
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
    /* Output who won game or round. */
  } else if (playRoundResult === `Computer won round!`) {
      computerScore++;
      if ((4 - i) < Math.abs(computerScore - humanScore)) {
        console.log(`Computer won round ${i + 1} and game!`);
        console.log(`Final Result: Human ${humanScore} - ${computerScore} Computer`);
        break;
      } else {
        console.log(`Computer won round ${i + 1}!`);
        console.log(`Human ${humanScore} - ${computerScore} Computer\n\n`);
      }
  } else if (playRoundResult === `Human won round!`) {
      humanScore++;
      if ((4 - i) < Math.abs(humanScore - computerScore)) {
        console.log(`Human won round ${i + 1} and game!`);
        console.log(`Final Result: Human ${humanScore} - ${computerScore} Computer`);
        break;
      } else {
        console.log(`Human won round ${i + 1}!`);
        console.log(`Human ${humanScore} - ${computerScore} Computer\n\n`);
      }
  } else if (playRoundResult === `Draw!`) {
        /* Output the game winner despite the last round of the game being draw. */
        if ((computerScore > humanScore) && (4 - i < computerScore - humanScore)) {
          console.log(`Computer won game!`);
          console.log(`Final Result: Human ${humanScore} - ${computerScore} Computer`);
          break;
        } else if ((humanScore > computerScore) && (4 - i < humanScore - computerScore)) {
          console.log(`Human won game!`);
          console.log(`Final Result: Human ${humanScore} - ${computerScore} Computer`);
          break;
        } else if ((humanScore === computerScore) && (i === 4)) {
          console.log(`It's a Draw!`);
          console.log(`Final Result: Human ${humanScore} - ${computerScore} Computer`);
        } else {
          console.log(`Neither won round ${i + 1}! Score remains unchanged`);
          console.log(`Human ${humanScore} - ${computerScore} Computer\n\n`);
        }
      } 
  }
  startOver();
}

/* This function allows us to play another game with computer */
function startOver() {

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
} else { /* If user types in yes or no in lower case, or types in something else. */
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
