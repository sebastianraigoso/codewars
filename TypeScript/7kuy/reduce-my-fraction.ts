// Write a function which reduces fractions to their simplest form! 
// Fractions will be presented as an array/tuple (depending on the language) of strictly positive integers, 
// and the reduced fraction must be returned as an array/tuple:

// input:   [numerator, denominator]
// output:  [reduced numerator, reduced denominator]
// example: [45, 120] --> [3, 8]
// All numerators and denominators will be positive integers.

export const reduce = (arr: number[]) => {
  let biggestN = Math.min(...arr)

  for(let i = biggestN; i > 0; i--) {
    if(arr[0] % i === 0 && arr[1] % i === 0) {
      return [arr[0] / i, arr[1] / i]
    }
  }
}

console.log(reduce([45, 120]))