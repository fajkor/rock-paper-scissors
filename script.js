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

/* A function to allow the user to input `Rock`, `Paper` or `Scissors`. */   
function humanPlay() {
  let userInput = prompt(`Please type in 'Rock', 'Paper' or 'Scissors'`);
  return userInput;
} 

/* A function to decide the winner when human and computer play one round together. */
function playRound(playerSelection, computerSelection) {

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

/* A function to output in the console the score and either the winner of the game or the winner of the round. */
function game() {

  let humanScore = 0;
  let computerScore = 0;

  for (let i = 1; i > 0; i++) {
    let playerSelection = humanPlay();
    let computerSelection = computerPlay();

    console.log(`Human: ${playerSelection}`);
    console.log(`Computer: ${computerSelection}`);

    let playRoundResult = playRound(playerSelection, computerSelection);

    if (playRoundResult === `Computer won round!`) {
        computerScore++;
        if (computerScore === 5) {
          console.log(`Computer won round ${i} and game!`);
          console.log(`Final Result: Human ${humanScore} - ${computerScore} Computer`);
          i = -1;
        } else {
          console.log(`Computer won round ${i}!`);
          console.log(`Human ${humanScore} - ${computerScore} Computer\n\n`);
        }  
    } else if (playRoundResult === `Human won round!`) {
        humanScore++;
        if (humanScore === 5) {
          console.log(`Human won round ${i} and game!`);
          console.log(`Final Result: Human ${humanScore} - ${computerScore} Computer`);
          i = -1;
        } else {
          console.log(`Human won round ${i}!`);
          console.log(`Human ${humanScore} - ${computerScore} Computer\n\n`);
        }
    } else {
        console.log(`Neither won round ${i}! Score remains unchanged`);
        console.log(`Human ${humanScore} - ${computerScore} Computer\n\n`);
        } 
    }
    startOver();
}

/* This function allows us to play another game with computer */
function startOver() {
  let startOverGame = prompt(`Do you want to play another game?`, `Answer with 'Yes' or 'No'`);
  if (startOverGame === `Yes`) {
    game();
  } else {
    alert(`Game Over!`);
    return;
  }
}
