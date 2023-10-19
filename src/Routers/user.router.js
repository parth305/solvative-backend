const express= require('express');
const { createUser } = require('../Controllers/User.controller');

const userRouter=express.Router();

userRouter.route("/").post(createUser);

module.exports = userRouter