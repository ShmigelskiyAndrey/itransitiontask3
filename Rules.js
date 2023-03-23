class Rules {
  constructor(moves) {
    this.moves = moves;
  }

  getSortedArray(firstPlayer) {
    let sortedmoves = [...this.moves];

    this.movesMidleid = (sortedmoves.length - 1) / 2;
    while (firstPlayer !== sortedmoves[this.movesMidleid]) {
      let element = sortedmoves.pop();
      sortedmoves.unshift(element);
    }
    this.sortedmoves = sortedmoves;
  }

  getWinner(second) {
    let secondId = this.sortedmoves.indexOf(second);

    if (this.movesMidleid === secondId) {
      return "Draw";
    } else if (this.movesMidleid < secondId) {
      return "Win";
    } else {
      return "Lose";
    }
  }

  printWinner(condition) {
    if (condition == "Draw") {
      console.log("draw");
    }

    if (condition == "Win") {
      console.log("computer win");
    }

    if (condition == "Lose") {
      console.log("you win");
    }
  }
}

module.exports = Rules;
