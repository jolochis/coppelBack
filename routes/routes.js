const express = require("express");
const {
  getWorker,
  createWorker,
  updateWorker,
  getWorkers,
  deleteWorker,
} = require("../controllers/trabajadores.controller");
const router = express.Router();

router.get("/worker", getWorkers);
router.get("/worker/:id", getWorker);
router.post("/worker", createWorker);
router.put("/worker/:id", updateWorker);
router.delete("/worker/:id", deleteWorker);

module.exports = router;
