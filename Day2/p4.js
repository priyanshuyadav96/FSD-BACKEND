const http = require('http');
// const fs = require('fs/promises');
const Users = [
    {id:1, name:'John', age: 25},
    {id:2, name:'Johnny', age: 21},
    {id:3, name:'Mike', age: 20},
]
const server = http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type': 'application/json'});
    const names=Users.map((user)=>{
        return user.name;
    })
    res.end(JSON.stringify(names));
});

server.listen(9000,()=>{
    console.log("Server is running at http://localhost:9000/")
});