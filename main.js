// 1 - вынести решение в класс
// 2 - сформировать таблицу класс
// 3 - сделать проверку ввода значений

const Hmac = require("./Hmac");
const Key = require("./Key");
const Rules = require("./Rules");
const prompt = require("prompt-sync")({ sigint: true });

let moves = process.argv.slice(2);

if (4 > process.argv.length) {
  console.log("you should pass atleast 3 moves");
} else if (!(process.argv.length %= 2)) {
  console.log("you should pass odd number of moves");
} else {
  main(moves);
}

function main(moves) {
  const computerMove = moves[Math.floor(Math.random() * moves.length)];

  const key = new Key().getKey();
  const hmac = new Hmac(computerMove, key).getHmac();
  console.log(`HMAC: ${hmac}`);

  const availableMoves = moves
    .map((move, index) => `${index + 1} - ${move}\n`)
    .join("");
  console.log(`Available moves:\n${availableMoves}0 - exit\n? - help`);

  let userMoveIdPreSort = prompt(`Enter your move: `);
  let userMove = moves[userMoveIdPreSort - 1];
  console.log(`Your move: ${userMove}`);

  let movesMidleid = (moves.length - 1) / 2;
  while (computerMove !== moves[movesMidleid]) {
    let element = moves.pop();
    moves.unshift(element);
  }

  let userMoveid = moves.indexOf(userMove);
  console.log(`Computer move: ${moves[movesMidleid]}`);

  if (movesMidleid === userMoveid) {
    console.log("draw");
  } else if (movesMidleid < userMoveid) {
    console.log("computer win");
  } else {
    console.log("you win");
  }

  console.log(key);
}
