 // Pass by vale and Pass by reference


 //let a = "string"
 //let b = a;
 //b = "changed"

 //let c = 12
 //let d = c;
 //d = "changed"

 //console.log(a, ",", b);
 //console.log(c, ",", d);

 // let arr = [1, 2, 3]
 //let arr2 = arr
 //-----let arr2 = point to the same position of our arr
 //arr2.push(4)

 //console.log({ arr });
 //console.log({ arr2 });

 //let obj = {
 //    a: 1,
 //    b: 2
 //}

 //let obj2 = obj
 //obj2.c = 3;

 //console.log(obj);
 //console.log(obj2);


 let obj = {
     a: 1,
     b: 2
 }


 function sum(referenced_obj) {
     referenced_obj.c = 3


     //let temp = referenced_obj
     // temp.d = 4
     // console.log({ referenced_obj })

     //Spread Operator//=> rest operators


     /// object destruction... => ....rest operators
     let temp = {...referenced_obj }
     temp.d = 4
     console.log({ temp })

 }

 //sum(obj)

 console.log(obj)


 // .some and.every => boolean
 //console.log([1, 2, 3, 10].every((element) => element < 5));
 //console.log([1, 2, 3, 10].some((element) => element < 5));
 //if(.every){

 //}

 api_response = [{
             id: 1,
             name: "john",
             address: "gorkha"
         },
         {
             id: 2,
             name: "kaushal",
             address: "gorkha"
         }
     ]
     ///------To Do task---//
 let names = api_response.map(el => el.name);
 console.log(names);


 // [12, 23, 456, "string"].find(el => el == "string")
 let res = api_response.find(el => el.id == 1)
     //api_response.find(el => el.id == 1)
 console.log({ res })


 //console.log([1, 2, 3].indexOf(3));
 console.log([1, 2, 3].findIndex((el) => el < 3));

 console.log([true, true, false].includes(false));
 //if(main_status){
 //revert the database
 //}


 //----------String Functions------
 console.log("string".length);
 console.log("string".trim);


 let str = "red orange green"
 let arr_ = str.split(",")

 //request.headers.Authorization = "Bearer <token>".split("")[1]

 console.log(arr_);
 //---Escape characters--//=>"\","\n"