const  User  = require('../Model/User.model');

const createUserService=async (name)=>{
    const data=await User.create({name});

    return data
}

const updateUserService=async (id,name)=>{
    const user=await User.findOneAndUpdate(id,{name},{new:true});

    return user
}

module.exports={
    createUserService,
    updateUserService
}