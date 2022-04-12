"user strict";

const computerPlay = () => {
  const randomNumber = Math.floor(Math.random() * 3);

  if (randomNumber === 0) {
    return "Rock";
  } else if (randomNumber === 1) {
    return "Paper";
  } else if (randomNumber === 2) {
    return "Scissors";
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

let playerSelection = playerChoice();
let computerSelection = computerPlay();

const gameRound = (playerSelection, computerSelection) => {
  console.log(playerSelection);
  if (playerSelection == "rock" && computerSelection == "Paper") {
    return "You Lose!, Paper beats Rock";
  } else if (playerSelection == "paper" && computerSelection == "Scissors") {
    return "You Lose!, Scissors beats Paper";
  } else if (playerSelection == "scissors" && computerSelection == "Rock") {
    return "You Lose!, Rock beats Scissors";
  } else if (playerSelection == "rock" && computerSelection == "Scissors") {
    return "You Win!, Rock beats Scissors";
  } else if (playerSelection == "paper" && computerSelection == "Rock") {
    return "You Win!, Paper beats Rock";
  } else if (playerSelection == "scissors" && computerSelection == "Paper") {
    return "You Win!, Scissors beats Paper";
  }
};
const player = "rock";
const comp = computerPlay();
gameRound(playerSelection, computerSelection);

const game = () => {
  for (let i = 0; i <= 5; i++) {}
};
