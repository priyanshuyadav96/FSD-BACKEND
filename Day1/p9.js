const fs = require('fs')

fs.rmdir('./MyFolder',(err)=>{
    if(err) throw err;
    console.log('folder removed')
})