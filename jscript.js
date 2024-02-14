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
    let Rand=Math.floor(Math.random()*3);
    switch(Rand) {
        case 0:
            return 0;
        case 1:
            return 1;
        case 2:
            return 2;
        default:
            return null;
    }
}

function convertUserInput(input){
    if (input==="rock"){
        return 0;
    }
    else if (input === "paper"){
        return 1;
    }
    else if (input === "scissor"){
        return 2;
    }
}

function playGame(){
    let CompScore=0;
    let UserScore=0;
    let ties=0
    for (let i = 0; i<5; i++){
        let User=convertUserInput(prompt("Please choose rock, paper or scissor",""));
        let Computer=getComputerChoice();
        if (playRound(User,Computer)=="Computer"){
            CompScore++;
        }
        else if (playRound(User,Computer)=="User"){
            UserScore++;
        }
        else {
            ties++;
        }
    }
    return `User scores: ${UserScore}\nComputer scores: ${CompScore}\nTies: ${ties}\nWinner: ${UserScore>CompScore ? "User" : "Computer"}`;
}
console.log(playGame());