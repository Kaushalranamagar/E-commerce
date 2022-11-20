//console.log(11);
//let promise1 = new Promise((resolve, reject) => {
//    //resolve(11)
//    reject(false)
//})

//promise1
//    .then((response) => {
//
//        console.log({ response });
//    })
//    .catch(err => {
//        console.log({ err });
//    })

//console.log("finish");


//Async-await---//

async function calculate() {
    console.log(11);
    let promise1 = new Promise((resolve, reject) => {
        //resolve(11)
        reject(false)
    })

    let data = await promise1
        .then((response) => {

            console.log({ response });
        })
        .catch(err => {
            console.log({ err });
        })

    console.log("finish");
}

calculate();