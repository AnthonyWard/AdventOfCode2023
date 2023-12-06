import * as fs from 'node:fs';

let games = fs.readFileSync("input.txt").toString().split("\n");

function solve(games) {
    let gameResults = [];
    for (let game of games) {
        let requiredColours = {
            red: 0,
            green: 0,
            blue: 0
        }
        let [gameId, turns] = game.split(":");
        gameId = Number(gameId.split(" ")[1])
        for (let turn of turns.trim().split(";")) {
            let draws = turn.trim().split(",");
            draws.forEach(draw => {
                let [count, colour] = draw.trim().split(" ");
                count = Number(count);
                if (requiredColours[colour] < count) {
                    requiredColours[colour] = count;
                }
            })
        }
        let power = requiredColours.red * requiredColours.green * requiredColours.blue
        gameResults.push({gameId, power});
    }
    return gameResults;
}

console.log(solve(games).reduce((acc, curr) => curr.power + acc, 0))