const Model = require("../model/Task");
const asyncWrapper = require("../middleware/asyncWrapper");
const { createCustomError } = require("../errors/custom-error");

const getTasks = asyncWrapper(async (req, res) => {
  const Tasks = await Model.find({});
  res.status(200).json({ Tasks });
});

const createTask = asyncWrapper(async (req, res) => {
  await Model.create(req.body);
  res.status(201).json({ msg: "success" });
});

const getSingleTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;

  const task = await Model.findById({ _id: taskID });
  if (!task) {
    return next(createCustomError(`No task with id : ${taskID}`, 404));
  }
  return res.status(200).json({ task });
});

const updateTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;

  const { name, completed } = req.body;

  const updatedTask = await Model.findByIdAndUpdate(taskID, { name, completed }, { runValidators: true, new: true });

  if (!task) {
    return next(createCustomError(`No task with id : ${taskID}`, 404));
  }
  return res.status(200).json({ task: updatedTask });
});

const deleteTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;

  const task = await Model.findByIdAndDelete({ _id: taskID });
  if (!task) {
    return next(createCustomError(`No task with id : ${taskID}`, 404));
  }
  return res.status(200).json({ msg: "success" });
});

module.exports = {
  getTasks,
  createTask,
  getSingleTask,
  updateTask,
  deleteTask,
};
