const Exams = require("../models/Cards of Works/examModel.js");
const Tasks = require("../models/Cards of Works/taskModel.js");

const sendMessageErrorServer = require("../utils/sendMessageErrorServer.js");

exports.allCards = async (req, res) => {
  try {
    const exams = await Exams.find();
    const tasks = await Tasks.find();

    res.json({ exams, tasks });
  } catch (err) {
    sendMessageErrorServer(res, err);
  }
};
