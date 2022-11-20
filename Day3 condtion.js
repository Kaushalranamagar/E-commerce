//-----Conditions----//
//=> if a conditions satisfy do one thing else do another ths.

//if (true) {
//    // do something
//} else {
//    //don't do any thing
//}
//

//let age = 18;
//
//if (age <= 18) {
//    console.log("can watch movie");
//
//} else {
//    console.log("can't");
//}
//
//if (true && false) {
//    console.log("is true");
//} else {
//    console.log("doesnot satisfy");
//}

//console.log(typeof([]))

//if ([]) {
//    console.log("is true");
//}


//if ({}) {
//    console.log("is true");
//}

//------falsy values---
//null;
//// 0
//// ""
////undefined
////NaN
//console.log(a)
//console.log(b)

//-------Ternary operator--------//
// true_case ? do something : do something else ;
//let age = 5;
//age >= 18 ? console.log("can watch movie") : console.log("can't");

//true_case ? do something : true ? do :no ;

//if (age >= 18) {
//    console.log("can watch movie");
//} else if (age > 5) {
//    console.log("can't watch movie else");
//} else {
//    console.log("No.....")
//}

// age >= 18 ? console.log("can watch movie") : age > 5 ? console.log("can") : console.log("No");;

////let status = true;
//let status = "kaushal";
//
//switch (status) {
//    case true:
//        console.log("true");
//        break;
//    case false:
//        console.log("false")
//        break;
//    default:
//        console.log("default")
//}


//if (status) {
//    console.log("true");
//} else if (false) {
//    console.log("false");
//} else {
//    console.log("default")
//}


// => if else -> truthy value
// => switch -> exact value

let Day = "Saturday";
switch (Day) {
    case "sunday":
        console.log("It's Sunday");
        break;
    case "Monday":
        console.log("It's Monday")
        break;
    case "Tuesday":
        console.log("It's Tuesday")
        break;
    case "Wednesday":
        console.log("It's Tuesday")
        break;
    case "Thrusday":
        console.log("It's Tuesday")
        break;
    case "Friday":
        console.log("It's Tuesday")
        break;
    case "Saturday":
        console.log("It's Saturday")
}