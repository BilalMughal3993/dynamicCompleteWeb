const express =require("express");
const app=express();

// require("./db/conn");

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