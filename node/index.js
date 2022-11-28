// Buffer and stream


//console.log(process.argv);
//process.exit()
//process.env()

/* console.log(__filename);
console.log(__dir); */

//ModuleS 
//    -core module
//    - local module
//    - third party module

// MODULE SYSTEM
// - commonJs
// - Es6

const fs = require("fs")

//Es6
//import fs from "fs"

//fs.appendFileSync("custom.txt", "custom text update")
fs.writeFileSync("custom.txt", "custom hello")
    //let file_data = fs.readFileSync("custom.txt").toString();
    //console.log({ file_data })
    //console.log(fs.readFileSync("custom.txt"));
    //let file_data = fs.readFileSync("custom.txt").toString();
fs.readFile("custom.txt", (err, data) => {
    //  console.log(data.toString())
});
//
console.log(222);

// console.log({ file_data });



const path = require("path");

//console.log(path.join(__dirname, "assets"));
//console.log(path.extname(__filename));

const dbconnect = require("./dbconnection")
    //dbconnect.connectToMongo();
    //console.log({ dbconnect });
    //dbconnect.signin();
    /* 
    1 => information
    2 => 200 success
    3 => 304 redirect
    4 => 400 401 403 client side error
    5 => 500 server side error
    */

//http module

const http = require("http");
const { info } = require("console");

const server = http.createServer((req, res) => {
    //req.method

    if (req.url == "/index.js") {
        res.write(fs.readFileSync("./index copy.js"))
        res.end();
    }
    if (req.url == "/products") {

        if (req.method == "GET") {
            try {
                // let a = b + c;

                //    res.write("products list");
                res.writeHead(200, { 'Content-Type': 'text/html' })
                    //res.write(fs.readFileSync("./products.json"));
                res.write(fs.readFileSync("./index.html"));
                res.end();
            } catch (err) {
                res.writeHead(500);
                res.write(JSON.stringify({ a: 1, b: 1 }));
                res.end();
            }
        } else if (req.method == "POST") {
            //console.log("1212")
            //var body = ""
            req.on('data', function(data) {
                    // body += data
                    let obj = JSON.parse(fs.readFileSync("./products.json"));
                    let products_arr = obj.products
                        //console.log(products)
                    let req_data = JSON.parse(data)

                    //   let new_arr = products_arr.map(el => {
                    //       if (el.id == req_data.id) {
                    //           return req_data
                    //       }
                    //       return el
                    //   });
                    //
                    let new_arr = products_arr.filter(el => el.id != req_data.id)
                    fs.writeFileSync("products.json", JSON.stringify({ products: new_arr }))
                        //console.log(data);
                        //fs.writeFileSync("file.txt", "data")
                        //fs.appendFileSync("file.txt", data)
                })
                //fs.writeFileSync("file.txt",data)
            req.on("end", function() {
                res.writeHead(200, { 'Content-Type': 'text/html' })
                res.end("success")
            })
        }

    } else if (req.url == "/user.") {
        res.write("user list")
        res.end();
    }
})



server.listen(8000, (err, data) => {
    if (err) return console.log(err)
    console.log("Server Started");
})



/* 
C create
R read 
U update
D delete
*/
/* 
GET -read
POST - create
PUT -update
PATCH - update
DELETE -delete */