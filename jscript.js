const ROCK=0;
const PAPER=1;
const SCISSOR=2;
function playRound(User,Computer){
    if (User===Computer){
        return "Tie";
    }
    else if (User==(Computer+1)%3){
        return "User";
    }
    else if (Computer==(User+1)%3){
        return "Computer";
    }
}

function getComputerChoice(){
    return Math.floor(Math.random()*3);
}

function convertUserInput(input){
    switch (input.toLowerCase()) {
        case 'rock':
            return ROCK;
        case 'paper':
            return PAPER;
        case 'scissor':
            return SCISSOR;
        default:
            throw new Error('Invalid input');
    }
}

function playGame(){
    let CompScore=0;
    let UserScore=0;
    let ties=0
    for (let i = 0; i<5; i++){
        let User=convertUserInput(prompt("Please choose rock, paper or scissor",""));
        let Computer=getComputerChoice();
        let result=playRound(User,Computer);
        if (result=="Computer"){
            CompScore++;
        }
        else if (result=="User"){
            UserScore++;
        }
        else {
            ties++;
        }
    }
    return `User scores: ${UserScore}\nComputer scores: ${CompScore}\nTies: ${ties}\nWinner: ${UserScore>CompScore ? "User" : "Computer"}`;
}
console.log(playGame());