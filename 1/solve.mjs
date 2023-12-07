import * as fs from 'node:fs';

let answer = fs.readFileSync("C:\\git\\AdventOfCode2023\\1\\input.txt")
    .toString()
    .split("\n")
    .reduce((aggregate, line) => {
        let firstNumber = line.split("").find(character => !isNaN(character))
        let lastNumber = line.split("").findLast(character => !isNaN(character))
        // combine numbers to make a two-digit number and convert to int so that it can be summed
        return Number(`${firstNumber}${lastNumber}`) + aggregate
    }, 0)

console.log(answer)