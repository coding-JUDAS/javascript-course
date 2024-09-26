// Strings - a sequence of characters
var brand = "CodingJudas";
console.log(typeof brand);
console.log(brand.length);
console.log(brand.toLocaleUpperCase());
console.log(brand.substring(0, 6));

var a = "Coding";
var b = "Judas";
console.log(a + b); // '+' uses addidtion for numbers and concatenation for strings/characters
console.log(a + " " + b);
console.log(`${a} ${b.toUpperCase()}`);