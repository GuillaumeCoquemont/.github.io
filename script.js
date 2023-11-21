let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
let generateTarget = () => {
    return Math.floor(Math.random() * 9);
};

let compareGuesses = (user, computer, target) => {
    const humanDifference = Math.abs(target - user); //etablish a distance between the human's guess and the secret number
    const computerDifference = Math.abs(target - computer);
    return humanDifference <= computerDifference;
};

const updateScore = winner => {
    if (winner === 'human') {
        humanScore++;
    } else if (winner === 'computer') {
        computerScore++;
    }
};
function advanceRound() {
    currentRoundNumber++;
};
console.log(advanceRound);
