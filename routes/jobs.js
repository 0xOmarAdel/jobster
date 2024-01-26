const express = require("express");
const router = express.Router();

const {
  getAllJobs,
  getJob,
  createJob,
  updateJob,
  deleteJob,
} = require("../controllers/jobs");

router.get("/", getAllJobs);
router.post("/", createJob);
router.post("/:id", getJob);
router.post("/:id", updateJob);
router.post("/:id", deleteJob);

module.exports = router;
