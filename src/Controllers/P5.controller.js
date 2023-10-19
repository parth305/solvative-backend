const { createP5Service, deleteP5Service } = require("../Service/P5.service");

const createP5 = async (req, res,next) => {
  try {
    const data = await createP5Service(req.body.amount,req.body.givenTo,req.params.id);
    return res.json(data);
  } catch (error) {
    next(error)
  }

};

const deleteP5=async(req,res,next)=>{
  try {
    const data=await deleteP5Service(req.params.id);
    return  data
return data
  } catch (error) {
    next(error)
  }
}

module.exports = {
  createP5,
  deleteP5
};
