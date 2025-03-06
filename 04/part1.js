import { getInput } from "./input.js";

const [rows, columns, leftDiagonals, rightDiagonals] = await getInput();

const xmas = /(?=(XMAS|SAMX))/g;
let countRows = 0;
rows.map( row => {
        if(row.search(xmas) != -1){
            countRows += row.match(xmas).length
            console.log('row: ', row);
    }}
);
let countColumns = 0;
columns.map( column => {
    if(column.search(xmas) != -1){
        countColumns += column.match(xmas).length
        console.log('col: ', column);
    }}
);
let countLDiagonal = 0;
leftDiagonals.map( LDiagonal => {
    if(LDiagonal.search(xmas) != -1){
        countLDiagonal += LDiagonal.match(xmas).length
        console.log('ldiag: ', LDiagonal);
    }}
);
let countRDiagonal = 0;
rightDiagonals.map( RDiagonal => {
    if(RDiagonal.search(xmas) != -1){
        countRDiagonal += RDiagonal.match(xmas).length
        console.log('rdiag: ', RDiagonal);
    }}
);
const total = countRows + countColumns + countLDiagonal + countRDiagonal;

// 2434
console.log(total);

