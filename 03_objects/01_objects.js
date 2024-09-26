 // literals 

const mySym = Symbol("myKey1")

 const myUser = {
    name : "Raghu",
    ["mySym"] : "mykey",
    email : "raghulingala@gmail.com",
    village : "mogilipet",
}

console.log(myUser.village); // dot(.) notation
console.log(myUser["village"]); // bracket[] notation
console.log(myUser["mySym"]); // syntax for repersent symbol type


// for modify the key
// Object.freeze(myUser) // doesn't change anything cause the object is frozen
myUser.name = "ajay"
console.log(myUser);

myUser.greeting = function() {
    console.log("hello my dear user");
}
myUser.greetingTwo = function() {
    console.log(`hello my dear user, ${this.name} `);
    
}
console.log(myUser.greeting());
console.log(myUser.greetingTwo());