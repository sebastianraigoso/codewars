// Check to see if a string has the same amount of 'x's and 'o's.
// The method must return a boolean and be case insensitive.
// The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

function XO(str) {
    str = [...str.toLowerCase()]
    return str.filter(e => e === 'x').length === str.filter(e => e === 'o').length
}

console.log(XO('xo')) // true
console.log(XO('XO')) // true
console.log(XO('xxxoo')) // false
console.log(XO("xxOo")) // true
console.log(XO('')) // true