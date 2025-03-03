import { readFile } from 'fs/promises';

export async function getInput(){
    try{
        const input = await readFile('01/input.txt', {encoding: 'utf8'});
        const rows = input.split('\n');
        const lists  = rows.map(row =>
            row.split('   ').map(number => parseInt(number, 10))
        );        
        const list1 = lists.map(row => row[0]).sort();
        const list2 = lists.map(row => row[1]).sort();
        return [list1,list2];
    } catch (err){
        console.error(err);
    }   
}
