// Given an array of integers, Find the maximum product obtained from multiplying 2 adjacent numbers in the array. 
// Note that the array size is at least 2 and consists a mixture of positive, negative integers and also zeroes.

// Examples
// [1, 2, 3] returns 6 because the maximum product is obtained from multiplying

// Solution 1
function adjacentElementsProduct(array) {
    let max = -Infinity
    for(let i = 0; i < array.length-1; i++) {
        if(max < array[i] * array[i+1]) {
            max = array[i] * array[i+1]
        }
    }
    return max
}

// Solution 2
const adjacentElementsProduct = (array) => {
    let max = array[0] * array[1]
    for(let i = 1; i < array.length - 1; i++) {
        max = Math.max(max, array[i] * array[i+1])
    }
    return max
}

console.log(adjacentElementsProduct([5, 8])) // 40
console.log(adjacentElementsProduct([1, 2, 3])) // 6
console.log(adjacentElementsProduct([1, 5, 10, 9])) // 90
console.log(adjacentElementsProduct([4, 12, 3, 1, 5])) // 48
console.log(adjacentElementsProduct([5, 1, 2, 3, 1, 4])) // 6
console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3])) // 21
console.log(adjacentElementsProduct([9, 5, 10, 2, 24, -1, -48])) // 50
console.log(adjacentElementsProduct([5, 6, -4, 2, 3, 2, -23])) // 30
console.log(adjacentElementsProduct([-23, 4, -5, 99, -27, 329, -2, 7, -921])) // -14
console.log(adjacentElementsProduct([5, 1, 2, 3, 1, 4])) // 6
console.log(adjacentElementsProduct([1, 0, 1, 0, 1000])) // 0
console.log(adjacentElementsProduct([1, 2, 3, 0])) // 6