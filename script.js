numUserLives = 5
numCompLives = 5


function computerPlay() {
    randNum = Math.floor(Math.random() * 3)
    switch(randNum) {
        case 0: return "rock"
        break
        case 1: return "paper"
        break
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
        default: alert("Hmm, something went wrong here. Sorry!")
    }
}

function game() {
    while (numCompLives > 0 && numUserLives > 0) {
        var playerSelection = window.prompt("Rock, paper, or scissors; which will you decide??").toLowerCase()
        var computerSelection = computerPlay()

        if (playerSelection !== "paper" && playerSelection !== "scissors" && playerSelection !== "rock") {
        alert("That was not an option!")
        }
        singleRound(playerSelection, computerSelection)
        console.log("User lives left:" + numUserLives)
        console.log("Computer lives left:" + numCompLives)
    }
    if (numCompLives === 0) {
        console.log("You win! Your mastery of this game is a feat to behold")
    } else {
        console.log("You lost! And the computer was picking randomly every time..")
    }
}

game()

