// Very simple, given a number, find its opposite (additive inverse).

// Examples:

// 1: -1
// 14: -14
// -34: 34

// Solution 1
export class Kata {
  static opposite(n: number) {
    return n < 0 ? Math.abs(n) : n * -1
  }
}

// Solution 2
export class Kata {
  static opposite(n: number) {
    return -n
  }
}