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

// Complete the organizingContainers function below.
function organizingContainers(container) {
    let capcityEach = [];
    let typeEach = [];
    //Capcity of each Continer 
    for (let i = 0; i < container.length; i++) {
        let total = 0;
        let type = 0;
        for (let j = 0; j < container[i].length; j++) {
            total = total + container[i][j];  // capcity;
            type = type + container[j][i];    // type;
        }
        capcityEach.push(total);
        typeEach.push(type)
    }
    let sorted1 = capcityEach.sort((a, b) => a - b);
    let sorted2 = typeEach.sort((a, b) => a - b);

    for (let i = 0; i < sorted1.length; i++) {
        if (sorted1[i] != sorted2[i]) {
            return 'Impossible';
        }
    }
    return 'Possible';

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const n = parseInt(readLine(), 10);

        let container = Array(n);

        for (let i = 0; i < n; i++) {
            container[i] = readLine().split(' ').map(containerTemp => parseInt(containerTemp, 10));
        }

        let result = organizingContainers(container);

        ws.write(result + "\n");
    }

    ws.end();
}
