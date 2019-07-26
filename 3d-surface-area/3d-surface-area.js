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

// Complete the surfaceArea function below.
function surfaceArea(A) {
    var red = (a, b) => a + b;
    var r = A[0].length * A.length * 2 + A[0].reduce(red) + A[A.length - 1].reduce(red);
    for (let i = 0; i < A.length; i++) {
        r += A[i][0] + A[i][A[i].length - 1];
        for (let k = 0; k < A[0].length - 1; k++) {
            r += Math.abs(A[i][k] - A[i][k + 1]);
        }
    }
    if (A.length > 1) {
        for (let i = 0, j = 1; i < A.length, j < A.length; i++ , j++) {
            for (let k = 0; k < A[0].length; k++) {
                r += Math.abs(A[i][k] - A[j][k]);
            }
        }
    }
    return r;

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const HW = readLine().split(' ');

    const H = parseInt(HW[0], 10);

    const W = parseInt(HW[1], 10);

    let A = Array(H);

    for (let i = 0; i < H; i++) {
        A[i] = readLine().split(' ').map(ATemp => parseInt(ATemp, 10));
    }

    let result = surfaceArea(A);

    ws.write(result + "\n");

    ws.end();
}
