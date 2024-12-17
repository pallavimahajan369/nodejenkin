const express=require('express')

const app=express();

app.get('/',(req,res)=>{
    res.send("added")
})

app.listen(3000,'0.0.0.0',()=>{
    console.log("welcome to linux")
})