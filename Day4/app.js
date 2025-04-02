const express= require('express');
// const fs= require('fs/promises')

const app= express();

app.use(express.json());
let users = [];
app.get('/api/users',(req, res)=>{
    res.json(users);
})

app.post('/api/users',(req, res)=>{
    const data= req.body;
    const newid= users.length>0?users[users.length-1].id+1:1;
    data.id= newid;
    users.push(data);
    // fs.writeFile("data.json",JSON.stringify(users));
    res.status(200).json({message:'data received', data:data});

})

app.listen(9000,()=>{
    console.log("Server is running on http://localhost:9000/");
})