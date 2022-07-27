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


function showRound() {
    let roundNumber = document.querySelector('div.round-number');
    roundNumber.textContent = `Round: ${round}`;
    round++;
    inputContainer.appendChild(roundNumber);
}


function displayInputs(playerSelection, computerSelection) {   
    let playerInput = document.querySelector('div.player-input');
    playerInput.textContent = `Player Choice: ${playerSelection}`;
    let computerInput = document.querySelector('div.computer-input');
    computerInput.textContent = `Computer Choice: ${computerSelection}`;

    inputContainer.appendChild(playerInput);
    inputContainer.appendChild(computerInput);
}


function playRound(playerSelection, computerSelection) {
    let roundWinner = document.querySelector('div.round-winner');
    roundWinner.textContent = '';

    if (playerSelection === computerSelection) {
        roundWinner.textContent = 'Tie!';
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        roundWinner.textContent = 'You lose! Paper beats rock.';
        computerScore++;
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        roundWinner.textContent = 'You win! Rock beats scissors.';
        playerScore++;
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        roundWinner.textContent = 'You win! Paper beats rock.';
        playerScore++;
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        roundWinner.textContent = 'You lose! Paper beats rock.';
        computerScore++;
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        roundWinner.textContent = 'You lose! Rock beats scissors.';
        computerScore++;
    }else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        roundWinner.textContent = 'You win! Scissors beats paper.';
        playerScore++;
    }

    scoreContainer.appendChild(roundWinner);

    return [playerScore, computerScore];
}


function updateScore(playerScore, computerScore) {
    let playerScoreBoard = document.querySelector('div.player-score');
    playerScoreBoard.textContent = `Player Score: ${playerScore}`;
    let computerScoreBoard = document.querySelector('div.computer-score');
    computerScoreBoard.textContent = `Computer Score: ${computerScore}`;

    scoreContainer.appendChild(playerScoreBoard);
    scoreContainer.appendChild(computerScoreBoard);
}


function checkWinner(playerScore, computerScore) {
    if (playerScore === 5) {
        setTimeout(() => { alert('Player Wins!') }, 500);
        return true;
    } else if (computerScore === 5) {
        setTimeout(() => { alert('Computer Wins!') }, 500);
        return true;
    }
}


function game() {
    buttons.forEach((button) => {
        button.addEventListener('click', (e) => {
            let isGameOver = false;
            let playerSelection = e.srcElement.outerText.toLowerCase();
            let computerSelection = getComputerChoice();

            // display round & inputs
            showRound();
            displayInputs(playerSelection, computerSelection);

            // compare scores
            [playerScore, computerScore] = playRound(playerSelection, computerSelection);

            // update score
            updateScore(playerScore, computerScore);
            
            // check for winner
            isGameOver = checkWinner(playerScore, computerScore);
            if (isGameOver) {
                round = 1;
                playerScore = 0;
                computerScore = 0;
                
                setTimeout(() => { location.reload() }, 1000);
            }
        });
    });
}

const inputContainer = document.querySelector('div.input-container');
const scoreContainer = document.querySelector('div.score-container');
const buttons = document.querySelectorAll('button');

let round = 1;
let playerScore = 0;
let computerScore = 0;

game();