// Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.

// Examples
// "Hi!" --> "H!!"
// "!Hi! Hi!" --> "!H!! H!!"
// "aeiou" --> "!!!!!"
// "ABCDE" --> "!BCD!"

// Solution brute force
function replace(s) {
    return s.replaceAll('a','!')
            .replaceAll('e','!')
            .replaceAll('i','!')
            .replaceAll('o','!')
            .replaceAll('u','!')
            .replaceAll('A','!')
            .replaceAll('E','!')
            .replaceAll('I','!')
            .replaceAll('O','!')
            .replaceAll('U','!')
}

// Second Solution
function replace(s) {
    const vowels = "aeiouAEIOU"
    let replaceVowels = ''
    for(let i = 0; i < s.length; i++) {
        if(vowels.includes(s[i])) {
            replaceVowels += '!'
        } else {
            replaceVowels += s[i]
        }
    }
    return replaceVowels
}

// Short Solution
const replace = s => (s.split('').map(e => 'aeiou'.includes(e.toLowerCase()) ? '!' : e)).join('')