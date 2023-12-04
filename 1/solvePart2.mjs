import * as fs from 'node:fs';

let inputArray = fs.readFileSync("1/input.txt").toString().split("\n");

let answer = inputArray.reduce((aggregate, line) => {
    return aggregate + calculateNumber(line)
}, 0)

console.log(answer)

// I may have used co-polit here... how cool is that?
function substituteNumbers(str) {
    // console.log(str)
    const substitutions = {
        'one': '1',
        'two': '2',
        'three': '3',
        'four': '4',
        'five': '5',
        'six': '6',
        'seven': '7',
        'eight': '8',
        'nine': '9'
    };

    // do 5 passes to make sure we get all the numbers
    for (let i = 0; i < 10; i++) {
        for (let word in substitutions) {
            str = str.replace(word, substitutions[word]);
        }
    }
    // console.log(str)
    return str;
}

function startsWith(str) {
    const numbers = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

    for (let number of numbers) {
        if (str.startsWith(number)) {
            return substituteNumbers(number);
        }
    }

    return false;
}

function endsWith(str) {
    const numbers = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

    for (let number of numbers) {
        if (str.endsWith(number)) {
            return substituteNumbers(number);
        }
    }

    return false;
}


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
        if (startsWith(line.substring(i))) {
            firstDigit = startsWith(line.substring(i))
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
        if (endsWith(line.substring(0, i + 1))) {
            lastDigit = endsWith(line.substring(0, i + 1))
            break
        }
    }
    console.log(`Result is ${firstDigit}${lastDigit}`);
    return Number(`${firstDigit}${lastDigit}`)
}