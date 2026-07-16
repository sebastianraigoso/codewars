// In this Kata, you will be given an array of numbers in which two numbers occur once and the rest occur only twice. 
// Your task will be to return the sum of the numbers that occur only once.

// For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15. 
// Every other number occurs twice.

// Solution 1 (too complex)
function repeats(arr) {
    let list = {}
    arr.map(e => list[e] ? list[e] += 1 : list[e] = 1)

    let uniq = Object.entries(list).filter(([key,value]) => value === 1)
    return +uniq[0][0] + +uniq[1][0]
}

// Solution 2 
function repeats(arr){
    return arr.filter(e => arr.indexOf(e) === arr.lastIndexOf(e))
              .reduce((a,b) => a + b, 0) // check that element is in only one index
}

console.log(repeats([4, 5, 7, 5, 4, 8])) // 15
console.log(repeats([9, 10, 19, 13, 19, 13])) // 19
console.log(repeats([16, 0, 11, 4, 8, 16, 0, 11])) // 12
console.log(repeats([5, 17, 18, 11, 13, 18, 11, 13])) // 22
console.log(repeats([5, 10, 19, 13, 10, 13])) // 24