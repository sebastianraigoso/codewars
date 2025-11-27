// Build a function that returns an array of integers from n to 1 where n>0.

// Example : n=5 --> [5,4,3,2,1]

// Solution 1
const reverseSeq = n => {
    let reverseArr = []
    for(let i = n; i > 0; i--) {
        reverseArr.push(i)
    }
    return reverseArr
}

// Solution 2
const reverseSeq = n => Array.from({length: n}, (_, i) => n - i)

console.log(reverseSeq(5)) // [5, 4, 3, 2, 1]