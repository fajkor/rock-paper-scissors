/* A function to allow the computer to return randomly one of these 3 options: `Rock`, `Paper` or `Scissors`. */
/* function computerPlay() {
  let computerInput = Math.random(0, 0.9999);
  if (computerInput < 0.3333) {
    return `Rock`;
  } else if (computerInput < 0.6666 ) {
    return `Paper`;
  } else if (computerInput < 0.9999) {
      return `Scissors`;
  }
} */

/* A function to allow the user to input `Rock`, `Paper` or `Scissors`. */   
/* function humanPlay() {
  let userInput = prompt(`Please type in 'Rock', 'Paper' or 'Scissors'`);
  return userInput;
}  */

/* A function to decide the winner when human and computer play one round together. */
/* function playRound(playerSelection, computerSelection) {

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
} */

/* A function to output in the console the score and either the winner of the game or the winner of the round. */
/* function game() {

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
} */

/* This function allows us to play another game with computer */
/* function startOver() {
  let startOverGame = prompt(`Do you want to play another game?`, `Answer with 'Yes' or 'No'`);
  if (startOverGame === `Yes`) {
    game();
  } else {
    alert(`Game Over!`);
    return;
  }
} */

const container = document.querySelector(`.container`);
const h1 = document.querySelector(`h1`);
const startGame = document.querySelector(`.startGame`);
const instructionText = document.createElement(`p`); /* A paragraph ('p') with an instruction text */
instructionText.classList.add(`instructionText`);
startGame.addEventListener(`click`, giveInstructions);

function giveInstructions() {
  /* Removes 'h1' and startGame from container and adds instructionText to it */
  removeContainerChildren(); 
  /* Show instructions before game start */
  instructionText.textContent = `You will play against the computer`; 
  setTimeout(showTextTwo, 2000);
  setTimeout(showTextThree, 5000);
  setTimeout(showTextFour, 7000);
  setTimeout(showTextFive, 8500)
  /* Show the 3 'Rock', 'Paper', 'Scissors' buttons */
  setTimeout(addPlayerSelection, 8500);
}

/* Removes 'h1' and startGame from container and adds instructionText to it */
function removeContainerChildren() {
  container.removeChild(h1);
  container.removeChild(startGame);
  container.appendChild(instructionText);
}

/* Shows second instruction text */
function showTextTwo() {
  instructionText.textContent = `For every round that you win, you get 1 point`; 
}

/* Shows third instruction text */
function showTextThree() {
  instructionText.textContent = `You need five points to win game`; 
}

/* Show fourth instruction text */
function showTextFour() {
  instructionText.textContent = `Are Ready To Play?`; 
}

/* Shows fifth instruction text */
function showTextFive() {
  instructionText.textContent = `Please Select!`;
}

/* A function to show the 3 'Rock', 'Paper', 'Scissors' buttons */
function addPlayerSelection() {
  
  const playerSelection = document.createElement(`div`); /* A container of the 3 buttons */
  const rock = document.createElement(`button`);
  const paper = document.createElement(`button`);
  const scissors = document.createElement(`button`);

  playerSelection.classList.add(`playerSelection`);

  rock.classList.add(`rock`);
  rock.textContent = `Rock`;
  playerSelection.appendChild(rock); /* Append Rock button to playerSelection */

  paper.classList.add(`paper`);
  paper.textContent = `Paper`;  
  playerSelection.appendChild(paper); /* Append Paper button to playerSelection */

  scissors.classList.add(`scissors`);
  scissors.textContent = `Scissors`;
  playerSelection.appendChild(scissors); /* Append Scissors button to playerSelection */

  container.appendChild(playerSelection); /* Append playerSelection to container div */

  // rock.addEventListener(`click`, )
}







