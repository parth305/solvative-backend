const express= require('express');
const mongoose= require('mongoose');
const userRouter = require('./src/Routers/user.router');

const app=express();

app.use(express.json());
app.use(express.urlencoded({ extended:true}));

app.use("/api/v1/users",userRouter)

app.listen(5000,()=>{
    mongoose
      .connect("mongodb+srv://solvative:solvative@cluster0.txbkltg.mongodb.net/")
      .then(() => {
        console.log(`Server started on port ` + 5000);
      })
      .catch((err) => console.log(err.message));
})