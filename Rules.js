class Rules {
  constructor(moves, computerMove, userMove) {
    this.rules = (moves.lenght - 1) / 2;
  }

  getRules() {
    return this.rules;
  }
}

module.exports = Rules;
