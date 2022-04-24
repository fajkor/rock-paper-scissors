const container = document.querySelector(`.container`);
const h1 = document.querySelector(`h1`);
const startGame = document.querySelector(`.startGame`);

/* Create a paragraph ('p') with a text instructing how the winner is decided */
let instructionText = document.createElement(`p`); 
instructionText.classList.add(`instructionText`);

/* Create a container for the Rock, Paper, Scissors buttons */
let selectionContainer = document.createElement(`div`); 
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

/* Variables meant to show the user and computer selection, the round or game winner, the result at the given stage of the game, question asking the user if they want to repeat game, and two buttons (`Yes` and `No`) */
const playerChoice = document.createElement(`p`);
playerChoice.classList.add(`playerChoice`);
const computerChoice = document.createElement(`p`);
computerChoice.classList.add(`computerChoice`);
const roundWinner = document.createElement(`p`);
roundWinner.classList.add(`roundWinner`);
const nextRound = document.createElement(`button`);
nextRound.classList.add(`nextRound`);
const currentResult = document.createElement(`p`);
currentResult.classList.add(`currentResult`);
const repeatGame = document.createElement(`p`);
repeatGame.classList.add(`repeatGame`);
const yesNoContainer = document.createElement(`div`);
yesNoContainer.classList.add(`yesNoContainer`);
const yes = document.createElement(`button`);
yes.classList.add(`yes`);
const no = document.createElement(`button`);
no.classList.add(`no`);

startGame.addEventListener(`click`, giveInstructions);

/* When the user clicks on either Rock, Paper or Scissors button, I want to store its textContent and call game(). */
rock.addEventListener(`click`, function() {userChoice = rock.textContent; game();});
paper.addEventListener(`click`, function() {userChoice = paper.textContent; game();});
scissors.addEventListener(`click`, function() {userChoice = scissors.textContent; game();});

/* When 'Play Next Round!' is clicked, I want Rock, Paper, Scissors buttons and the text 'Please Select' to be shown again */
nextRound.addEventListener(`click`, () => {
  /* First I need to remove the current children of container */
  container.textContent = ``;

  /* Next I need to add new children to container (i.e. instructionText and Rock, Paper, Scissors buttons) */
  container.appendChild(instructionText);
  showTextFive();
  addSelectionContainer();
});

yes.addEventListener(`click`, () => {
  /* Remove .instructionText, .playerSelection from container */
  container.textContent = ``;
  userChoice = ``;
  humanScore = 0;
  computerScore = 0;
  i = 1;
  instructionText.textContent = `Please Select!`;
  container.appendChild(instructionText);
  addSelectionContainer();
});

no.addEventListener(`click`, () => {
  container.textContent = ``;
  container.textContent = `Game Over!`;
});

function giveInstructions() {
  /* Remove 'h1' and .startGame from .container and add instructionText (which is a p tag) to container */
  container.textContent = ``;
  container.appendChild(instructionText);
  /* Show instructions before game starts */
  instructionText.textContent = `You will play against the computer.`; 
  setTimeout(showTextTwo, 2000);
  setTimeout(showTextThree, 4500);
  setTimeout(showTextFour, 6500);
  setTimeout(showTextFive, 8500)
  /* Show Rock, Paper, Scissors buttons and add eventListeners to them*/
  setTimeout(addSelectionContainer, 8500);
}

/* Shows second instruction text */
function showTextTwo() {
  instructionText.textContent = `For every round that you win, you get 1 point.`; 
}

/* Shows third instruction text */
function showTextThree() {
  instructionText.textContent = `You need five points to win game.`; 
}

/* Show fourth instruction text */
function showTextFour() {
  instructionText.textContent = `Are You Ready To Play?`; 
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
}

/* A function to show the user choice and computer choice, to output the score and show either the winner of the game or the winner of the round. */
function game() {

  let playerSelection = userChoice;
  let computerSelection = computerPlay();

  /* Remove .instructionText, .playerSelection from container */
    container.textContent = ``;
  
  /* Append playerChoice and computerChoice to container */
  container.appendChild(playerChoice);
  container.appendChild(computerChoice);

  /* Add text to playerChoice and computerChoice */
  playerChoice.textContent = `Human picked: ${playerSelection}`;
  computerChoice.textContent = `Computer picked: ${computerSelection}`;

  let playRoundResult = playRound(playerSelection, computerSelection);

  if (playRoundResult === `Computer won round!`) {
      computerScore++;
      if (computerScore === 5) {
        /* Show the game winner */
        roundWinner.classList.add(`gameWinner`);
        roundWinner.textContent = `Computer won round ${i} and game!`;
        container.appendChild(roundWinner);

        /* Show final result */
        currentResult.classList.add(`finalResult`);
        currentResult.textContent = `Final Result: Human ${humanScore} - ${computerScore} Computer`;
        container.appendChild(currentResult);
        setTimeout(startOver, 6000);
      } else {
        /* Show the winner of the round */
        container.appendChild(roundWinner);
        roundWinner.textContent = `Computer won round ${i}!`;
        /* Show current result */
        container.appendChild(currentResult);
        currentResult.textContent = `Score: Human ${humanScore} - ${computerScore} Computer`;
        /* Play next round */
        container.appendChild(nextRound);
        nextRound.textContent = `Play next round`;
        i++;
      }  
  } else if (playRoundResult === `Human won round!`) {
      humanScore++;
      if (humanScore === 5) {
        /* Show the game winner */
        roundWinner.classList.add(`gameWinner`);
        roundWinner.textContent = `Human won round ${i} and game!`;
        container.appendChild(roundWinner);

        /* Show final result */
        currentResult.classList.add(`finalResult`);
        currentResult.textContent = `Final Result: Human ${humanScore} - ${computerScore} Computer`;
        container.appendChild(currentResult);
        setTimeout(startOver, 6000);
      } else {
        /* Show current winner of the round */
        container.appendChild(roundWinner);
        roundWinner.textContent = `Human won round ${i}!`;
        /* Show current result */
        container.appendChild(currentResult);
        currentResult.textContent = `Score: Human ${humanScore} - ${computerScore} Computer`;
        /* Play next round */
        container.appendChild(nextRound);
        nextRound.textContent = `Play next round`;
        i++;
      }
  } else {
      /* Inform that none won round */
      container.appendChild(roundWinner);
      roundWinner.textContent = `Neither won round ${i}! Score remains unchanged`;
      /* Show current result */
      container.appendChild(currentResult);
      currentResult.textContent = `Score: Human ${humanScore} - ${computerScore} Computer`;
      /* Play next round */
      container.appendChild(nextRound);
      nextRound.textContent = `Play next round`;
      i++;
      } 
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

/* This function allows us to play another game with computer */
function startOver() {
  /* Clear container */
  container.textContent = ``;
  /* Add another paragraph asking if user wants to play another game */
  container.appendChild(repeatGame);
  repeatGame.textContent = `Do you want to play another game?`;

  /* Add two buttons which provide the answer to the above question */
  yesNoContainer.appendChild(yes);
  yes.textContent = `Yes`;
  yesNoContainer.appendChild(no);
  no.textContent = `No`;
  container.appendChild(yesNoContainer);
}









