// Write a function that takes a single non-empty string of only lowercase and uppercase ascii letters (word) as its argument, and returns an ordered list containing the indices of all capital (uppercase) letters in the string.

// Example (Input --> Output)
// "CodEWaRs" --> [0,3,4,6]

const capitals = function(word) {
    const upperCase = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase()

    let index = []
    for(let i = 0; i < word.length; i++) {
      if(upperCase.includes(word[i])) {
        index.push(i)
      }
    }
    return index
}