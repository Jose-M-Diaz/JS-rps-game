"user strict";

const computerPlay = () => {
  const randomNumber = Math.floor(Math.random() * 3);

  if (randomNumber === 0) {
    return "rock";
  } else if (randomNumber === 1) {
    return "paper";
  } else if (randomNumber === 2) {
    return "scissors";
  }
};

const playerChoice = () => {
  let playerChoice = prompt("Choose rock, paper, or scissors");
  playerChoice = playerChoice.toLowerCase();
  if (
    playerChoice === "rock" ||
    playerChoice === "paper" ||
    playerChoice === "scissors"
  ) {
    return playerChoice;
  } else {
    alert("Try a valid choice");
  }
};

// let playerSelection = playerChoice();
// console.log(playerSelection);
// let computerSelection = computerPlay();
// console.log(computerSelection);

const gameRound = (playerSelection, computerSelection) => {
  if (playerSelection == "rock" && computerSelection == "paper") {
    return "You Lose!, Paper beats Rock";
  } else if (playerSelection == "paper" && computerSelection == "scissors") {
    return "You Lose!, Scissors beats Paper";
  } else if (playerSelection == "scissors" && computerSelection == "rock") {
    return "You Lose!, Rock beats Scissors";
  } else if (playerSelection == "rock" && computerSelection == "scissors") {
    return "You Win!, Rock beats Scissors";
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    return "You Win!, Paper beats Rock";
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    return "You Win!, Scissors beats Paper";
  } else {
    return "TIE!!";
  }
};
// console.log(gameRound(playerSelection, computerSelection));

const game = () => {
  for (let i = 0; i < 5; i++) {
    let playerSelection = playerChoice();
    console.log(playerSelection);
    let computerSelection = computerPlay();
    console.log(computerSelection);
    console.log(gameRound(playerSelection, computerSelection));
  }
};
game();
