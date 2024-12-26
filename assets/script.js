function humanChoice() {
  let choice;

  do {
    choice = window.prompt("Make your choice: Rock, Paper or Scissor? ");
    choice = choice.toLowerCase();

    if (choice != "rock" && choice != "paper" && choice != "scissor") {
      console.error("Invalid answer");
    }
  } while (choice != "rock" && choice != "paper" && choice != "scissor");

  // convert choice to id number;
  if (choice == "rock") {
    choice = 0;
  } else if (choice == "paper") {
    choice = 1;
  } else {
    choice = 2;
  }
  return choice;
}

function computerChoice() {
  let choiceC = Math.floor(3 * Math.random());
  return choiceC;
}

function playRound(humanC, computerC) {
  // ID Choices:
  // 0 == Rock
  // 1 == Paper
  // 2 == Scissor
  for (let i = 0; i < 5; i++) {
    console.warn(`Round ${i + 1}`);
    if (humanC == 0 && computerC == 1) {
      console.log(
        "%c You lose! Paper beat rock",
        "background-color: #ff0800; font-weight: bold"
      );
      computerScore++;
    } else if (humanC == 1 && computerC == 0) {
      console.warn("Computer choice rock");
      console.log(
        "%c You win! Paper beat rock",
        "background-color: #59f940; color: #000000; font-weight: bold"
      );
      humanScore++;
    } else if (humanC == 1 && computerC == 2) {
      console.warn("Computer choice Scissor");
      console.log(
        "%c You lose! Scissor beat paper",
        "background-color: #ff0800; font-weight: bold"
      );
      computerScore++;
    } else if (humanC == 2 && computerC == 1) {
      console.warn("Computer choice Paper");
      console.log(
        "%c You win! Scissor beat paper",
        "background-color: #59f940; color: #000000; font-weight: bold"
      );
      humanScore++;
    } else if (humanC == 2 && computerC == 0) {
      console.warn("Computer choice Rock");
      console.log(
        "%c You lose! Rock beat scissor",
        "background-color: #ff0800; font-weight: bold"
      );
      computerScore++;
    } else if (humanC == 0 && computerC == 2) {
      console.warn("Computer choice Scissor");
      console.log(
        "%c You win! Rock beat scissor",
        "background-color: #59f940; color: #000000; font-weight: bold"
      );
      humanScore++;
    } else {
      console.warn("Draw!");
    }

    if (i < 4) {
      humanC = humanChoice();
      computerC = computerChoice();
    }
  }
}

function checkScore(humanS, computerS) {
  let strPointHuman = "point";
  let strPointComputer = "point";
  console.warn("RESULT:");

  if (humanS > 1){
    strPointHuman = strPointHuman + "s";
  }

  if (computerS > 1){
    strPointComputer = strPointComputer + "s";
  }



  console.log(
    `HUMAN: ${humanS} ${strPointHuman} | COMPUTER: ${computerS} ${strPointComputer}`
  );

  if (humanScore > computerScore) {
    console.warn("HUMAN WIN!");
  } else if (computerScore > humanScore) {
    console.warn("COMPUTER WIN!");
  } else {
    console.warn("DRAW!");
  }
}

let humanScore = 0;
let computerScore = 0;

playRound(humanChoice(), computerChoice());
checkScore(humanScore, computerScore);
