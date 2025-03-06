import { readFile } from "fs/promises";

function getColumns(rows){
    let columns = [];
    const height = rows.length;
    const width = rows[0].length;
    for(let j = 0; j < width; j++){
        columns.push('');
        for(let i = 0; i < height; i++){
            columns[j] = columns[j].concat(rows[i][j]);
        }
    }
    return columns;
}

function getDiagonals(rows){
    const height = rows.length;
    const width = rows[0].length;
    let leftDiagonals = [];
    let rightDiagonals = [];
    for(let i = 0; i < width; i++){
        rightDiagonals.push('');
        for(let j = 0; j + i < width && j < height; j++){
            rightDiagonals[i] = rightDiagonals[i].concat(rows[j][i+j]);
        }
    }
    for(let i = 1; i < height; i++){
        rightDiagonals.push('');
        for(let j = 0; j + i < height && j < width; j++){
            rightDiagonals[i+width-1] = rightDiagonals[i+width-1].concat(rows[i+j][j]);
        }
    }

    for(let i = 0; i < width; i++){
        leftDiagonals.push('');
        for(let j = 0; i - j >= 0 && j < height; j++){
            leftDiagonals[i] = leftDiagonals[i].concat(rows[j][i-j]);
        }
    }
    for(let i = 1; i < height; i++){
        leftDiagonals.push('');
        for(let j = 0; j < height - i; j++){
            leftDiagonals[i+width-1] = leftDiagonals[i+width-1].concat(rows[i+j][width-j-1]);
        }
    }

    console.log(leftDiagonals);
    return [leftDiagonals, rightDiagonals];
}

export async function getInput(){
    const input = await readFile('04/input.txt', {encoding: 'utf8'});
    const rows = input.split('\r\n');
    const columns = getColumns(rows);
    const [leftDiagonals, rightDiagonals] = getDiagonals(rows);
    return [rows, columns, leftDiagonals, rightDiagonals];
}


