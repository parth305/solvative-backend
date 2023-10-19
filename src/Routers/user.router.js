const express= require('express');
const { createUser, UpdateUser, getUsers } = require('../Controllers/User.controller');

const userRouter=express.Router();

userRouter.route("/").post(createUser);
userRouter.route("/").patch(UpdateUser);
userRouter.route("/").get(getUsers);

module.exports = userRouter