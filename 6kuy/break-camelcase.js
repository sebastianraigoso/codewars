// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

function solution(string) {
    let breakCase = ''
    for(let i = 0; i < string.length; i++) {
        if(string[i] === string[i].toUpperCase()) {
            breakCase += ' ' + string[i]
        }else {
            breakCase += string[i]
        }
    }
    return breakCase
}

console.log(solution("")) // ""
console.log(solution("camelCasing")) // "camel Casing"
console.log(solution("camelCasingTest")) // "camel Casing Test"