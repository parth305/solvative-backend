const express= require('express');
const mongoose= require('mongoose');
const userRouter = require('./src/Routers/user.router');
const TransecationRouter = require('./src/Routers/transecation.router');
const httpStatusCode=require("./src/utils/Consts");
const customResponse = require('./src/utils/CustomResponse');
const cors=require("cors")
const app=express();

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended:true}));

app.use("/api/v1/user",userRouter)
app.use("/api/v1/transecation",TransecationRouter)


app.use((error, req, res, next) => {
  const statusCode =
    error.statusCode || httpStatusCode['Internal Server Error'];
  const message = error.message || 'Internal server error';

  return customResponse({
    success: false,
    res,
    message,
    statusCode,
    error,
    data: null,
  });
});

app.listen(5000,()=>{
    mongoose
      .connect("mongodb+srv://solvative:solvative@cluster0.txbkltg.mongodb.net/")
      .then(() => {
        console.log(`Server started on port ` + 5000);
      })
      .catch((err) => console.log(err.message));
})