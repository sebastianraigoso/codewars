// Your task is to return the correct string using the Template String Feature.
// Input
// Two Strings, no validation is needed.
// Output
// You must output a string containing the two strings with the word ```' are '```

const templateStrings = function(noun, adjective) {
    return `${noun} are ${adjective}`
}

console.log(templateStrings('Animals', 'Good')) // 'Animals are Good'
console.log(templateStrings('You', 'special')) // 'You are special'
console.log(templateStrings('lives', 'frozen')) // 'lives are frozen'