// Loops

// for loop
var names = [
    "Alex",
    "Jamila",
    "Joe",
    "Aisha",
    "Nhoza",
    "Mabhebeza Special",
    "Mfazi"
];

console.log("Makhosi Bester");
console.log("for i");

for(var i = 0; i < names.length; i++){
    console.log(names[i]);
}

console.log();
console.log("for of");

for(const name of names){
    console.log(name);
}
console.log();
console.log("forEach");

names.forEach(function(name){
    console.log(name);
});
console.log();


// while loop
var k = 0;
while(k < 10){
    console.log(k);
    k++;
}
console.log();
var index = 0;
while(index < names.length){
    console.log(names[index++])
}
console.log();

// do while
var x = 0;
do{
    console.log("nhoza");
    x++;
}while(x < 5);
console.log();

// Break and Continue
for(var i = 0; i <= 10; i++){
    if(i < 5){
        continue;
    }
    console.log(i)
}
