const mongoose=require("mongoose")

let P5Schema = new mongoose.Schema({
    givenBy: { type: mongoose.Schema.Types.ObjectId, required: true,ref:"User" },
    amount:{type:Number, required: true,default:100}
  
},{
    timestamps:true
});

 const P5 = mongoose.model("P5History", P5Schema);
 module.exports=P5