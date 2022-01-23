const mongoose=require("mongoose");
const userschema=mongoose.Schema({
    pname:String,
    pdesc:String,
    pimg:String,
    pprice:String,
})
const prodModel=mongoose.model("product", userschema, "product");
module.exports=prodModel;