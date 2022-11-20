let name = "john";
let age = 23;
//template literal
//console.log(typeof(name) + name)
//console.log(typeof(age), age)

//Array
let arr = [1, 2, "random"]
    //console.log(arr.length)

//index in array
//console.log(arr[0])
//console.log(arr[1])
//arr[2] = "changed"
//console.log(arr[2])
//
//
//console.log(typeof(arr))

//key and value
//property|| key ||attribute
let obj = {
        id: 1,
        1: "one",
        2: "two",
        a: 1,
        b: 2,
        c: 3,
        d: arr,
        e: { key: "value" },
        id: 134,
    }
    //Object.keys
    //Object.values
    //Object.entries
    //console.log(obj["id"])
    ///console.log(obj["1"])
    //let user = {
    //    name: "john",
    //    age: 23,
    //    email: "magarkaushal23@gmail.com"
    //}

//console.log(obj.e)
//console.log(typeOf(obj))
//console.log(obj.id)
//console.log(user)
//let arr2 =[obj]

//--------OPERATORS AND OPERANDS------//
// -Arithematic operator-//
// -"+"for Addition
// -"**"for power ^
// -"/"for division
// -"%"for reminder || modulus
// - Increment
// -pre-increment-//
// ++number_value
//=> immediately updates oour number and also will return the updated value
//-post-increment
// number_value++
// => updates our number, but will return the old value
//console.log("string1" + " " + "string2");
//console.log(1 + 1);
//console.log(2 ** 3);
//console.log(10 / 3);
//console.log(10 % 3);

//let num = 1;
//console.log(++num, num) //pre increment
//console.log(num++, num) // post increment


// -Assignment operator-//
//-------------------//
let num = 1;
//num = num + 2; // re-initalize
//---------or------//
//num = 1 + 2; // re-initalize
//-----------or-------//
//num += 2

//num -= 2
//num *= 2
//num /= 2
//num = num **2
//num **= 2
//console.log(num)

//let str = "Kaushal"
//str = str + " Rana";
//str += " Magar";

//console.log(str);
/*TODO Task

//let a = "100"
//a += 10;
//a -= 10;
//console.log(a)
//string concat//
console.log(100 + 10)

// Escape Characters in string...//
console.log('her"s')

//Type Casting => conversion from one data-type to another
console.log('100'+10)
console.log('100-10')

let a = parseInt("100")
console.log(typeof(a))

console.log(a + 10)
console.log(a - 10)
*/

// -Logical operator-//
//=> return result in Boolen
// =>comparing two values left-hand and right-hand
//And=> && -> returns true if both condition true, else returns false
//OR=> ||  -> returns true if any of the condition is true
//NOT=> !
/*  
console.log(true && true)
console.log(true && false)
console.log(1 && 0)
console.log("Kaushal Rana" && "Magar")
console.log(false && "magar")

console.log(1 || 0)
console.log("Kaushal Rana" || "Magar")
console.log(false || "magar")

*/

// -Comparison operator-//
//=> return result in Boolen
// => comparing two values left-hand and right-hand

//console.log(1 == 1)
//console.log(1 == "1")
//console.log("str" == "str")

//----! is denoted by NOT
//=> return the opposite boolean value

//console.log(1 != 1)
//greater than >
//less than <
//console.log(2 > 1)
//console.log(2 < 1)

//console.log(1 >= 1)
//console.log(5 <= 1)

//console.log(1 === "1") //=> false