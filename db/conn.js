const mongoose = require("mongoose");

//creating database
mongoose.connect(process.env.CONN,{
    useCreateIndex:true,
    useUnifiedTopology:true,
    useNewUrlParser:true
}).then(()=>{
    console.log("Connected to database. ");
}).catch(()=>{
    console.log("Failed to connect to the database");
});