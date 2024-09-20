var playerChoice = document.getElementById("btn-div")
const computerChoiceDisplay = document.getElementById("cmptr-display")
let gameResult =document.getElementById("result-box")
let randomNumber
let computerChoice
let result

function generatecomputerChoice(){
    randomNumber = Math.floor( Math.random()* 3 + 1 )
    

    if (randomNumber == 1){
        computerChoice = 'Rock'
    }
    if (randomNumber == 2){
        computerChoice = 'Paper'
    }
    if (randomNumber == 3){
        computerChoice = 'Sciossor'
    }
    console.log("Computer Choice : " + computerChoice)
    computerChoiceDisplay.innerHTML = computerChoice
}


function getResult(){
    if (playerChoice == computerChoice){
        result = "TIE !"
    }
    else if (playerChoice == 'Rock' && computerChoice == 'Scissor') {
        result = "YOU WON"
        
    } else if(playerChoice == 'Paper' && computerChoice == 'Rock'){
        result = "YOU WON"

    }else if(playerChoice == 'Scissor' && computerChoice == 'Paper'){
        result = "YOU WON"
    }else{
        result = "YOU LOSE"
    }    
    console.log(result)
    gameResult.innerHTML = result
}

function selection(selections){
    playerChoice = `${selections}`
    console.log("User Choice : " + playerChoice)
    generatecomputerChoice();
    getResult();
}


