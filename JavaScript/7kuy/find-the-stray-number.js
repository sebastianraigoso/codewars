// You are given an odd-length array of integers, in which all of them are the same, except for one single number.

// Complete the method which accepts such an array, and returns that single different number.

// The input array will always be valid! (odd-length >= 3)

// Examples
// [1, 1, 2] ==> 2
// [17, 17, 3, 17, 17, 17, 17] ==> 3

// Solution 1
function stray(numbers) {
    const uniq = [...new Set(numbers)]

    const a = numbers.filter(n => n === uniq[0]).length
    const b = numbers.filter(n => n === uniq[1]).length

    return a > b ? uniq[1] : uniq[0]
}

// Solution 2
function stray(numbers) {
  const [a, b] = [...new Set(numbers)]
  return numbers.filter(e => e === a).length === 1 ? a : b
}

// Solution 3
const stray = numbers => numbers.find(num => numbers.indexOf(num) === numbers.lastIndexOf(num))