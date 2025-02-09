var playerChoice = document.getElementById("btn-div");
const computerChoiceDisplay = document.getElementById("cmptr-display");
const userChoiceDisplay = document.getElementById("user-display")
let gameResult =document.getElementById("result-box");
let userScore=document.getElementById("userScore");
let computerScore=document.getElementById("computerScore");
let randomNumber;
let computerChoice;
let result;
us=0;
cs=0;

function generatecomputerChoice(){
    randomNumber = Math.floor( Math.random()* 3 + 1 );
    

    if (randomNumber == 1){
        computerChoice = 'Rock';
    }
    if (randomNumber == 2){
        computerChoice = 'Paper';
    }
    if (randomNumber == 3){
        computerChoice = 'Scissor';
    }
    // console.log("Computer Choice : " + computerChoice);
    computerChoiceDisplay.innerHTML = computerChoice;
}


function getResult() {
  if (playerChoice == computerChoice) {
    result = "TIE !";
    gameResult.classList.remove("green-shadow");
    gameResult.classList.remove("red-shadow");

  } else if (playerChoice == 'Rock' && computerChoice == 'Scissor') {
    result = "YOU WON";
    us++;
    console.log("user score="+us);

    userScore.innerHTML = us;
    gameResult.classList.add("green-shadow");
  } else if (playerChoice == "Paper" && computerChoice == "Rock") {
    result = "YOU WON";
    us++;
    console.log("user score="+us);
    userScore.innerHTML = us;
    gameResult.classList.add("green-shadow");

  } else if (playerChoice == "Scissor" && computerChoice == "Paper") {
    result = "YOU WON";
    us++;
    console.log("user score="+us);
    userScore.innerHTML = us;
    gameResult.classList.add("green-shadow");

  } else {
    result = "YOU LOSE";
    cs++;
    console.log("computer score="+cs);
    computerScore.innerHTML = cs;
    gameResult.classList.remove("green-shadow");
    gameResult.classList.add("red-shadow");

  }
//   console.log(result);
  gameResult.innerHTML = result;
}

function selection(selections){
    playerChoice = `${selections}`;
    // console.log("User Choice : " + playerChoice);
    userChoiceDisplay.innerHTML = playerChoice;
    generatecomputerChoice();
    getResult();
}


