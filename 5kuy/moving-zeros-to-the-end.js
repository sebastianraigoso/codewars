// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

// Solution 1
function moveZeros(arr) {
    return arr.filter(e => e !== 0).concat(arr.filter(e => e === 0))
}

// Solution 2
function moveZeros(arr) {
    let noZero = arr.filter(e => e !== 0)
    let zeros = arr.filter(e => e === 0).length
    return noZero.concat('0'.repeat(zeros).split('').map(e => +e))
}

console.log(moveZeros([1,2,0,1,0,1,0,3,0,1])) // [1, 2, 1, 1, 3, 1, 0, 0, 0, 0]