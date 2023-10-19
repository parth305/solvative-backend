const { createUserService, updateUserService, getUsersService } = require("../Service/user.service");

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

const getUsers=async(req,res,next)=>{
  try {
    const data=await getUsersService();
    return data
  } catch (error) {
    next(error)
  }
}

module.exports = {
  createUser,
  UpdateUser,
  getUsers
};
