import { getInput } from "./input.js";

const [map, secondPart] = await getInput();

function validateUpdate(row){
    for(let i = 0; i < row.length; i++){
        for(let j = i+1; j < row.length; j++){
            const values = map.get(row[i]);
            if(!values.includes(row[j])) 
                return true;
        }
    }
    return false;
}

function sortUpdate(a,b){
    const values = map.get(a);
    if(values.includes(b))
        return 1;
    return -1;
}

const unvalidUpdates = secondPart.filter(validateUpdate);

unvalidUpdates.map(row => {
    row.sort(sortUpdate);
});

let middlePages = 0;

unvalidUpdates.map(row => {
    const middle = Math.floor(row.length/2);
    middlePages += row[middle];
})

// 5900
console.log(middlePages);







