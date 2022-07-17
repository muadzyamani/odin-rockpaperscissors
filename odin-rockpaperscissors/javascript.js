function getPlayerChoice() {
    try {
        return prompt('Rock, Paper, Scissors!', 'rock').toLowerCase();
    }
    catch {
        alert('You cancelled the game.');
        playerScore = 0;
        computerScore = 0;
        console.clear();
        game();
    }
}

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    let computerChoice;
    
    if (randomNumber === 0) {
        computerChoice = 'rock';
    } else if (randomNumber === 1) {
        computerChoice = 'paper';
    } else {
        computerChoice = 'scissors';
    }
    return computerChoice;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        console.log('Tie!');
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        console.log('You lose! Paper beats rock');
        computerScore++;
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        console.log('You win! Rock beats scissors');
        playerScore++;
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        console.log('You win! Paper beats rock');
        playerScore++;
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        console.log('You lose! Paper beats rock');
        computerScore++;
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        console.log('You lose! Rock beats scissors');
        computerScore++;
    }else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        console.log('You win! Scissors beats paper');
        playerScore++;
    }

    return [playerScore, computerScore];
}

function game() {
    const totalRounds = 5;

    for (let i = 0; i < totalRounds; i++) { 
        // obtain inputs
        let playerSelection = getPlayerChoice();
        let computerSelection = getComputerChoice();
        
        // display inputs
        console.log(`Player: ${playerSelection}`);
        console.log(`Computer: ${computerSelection}`);

        // compare results
        [playerScore, computerScore] = playRound(playerSelection, computerSelection);
        console.log(`Player Score: ${playerScore} | Computer Score: ${computerScore}`);
        console.log('-----');
    }
    console.log('Game Over!');
}

let playerScore = 0;
let computerScore = 0;

game();