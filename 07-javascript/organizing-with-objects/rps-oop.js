// A rock paper scissors game could involve players scores and ability to play a round.
// Also, it would be nice to include ability to show current winner and ability to restart the game.

// An object to keep track of a rock paper scissors game could look like:
const rps = {
    playerScore: 0,
    botScore: 0,
    playRound(playerChoice) {
        // Logic to play round and update score
    },
    getWinningPlayer() {
        // Returns the player with the most points
    },
    reset() {
        // Reset both players score to 0
    },
};
