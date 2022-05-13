const mongoose = require("mongoose");

//creating database

mongoose.connect("mongodb://localhost:27017/mydatabase2",{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("successfull");
}).catch((err)=>{
    console.log(err);
})