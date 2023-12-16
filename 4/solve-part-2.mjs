import * as fs from 'node:fs';
//load input from input.txt file
let input = fs.readFileSync("input.txt").toString()

// each card has 5 numbers that I have to play on the left and and 8 winning numbers on the right
// write a program to count how many numbers I play that match the winning numbers
function countMatches(input) {
    let lines = input.split('\n');

    let scorecards = {}
    for (let i = 0; i < lines.length; i++) {
        scorecards[i] = 1
    }

    for (let scorecard = 0; scorecard < lines.length; scorecard++) {
        let scorecardcount = scorecards[scorecard]
        let [card, numbers] = lines[scorecard].split(': ');

        let [scoreCardNumbers, winningNumbers] = numbers.split('|');
        scoreCardNumbers = scoreCardNumbers.trim().split(' ').map(n => parseInt(n));
        winningNumbers = winningNumbers.trim().split(' ').map(n => parseInt(n));
        scoreCardNumbers = scoreCardNumbers.filter(n => !isNaN(n));
        winningNumbers = winningNumbers.filter(n => !isNaN(n));

        // play the game
        let cardswon = 0;
        for (let scorecardNumber = 0; scorecardNumber < scoreCardNumbers.length; scorecardNumber++) {
            if (winningNumbers.includes(scoreCardNumbers[scorecardNumber])) {
                cardswon++
            }
        }

        // add the scorecards
        for (let j = 1; j <= cardswon; j++) {
            scorecards[scorecard + j] += 1 * scorecardcount
        }

        //console.log(`${card} wins ${cardswon} scorecards, timesed by ${scorecardcount} = ${cardswon * scorecardcount}`)
    }

    let totalScorecards = 0;
    for (let scorecard in scorecards) {
        totalScorecards += scorecards[scorecard]
    }
    return totalScorecards
}

console.log(countMatches(input));