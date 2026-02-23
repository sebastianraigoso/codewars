// I would like to be able to pass an array with two elements to my swapValues function to swap the values. 
// However it appears that the values aren't changing.

// Can you figure out what's wrong here?

let arr = [1, 2]

// Solution 1
function swapValues(arr) {
    var args = arr
    var temp = args[0];
    args[0] = args[1];
    args[1] = temp;
}

// Solution 2
function swapValues(arr) {
    return arr.reverse()
}

console.log(swapValues(arr)) // 2
console.log(swapValues(arr)) // 1