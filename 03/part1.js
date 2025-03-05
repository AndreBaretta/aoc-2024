import { getInput } from './input.js';

const input = await getInput();

let sum = 0;

input.map(mul =>
    sum += mul[0][0] * mul[0][1]
);

// 157621318
console.log(sum);