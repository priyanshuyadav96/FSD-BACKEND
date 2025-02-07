const fs= require('fs');

const data=fs.readFileSync("./data.txt","utf8");//string format

console.log(data)