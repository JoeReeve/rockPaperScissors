let numUserLives = 5;
let numCompLives = 5;

var userLivesText = document.getElementById("user-lives");
var compLivesText = document.getElementById("comp-lives");
userLivesText.textContent = `User Lives: ${numUserLives}`;
compLivesText.textContent = `Computer Lives: ${numCompLives}`; 


const rockBtn = document.getElementById('rock-btn');
rockBtn.addEventListener('click', function(e) {
    singleRound('rock', computerPlay());
    checkLives();
})

const paperBtn = document.getElementById('paper-btn');
paperBtn.addEventListener('click', function(e) {
    singleRound('paper', computerPlay());
    checkLives();
})

const scissorsBtn = document.getElementById('scissors-btn');
scissorsBtn.addEventListener('click', function(e) {
    singleRound('scissors', computerPlay());
    checkLives();
})


function computerPlay() {
    randNum = Math.floor(Math.random() * 3)
    switch(randNum) {
        case 0: return "rock"
        case 1: return "paper"
        case 2: return "scissors"
    }
}

function singleRound(playerSelection, computerSelection) {
    
    switch (playerSelection) {
        case "rock": 
            if (computerSelection === "rock") {
                alert("Tie! Both picked rock")
            } else if (computerSelection === "paper") {
                alert("You lose! Paper beats rock.")
                numUserLives--
            } else {
                alert("You win! Rock beats scissors!")
                numCompLives--
            }
        break
        case "paper": 
        if (computerSelection === "rock") {
            alert("You win! Paper beats rock!")
            numCompLives--
        } else if (computerSelection === "paper") {
            alert("Tie! Both picked paper")
        } else {
            alert("You lose! Scissors beats paper")
            numUserLives--
        }
        break
        case "scissors": 
            if (computerSelection === "rock") {
                alert("You lose! Rock beats scissors")
                numUserLives--
            } else if (computerSelection === "paper") {
                alert("You win! Scissors beats paper")
                numCompLives--
            } else {
                alert("You tie! Both picked scissors")
            }
        break
        default: alert("Hmm, something went wrong here. Sorry!");
    }
        //displaying the number of lives for the computer and the computer
    
    userLivesText.textContent = `User Lives: ${numUserLives}`
    compLivesText.textContent = `Computer Lives: ${numCompLives}` 
}

function checkLives() {
    if (numCompLives === 0) {
        alert("Amazing!! Humans win this time! But can you do it again??");
        numCompLives = 5;
        numUserLives = 5;
        userLivesText.textContent = `User Lives: ${numUserLives}`
        compLivesText.textContent = `Computer Lives: ${numCompLives}` 
    }
    
    if (numUserLives === 0) {
        alert("You lose! And we're now one step closer to human irrelevancy.. Maybe you'll do better next time.")
        numCompLives = 5;
        numUserLives = 5;
        userLivesText.textContent = `User Lives: ${numUserLives}`
        compLivesText.textContent = `Computer Lives: ${numCompLives}` 
    }
}








