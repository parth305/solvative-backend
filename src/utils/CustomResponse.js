function customResponse({
    res,
    message,
    data,
    error = null,
    statusCode = 200,
    success = true,
  }) {
    return res
      ?.status(statusCode)
      .json({ statusCode, success, message, data, error });
  }
  

  module.exports=customResponse