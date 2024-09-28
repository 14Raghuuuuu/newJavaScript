// functions 

// function username () {  
//     let result = ("Raghu")
//     return result
// }
// const result = username()
// console.log(result);

// function addTwoNum(num1,num2) {    //===>  (num1,num2) this values are called parameters
//     console.log(num1+num2)
// }
// addTwoNum(2,2)   //====> (2,2) this values are called arguments

function loginMessage(username) {
    if (username === undefined) {    //====> also it is write as if (!username) {}
        // console.log("please Enter username");
        return
    }
    return `${username} just logged in`
}
// console.log(loginMessage("Raghu"));

function findingNum(val1,val2,...num1) {
    return num1
}
 //console.log(findingNum(2,3,4))

 //Function with object

 const user = {
    names : "Raghu",
    age : 21
 }
 function myUser(anyObject) {
    console.log(`name is ${anyObject.name},and age is ${anyObject.age} `)
 }
// console.log(myUser(user))
myUser({
    name : "Raghuuuu",
    age: 21
})

// function with array 

const MyArray = [100,200,300]
function twoNumbers(getArray) {
   return getArray[0]
}
result = twoNumbers(200,300,400)
console.log(twoNumbers([200,300,400]));



