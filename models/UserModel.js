const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  userName: {
    type: String,
    required: true,
    unique: true,
    index: true,
  },
  password: { type: String, required: true },
  genero: { type: Boolean, required: true },

  isAdmin: { type: Boolean, default: false },
  isSuperAdmin: { type: Boolean, default: false },
  birthDate: Date,
  studentId: String,
  favoriteColor: String,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  status: String,
  tags: { type: [String], default: [] },
  logros: { type: [String], default: [] },
  theme: { type: Boolean, default: true },
});

// Middleware para actualizar la fecha de modificación
userSchema.pre("save", function (next) {
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model("Users", userSchema);
