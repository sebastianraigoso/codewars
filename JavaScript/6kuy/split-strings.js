// Complete the solution so that it splits the string into strings of two characters in a list/array (depending on the language you use). If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:
// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']

function solution(str){
    let twoCharactersList = []
    for(let i = 0; i < str.length; i+=2) {
        twoCharactersList.push(str[i] + (str[i+1] || '_'))
    }
    return twoCharactersList
}

function solution(str) {
    let i = 0
    let result = new Array()
    
    if(str.length % 2 !== 0) {
        str = str + '_'
    }
    while (i < str.length) {
            result.push(str[i] + str[i+1])
            i += 2
        }
    return result
}

console.log(solution("abcdef")) // ["ab", "cd", "ef"]
console.log(solution("abcdefg")) // ["ab", "cd", "ef", "g_"]
console.log(solution("")) // []