const express= require('express');
const { createTransecation, deleteTransecation } = require('../Controllers/transecation.controller');

const TransecationRouter=express.Router();


TransecationRouter.route("/:id").post(createTransecation)
TransecationRouter.route("/:id").delete(deleteTransecation)
module.exports = TransecationRouter