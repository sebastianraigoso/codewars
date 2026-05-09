// Given 2 strings, a and b, return a string of the form short+long+short, 
// with the shorter string on the outside and the longer string on the inside. 
// The strings will not be the same length, but they may be empty ( zero length ).

// Hint for R users:

// The length of string is not always the same as the number of characters
// For example: (Input1, Input2) --> output

// ("1", "22") --> "1221"
// ("22", "1") --> "1221"

export function shortLongShort(a:string, b:string) {
  const long = a.length > b.length ? a : b
  const short = a.length < b.length ? a : b
  return `${short}${long}${short}`
}

console.log(shortLongShort('45', '1')) // '1451'
console.log(shortLongShort('13', '200')) // '1320013'
console.log(shortLongShort('Soon', 'Me')) // 'MeSoonMe'
console.log(shortLongShort('U', 'False')) // 'UFalseU'