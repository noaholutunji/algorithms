'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the timeInWords function below.
function timeInWords(h, m) {
    console.log(h, m);

    function switchNums(array) {
        var number = 0;
        switch (array) {
            case 1:
                number = "one minute";
                break;
            case 2:
                number = "two minutes";
                break;
            case 3:
                number = "three minutes";
                break;
            case 4:
                number = "four minutes";
                break;
            case 5:
                number = "five minutes";
                break;
            case 6:
                number = "six minutes";
                break;
            case 7:
                number = "seven minutes";
                break;
            case 8:
                number = "eight minutes";
                break;
            case 9:
                number = "nine minutes";
                break;
            case 10:
                number = "ten minutes";
                break;
            case 11:
                number = "eleven minutes";
                break;
            case 12:
                number = "twelve minutes";
                break;
            case 13:
                number = "thirteen minutes";
                break;
            case 14:
                number = "fourteen minutes";
                break;
            case 15:
                number = "quarter";
                break;
            case 16:
                number = "sixteen minutes";
                break;
            case 17:
                number = "seventeen minutes";
                break;
            case 18:
                number = "eighteen minutes";
                break;
            case 19:
                number = "nineteen minutes";
                break;
            case 20:
                number = "twenty minutes";
                break;
            case 21:
                number = "twenty one minutes";
                break;
            case 22:
                number = "twenty two minutes";
                break;
            case 23:
                number = "twenty three minutes";
                break;
            case 24:
                number = "twenty four minutes";
                break;
            case 25:
                number = "twenty five minutes";
                break;
            case 26:
                number = "twenty six minutes";
                break;
            case 27:
                number = "twenty seven minutes";
                break;
            case 28:
                number = "twenty eight minutes";
                break;
            case 29:
                number = "twenty nine minutes";
                break;
            case 30:
                number = "half";
                break;
            case 31:
                number = "twenty nine minutes";
                break;
            case 32:
                number = "twenty eight minutes";
                break;
            case 33:
                number = "twenty seven minutes";
                break;
            case 34:
                number = "twenty six minutes";
                break;
            case 35:
                number = "twenty five minutes";
                break;
            case 36:
                number = "twenty four minutes";
                break;
            case 37:
                number = "twenty three minutes";
                break;
            case 38:
                number = "twenty two minutes";
                break;
            case 39:
                number = "twenty one minutes";
                break;
            case 40:
                number = "twenty minutes";
                break;
            case 41:
                number = "nineteen minutes";
                break;
            case 42:
                number = "eighteen minutes";
                break;
            case 43:
                number = "seventeen minutes";
                break;
            case 44:
                number = "sixteen minutes";
                break;
            case 45:
                number = "quarter";
                break;
            case 46:
                number = "fourteen minutes";
                break;
            case 47:
                number = "thirteen minutes";
                break;
            case 48:
                number = "twelve minutes";
                break;
            case 49:
                number = "eleven minutes";
                break;
            case 50:
                number = "ten minutes";
                break;
            case 51:
                number = "nine minutes";
                break;
            case 52:
                number = "eight minutes";
                break;
            case 53:
                number = "seven minutes";
                break;
            case 54:
                number = "six minutes";
                break;
            case 55:
                number = "five minutes";
                break;
            case 56:
                number = "four minutes";
                break;
            case 57:
                number = "three minutes";
                break;
            case 58:
                number = "two minutes";
                break;
            case 59:
                number = "one minute";
                break;
        }
        return number;
    }

    console.log(switchNums(h));
    console.log(switchNums(m));

    //build the string

    let string = "",
        pastTo = "past";

    // If minutes are over 30, we need to increment h up 1.
    // we also need to say "to" instead of "past"
    if (m > 30) {
        h++;
        pastTo = "to";
    }

    let hour = switchNums(h),
        hours = hour.substring(0, hour.indexOf(" ")),
        minutes = switchNums(m);


    // first check if m == 00
    if (m === 0) {
        return hours + " o' clock";
    }
    return `${minutes} ${pastTo} ${hours}`;
}



function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const h = parseInt(readLine(), 10);

    const m = parseInt(readLine(), 10);

    let result = timeInWords(h, m);

    ws.write(result + "\n");

    ws.end();
}
