const TicktService = require("../service/email-service");

const create = async (req, res) => {
  console.log("res.body ", res.body);
  try {
    const response = await TicktService.createNotification(req.body);
    return res.status(201).json({
      data: response,
      success: true,
      message: "Successfully created a ticket",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to create a ticket ",
      err: error,
    });
  }
};

module.exports = {
  create,
};
