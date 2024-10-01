//* Model
const Study = require("../models/StudyResourcesModel.js");

//* Control de errores
const sendMessageErrorServer = require("../utils/sendMessageErrorServer.js");

exports.getResources = async (req, res) => {
  try {
    const studyResources = await Study.find();

    res.json({ studyResources });
  } catch (err) {
    sendMessageErrorServer(res, err);
  }
};
