import * as fs from 'node:fs';

let games = fs.readFileSync("input.txt").toString().split("\n");

let bag = {
    red: 12,
    green: 13,
    blue: 14
}

// for each game in games the game id comes before the colon
// and turns are split by semicolon
// and for each turn the draw is split by a comma
// and for each draw a space separates the count and the colour
// each turn must fit within the bag for a game to be won
// tell me which games are won and which are lost
function solvePart1(games) {
    let gameResults = [];
    for (let game of games) {
        let [gameId, turns] = game.split(":");
        gameId = Number(gameId.split(" ")[1])
        let gameWon = true;
        for (let turn of turns.trim().split(";")) {
            let draws = turn.trim().split(",");
            draws.forEach(draw => {
                let [count, colour] = draw.trim().split(" ");
                if (bag[colour] < count) {
                    gameWon = false;
                }
            })
        }
        gameResults.push({gameId, gameWon});
    }
    return gameResults;
}

let results = solvePart1(games).reduce((acc, curr) => curr.gameWon ? curr.gameId + acc : acc, 0);


console.log(results);