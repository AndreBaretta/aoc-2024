import { readFile } from 'fs/promises';


export async function getInput(){
    const input = await readFile('05/input.txt', { encoding: 'utf8' });
    let [firstPart, secondPart] = input.split('\r\n\r\n');
    firstPart = firstPart.split('\r\n').map(row =>
        row.split('|').map(number => parseInt(number))
    );
    secondPart = secondPart.split('\r\n').map(row => 
        row.split(',').map(number => parseInt(number))
    );

    const firstPartMap = new Map();
    firstPart.map(([first, second]) => {
        if (!firstPartMap.has(first)) {
            const value = [second];
            firstPartMap.set(first, value);
        } else {
            const value = firstPartMap.get(first);
            value.push(second);
        }
    });

    return [firstPartMap, secondPart];
}