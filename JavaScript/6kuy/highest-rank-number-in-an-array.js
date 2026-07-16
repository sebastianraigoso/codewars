// Complete the method which returns the number which is most frequent in the given input array. 
// If there is a tie for most frequent number, return the largest number among them.

// Note: no empty arrays will be given.

// Solution 1
function highestRank(arr) {
    let list = {}

    arr.forEach(n => {
        list[n] = (list[n] || 0) + 1
    })
    
    // what is the highest value in the object ?
    const maxValue = Math.max(...Object.values(list))
    // select what key has a value of maxValue
    const maxKey = Object.keys(list).filter(e => list[e] === maxValue)
    // then return the Max element of the array to select the highest key.
    return Math.max(...maxKey)
}

// Solution 2
function highestRank(arr) {
    const getNum = num => arr.filter(n => n === num).length
    return arr.sort((a,b) => getNum(b) - getNum(a) || b - a)[0]
}

console.log(highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12]))             //  12
console.log(highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12, 10]))         //  12
console.log(highestRank([12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10])) //   3