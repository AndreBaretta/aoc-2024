import { readFile } from "fs/promises";

export async function getInput(){
    const input = await readFile('02/input.txt', {encoding: 'utf8'});
    let reports = input.split('\n');
    reports = reports.map(report =>
        report.split(' ').map(number => parseInt(number,10))
    );
    return reports;
}