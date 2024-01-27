const { StatusCodes } = require("http-status-codes");
const {
  NotFoundError,
  BadRequestError,
  UnauthenticatedError,
} = require("../errors");
const Job = require("../models/Job");

const getAllJobs = async (req, res) => {
  const user = req.user;

  const jobs = await Job.find({ createdBy: user.userId }).sort("createdAt");

  res.status(StatusCodes.OK).json({ jobs, count: jobs.length });
};

const getJob = async (req, res) => {
  const user = req.user;
  const jobId = req.params.id;

  const job = await Job.findOne({ _id: jobId, createdBy: user.userId });

  if (!job) throw new NotFoundError(`No job with jd ${jobId}`);

  res.status(StatusCodes.OK).json({ job });
};

const createJob = async (req, res) => {
  const user = req.user;
  const { company, position } = req.body;

  const job = await Job.create({ company, position, createdBy: user.userId });

  res.status(StatusCodes.CREATED).json({ job });
};

const updateJob = async (req, res) => {
  const user = req.user;
  const jobId = req.params.id;
  const { company, position } = req.body;

  if (!company || !position) {
    throw new BadRequestError("Please provide company and position");
  }

  const job = await Job.findOneAndUpdate(
    { _id: jobId, createdBy: user.userId },
    { company, position },
    { new: true, runValidators: true }
  );

  if (!job) throw new NotFoundError(`No job with jd ${jobId}`);

  res.status(StatusCodes.OK).json({ job });
};

const deleteJob = async (req, res) => {
  const user = req.user;
  const jobId = req.params.id;

  const job = await Job.findOneAndRemove({
    _id: jobId,
    createdBy: user.userId,
  });

  if (!job) throw new NotFoundError(`No job with jd ${jobId}`);

  res.status(StatusCodes.OK).send();
};

module.exports = {
  getAllJobs,
  getJob,
  createJob,
  updateJob,
  deleteJob,
};
