const fs = require('fs')

const data = " i am appended to last";

fs.appendFile('./data.txt',data,(err)=>{
    if(err){
        console.error('error reading the file',err);
    }
    else{
        console.log('file appended succesfully');
    }
});