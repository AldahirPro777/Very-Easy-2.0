const Exams = require("../models/Cards of Works/examModel.js");
const Tasks = require("../models/Cards of Works/taskModel.js");
const Projects = require("../models/Cards of Works/projectModel.js");
const sendMessageErrorServer = require("../utils/sendMessageErrorServer.js");

exports.allCards = async (req, res) => {
  try {
    const exams = await Exams.find();
    const tasks = await Tasks.find();
    const projects = await Projects.find();

    res.json({ exams, tasks, projects });
  } catch (err) {
    sendMessageErrorServer(res, err);
  }
};
