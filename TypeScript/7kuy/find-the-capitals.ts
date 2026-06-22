// Write a function that takes a single non-empty string of only lowercase and uppercase ascii letters (word) as its argument, 
// and returns an ordered list containing the indices of all capital (uppercase) letters in the string.

// Example (Input --> Output)
// "CodEWaRs" --> [0,3,4,6]

export function capitals(word: string): number[] {
  let upper = []
  for(let i = 0; i < word.length; i++) {
    if(word[i] === word[i].toUpperCase()) {
      upper.push(i)
    }
  }
  return upper
}

console.log(capitals('CodEWaRs')) // [0,3,4,6] , "Input: \"CodEWaRs\""
console.log(capitals('aAbB')) // [1,3], "Input: \"aAbB\""
console.log(capitals('AAA')) // [0,1,2], "Input: \"AAA\""
console.log(capitals('')) // [], "Input: \"\""