// 1 - передаю аргументы
// 2 - компьютер выбирает один из них 
// 3 - шифрую ответ
// 4 - предлагаю выбрать пользователю 
// 5 - сравниваю ответы и вывожу победителя
const Hmac = require("./Hmac")
const Key = require("./Key")
const Rules = require("./Rules")
const prompt = require('prompt-sync')({sigint: true});


let moves = process.argv.slice(2)

if (4 > process.argv.length) {
    console.log("you should pass atleast 3 moves")
} else if (!(process.argv.length %= 2)) {
    console.log("you should pass odd number of moves")
} else {
    compchoose(moves)
}



// function hueta(moves){
//     let variants = `Available moves: \n`
//     moves.foreach(huis => {variants = variants + huis})
        
//     return console.log(variants)
// }


function compchoose(moves) {
    const computerMove = moves[Math.floor(Math.random() * moves.length)];
    let msg = computerMove;
    
    const key = new Key().getKey();
    const hmac = new Hmac(msg, key).getHmac()

    console.log(`\nHMAC: ${hmac}`)

    const readyMoves = moves.map((move, index) => {`${index + 1} - ${move}\n`});
    console.log(moves.map(e => e))

    // let userMove = prompt("Enter your move: ")
    
    // const rules = new Rules(moves, userMove).getRules()

    return console.log(readyMoves)
}


