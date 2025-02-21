const http = require('http')

const server = http.createServer(async(req,res)=>{
    res.writeHead(200, {'Content-Type': 'text/html'});
    const data = await fetch('https://fakestoreapi.com/products/')
    const jdata = await data.json();
    const myhtml = `
    <html>
    <head>
    <title>My Products</title>
    <style>
    .container{
    border: 1px solid black;
    background-color: green;
    color:white;
    }
    </style>
    </head>
    <body>
    <h1>HEAD</h1>
    ${
        jdata.map((product)=>{
            return `
                <div class="container">
                    <h2>${product.title}</h2>
                    <p>${product.description}</p>
                    <img src="${product.image}" height="200" width="150" alt="${product.title}">
                    <p>${product.price}</p>
                    <hr></hr>
                </div>
            `
        })
    }
    </body>
    </html>
    `
    res.end(myhtml);
})

server.listen(9000, (err)=>{
    if(err) throw err;
    console.log('Server running at http://localhost:9000/')
})