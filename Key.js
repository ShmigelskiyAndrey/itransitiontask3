const secureRandom = require('secure-random');

class Key {
    constructor(){
        this.arr = secureRandom(32, {type: "Uint8Array"});
        this.key = Buffer.from(this.arr).toString('hex');
    }

    getKey(){
        return this.key;
    }
}

module.exports = Key;