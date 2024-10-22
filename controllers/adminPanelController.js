//* Model
const Task = require("../models/Cards of Works/taskModel.js");

//* Control de errores
const sendMessage = require("../utils/sendMessage.js");

exports.getTasks = async (req, res) => {
  try {
    const BackTasks = await Task.find();

    res.status(200).json({ BackTasks });
  } catch (err) {
    sendMessage(500, "Error al obtener las tareas", res);
  }
};

exports.newTask = async (req, res) => {
  try {
    const {
      title,
      descripcion,
      materia,
      date,
      teacher,
      importanceLevel,
      isFixed,
    } = req.body;

    if (
      !title ||
      !descripcion ||
      !materia ||
      !date ||
      !teacher ||
      !importanceLevel
    ) {
      return sendMessage(400, "Todos los campos son obligatorios", res);
    }

    const newTask = new Task({
      title,
      descripcion,
      materia,
      date,
      teacher,
      importanceLevel,
      isFixed,
    });

    await newTask.save();

    return sendMessage(201, "Tarea Agregada Exitosamente", res);
  } catch (err) {
    console.error("Error al crear la tarea:", err);
    return res.status(500).json({
      message: "Error al crear la tarea",
      error: err.message,
    });
  }
};

exports.deleteTask = async (req, res) => {
  try {
    const taskId = req.params.id;

    await Task.findByIdAndDelete(taskId);

    sendMessage(200, "Tarea Borrada Exitosamente", res);
  } catch (err) {
    sendMessage(500, "Error al obtener las tareas", res);
  }
};
