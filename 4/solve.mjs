import * as fs from 'node:fs';
//load input from input.txt file
let input = fs.readFileSync("input.txt").toString()

// each card has 5 numbers that I have to play on the left and and 8 winning numbers on the right
// write a program to count how many numbers I play that match the winning numbers
function countMatches(input) {
    let lines = input.split('\n');
    let matches = 0;
    for (let i = 0; i < lines.length; i++) {
        let [card, numbers] = lines[i].split(': ');
        let [left, right] = numbers.split('|');
        left = left.trim().split(' ').map(n => parseInt(n));
        right = right.trim().split(' ').map(n => parseInt(n));

        // filter NaN
        left = left.filter(n => !isNaN(n));
        right = right.filter(n => !isNaN(n));

        let multiplier = 0;
        for (let j = 0; j < left.length; j++) {
            if (right.includes(left[j])) {
                console.log(`Card ${i + 1} matches ${left[j]} on the right, points awarded is ${multiplier}`);
                multiplier = multiplier == 0 ? 1 : multiplier * 2;
            }
        }
        matches += multiplier;
    }
    return matches;
}

console.log(countMatches(input));