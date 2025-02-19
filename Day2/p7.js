const http = require('http');

const server = http.createServer(async(req,res) =>{
    const data = await fetch('https://dummyjson.com/products');
    const jdata = await data.json();
    const prod = jdata.products;
    res.writeHead(200,{'Content-Type' : 'application/json'});
    const title = prod.map((ele)=>{
        return ele.title;
    })
    res.end(JSON.stringify(title));
})

server.listen(9000, (err)=>{
    if(err) throw err;
    else 
        console.log('Server running at http://localhost:9000/');
})