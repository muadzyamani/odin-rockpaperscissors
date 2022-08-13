const inputContainer = document.querySelector('div.input-container');
const playerInput = document.querySelector('div.player-input');
const computerInput = document.querySelector('div.computer-input');
const roundNumber = document.querySelector('div.round-number');
const roundWinner = document.querySelector('div.round-winner');
const buttons = document.querySelectorAll('button');
const scoreContainer = document.querySelector('div.score-container');
const playerScoreboard = document.querySelector('div.player-score');
const computerScoreboard = document.querySelector('div.computer-score');

class Game {
    constructor() {
        this.isGameOver = false;
        this.playerSelection = undefined;
        this.computerSelection = undefined;
        this.round = 0;
        this.roundWinner = null;
        this.playerScore = 0;
        this.computerScore = 0;
    }

    play() {
        // checks for player input (button press)
        this.getPlayerSelection();
    }

    start() {
        // continues with game round
        this.round++;

        this.getComputerSelection();
        this.showRoundNumber();
        this.showInputs();
        this.compareSelections();
        this.updateScoreboard();
        this.checkWinner();

        if (this.isGameOver === true) {
            this.restartGame();
        }
    }

    getPlayerSelection() {
        buttons.forEach((button) => {
            button.addEventListener('click', () => {
                this.playerSelection = button.innerHTML.toLowerCase();
                this.start();
            });
        });
    }

    getComputerSelection() {
        let randomNumber = Math.floor(Math.random() * 3);
        if (randomNumber === 0) {
            this.computerSelection = 'rock';
        } else if (randomNumber === 1) {
            this.computerSelection = 'paper';
        } else {
            this.computerSelection = 'scissors';
        }
    }

    showRoundNumber() {
        roundNumber.textContent = `Round: ${this.round}`;
        inputContainer.appendChild(roundNumber);
    }

    showInputs() {
        playerInput.textContent = `Player Choice: ${this.playerSelection}`;
        computerInput.textContent = `Computer Choice: ${this.computerSelection}`;

        inputContainer.appendChild(playerInput);
        inputContainer.appendChild(computerInput);
    }

    compareSelections() {
        roundWinner.textContent = '';

        if (this.playerSelection === this.computerSelection) {
            roundWinner.textContent = 'Tie!';
            this.roundWinner = null;
        } else if (this.playerSelection === 'rock' && this.computerSelection === 'paper') {
            roundWinner.textContent = 'You lose! Paper beats rock.';
            this.roundWinner = 'computer';
            this.computerScore++;
        } else if (this.playerSelection === 'rock' && this.computerSelection === 'scissors') {
            roundWinner.textContent = 'You win! Rock beats scissors.';
            this.roundWinner = 'player';
            this.playerScore++;
        } else if (this.playerSelection === 'paper' && this.computerSelection === 'rock') {
            roundWinner.textContent = 'You win! Paper beats rock.';
            this.roundWinner = 'player';
            this.playerScore++;
        } else if (this.playerSelection === 'paper' && this.computerSelection === 'scissors') {
            roundWinner.textContent = 'You lose! Paper beats rock.';
            this.roundWinner = 'computer';
            this.computerScore++;
        } else if (this.playerSelection === 'scissors' && this.computerSelection === 'rock') {
            roundWinner.textContent = 'You lose! Rock beats scissors.';
            this.roundWinner = 'computer';
            this.computerScore++;
        }else if (this.playerSelection === 'scissors' && this.computerSelection === 'paper') {
            roundWinner.textContent = 'You win! Scissors beats paper.';
            this.roundWinner = 'player';
            this.playerScore++;
        }

        scoreContainer.appendChild(roundWinner);
    }

    updateScoreboard() {
        playerScoreboard.textContent = `Player Score: ${this.playerScore}`;
        computerScoreboard.textContent = `Computer Score: ${this.computerScore}`;

        scoreContainer.appendChild(playerScoreboard);
        scoreContainer.appendChild(computerScoreboard);
    }

    checkWinner() {
        if (this.playerScore === 5) {
            this.isGameOver = true;
            setTimeout(() => {
                alert('Player Wins!');
            }, 500);
        } else if (this.computerScore === 5) {
            this.isGameOver = true;
            setTimeout(() => {
                alert('Computer Wins!');
            }, 500);
        }
    }

    restartGame() {
        setTimeout(() => {
            location.reload();
        }, 1000);
    }
}

const game = new Game();
game.play();