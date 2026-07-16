// Oh, no! The number has been mixed up with the text. 
// Your goal is to retrieve the number from the text, can you return the number back to its original state?

// Task
// Your task is to return a number from a string.

// Details
// You will be given a string of numbers and letters mixed up, you have to return all the numbers in that string in the order they occur.

// Solution 1
function filterString(value) {
    const n = '1234567890'
    let numbers = ''

    for(let i = 0; i < value.length; i++) {
        if(n.includes(value[i])) {
            numbers += value[i]
        }
    }
    return +numbers
}

// Solution 2
function filterString(value) {
    let result = ''
    for(let i of value) {
        if(!isNaN(Number(i))) {
            result += i
        }
    }
    return Number(result)
}

// Solution 3
const filterString = (value) => +[...value].filter(e => '0123456789'.includes(e)).join('')



console.log(filterString("123")) // 123
console.log(filterString("a1b2c3")) // 123
console.log(filterString("aa1bb2cc3dd")) // 123