//const fs = require('fs') // Importing builtin/third-party module
const lib = require('./lib') // Importing custom module

//lib()
/**
 * NPM Packages VS Library
 * 
 * Modules in NodesJS
 * 1. Builtin modules
 * 2. Custom modules (User defined modules)
 * 3. Third-party modules
 * 
 */

// const qs = require('querystring');

// const obj = {
//     name: 'Ahmed',
//     age:12,
//     city: 'SUK'
// }

// console.log(`Stringified: ${qs.stringify(obj)}`)
// console.log(`Parsed: ${JSON.stringify(qs.parse('name=Ahmed&age=12&city=SUK'))}`)
// console.log(qs.escape('Ahmed Ali'))

// const path = require('path')

// console.log(path.join('api','booking','getBooking'))

// console.log(path.normalize('api////booking///getBooking////ssdsd'))

// console.log(path.extname('lib.js'))
// console.log(path.dirname(__dirname+'lib.js'))

// console.log(process.argv);

// switch(+process.argv[2]){
//     case 1: 
//     console.log("One");
//     break;
//     case 2: 
//     console.log("Two")
// }
const http = require("http");
const fs = require("fs");
const path = require("path");


const server = http.createServer((req, res) => {
    const home = fs.readFileSync(path.join(__dirname, "pages","home.html"));
    const about = fs.readFileSync(path.resolve(path.join(__dirname, "pages","about.html")));
    const notFound = fs.readFileSync(path.resolve(path.join(__dirname, "pages","notfound.html")));
    if(req.url == '/home'){
        
        res.end(home)
    }
    else if(req.url == '/about'){
        res.end(about);
    }
    else
        res.end(notFound)
    
    // res.end(()=>{
    //     console.log('done!')
    // })
})

server.listen(3002,function(){
    console.log('Server is listening at port 3002')
})

