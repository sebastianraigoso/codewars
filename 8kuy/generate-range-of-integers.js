// Implement the function generateRange which takes three arguments (start, stop, step) 
// and returns the range of integers from start to stop (inclusive) in increments of step.

// Examples
// (1, 10, 1) -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// (-10, 1, 1) -> [-10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1]
// (1, 15, 20) -> [1]

// Note
// start < stop
// step > 0

function generateRange(start, stop, step) {
    let range = []
    for(let i = start; i <= stop; i+=step) {
        range.push(i)
    }
    return range
}

console.log(generateRange(2, 10, 2)) // [2, 4, 6, 8, 10]