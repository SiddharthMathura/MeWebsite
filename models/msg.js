const mongoose = require("mongoose");
const validator = require("validator");

const userMsg =  mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:3
    },
    email:{
        type:String,
        required:true,
        validator(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid Email Id.");
            }
        }
    },
    phone:{
        type:Number,
        min:10,
        required:true,
    },
    message:{
        type:String,
        required:true,
    }
});

const Message = mongoose.model("Message",userMsg);

module.exports = Message;
