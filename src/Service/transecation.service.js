const User = require("../Model/User.model");
const CustomError = require("../utils/CustomError");
const httpStatusCode = require("../utils/Consts");
const Transecation = require("../Model/transection.model");
const createTransecationService = async (amount, givenTo, userId) => {

if (givenTo===userId) {
  throw new CustomError(
    "can not given P5 to self",
    httpStatusCode["Bad Request"]
  );
}

  if (amount > 100) {
    throw new CustomError(
      "amount can not be more than 100",
      httpStatusCode["Bad Request"]
    );
  }


  const user=await User.findById(userId);
  if(user.P5.balance-amount<0){
    throw new CustomError(
        "amount can not exceed Balance",
        httpStatusCode["Bad Request"]
      );
  }

  const transecation=await Transecation.create({givenBy:userId,givenTo:givenTo,amount})

  const giverUser = await User.findByIdAndUpdate(
    userId,
    { $push: { "P5.P5History": transecation._id }, $inc: { "P5.balance": -amount } },
    { new: true }
  );

  const givenuser = await User.findByIdAndUpdate(
    givenTo,
    {
      $push: { "reward.RewardHistory": transecation._id },
      $inc: { "reward.balance": amount },
    },
    { new: true }
  );

  return { transecation };
};


const deleteTransecationService=async(id)=>{
    const transecaton=await Transecation.findById(id);

    const giver=await User.findByIdAndUpdate(transecaton.givenBy,{
      $pull:{
        "P5.P5History":transecaton._id
      },
      $inc:{
        "P5.balance":transecaton.amount
      }
    })
    const taker=await User.findByIdAndUpdate(transecaton.givenTo,{
      $pull:{
        "reward.Reward5History":transecaton._id
      },
      $inc:{
        "reward.balance":-transecaton.amount
      }
    })

    await Transecation.findByIdAndDelete(id);

    return "success"
}

const getp5HistoryService=async(id)=>{
  const transecation=await Transecation.find({givenBy:id}).populate("givenBy")
  return transecation
}

const getRewardHistoryService=async(id)=>{
  const transecation=await Transecation.find({givenTo:id}).populate("givenTo")
  return transecation
}
module.exports = {
  createTransecationService,
  deleteTransecationService
  ,getp5HistoryService,
  getRewardHistoryService
};
