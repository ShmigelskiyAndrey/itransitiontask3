// 1 - передаю аргументы
// 2 - компьютер выбирает один из них 
// 3 - шифрую ответ
// 4 - предлагаю выбрать пользователю 
// 5 - сравниваю ответы и вывожу победителя
const secureRandom = require('secure-random');
const CryptoJS = require("crypto-js")
const Key = require("./Key")


let moves = process.argv.slice(2)

if (4 > process.argv.length) {
    console.log("you should pass atleast 3 moves")
} else if (!(process.argv.length %= 2)) {
    console.log("you should pass odd number of moves")
} else {
    compchoose(moves)
}


function compchoose(moves) {
    const computermove = moves[Math.floor(Math.random() * moves.length)];

    let msg = computermove;


    
    
    const key = new Key().getKey();

    let hash = CryptoJS.HmacSHA256(msg, key).toString();
    console.log(hash)

    return console.log(computermove)
}


