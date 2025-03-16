import { getInput } from "./input.js";

const [firstPart, secondPart] = await getInput();

const order = [];
const map = new Map();
firstPart.map(([first, second]) => {
    if(!map.has(first)){
        const value = [second];
        map.set(first, value);
    } else {
        const value = map.get(first);
        value.push(second);
    }
});

function validateUpdate(row){
    for(let i = 0; i < row.length; i++){
        for(let j = i+1; j < row.length; j++){
            const values = map.get(row[i]);
            if(!values.includes(row[j])) 
                return false;
        }
    }
    return true;
}

const validUpdates = secondPart.filter(validateUpdate);

let middlePages = 0;

validUpdates.map(row => {
    const middle = Math.floor(row.length/2);
    middlePages += row[middle];
})

// 4662
console.log(middlePages);