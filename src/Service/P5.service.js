// const P5 = require("../Model/P5.model");
const User = require("../Model/User.model");
// const Reward = require("../Model/reward.model");
const CustomError = require("../utils/CustomError");
const httpStatusCode = require("../utils/Consts");
const Transecation = require("../Model/transection.model");
const createP5Service = async (amount, givenTo, userId) => {

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

  // const p5 = await P5.create({ amount, givenTo });
  // const reward = await Reward.create({ amount, givenBy: userId });

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


const deleteP5Service=async(id)=>{
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
module.exports = {
  createP5Service,
  deleteP5Service
};
