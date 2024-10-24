//  Higher order array loops

// for in for of and forEach 

// for of
let myArray = ["raghu", "kiran", "rohith"]
for (const element of myArray) {
    // console.log(element);
}

const greetings = "Hello World"
for (const greet of greetings) {
    // console.log(`each char is ${greet}`)
}

// maps 
const map = new Map()
map.set('IN',"India")
map.set('US',"America")
map.set('FR',"France")
map.set('Egp',"Egypt")

// console.log(map)

for (const [key, value] of map) {
    //  console.log(key, ':-', value);
}

// =====> Objects has no iterable it has but with "for in" not with "for of"

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

 for (const [key, value] of myObject) {
     console.log(key, ':-', value);
    
 }




