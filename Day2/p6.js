const http =  require('http')
const fs = require('fs/promises')

const server = http.createServer(async(req,res)=>{
    const data = await fs.readFile('./data.json');
    const mydata = JSON.parse(data);
    res.statusMessage='Success';
    res.writeHead(200, {'Content-Type': 'application/json'});
    const names = mydata.map((person)=>{
        return person.name;
    });
    res.end(JSON.stringify(names));
})

server.listen(9000,(err) => {
    if(err)
        console.log(err);
    console.log('Server running at http://localhost:9000/');
})