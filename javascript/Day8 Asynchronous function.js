//------Asynchronous functions-----------//


/* => functions that runs in parallel with other function */

//call back///
/*=> Simply functions which are passed as variables to another functions
=> with the itention of getting executed after the previous function get executed */
//console.log(1);
//console.log(2);

//setTimeout(() => {
//    console.log("timeout")
//}, 1000)

//console.log("finished");

//let custome_name = (el, index) => el * index;
//let mapped_arr = arr.map(custom_name)


//---synchronous///------
//console.log(1);
//console.log(2);
//
//for (let i = 0; i < 100; i++) {
//    console.log(i);
//}
//console.log("finish");

//function ab(callback) {
//callback()
//}
//function cd() {
//}
//ab(cd)
// complex operations on try catch //

//try {
//let a = 1 + 2;
//let a= 1 + 2 + c;
//  console.log({ a });
//} catch (err) {
//  console.log(err)
//}

//console.log("hello");

//-------Promises function-----//-
/* -  pending
    - resolve
    -reject*/


//console.log(1);

//let promise1 = new Promise((resolve, reject) => {
//  resolve("promise fulfilled")
//reject("rejected")
//})

//console.log(promise1)
//promise1
//    .then((response) => {
//        console.log("inside then", response);
//        let a = b + c;

//    })
//    .catch((err) => {
//        console.log("catch -> reject", err);
//    })
//console.log("finsihed")
/*
console.log("start");
//macro task//
setTimeout(() => {
    console.log("timeout");
}, 1000);
// micro task//
let pr1 = new Promise((resolve) => {
    // console.log("resolve");
    resolve("success")
})
pr1.then((res) => {
    console.log({ res });
})

console.log("end");
//console.log(Promise.resolve("resolved"));
*/

/*  
-event loop
-callstack =>last in last out
-callbackqueue //macrotask
-jobqueue //microtask
-brower/node api 
*/