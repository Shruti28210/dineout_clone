const mongoose =require("mongoose");
 
const dineoutSchema=new mongoose.Schema({
    images:[{type:String,required:true}],
    title:{type:String,required:true},
    price:{type:String,required:true},
    cityName:{type:String,required:true},
    place:{type:String,required:true},
    address:{type:String,required:true},
    category:{type:String,required:true}
},{
    versionKey:false,
    timestamps:true,
})
module.exports=mongoose.model("dineout",dineoutSchema)