import * as fs from 'node:fs';

let inputArray = fs.readFileSync("./1/input.txt").toString().split("\n");

let answer = inputArray.reduce((aggregate, line) => {
    return aggregate + calculateNumber(line)
}, 0)

console.log(answer)

// On each line, the calibration value can be found by
// combining the first digit and the last digit
// (in that order) to form a single two-digit number.
function calculateNumber(line) {
    let firstDigit = ''
    let lastDigit = ''
    // get first digit
    for (const element of line) {
        if (!isNaN(element)) {
            firstDigit = element
            break
        }
    }
    // get last digit
    for (let i = line.length -1; i >= 0; i--) {
        if (!isNaN(line[i])) {
            lastDigit = line[i]
            break
        }
    }
    return Number(`${firstDigit}${lastDigit}`)
}