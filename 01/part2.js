import { getInput } from './input.js';

const [list1, list2] = await getInput();

const similarities = list1.map(number =>
    number * list2.filter(x => x==number).length
);

var sum = 0;

similarities.map(similarity =>
    sum += similarity
);

//21024792
console.log(sum);