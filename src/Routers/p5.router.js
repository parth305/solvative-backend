const express= require('express');
const { createP5, deleteP5 } = require('../Controllers/P5.controller');

const p5Router=express.Router();


p5Router.route("/:id").post(createP5)
p5Router.route("/:id").delete(deleteP5)
module.exports = p5Router