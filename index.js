function lifeInWeeks(age) {

var maxDays = 90 * 365;
var maxWeeks = 90 * 52;
var maxMonths = 90 * 12;
var currentDays = age * 365;
var currentWeeks = age * 52;
var currentMonths = age * 12;
console.log("You have " + (maxDays - currentDays) + " days, " + (maxWeeks - currentWeeks) + " weeks, and " + (maxMonths - currentMonths) + " months left.");

}

lifeInWeeks(56);
