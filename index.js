// console.log("hola,como estas");

// console.log("hello how are you");

const add = require('./calculator/add');
const sub = require('./calculator/sub');
const mul = require('./calculator/mul');
const div = require('./calculator/div');

// console.log(add(4,5));
const a = parseInt(process.argv[2]);
const operation = process.argv[3];
const b = parseInt(process.argv[4]);

console.log(a,operation,b);

if(operation === 'ADD'){
    console.log(add(a,b));
} else if(operation === 'SUB'){
    console.log(sub(a,b));
} else if(operation === 'MUL'){
    console.log(mul(a,b));

}else if(operation === 'DIV'){
    console.log(div(a,b));
}else{
    console.log("invalid operation");
}

// const fs = require('fs');

// create file 

// fs.writeFile('./app.text','hola,como estas',(err)=>{
//     if(err){
//         console.log(err);
//     }else{console.log("FiLe created")}

// });


// fs.readFile('./app.text', 'utf-8', (err,data)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log(data);
//     }
// })

// fs.rename('./app.text','./helper.txt',(err)=>{
//     if(err){
//         console.log(err);

//     }else{
//         console.log("file renamed");
//     }
// })

// fs.unlink('./helper.txt',(err)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log('file deleted');
//     }
// });


// const fs = require('fs').promises;

// async function getSum(){
//     let data = await fs.readFile('./data.json','utf-8');
//     // console.log(data);
//     data = JSON.parse(data);

//     let sum = 0;
//     for(let user of data){
//         sum = sum + user.salary;

//     }
//     console.log(sum);
// }
// getSum();

// const http = require('http');
// const fs = require('fs').promises;

// const server = http.createServer( async (req,res)=>{
//     // console.log('server is running');
//    const data = await fs.readFile('./index.html','utf-8'); 
//     res.end(data);

// });

// server.listen(3000);


// const http = require('http');
// const url = require('url');

// const server = http.createServer((req,res)=>{
//     if(req.url === '/') return;
    
//     console.log(req.url);

//     const myURL = new URL(req.url,'http://localhost:3000/');
    
//     console.log(myURL);
//     console.log(myURL.pathname);

//     res.end('<h1>Hola como estas</h1>');

// });

// server.listen(3000);

// http://localhost:3000/product?id=1&category=tshirt   