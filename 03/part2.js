import { getInput } from './input.js';

const input = await getInput();

let sum = 0;

input.map(mul => {
    if(mul[1]){
        sum += mul[0][0] * mul[0][1]
    }
}
);


// 79845780
console.log(sum);