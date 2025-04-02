const express = require('express')
const fs = require('fs/promises')

const app = express()

app.use(express.json())

let users=[]

const readdata = async()=>{
    users = JSON.parse(await fs.readFile('/data.json','utf8'))

}

const writedata = async()=>{
    await fs.writeFile('./data.json',JSON.stringify(users))

}

console.log(users)
app.get('/getdata',async(req,res)=>{
    readdata();
    console.log(users)
    res.json(users)
})

app.post('/users',(req,res)=>{
    const{name,age} = req.body
    const newid = users.length>0?users[users.length-1].id+1:1
    const newuser = {id:newid,name,age}
    users.push(newuser)
    writedata()
    res.status(200).json({message:"user registration successsful",data:newuser})

})
app.put('/users/:id/', (req,res)=>{
    const {uid}=req.params;
    const {name,age}=req.body;
    const userIndex= users.findIndex((user)=>user.id==uid)
    if(!name || !age)
    {
        res.status(400).json({message : "name ands age are required"})
        return

    }
    if(userIndex==-1)
    {
        res.status(400).json({message : "user not found"})
    }
})

app.delete('/users/:id/',(req,res)=>{
    const uid = req.params.id
    const userIndex = users.findIndex(user=>user.id==uid)
    if(userIndex==-1)
    {
        res.status(404).json({message : "user not found"})

    }
    else{
        user.splice(userIndex,1)
        writedata()
        res.status(200).json({message : "user deleted successfully" , data : users[userIndex]})
    }
})
app.listen(9000,(err)=>{
    if(err)
    {
        console.log(err)
        return
    }
    console.log('Server is running on http://localhost:9000/')
})