// Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). 
// Leave any incidence of c untouched.

// Example:

// 'acb' --> 'bca'
// 'aabacbaa' --> 'bbabcabb'

// Solution 1
function switcheroo(x) {
    let switcher = ''
    for(let i = 0 ; i < x.length; i++) {
        if(x[i] === 'a') {
            switcher += 'b'
        } else if(x[i] === 'b') {
            switcher += 'a'
        } else {
            switcher += 'c'
        }
    }
    return switcher
}

// Solution 2
function switcheroo(x){
    return [...x].map(e => e === 'a' ? e = 'b' : e === 'b' ? e = 'a' : e).join('')
}

console.log(switcheroo('abc')) // 'bac'
console.log(switcheroo('aaabcccbaaa')) // 'bbbacccabbb'
console.log(switcheroo('ccccc')) // 'ccccc'