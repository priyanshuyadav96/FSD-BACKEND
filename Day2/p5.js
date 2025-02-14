const http = require('http');
const fs =  require('fs/promises');

const data = fs.readFile('data.json')

const server = http.createServer((req,res)=>{
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify(data));
})

server.listen(9000,()=>{
    console.log('Server running at http://localhost:9000/')
})