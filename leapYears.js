// In this kata you should simply determine, whether a given year is a leap year or not. In case you don't know the rules, here they are:

// Years divisible by 4 are leap years,
// but years divisible by 100 are not leap years,
// but years divisible by 400 are leap years.
// Tested years are in range 1600 ≤ year ≤ 4000.

// Note: this was a Codewars Kata

// function isLeapYear(year){
//     if (year >= 1600 && year <= 4000){
//         if (year % 400 === 0){
//             return true
//         } else if (year % 100 === 0){
//             return false
//         } else if (year % 4 === 0){
//             return true
//         }
//         };
//     return false
// };

function isLeapYear(year) {
    if (year >= 1600 && year <= 4000) {
        if (year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0)) {
            return true;
        }
    }
    return false;
};