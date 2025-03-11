import { getInput } from "./input.js";

const [rows, columns, leftDiagonals, rightDiagonals, x] = await getInput();
const mas = /(?=(MAS|SAM))/g;
let xMasCount = 0;

for(let i = 0; i < x.length; i++){
    if(x[i][0].match(mas) && x[i][1].match(mas))
        xMasCount++;
}

// 1835
console.log(xMasCount);
