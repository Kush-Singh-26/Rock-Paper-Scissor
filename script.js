function choices() {
    return Math.floor(Math.random() * 3);
}
function getComputerChoice() {
    let compChoice = choices();
    if (compChoice === 0)
        return ("scissor");
    else if (compChoice === 1)
        return ("rock");
    else
        return ("paper");
}

function getUserChoice() {
    let userChoice = prompt("Enter your choice : ").toLowerCase();
    return userChoice;
}

let userScore = 0;
let compScore = 0;
let rounds = 0;
let currRound;
function playRound() {
    let computerChoice = getComputerChoice();
    let UserChoice = getUserChoice();
    if (computerChoice === UserChoice) {
        console.log("Round number " + (rounds+1))
        console.log(`Your choice : ${UserChoice} \nComputer Choice : ${computerChoice}`);
        console.log("Tie");
        console.log(`Your score : ${userScore} \nComputer score : ${compScore}`);
        currRound = "tie";
    }
    if ((computerChoice === "rock" && UserChoice === "scissor") || (computerChoice === "scissor" && UserChoice === "paper") || (computerChoice === "paper" && UserChoice === "rock")) {
        compScore++;
        console.log("Round number " + (rounds+1))
        console.log(`Your choice : ${UserChoice} \nComputer Choice : ${computerChoice}`);
        console.log("Computer win !");
        console.log(`Your score : ${userScore} \nComputer score : ${compScore}`);
        currRound = "Cwin";
    }

    if ((UserChoice === "rock" && computerChoice === "scissor") || (UserChoice === "scissor" && computerChoice === "paper") || (UserChoice === "paper" && computerChoice === "rock")) {
        userScore++;
        console.log("Round number " + (rounds+1))
        console.log(`Your choice : ${UserChoice} \nComputer Choice : ${computerChoice}`);
        console.log("You win");
        console.log(`Your score : ${userScore} \nComputer score : ${compScore}`);
        currRound = "Uwin";
    }
}

function playGame()
    {
        while(rounds<5){
            playRound();
            if(currRound != "tie")
                rounds++;
        }

        if(userScore > compScore)
            console.log("You win the game.")
        
        else if(userScore < compScore)
            console.log("Computer wins the game. Better luck next time.");

        else
            console.log("Game is tied.");

       console.log("To play again refesh the browser!");
    }
playGame();