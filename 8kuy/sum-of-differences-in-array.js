// Your task is to sum the differences between consecutive pairs in the array in descending order.

// Example
// [2, 1, 10]  -->  9
// In descending order: [10, 2, 1]

// Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

// If the array is empty or the array has only one element the result should be 0.

// Solution 1
function sumOfDifferences(arr) {
    if(arr.length < 2) return 0
    
    arr = arr.sort((a,b) => b - a)
    let consecutive = 0

    for(let i = 0; i < arr.length-1; i++) {
        consecutive += arr[i] - arr[i+1]
    }
    return consecutive
}

// Solution 2
function sumOfDifferences(arr) {
    return arr.length > 1 ? Math.max(...arr) - Math.min(...arr) : 0
}

console.log(sumOfDifferences([1, 2, 10])) // 9
console.log(sumOfDifferences([-3, -2, -1])) // 2