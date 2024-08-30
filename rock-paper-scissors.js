let rounds = prompt("How many rounds of rock, paper, scissors do you want to play?");
rounds = parseInt(rounds);
//this is just for starters
let wins = 0;
let losses = 0;
let draws = 0;

for (let i = 0; i < rounds; i++) {
  let computerMove;
  let computerChoice = Math.floor(Math.random() * 3);

  if (computerChoice === 0) {
    computerMove = "r"; // rock
  } else if (computerChoice === 1) {
    computerMove = "p"; // paper
  } else {
    computerMove = "s"; // scissors
  }
//the choice is yours!
  let playerChoice = prompt("Choose rock, paper, or scissors");
  let playerMove = playerChoice[0].toLowerCase();

  if (playerMove === computerMove) {
    alert("It's a draw");
    draws++;
  } else if (playerMove === "r") {
    if (computerMove === "p") {
      alert("Computer picked paper. You lose.");
      losses++;
    } else {
      alert("Computer picked scissors. You win.");
      wins++;
    }
  } else if (playerMove === "p") {
    if (computerMove === "s") {
      alert("Computer picked scissors. You lose.");
      losses++;
    } else {
      alert("Computer picked rock. You win.");
      wins++;
    }
  } else if (playerMove === "s") {
    if (computerMove === "r") {
      alert("Computer picked rock. You lose.");
      losses++;
    } else {
      alert("Computer picked paper. You win.");
      wins++;
    }
  } else {
    alert("Invalid choice! Please pick rock, paper, or scissors.");
  }
}
// the big moment!
alert("You had " + wins + " wins, " + losses + " losses, and " + draws + " draws.");

if (wins > losses) {
  alert("You win, butt wupper!");
} else if (wins < losses) {
  alert("You lose, dumbhead!");
} else {
  alert("It's a draw, strawbrain!");
}
