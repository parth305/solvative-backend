const express= require('express');
const { createTransecation, deleteTransecation, getP5History, getRewardHistory } = require('../Controllers/transecation.controller');

const TransecationRouter=express.Router();


TransecationRouter.route("/:id").post(createTransecation)
TransecationRouter.route("/:id").delete(deleteTransecation)
TransecationRouter.route("/p5/:id").get(getP5History)
TransecationRouter.route("/reward/:id").get(getRewardHistory)
module.exports = TransecationRouter