const Rules = require("./Rules");

class Table {
  constructor() {}

  getTable(moves) {
    const table = {};

    moves.forEach((element) => {
      const obj = {};
      const rules = new Rules(moves);
      rules.getSortedArray(element);

      moves.forEach((el) => {
        obj[el] = rules.getWinner(el);
      });

      table[element] = obj;
    });

    console.table(table);
  }
}

module.exports = Table;
