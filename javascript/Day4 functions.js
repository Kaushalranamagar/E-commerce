///---------Functions-----//
//=>function <functionName>(<parameter>,<parameter>){}
//function sum(num1, num2) {
//    console.log(num1 + num2)
//    console.log((num1 + num2) * 2)
//
//}

//sum(10, 5) //=>call,execute, invoke the function

//function calculateSum(num1, num2) {
// console.log("inside");
// console.log((num1))
//console.log((num2))
//console.log((num1 + num2) * 2)

//}
//calculateSum(10, 5)
//Do not repeat yourself => DRY

//-----Arrow Function / Fat Arrow  Function-----//

//let diff = (num1, num2) => num1 - num2


//function subtract(num1, num2) {
//    console.log("before")
//    return num1 - num2
//    console.log("after")
//}


//let subtract = (num1, num2) => {
//    return num1 - num2
//}

let subtract = (num1, num2) => num1 - num2
let diff = subtract(20, 5);
console.log(diff);