const mongoose=require("mongoose");
const userschema=mongoose.Schema({
username:String,
email:String,
password:String,
mobile:String,
dob:String,
})
const userModel=mongoose.model("login", userschema, "login");
module.exports=userModel;