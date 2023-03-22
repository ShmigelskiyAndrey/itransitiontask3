const moves = process.argv.slice(2);
const main = require("./main");

if (2 > moves.length) {
  console.log("you should pass atleast 3 moves");
  return;
}

if (moves.length % 2 === 0) {
  console.log("you should pass odd number of moves");
  return;
}

if (new Set(moves).size !== moves.length) {
  console.log("you should pass different moves");
  return;
}

main(moves);
