import { getInput } from './input.js';

const [list1, list2] = await getInput();

const distances = list1.map((number, index) =>
    Math.abs(number - list2[index])
);

var sum = 0;

distances.map(distance =>
    sum += distance
);

console.log(sum);
// 1879048