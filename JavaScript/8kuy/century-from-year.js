// Introduction
// The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

// Task
// Given a year, return the century it is in.

// Examples
// 1705 --> 18
// 1900 --> 19
// 1601 --> 17
// 2000 --> 20
// 2742 --> 28

// Solution 1
function century(year) {
    const century = Array.from(String(year), Number)
    console.log(century.slice(0, -2).join(''))
    if(century.length === 2) {
        return 1
    } else if(century[century.length -1] >= 1 || century[century.length -2] >= 1 && century[century.length -1] === 0) {
        return Number(century.slice(0, -2).join('')) + 1
    } else {
        return Number(century.slice(0, -2).join(''))
    }
}

// Solution 2
function century(year) {
  return Math.ceil(year/100)
}

console.log(century(1705)) // 18
console.log(century(1900)) // 19
console.log(century(1601)) // 17
console.log(century(2000)) // 20
console.log(century(89)) // 1