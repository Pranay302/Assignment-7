for(;;){ //will keep on playing till the user enters a correct input or someone wins!!
    var userInput = window.prompt(" Choose ROCK, PAPER or SCISSORS"); //get user's choice
    
    //generate computer's choice
    var random = Math.random();
    var  computerGeneratedChoice;
    if (userInput.toUpperCase() === 'ROCK' || userInput.toUpperCase() === 'PAPER' || userInput.toUpperCase() === 'SCISSORS') {
        if (random < 0.30) computerGeneratedChoice = "SCISSORS"; 
        else if (random > 0.30  && random < 0.65) computerGeneratedChoice = "PAPER";
        else computerGeneratedChoice = "ROCK";
        result = gameLogic(userInput,computerGeneratedChoice);
        if(result === 1){
            window.alert("There was a tie lets play again.");
            continue;
        }
        window.console.log(result);
        break;
    }
    else {
        window.alert("You are playing ROCK-PAPER-SCISSORS");
    }

}

function gameLogic(userInput,computerGeneratedChoice){
    if(userInput.toUpperCase()===computerGeneratedChoice.toUpperCase()){
        return 1;
    }
    if(userInput.toUpperCase()==="ROCK"){
        if(computerGeneratedChoice.toUpperCase()==="SCISSORS"){
            return "User choose Rock & Computer choose Scissors : User Wins";
        }
        else{
            return "User choose Rock & Computer choose Paper : Computer Wins";
        }
    }
    if(userInput.toUpperCase()==="PAPER"){
        if(computerGeneratedChoice.toUpperCase()==="ROCK"){
            return "User choose Paper & Computer choose Rock : User Wins";
        }
        else{
            return "User choose Paper & Computer choose Scissors : Computer Wins";
        }
    }
    if(userInput.toUpperCase()==="SCISSORS"){
        if(computerGeneratedChoice.toUpperCase()==="ROCK"){
            return "User choose Scissors & Computer choose Rock : Computer Wins";
        }
        else{
            return "User choose Scissors & Computer choose Paper : User Wins";
        }
    }

}