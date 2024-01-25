function guessingGame() {
  const randomNumber = Math.floor(Math.random() * 100);
  let hasWon = false;
  let numOfGuess = 0;

  return function (userGuess) {
    numOfGuess = numOfGuess + 1;

    if (userGuess === randomNumber && hasWon)
      return 'The game is over, you already won!';

    if (userGuess === randomNumber) {
      hasWon = true;
      return `You win! You found ${randomNumber} in ${numOfGuess} guesses.`;
    } else if (userGuess > randomNumber) return `${userGuess} is too high!`;
    else return `${userGuess} is too low!`;
  };
}

module.exports = { guessingGame };
