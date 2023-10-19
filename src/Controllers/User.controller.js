const { createUserService } = require("../Service/user.service");

const createUser = async (req, res) => {
  const data = await createUserService(req.body.name);

  return res.json(data);
};

module.exports = {
  createUser,
};
