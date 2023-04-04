function getComputerChoice() {
  const compChoice = Math.floor(Math.random() * 2);
  console.log(compChoice);
  return compChoice;
}

function getUserChoice() {
  const userChoice = prompt("chose rock,paper or scissors");
  if (userChoice.toLocaleLowerCase() === "rock") {
    return 0;
  } else if (userChoice.toLocaleLowerCase() === "paper") {
    return 1;
  } else if (userChoice.toLocaleLowerCase() === "scissors") {
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

game();
