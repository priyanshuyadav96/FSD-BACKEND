const fs = require('fs')

const data="superior data";

fs.writeFile('./data.txt',data,(err)=>{
    if(err){
        console.error('error reading the file',err);
    }
    else{
        console.log('file written succesfully');
    }
})