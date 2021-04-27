require("dotenv").config();
const express = require("express");
require("../db/conn");
const path = require("path");
const hbs = require("hbs");
const Message = require("../models/msg");
const port = process.env.PORT || 8000;
const app = express();

//setting path
const staticpath = path.join(__dirname,"../public");
const templatepath = path.join(__dirname,"../templates/views");
const partialpath = path.join(__dirname,"../templates/partials");

//middleware
app.use('/css', express.static(path.join(__dirname,"../node_modules/bootstrap/dist/css")));
app.use('/js', express.static(path.join(__dirname,"../node_modules/bootstrap/dist/js")));
app.use('/jq', express.static(path.join(__dirname,"../node_modules/jquery/dist")));

app.use(express.urlencoded({extended:false}));

app.use(express.static(staticpath));
app.set("view engine", "hbs");
app.set("views", templatepath);
hbs.registerPartials(partialpath);

//routing
app.get("/", (req,res)=> {
    res.render("index");
})

app.get("/about", (req,res)=> {
    res.render("about");
})

app.get("/services", (req,res)=> {
    res.render("services");
})

app.get("/contact", (req,res)=> {
    res.render("contact");
})

app.post("/contact", async(req,res)=>{
    try {
        const userData = new Message(req.body);
        const createUser = await userData.save();
        res.status(201).render("index");
    } catch(error){
        res.status(500).send(error);
    }
})

//server creation
app.listen(port,()=>{
    console.log(`Connection is successfull @ ${port}`);
})