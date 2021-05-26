const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;

const NUM_OF_WORKING_DAYS = 20
const MAX_HOURS_IN_MONTH = 100;;

let totalEmpHrs = 0;
let totalWorkingDays = 0;
while(totalEmpHrs <= MAX_HOURS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS) {
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    totalEmpHrs += getWorkingHours(empCheck);
}

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

let empWage = totalEmpHrs * WAGE_PER_HOUR;
console.log("Total Days: "+totalWorkingDays+" Total Hrs: "+ totalEmpHrs +" Emp wage: "+ empWage);