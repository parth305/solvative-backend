const mongoose=require("mongoose")

let transecationSchema = new mongoose.Schema({
    givenTo: { type: mongoose.Schema.Types.ObjectId, required: true,ref:"User" },
    givenBy: { type: mongoose.Schema.Types.ObjectId, required: true,ref:"User" },
    amount:{type:Number,required:true}
},{
    timestamps:true
});

 const Transecation = mongoose.model("Transecation", transecationSchema);
 module.exports=Transecation