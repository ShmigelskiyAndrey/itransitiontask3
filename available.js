const prompt = require("prompt-sync")({ sigint: true });

function available(moves, availableMoves) {
  let userInput = prompt(`Enter your move: `);
  let numberedUserInput = Number(userInput);

  if (
    userInput != "?" &&
    (numberedUserInput < 0 ||
      numberedUserInput > moves.length ||
      isNaN(numberedUserInput))
  ) {
    console.log(`Available moves:\n${availableMoves}0 - exit\n? - help`);
    return available(moves, availableMoves);
  }

  return userInput;
}

module.exports = available;
