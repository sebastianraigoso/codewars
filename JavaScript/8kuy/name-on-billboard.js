// You can print your name on a billboard ad.
// Find out how much it will cost you.
// Each character has a default price of £30, but that can be different if you are given 2 parameters instead of 1 (always 2 for Java).
// You can not use multiplier "*" operator.

// If your name would be Jeong-Ho Aristotelis, ad would cost £600. 20 letters * 30 = 600 (Space counts as a character).

// Solution 1
function billboard(name, price = 30){
  let finalPrice = 0;

  for(let i = 0; i < name.length; i++) {
    finalPrice += price;
  }

  return finalPrice;
}

// Solution 2
function billboard(name, price = 30) {
  return name.split('').reduce((sum, letter) => sum + price, 0)
}

console.log(billboard("Jeong-Ho Aristotelis")) // 600
console.log(billboard("Abishai Charalampos")) // 570
console.log(billboard("Idwal Augustin")) // 420
console.log(billboard("Hadufuns John",20)) // 260
console.log(billboard("Zoroaster Donnchadh")) // 570
console.log(billboard("Claude Miljenko")) // 450
console.log(billboard("Werner Vígi",15)) // 165
console.log(billboard("Anani Fridumar")) // 420
console.log(billboard("Paolo Oli")) // 270
console.log(billboard("Hjalmar Liupold",40)) // 600
console.log(billboard("Simon Eadwulf")) // 390