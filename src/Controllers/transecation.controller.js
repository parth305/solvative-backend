const {
  createTransecationService,
  deleteTransecationService,
} = require("../Service/transecation.service");

const createTransecation = async (req, res, next) => {
  try {
    const data = await createTransecationService(
      req.body.amount,
      req.body.givenTo,
      req.params.id
    );
    return res.json(data);
  } catch (error) {
    next(error);
  }
};

const deleteTransecation = async (req, res, next) => {
  try {
    const data = await deleteTransecationService(req.params.id);
    return data;
  } catch (error) {
    next(error);
  }
};

const getP5History = async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
};

const getRewardHistory = async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createTransecation,
  deleteTransecation,
  getP5History,
  getRewardHistory,
};
