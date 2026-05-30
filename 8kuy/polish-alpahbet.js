// There are 32 letters in the Polish alphabet: 9 vowels and 23 consonants.

// Your task is to change the letters with diacritics:

// ą -> a,
// ć -> c,
// ę -> e,
// ł -> l,
// ń -> n,
// ó -> o,
// ś -> s,
// ź -> z,
// ż -> z
// and print out the string without the use of the Polish letters.

// For example:

// "Jędrzej Błądziński"  -->  "Jedrzej Bladzinski"

const polishLetters = {
 "ą" : "a",
 "ć" : "c",
 "ę" : "e",
 "ł" : "l",
 "ń" : "n",
 "ó" : "o",
 "ś" : "s",
 "ź" : "z",
 "ż" : "z"
}

function correctPolishLetters (string) {
  let lettersChange = ''
  for(let i = 0; i < string.length; i++) {
    if(polishLetters.hasOwnProperty(string[i])) {
      lettersChange += string[i]
    } else {
      lettersChange += string[i]
    }
  }
  return lettersChange
}

console.log(correctPolishLetters("Jędrzej Błądziński")) // "Jedrzej Bladzinski")
console.log(correctPolishLetters("Lech Wałęsa")) // "Lech Walesa"
console.log(correctPolishLetters("Maria Skłodowska-Curie")) // "Maria Sklodowska-Curie"