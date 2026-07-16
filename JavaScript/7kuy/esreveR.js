// Write a function reverse which reverses a list (or in clojure's case, any list-like data structure)
// (the dedicated builtin(s) functionalities are deactivated)

// Solution 1
const reverse = function(array) {
    let reversed = []
    for(let i = array.length-1; i >= 0; i--) {
        reversed.push(array[i])
    }
    return reversed
}

// Solution 2
const reverse = function(array) {
    let newarray = []
    for (i in array) {
        newarray.unshift(array[i])
    }
    return newarray
}

console.log(reverse([1,2,3])) // [3,2,1]
console.log(reverse([1,null,14,"two"])) // ["two",14,null,1]