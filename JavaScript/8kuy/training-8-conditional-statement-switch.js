// Complete the function howManydays. 
// It accepts 1 parameter month, which means the month of the year. 
// Different months have a different number of days as shown in the table below. 
// Return the number of days that are in month. 
// There is no need for input validation: month will always be greater than 0 and less than or equal to 12.

// +---------------+-------------+
// |    month      |    days     |
// +---------------+-------------+
// |1,3,5,7,8,10,12|     31      |
// +---------------+-------------+
// |4,6,9,11       |     30      |
// +---------------+-------------+
// |2              |     28      |  (Do not consider the leap year)
// +---------------+-------------+
// Tip: Using default for most of the cases can reduce your work.

// When you have finished, click "Test" to test your code against initial tests and "Attempt" to test your code against all tests. 
// If you pass in all tests you can click "Submit" to submit your code.

const howManydays = function(month) {
    switch (month) {
        case 4:
        case 6:
        case 9:
        case 11: return 30

        case 2: return 28
        
        default: return 31
    }
}

console.log(howManydays(1)) // 31
console.log(howManydays(2)) // 28
console.log(howManydays(3)) // 31
console.log(howManydays(4)) // 30
console.log(howManydays(12)) // 31