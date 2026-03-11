// Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. 
// A tower block is represented with "*" character.

// For example, a tower with 3 floors looks like this:

// [
//   "  *  ",
//   " *** ", 
//   "*****"
// ]
// And a tower with 6 floors looks like this:

// [
//   "     *     ", 
//   "    ***    ", 
//   "   *****   ", 
//   "  *******  ", 
//   " ********* ", 
//   "***********"
// ]

// My solution
function towerBuilder(nFloors) {
    let pyramid = []
    for(let i = 1, j= nFloors-1, count=1; i <= nFloors; i++) {
        pyramid.push(`${' '.repeat(j)}${'*'.repeat(count)}${' '.repeat(j)}`)
        j--
        count+=2
    }
    return pyramid
}

// Another version
function towerBuilder(nFloors) {
    let pyramid = []
    for (let i = 0; i < nFloors; i++) {
        pyramid.push(" ".repeat(nFloors - i - 1)
            + "*".repeat((i * 2)+ 1)
            + " ".repeat(nFloors - i - 1))
    }
    return pyramid
}

console.log(towerBuilder(1)) // ["*"]
console.log(towerBuilder(2)) // [" * ","***"]
console.log(towerBuilder(3)) // ["  *  "," *** ","*****"]