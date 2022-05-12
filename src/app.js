const express =require("express");
const res = require("express/lib/response");
const app=express();
const port = process.env.PORT||3000;

//ROUTING
//app.get(path,callback)

app.get("/",(req,res)=>{
    res.send("Hello i am response")
})

//server Create 

app.listen(port,()=>{
    console.log(`the server is running on port no ${port}`)
})