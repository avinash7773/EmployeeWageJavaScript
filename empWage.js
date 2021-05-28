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

//UC-7A calculate total wage using array forEach traversal or reduce method
let totalEmpWage = 0;
function sum(dailyWage){
    totalEmpWage += dailyWage;
}
empDailyWageArr.forEach(sum);
console.log("Total Days: "+totalWorkingDays + " Total Hrs: "+ totalEmpHrs + " EmpWage: "+totalEmpWage)

function totalWages(totalWage, dailyWage) {
    return totalWage + dailyWage;
}

console.log("Emp wage with reduce: "+ empDailyWageArr.reduce(totalWages,0));

//UC-7B Show the day along with daily wage using array map function
let dailyCounter = 0;
function mapDayWithWage(dailyWage) {
    dailyCounter++;
    return dailyCounter + " = " + dailyWage;
}

let mapDayWithWageArr = empDailyWageArr.map(mapDayWithWage);
console.log("Daily Wage Map: ")
console.log(mapDayWithWageArr);

//UC-7C show days when full time wage of 160 were earned
function fullTimeWage(dailyWage) {
    return dailyWage.includes("160");
}
let fullDayWageArr = mapDayWithWageArr.filter(fullTimeWage);
console.log("Daily wage filter when fulltime wage earned:")
console.log(fullDayWageArr);

//UC-7D find the first occurance when full time wage was earned using find function
function findFullTimeWage(dailyWage) {
    return dailyWage.includes("160");
}

console.log("First Time FullTime wage was earned on Day: "+
mapDayWithWageArr.find(findFullTimeWage));

//UC-7E Check if every element of full time wage is truely holding full time wage
function isAllFullTimeWage(dailyWage) {
    return dailyWage.includes("160");
}

console.log("Check All Element Have Full Time Wage: "+fullDayWageArr.every(isAllFullTimeWage))

//UC-7F Check if there is any part time wage
function isAnyPartTimeWage(dailyWage) {
    return dailyWage.includes("80");
}
console.log("Check any part time wage: "+mapDayWithWageArr.some(isAnyPartTimeWage))

//UC-7G Find number of days the Employee worked
function totalDayWorked(numOfDays, dailyWage) {
    if(dailyWage > 0) {
        return numOfDays+1;
    }
    return numOfDays;
}
console.log("Number of Days Emp Worked: "+empDailyWageArr.reduce(totalDayWorked,0));