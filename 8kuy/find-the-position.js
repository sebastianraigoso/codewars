// When provided with a letter, return its position in the alphabet.

// Input :: "a"
// Output :: "Position of alphabet: 1"

// Note: Only lowercased English letters are tested

function position(letter) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'
    const position = alphabet.indexOf(letter)+1
    return alphabet.includes(letter) ? `Position of alphabet: ${position}` : alphabet
}

console.log(position("a")) // "Position of alphabet: 1"
console.log(position("z")) // "Position of alphabet: 26"
console.log(position("e")) // "Position of alphabet: 5"