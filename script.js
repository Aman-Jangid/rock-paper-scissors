const containerEl = document.querySelector("#container");

// BUTTONS
const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");

const choices = document.querySelectorAll(".choice");

// SCORE
const cpuScoreDisplay = document.querySelector(".cpu_score");
const playerScoreDisplay = document.querySelector(".player_score");

// TURN DISPLAY
const currentTurnDisplay = document.querySelector(".current_turn");

// GAME OPTIONS
const resetGame = document.querySelector(".restart");
const numOfTurns = document.querySelector(".turns");

// DISPLAY WINNER
const winnerEl = document.querySelector(".winner");

//STATE VARIABLES (INITIAL VALUES)
let score_cpu = 0;
let score_player = 0;

let total_turns = 3;
let turn_num = 0;

let winner = "";

let playing = false;
// FUNCTIONS

//function to run when there's a winner
function gameResult() {
  winnerEl.textContent = winner;
  playing = false;
  currentTurnDisplay.textContent = "Play Again";
  currentTurnDisplay.addEventListener("click", restartGame);
}

// random choice
function getComputerChoice() {
  return (compChoice = Math.floor(Math.random() * 3) + 1);
}

function game() {
  winnerEl.textContent = winner;
  if (playing === false) {
    return;
  }

  const playerSelection = parseInt(this.getAttribute("value"));
  const computerSelection = getComputerChoice();

  turn_num++;

  if (playerSelection === computerSelection) {
    setTimeout(() => {
      winnerEl.textContent = "Tied";
    }, 200);
    winnerEl.textContent = "";
  } else if (playerSelection === 1 && computerSelection === 3) {
    score_player += 1;
  } else if (playerSelection === 3 && computerSelection === 1) {
    score_cpu += 1;
  } else if (playerSelection === 1 && computerSelection === 2) {
    score_cpu += 1;
  } else if (playerSelection === 2 && computerSelection === 1) {
    score_player += 1;
  } else if (playerSelection === 2 && computerSelection === 3) {
    score_cpu += 1;
  } else if (playerSelection === 3 && computerSelection === 2) {
    score_player += 1;
  }

  //updating score in DOM
  cpuScoreDisplay.textContent = score_cpu;
  playerScoreDisplay.textContent = score_player;

  console.log(total_turns);

  // declaring winner
  if (score_cpu === total_turns) {
    winnerEl.style.backgroundColor = "#ff4646d4";
    winner = "YOU LOST!";
    gameResult();
    return;
  }
  if (score_player === total_turns) {
    winnerEl.style.backgroundColor = "#71e822b5";
    winner = "YOU WON!";
    gameResult();
    return;
  }

  //display number of turns in DOM
  currentTurnDisplay.textContent =
    (turn_num === 1 ? "1st" : turn_num === 2 ? "2nd" : turn_num + "th") +
    " round";

  //display moves
}

// change startGame to replay when winner === YOU WIN! or YOU LOSE!
// if (winner === "YOU WIN!" || winner === "YOU LOSE!") {
//   currentTurnDisplay.textContent = "Play Again";
//   currentTurnDisplay.addEventListener("click", restartGame);
// }

//change number of rounds
numOfTurns.addEventListener("click", () => {
  total_turns === 3 ? (total_turns = 5) : (total_turns = 3);
  numOfTurns.textContent = total_turns;
});

// getting player choice
function getPlayerChoice() {
  choices.forEach((choice) => choice.addEventListener("click", game));
}

if (playing) {
  rockBtn.disabled = true;
  paperBtn.disabled = true;
  scissorsBtn.disabled = true;
}

if (playing === true) {
  currentTurnDisplay.disabled = true;
}

//start game
currentTurnDisplay.addEventListener("click", () => {
  getPlayerChoice();
  currentTurnDisplay.textContent = "0th round";
  playing = true;
});

//reset game
function restartGame() {
  score_cpu = 0;
  score_player = 0;
  turn_num = 0;
  playing = true;
  winner = "";

  cpuScoreDisplay.textContent = score_cpu;
  playerScoreDisplay.textContent = score_player;
  winnerEl.style.backgroundColor = "#555";
  currentTurnDisplay.textContent = "0th round";
}

resetGame.addEventListener("click", restartGame);
