import { getInput } from './input.js';

const [list1, list2] = await getInput();

const distances = list1.map((number, index) =>
    Math.abs(number - list2[index])
);

let sum = 0;

distances.map(distance =>
    sum += distance
);

// 1879048
console.log(sum);