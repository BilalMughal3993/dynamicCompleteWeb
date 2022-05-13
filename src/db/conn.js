const mongoose = require("mongoose");

//creating database

mongoose.connect("mongodb://localhost:27017/mydatabase",{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("successfull")
}).catch(()=>{
    console.log(error)
})