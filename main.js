const Hmac = require("./Hmac");
const Key = require("./Key");
const Rules = require("./Rules");
const Table = require("./Table");
const available = require("./available");

function main(moves) {
  const computerMove = moves[Math.floor(Math.random() * moves.length)];

  const key = new Key().getKey();
  const hmac = new Hmac(computerMove, key).getHmac();
  console.log(`HMAC: ${hmac}`);

  const availableMoves = moves
    .map((move, index) => `${index + 1} - ${move}\n`)
    .join("");
  console.log(`Available moves:\n${availableMoves}0 - exit\n? - help`);

  let userInput = available(moves, availableMoves);

  if (userInput == 0) {
    process.exit(0);
  } else if (userInput == "?") {
    new Table().getTable(moves);
  } else {
    let userMove = moves[userInput - 1];
    console.log(`Your move: ${userMove}`);

    console.log(`Computer move: ${computerMove}`);

    const rules = new Rules(moves);
    rules.getSortedArray(computerMove);
    const winner = rules.getWinner(userMove);
    rules.printWinner(winner);

    console.log(key);
  }
}

module.exports = main;
