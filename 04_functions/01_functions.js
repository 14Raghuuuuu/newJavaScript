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
        console.log("please Enter username");
        return
    }
    return `${username} just logged in`
}
console.log(loginMessage("Raghu"));