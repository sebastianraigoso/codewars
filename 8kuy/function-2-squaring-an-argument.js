// Now you have to write a function that takes an argument and returns the square of it.

// Solution 1
function square(n) {
    return n**2
}

// Solution 2
const square = n => {
    return Math.pow(n, 2)
}

console.log(square(5)) // 25