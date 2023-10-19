const mongoose=require("mongoose")

let rewardSchema = new mongoose.Schema({
  givenBy: { type: mongoose.Schema.Types.ObjectId, required: true,ref:"User" },
  amount:{type:Number, required: true}
},{
    timestamps:true
});

 const Reward = mongoose.model("rewardHistory", rewardSchema);
 module.exports=Reward