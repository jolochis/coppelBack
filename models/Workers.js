const mongoose = require("mongoose");

const workerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  rol: {
    type: String,
    required: true,
    trim: true,
  },
  project: {
    type: String,
    trim: true,
  },
});

module.exports = mongoose.model("worker", workerSchema);
