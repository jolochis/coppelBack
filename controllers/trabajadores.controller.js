const workerSchema = require("../models/Workers");
const logger = require("logger")
const getWorkers = async (req, res) => {
  try {
    const workers = await workerSchema.find();
    res.json(workers);
  } catch (error) {
    res.status(500).json("error");
  }
};

const getWorker = async (req, res) => {
  try {
    const workers = await workerSchema.findOne({ _id: req.params.id });
    res.status(200).json(workers);
  } catch (error) {
    res.status(403).json({ message: "Bad request" });
  }
};

const createWorker = async (req, res) => {
  const { name, rol, project } = req.body;

  try {
    const newWorker = new workerSchema({ name, rol, project });
    await newWorker.save();
    res.status(200).json(newWorker);
  } catch (error) {
    res.status(403).json({ message: "Bad request creating a worker" });
  }
};

const updateWorker = async (req, res) => {
  try {
    const updatedWorker = await workerSchema.updateOne(
      { _id: req.params.id },
      req.body,
      {
        new: true,
      }
    );
    res.status(200).json(updatedWorker);
  } catch (error) {
    res.status(403).json({ message: "Bad request updating a worker" });
  }
};

const deleteWorker = async (req, res) => {
  console.log("deleting: ",req.params.id)
  try {
    const deletedWorker = await workerSchema.findByIdAndDelete(req.params.id);
    if (!deletedWorker) {
      res.status(404).json({ message: "worker not found" });
    } else {
      res.status(200).json(deletedWorker);
    }
  } catch (error) {
    res.status(403).json({ message: "Bad request deleting a worker" });
  }
};

module.exports = {
  getWorker,
  getWorkers,
  createWorker,
  updateWorker,
  deleteWorker,
};
