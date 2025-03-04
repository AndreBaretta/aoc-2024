import { getInput } from './input.js';

function checkReport(report){
    let ascending; // true = ascending, false = descending
    for(let i = 0; i < report.length - 1; i++){
        let level = report[i];
        let nextLevel = report[i+1];
        if(level > nextLevel){
            if(ascending === undefined)
                ascending = false;
            else if(ascending)
                return false;
            if(level > nextLevel + 3)
                return false;
        } else if (level < nextLevel){
            if(ascending === undefined)
                ascending = true;
            else if(!ascending)
                return false;
            if(level < nextLevel - 3)
                return false;
        } else return false; // level == nextLevel
    }
    return true;
}

const reports = await getInput();

const safeReports = reports.filter(checkReport);

// 314
console.log(safeReports.length);