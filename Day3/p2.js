const http = require('http');
const users=[];
const server = http.createServer(async(req, res) => {
    res.writeHead(200, {'Content-Type': 'application/json'});
    if(req.url==='/getdata' && req.method==='GET'){
 
        res.end(JSON.stringify(users));
    }
    else if(req.url==='/setdata' && req.method==='POST'){
        let body = '';
        req.on('data', chunk => {
            body += chunk;
        });
        
        req.on('end', () => {
            const data = JSON.parse(body);
            console.log('Received data:', data);
            users.push(data);
            res.end(JSON.stringify({message: 'Data received successfully'}));
        });
    }
});

server.listen(9000, () => {
    console.log('Server is running on port 9000');
});