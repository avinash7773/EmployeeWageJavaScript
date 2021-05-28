const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;

function getWorkingHours(empCheck) {
    switch(empCheck) {
        case IS_PART_TIME:
            empHrs = PART_TIME_HOURS;
            break;
        case IS_FULL_TIME:
            empHrs = FULL_TIME_HOURS;
            break;
        default:
            empHrs = 0;
            break;
    }
    return empHrs;
}

function calcDailyWage(empHrs) {
    return empHrs * WAGE_PER_HOUR;
}

const NUM_OF_WORKING_DAYS = 20
const MAX_HOURS_IN_MONTH = 100;
let totalEmpHrs = 0;
let totalWorkingDays = 0;
let empDailyWageArr = new Array();
while(totalEmpHrs <= MAX_HOURS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS) {
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    let empHrs = getWorkingHours(empCheck);
    totalEmpHrs += empHrs;
    empDailyWageArr.push(calcDailyWage(empHrs))
}

let empWage = calcDailyWage(totalEmpHrs)
console.log("Total Days: "+totalWorkingDays+" Total Hrs: "+ totalEmpHrs +" Emp wage: "+ empWage);