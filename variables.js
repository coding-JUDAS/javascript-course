// Naming varibles
/**
 * Varibale names..
 * - cannot contain spaces.
 * - must begin with a letter,
 *      an underscore (_) or a dollar sign ($).
 * - names can only contain letters,
 *      numbers, undescores, or dollar signs.
 * - names are case-sensitive.
 * - cannot use reserved keywords
 */

// String
var firstName = "Ntabozuko";
// Integer
var age = 21;
// boolean
var isFemale = true;
// float
var balance = 100.32;
// Date - new Date(year, month(0-11), day)
var dob = new Date(2000, 0, 15);
var person = {}
// undefined - means that var is empty
var empty = undefined;

console.log(typeof firstName);
console.log(typeof age);
console.log(typeof isFemale);
console.log(typeof balance);
console.log(typeof dob);
console.log(typeof person);
console.log(typeof empty);
console.log();

// var vs let vs const keywords
// var
console.log("using 'var' to declare variables")
for(var i = 0; i <= 5; i++){
    console.log(i);
}
console.log("value of i outside the loop " + i);
console.log();

// let
console.log("using 'let' to declare variables")
for(let j = 0; j <= 5; j++){
    console.log(j);
}
//console.log("value of j outside the loop " + j);

// const
//let brand = "CodingJudas";
//brand  = {};
//brand = 10;
//brand = function(){
    //return "Hello";
//}
const brand = "CodingJudas" // unable to reassign
const brandObject = {};
console.log(brandObject);
brandObject["name"] = brand;
console.log(brandObject);
delete brandObject.name;
console.log(brand);
console.log(brandObject);

/*
Always start by using the const keyword for naming variables and functions.
use the let keyword if you need to reassign, e.g for loops.
 */