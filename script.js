function getComputerChoice() {
  const compChoice = Math.floor(Math.random() * 20);
  console.log(compChoice);
  if (compChoice <= 6) {
    return 0;
  } else if (compChoice > 6 && compChoice <= 13) {
    return 1;
  } else return 2;
}

function getUserChoice() {
  const userChoice = prompt("chose rock,paper or scissors");
  if (userChoice.toLowerCase() === "rock") {
    return 0;
  } else if (userChoice.toLowerCase() === "paper") {
    return 1;
  } else if (userChoice.toLowerCase() === "scissors") {
    return 2;
  } else prompt("INVALID CHOICE");
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "Tie";
  } else if (playerSelection === 0 && computerSelection === 2) {
    return "You win!";
  } else if (playerSelection === 2 && computerSelection === 0) {
    return "You lose!";
  } else if (playerSelection === 0 && computerSelection === 1) {
    return "You lose!";
  } else if (playerSelection === 1 && computerSelection === 0) {
    return "You win!";
  } else if (playerSelection === 1 && computerSelection === 2) {
    return "You lose!";
  } else if (playerSelection === 2 && computerSelection === 1) {
    return "You win!";
  }
}

function game() {
  console.log(playRound(getUserChoice(), getComputerChoice()));
}

for (let i = 0; i < 5; i++) {
  game();
}
