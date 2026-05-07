// Complete the solution so that it returns true if the first argument(string) passed in ends with
// the 2nd argument (also a string).

// Examples:

// Inputs: "abc", "bc"
// Output: true

// Inputs: "abc", "d"
// Output: false

export function solution(str: string, ending: string): boolean {
  return str.endsWith(ending)
}

console.log(solution('abcde', 'cde')) // true
console.log(solution('abcde', 'abc')) // false
console.log(solution('abc', '')) // true