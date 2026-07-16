// Write a function which converts the input string to uppercase.

// Solution 1
function makeUpperCase(str) {
    return str.toUpperCase()
}

// Solution 2
function makeUpperCase(str) {
    return str.toLocaleUpperCase()
}

console.log(makeUpperCase(""))       //  ""
console.log(makeUpperCase("hello"))  //  "HELLO"
console.log(makeUpperCase("Hello"))  //  "HELLO"
console.log(makeUpperCase("HELLO"))  //  "HELLO"