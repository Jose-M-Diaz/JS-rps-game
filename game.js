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
console.log(computerPlay());

const gameRound = (playerSelection, computerSelection) => {
  if (playerSelection == "Rock" && computerSelection == "Paper") {
    return "You Lose!, Paper beats Rock";
  } else if (playerSelection == "Paper" && computerSelection == "Scissors") {
    return "You Lose!, Scissors beats Paper";
  } else if (playerSelection == "Scissors" && computerSelection == "Rock") {
    return "You Lose!, Rock beats Scissors";
  }
};
