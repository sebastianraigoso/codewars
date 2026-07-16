// If you can't sleep, just count sheeps!!

// Task:
// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...".
// Input will always be valid, i.e. no negative integers.

const countSheep = function(num) {
    let count = ''
    for(let i = 0; i < num; i++) {
        count+= `${i+1} sheep...`
    }
    return count
}

console.log(countSheep(0)) // ""
console.log(countSheep(1)) // "1 sheep..."
console.log(countSheep(2)) // "1 sheep...2 sheep..."
console.log(countSheep(3)) // "1 sheep...2 sheep...3 sheep..."