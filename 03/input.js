import { readFile } from 'fs/promises';

function getStatements(list){
    const number = /[0-9]{1,3}/g;
    let enabled = true;
    for(let i = 0; i < list.length; i++){
        if(list[i].search('don\'t()') !== -1){
            enabled = false;
            list.splice(i,1);
            i--;
        }
        else if(list[i].search('do()') !== -1){
            enabled = true;
            list.splice(i,1);
            i--;
        }
        else{
            list[i] = [list[i], enabled];
        }
    }
    list = list.map(mulStatement =>
        [mulStatement[0].match(number).map(number =>
            parseInt(number)
        ), mulStatement[1]]
    );
    // list = list.map((element,index) =>
    //     element[0] = numbers[index]
    // );

    return list;
}

export async function getInput(){
    const mulexp = /(mul\([0-9]{1,3},[0-9]{1,3}\)|don\'t()|do())/g;
    const input = await readFile('03/input.txt', {encoding: 'utf8'});
    let mul = input.match(mulexp);

    mul = getStatements(mul);

    return mul;
}