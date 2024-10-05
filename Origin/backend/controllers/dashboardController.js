const Exam = require("../models/Cards of Works/examModel.js");
const Task = require("../models/Cards of Works/taskModel.js");
const Project = require("../models/Cards of Works/projectModel.js");
const sendMessageErrorServer = require("../utils/sendMessageErrorServer.js");

exports.allCards = async (req, res) => {
  try {
    const exams = await Exam.find();
    const tasks = await Task.find();
    const projects = await Project.find();

    res.json({ exams, tasks, projects });
  } catch (err) {
    sendMessageErrorServer(res,err);
  }
};
