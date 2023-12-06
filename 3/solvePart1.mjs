import * as fs from 'node:fs';

function sumPartNumbers(engine) {
    let sum = 0;
    let lines = engine.split('\n');
    for (let i = 0; i < lines.length; i++) {
        for (let j = 0; j < lines[i].length; j++) {
            let char = lines[i][j];
            if (!isNaN(parseInt(char))) {

                let number = [parseInt(char)];

                let surroundings = [
                    lines[i - 1]?.[j], // up
                    lines[i + 1]?.[j], // down
                    lines[i][j - 1], // left
                    lines[i][j + 1], // right
                    lines[i - 1]?.[j - 1], // up-left
                    lines[i - 1]?.[j + 1], // up-right
                    lines[i + 1]?.[j - 1], // down-left
                    lines[i + 1]?.[j + 1] // down-right
                ];

                for (let k = 1; k < 4; k++) {
                    let nextChar = lines[i][j + k];
                    if (!isNaN(parseInt(nextChar))) {
                        number.push(parseInt(nextChar));
                        surroundings.push(...[
                            lines[i - 1]?.[j + k], // up
                            lines[i + 1]?.[j + k], // down
                            lines[i][j + k - 1], // left
                            lines[i][j + k + 1], // right
                            lines[i - 1]?.[j + k - 1], // up-left
                            lines[i - 1]?.[j + k + 1], // up-right
                            lines[i + 1]?.[j + k - 1], // down-left
                            lines[i + 1]?.[j + k + 1] // down-right
                        ]);
                    } else {
                        break;
                    }
                }

                if (surroundings.some(s => s && isNaN(parseInt(s)) && s !== '.')) {
                    sum += parseInt(number.join(''));
                }

                j += number.length - 1;
            }
        }
    }
    return sum;
}

let engine = fs.readFileSync("./3/input.txt").toString();
let result = sumPartNumbers(engine);
console.log(result); // Outputs: 4361