
  // Function to get the computer's choice
function getComputerChoice() {
    const options = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
  }
  
  // Function to play a single round
  function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase(); // Make it case-insensitive
  
    if (
      (playerSelection === "rock" && computerSelection === "scissors") ||
      (playerSelection === "scissors" && computerSelection === "paper") ||
      (playerSelection === "paper" && computerSelection === "rock")
    ) {
      return "You win! " + playerSelection + " beats " + computerSelection;
    } else if (playerSelection === computerSelection) {
      return "It's a tie! Both chose " + playerSelection;
    } else {
      return "You lose! " + computerSelection + " beats " + playerSelection;
    }
  }
  
  // Function to play a 5 round game
  function game() {
    let playerScore = 0;
    let computerScore = 0;
  
    for (let i = 0; i < 5; i++) {
      const playerSelection = prompt("Choose Rock, Paper, or Scissors: ");
      if (!playerSelection) {
        console.log("Invalid choice. Try again.");
        i--; // Decrement i to repeat this round
        continue;
      }
  
      const computerSelection = getComputerChoice();
      const roundResult = playRound(playerSelection, computerSelection);
      console.log(roundResult);
  
      if (roundResult.startsWith("You win!")) {
        playerScore++;
      } else if (roundResult.startsWith("You lose!")) {
        computerScore++;
      }
    }
  
    if (playerScore > computerScore) {
      console.log("You win the game!");
    } else if (playerScore < computerScore) {
      console.log("Computer wins the game!");
    } else {
      console.log("It's a tie game!");
    }
  }
  
  // Start the game when the page loads
  game();
  