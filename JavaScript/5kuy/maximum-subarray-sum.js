// The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

// For example:

// Input: [-2, 1, -3, 4, -1, 2, 1, -5, 4]
// Output: 6 (Sum of [4, -1, 2, 1])
// Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. 
// If the list is made up of only negative numbers, return 0 instead. 
// Your solution should be fast, it will be tested on very large arrays so slow solutions will time out.

// Empty list is considered to have zero greatest sum. 
// Note that the empty list or array is also a valid sublist/subarray


// Solution 1 (too slow)
const maxSequence = function(arr) {
    if(arr.every(e => e < 0) || arr.length === 0) return 0

    let maxSum = 0
    let listE = []

    for(let i = 0; i < arr.length; i++) {
        for(let j = i; j < arr.length; j++) {
            let sumGroup = arr.slice(i, j+1).reduce((a, c) => a + c)
            if(maxSum < sumGroup) {
                maxSum = sumGroup
                listE = arr.slice(i, j+1)
            }
            
        }
    }
    console.log(listE)
    return maxSum
}

// Solution 2
function maxSequence(arr) {
    let max = 0
    
    for(let i = 0; i < arr.length; i++) {
        for(let sum = 0, j = i; j < arr.length; j++) {
            sum += arr[j]
            if (sum > max) max = sum
        }
    }

    return max
}

// Solution 3
const maxSequence = function(arr) {
    let maxSum = 0
    let currentSum = 0

    for (let i = 0; i < arr.length; i++) {
        currentSum = Math.max(0, currentSum + arr[i])
        maxSum = Math.max(maxSum, currentSum)
    }

    return maxSum
}

console.log(maxSequence([])) // 0
console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])) // 6
console.log(maxSequence([4,11,-24,-24,27,-11,-43,-23,-2,-12,-40,-11,7,-15,48,-36,-19,-8,-26,2,33,0,-46,-20])) // 48