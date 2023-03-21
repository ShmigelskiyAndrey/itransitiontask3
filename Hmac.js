const CryptoJS = require("crypto-js")

class Hmac {
    constructor(msg, key) {
        this.hmac = CryptoJS.HmacSHA256(msg, key).toString();
    }

    getHmac(){
        return this.hmac
    }
}

module.exports = Hmac;