

class Rules {
    constructor(moves){
        // this.moves = secureRandom(32, {type: "Uint8Array"});
        // this.rules = Buffer.from(this.arr).toString('hex');

        
        this.rules = (moves.lenght - 1) / 2;
        
    }

    getRules(){
        return this.rules;
    }
}

module.exports = Rules;