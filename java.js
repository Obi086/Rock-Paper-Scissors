let playerScore = 0, computerScore = 0;
const rockBtn = document.querySelector('.rock');
const scissorsBtn = document.querySelector('.scissors');
const paperBtn = document.querySelector('.paper');
const outcomeDiv = document.querySelector('.outcome');

const getComputerChoice = () => {
    const choices = ['rock', 'scissors', 'paper'];
    return choices[Math.floor(Math.random() * choices.length)];
}

const playRound = (playerSelection, computerSelection) => {
    if (playerSelection === computerSelection){
        const p = document.createElement('p');
        outcomeDiv.appendChild(p)
        p.textContent = 'Tied';
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors')
        || (playerSelection === 'scissors' && computerSelection === 'paper')
        || (playerSelection === 'paper' && computerSelection === 'rock')
    ){
        const p = document.createElement('p');
        outcomeDiv.appendChild(p)
        playerScore++
        p.textContent = `You Win ${playerSelection} beats ${computerSelection}`;
    } else {
        const p = document.createElement('p');
        outcomeDiv.appendChild(p)
        computerScore++
        p.textContent = `You Loose ${computerSelection} beats ${playerSelection}`;
    }
}

const showWinner = () => {
    if (playerScore === 5){
        const h2 = document.createElement('h2');
        outcomeDiv.appendChild(h2)
        h2.classList.add('wonResult')
        h2.textContent = `Congrats. You Won ${playerScore} to ${computerScore}.`;
    } else if (computerScore === 5){
        const h2 = document.createElement('h2');
        outcomeDiv.appendChild(h2)
        h2.classList.add('lostResult')
        h2.textContent = `Sorry. You Lost ${playerScore} to ${computerScore}.`;
    } else if (playerScore === 4 && computerScore === 4){
        const h2 = document.createElement('h2');
        outcomeDiv.appendChild(h2)
        h2.classList.add('tiedResult')
        h2.textContent = `You Tied ${playerScore} to ${computerScore}.`;
    }
}

rockBtn.addEventListener('click', () => {
    const playerSelection = 'rock';
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection)
    showWinner()
})
scissorsBtn.addEventListener('click', () => {
    const playerSelection = 'scissors';
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection)
    showWinner()
})
paperBtn.addEventListener('click', () => {
    const playerSelection = 'paper';
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection)
    showWinner()
})