const container = document.querySelector(`.container`);
const h1 = document.querySelector(`h1`);
const startGame = document.querySelector(`.startGame`);

/* Create a paragraph ('p') with a text instructing how the winner is decided */
const instructionText = document.createElement(`p`); 
instructionText.classList.add(`instructionText`);

/* Create a container for the Rock, Paper, Scissors buttons */
const selectionContainer = document.createElement(`div`); 
selectionContainer.classList.add(`selectionContainer`);

/* Creation of the Rock, Paper, Scissors buttons */
const rock = document.createElement(`button`);
rock.classList.add(`rock`);
rock.textContent = `Rock`;
const paper = document.createElement(`button`);
paper.classList.add(`paper`);
paper.textContent = `Paper`;  
const scissors = document.createElement(`button`);
scissors.classList.add(`scissors`);
scissors.textContent = `Scissors`;

/* Variables available to and for the game() function */
let userChoice = ``;
let humanScore = 0;
let computerScore = 0;
let i = 1;

/* Variables meant to show the user and computer selection, the round or game winner, and the result at the given stage of the game */
const playerChoice = document.createElement(`p`);
playerChoice.classList.add(`playerChoice`);
const computerChoice = document.createElement(`p`);
computerChoice.classList.add(`computerChoice`);
const roundWinner = document.createElement(`p`);
roundWinner.classList.add(`roundWinner`);
const playAgain = document.createElement(`button`);
playAgain.classList.add(`playAgain`);
const currentResult = document.createElement(`p`);
currentResult.classList.add(`currentResult`);

startGame.addEventListener(`click`, giveInstructions);

function giveInstructions() {
  /* Removes 'h1' and .startGame from .container and adds instructionText (which is a p tag) to container */
  removeContainerChildren(); 
  /* Show instructions before game starts */
  instructionText.textContent = `You will play against the computer`; 
  setTimeout(showTextTwo, 2500);
  setTimeout(showTextThree, 5000);
  setTimeout(showTextFour, 7000);
  setTimeout(showTextFive, 8500)
  /* Show Rock, Paper, Scissors buttons and add eventListeners to them*/
  setTimeout(addSelectionContainer, 8500);
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

/* Shows Rock, Paper, Scissors buttons and calls listenToEvent() in order to add event listeners to them */
function addSelectionContainer() {
  /* Append Rock Paper Scissors buttons to selectionContainer */
  selectionContainer.appendChild(rock); 
  selectionContainer.appendChild(paper); 
  selectionContainer.appendChild(scissors); 

  /* Append selectionContainer to container */
  container.appendChild(selectionContainer); 

  listenToEvents();
}

/* When the user clicks on either Rock, Paper or Scissors button, I want to store its textContent and call game(). */
function listenToEvents() {
  rock.addEventListener(`click`, function() {userChoice = rock.textContent; game();});
  paper.addEventListener(`click`, function() {userChoice = paper.textContent; game();});
  scissors.addEventListener(`click`, function() {userChoice = scissors.textContent; game();});
}

/* A function to output in the console the score and either the winner of the game or the winner of the round. */
function game() {

  let playerSelection = userChoice;
  let computerSelection = computerPlay();

  /* Remove .instructionText, .playerSelection from container */
  container.removeChild(instructionText);
  container.removeChild(selectionContainer);

  /* Append playerChoice and computerChoice to container */
  container.appendChild(playerChoice);
  container.appendChild(computerChoice);

  /* Add text to playerChoice and computerChoice */
  playerChoice.textContent = `Human: ${playerSelection}`;
  computerChoice.textContent = `Computer: ${computerSelection}`;

  console.log(`Human: ${playerSelection}`);
  console.log(`Computer: ${computerSelection}`);

  let playRoundResult = playRound(playerSelection, computerSelection);

  if (playRoundResult === `Computer won round!`) {
      computerScore++;
      if (computerScore === 5) {
        console.log(`Computer won round ${i} and game!`);
        console.log(`Final Result: Human ${humanScore} - ${computerScore} Computer`);
      } else {
        /* Show the winner of the round */
        container.appendChild(roundWinner);
        roundWinner.textContent = `Computer won round ${i}!`;
        /* Show current result */
        setTimeout(showCurrentResult, 3000);

        console.log(`Computer won round ${i}!`);
        console.log(`Human ${humanScore} - ${computerScore} Computer\n\n`);
        i++;
      }  
  } else if (playRoundResult === `Human won round!`) {
      humanScore++;
      if (humanScore === 5) {
        console.log(`Human won round ${i} and game!`);
        console.log(`Final Result: Human ${humanScore} - ${computerScore} Computer`);
      } else {
        /* Show current winner of the round */
        container.appendChild(roundWinner);
        roundWinner.textContent = `Computer won round ${i}!`;
        /* Show current result */
        setTimeout(showCurrentResult, 3000);

        console.log(`Human won round ${i}!`);
        console.log(`Human ${humanScore} - ${computerScore} Computer\n\n`);
        i++;
      }
  } else {
      /* Inform that none won round */
      container.appendChild(roundWinner);
      roundWinner.textContent = `Neither won round ${i}! Score remains unchanged`;
      /* Show current result */
      setTimeout(showCurrentResult, 3000);


      console.log(`Neither won round ${i}! Score remains unchanged`);
      console.log(`Human ${humanScore} - ${computerScore} Computer\n\n`);
      i++;
      } 
  // startOver();
}

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

/* Show current result */
function showCurrentResult() {
  /* Remove text that shows user and computer selection, as well as round winner */
  container.removeChild(playerChoice);
  container.removeChild(computerChoice);
  container.removeChild(roundWinner);

  /* Add text showing current result and button asking user to play again */
  container.appendChild(currentResult);
  currentResult.textContent = `Human ${humanScore} - ${computerScore} Computer`;
  container.appendChild(playAgain);
  playAgain.textContent = `Play Again!`;
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









