const mongoose = require("mongoose");

let UserSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  P5: {
    balance: {
      type: Number,
      default: 100,
      min: 0,
    },
    P5History: { type: [mongoose.Schema.Types.ObjectId], ref: "P5History" },
  },
  reward: {
    balance: {
      type: Number,
      default: 0,
    },
    RewardHistory: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "rewardHistory",
    },
  },
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
