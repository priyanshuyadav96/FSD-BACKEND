const http = require('http');

const server = http.createServer((req,res) =>{
    res.writeHead(200,{'Content-Type' : 'text/html'});
    if(req.url==='/home'){
        res.end("Welcome to Home Page");
    }
    else if(req.url==='/about'){
        res.end("Welcome to About Page");
    }
    else if(req.url==='/contact'){
        res.end("Welcome to Contact Page");
    }
    else{
        res.end("Page Not Found");
    }

})

server.listen(9000, (err)=>{
    if(err) throw err;
    else 
        console.log('Server running at http://localhost:9000/');
})