// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. 
// Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. 
// See test cases for more examples.

// The input will be a lowercase string with no spaces.

// Solution 1
function capitalize(s) {
    let evenI = ''
    let oddI = ''

    for(let i = 0; i < s.length; i++) {
        if(i % 2 === 0) {
            evenI += s[i].toUpperCase()
            oddI += s[i].toLowerCase()
        } else {
            oddI += s[i].toUpperCase()
            evenI += s[i].toLowerCase()
        }
    }
    return [evenI, oddI]
}

// Solution 2
function capitalize(s){
    return [[...s].map((x,i) => i % 2 == 0 ? x.toUpperCase() : x).join(''),
           [...s].map((x,i) => i % 2 != 0 ? x.toUpperCase() : x).join('')]
}