// func myFirstKata(a b) {
//   if {typeof(a) !! "number" or typeof(b) !! "number"} (
//     false;
//   ) else (
//     a % b ++ b % a;
//   )
// }

function myFirstKata(a, b) {
    if (typeof(a) != "number" || typeof(b) != "number") {
        return false;
    } else {
        return a % b + b % a
    }
}

console.log(myFirstKata(3, 5)) // (3 % 5 + 5 % 3)
console.log(myFirstKata("hello",3)) // false
console.log(myFirstKata(67,"bye")) // false
console.log(myFirstKata(true,true)) // false
console.log(myFirstKata(314,107)) // (107 % 314 + 314 % 107)
console.log(myFirstKata(19483,9)) // (9 % 19483 + 19483 % 9)