
var firstName = "Ntabozuko";
var age = 21;
var isFemale = true;
var balance = 100.32;
var dob = new Date(2000, 0, 15);
var person = {
    firstName: "Ntabozuko",
    age: 34,
    isFemale: false,
    balance: 100.80,
    dob: new Date(2000, 1, 28).toJSON(),
    // nested object: address
    address: {
        city: "London",
        postCode: "ZA"
    }
};

console.log(person);
console.log(Object.values(person));
console.log(Object.keys(person));
console.log(JSON.stringify(person));
