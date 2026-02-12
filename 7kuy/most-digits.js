// Find the number with the most digits.
// If two numbers in the argument array have the same number of digits, return the first one in the array.

function findLongest(array) {
    let numList
    for(let i = 0, lengthCount = 0; i < array.length; i++) {
        if(String(array[i]).length > lengthCount) {
            numList = array[i]
            lengthCount = String(array[i]).length
        }
    }
    return numList
}

console.log(findLongest([1, 10, 100])) // 100
console.log(findLongest([9000, 8, 800])) // 9000
console.log(findLongest([8, 900, 500])) // 900