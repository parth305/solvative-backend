const { User } = require('../Model/User.model');

const createUserService=async (name)=>{
    const data=await User.create({name});

    return data
}

module.exports={
    createUserService
}