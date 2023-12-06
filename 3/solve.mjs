import * as fs from 'node:fs';


function sumPartNumbers(engine) {

    function returnCoordinatesOfGear(lines, i, j, lengthOfNumber = 1) {
        let coordinates = [];

        const up = lines[i - 1]?.[j] // up
        const down = lines[i + 1]?.[j] // down
        const left = lines[i][j - 1] // left
        const upleft = lines[i - 1]?.[j - 1] // up-left
        const downleft = lines[i + 1]?.[j - 1] // down-left

        if (up == "*") { coordinates.push([i - 1, j]); }
        if (down == "*") { coordinates.push([i + 1, j]); }
        if (left == "*") { coordinates.push([i, j - 1]); }
        if (upleft == "*") { coordinates.push([i - 1, j - 1]); }
        if (downleft == "*") { coordinates.push([i + 1, j - 1]); }

        for (let k = 0; k < lengthOfNumber; k++) {
            const right = lines[i][j + 1 + k] // right
            const upright = lines[i - 1]?.[j + 1 + k]  // up-right
            const downright = lines[i + 1]?.[j + 1 + k] // down-right
            if (right == "*") { coordinates.push([i, j + 1 + k]); }
            if (upright == "*") { coordinates.push([i - 1, j + 1 + k]); }
            if (downright == "*") { coordinates.push([i + 1, j + 1 + k]); }
        }

        return coordinates;
    }

    function attachNumberToGear(number, gears) {
        gears = [...new Set(gears)]
        for (let l = 0; l < gears.length; l++) {
            let gear = gears[l];
            let [i, j] = gear
            let key = `i${i}j${j}`
            uniqueGears[key] = [number, ...uniqueGears[key] || []];
        }
    }

    let uniqueGears = {}

    let lines = engine.split('\n');
    for (let i = 0; i < lines.length; i++) {
        for (let j = 0; j < lines[i].length; j++) {
            let char = lines[i][j];
            if (!isNaN(parseInt(char))) {

                let number = [parseInt(char)];

                // look ahead for more numbers
                for (let k = 1; k < 4; k++) {
                    let nextChar = lines[i][j + k];
                    if (!isNaN(parseInt(nextChar))) {
                        number.push(parseInt(nextChar));
                    } else {
                        break;
                    }
                }
                
                // find all gears around the number
                let gears = returnCoordinatesOfGear(lines, i, j, number.length);

                attachNumberToGear(parseInt(number.join('')), gears)

                // skip the rest of the number
                j += number.length - 1;
            }
        }
    }
    return uniqueGears;
}


let engine = fs.readFileSync("./3/input.txt").toString();
let result = sumPartNumbers(engine);

let sum = Object.values(result).reduce((acc, gearPartNumbers) => {
    if (gearPartNumbers.length == 2) {
        acc += gearPartNumbers[0] * gearPartNumbers[1]
    }
    return acc;
},0)

console.log(sum); // Outputs: 467835