// Given a mixed array of number and string representations of integers, add up the non-string integers and subtract the total of the string integers.

// Return as a number.

function divCon(x) {
    let count = 0
    x.map(e => typeof e === 'number' ? count += e : count -= Number(e))

    return count
}

console.log(divCon([9, 3, '7', '3'])) // 2
console.log(divCon(['5', '0', 9, 3, 2, 1, '9', 6, 7])) // 14
console.log(divCon(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0'])) // 13