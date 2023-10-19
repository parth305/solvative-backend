const { createUserService, updateUserService } = require("../Service/user.service");

const createUser = async (req, res,next) => {
  try {
    const data = await createUserService(req.body.name);
  
    return res.json(data);
    
  } catch (error) {
    next(error)
  }
};

const UpdateUser=async(req,res,next)=>{
try {
  const data=await updateUserService(req.params.id,req.body.name);
  return data
} catch (error) {
  next(error)
}
}

module.exports = {
  createUser,
  UpdateUser
};
