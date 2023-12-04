import * as fs from 'node:fs';

let inputArray = fs.readFileSync("input.txt").toString().split("\n");

let answer = inputArray.reduce((aggregate, line) => {
    return aggregate + calculateNumber(line)
}, 0)

console.log(answer)










// On each line, the calibration value can be found by
// combining the first digit and the last digit
// (in that order) to form a single two-digit number.
function calculateNumber(line) {
    // console.log(`Calculating line ${line}`);
    let firstDigit = ''
    let lastDigit = ''
    // get first digit
    for (let i = 0; i < line.length; i++) {
        // console.log(`Getting first digit ${line[i]}`);
        if (!isNaN(line[i])) {
            firstDigit = line[i]
            break
        }
    }
    // get last digit
    for (let i = line.length -1; i >= 0; i--) {
        // console.log(`Getting last digit ${line[i]}`);
        if (!isNaN(line[i])) {
            lastDigit = line[i]
            break
        }
    }
    // console.log(`Result is ${firstDigit}${lastDigit}`);
    return Number(`${firstDigit}${lastDigit}`)
}