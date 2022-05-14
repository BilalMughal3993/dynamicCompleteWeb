const express =require("express");
const path = require("path");

const hbs = require("hbs");

const app=express();

require("./db/conn");

const port = process.env.PORT||3000;


//setting the path 
const staticpath = path.join(__dirname,"../public")
const templatepath = path.join(__dirname,"../templates/views")
const partialpath = path.join(__dirname,"../templates/partials")

//middleware for path
app.use('/css',express.static(path.join(__dirname,"../node_modules/bootstrap/dist/css")));
app.use('/js',express.static(path.join(__dirname,"../node_modules/bootstrap/dist/js")));
app.use('/jq',express.static(path.join(__dirname,"../node_modules/jquery/dist")));

app.use(express.static(staticpath))

app.set("view engine","hbs");
app.set("views",templatepath)

hbs.registerPartials(partialpath);

//ROUTING
//app.get(path,callback)

app.get("/",(req,res)=>{
    res.render("index")
})
app.get("/contact",(req,res)=>{
    res.render("contact")
})


//server Create 

app.listen(port,()=>{
    console.log(`the server is running on port no ${port}`)
})