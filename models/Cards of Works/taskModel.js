const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true, //* Elimina espacios al inicio y al final
    },
    descripcion: {
      type: String,
      required: true,
      trim: true,
    },
    materia: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    teacher: {
      type: String,
      required: true,
    },
    importanceLevel: {
      type: String,
      required: true,
    },
    isFixed: {
      type: Boolean,
      default: false,
    },

    //! Pendiente
    /* by: {
      type: String,
      required: true,
    }, */
  },
  {
    timestamps: true, //* Añade createdAt y updatedAt automáticamente
  }
);

module.exports = mongoose.model("Task", taskSchema);
