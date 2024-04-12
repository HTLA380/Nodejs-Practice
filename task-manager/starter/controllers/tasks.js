const getTasks = (req, res) => {
  res.send("All tasks");
};

const getSingleTask = (req, res) => {
  res.json(req.params.id);
};

const createTask = (req, res) => {
  res.json(req.body);
};

const updateTask = (req, res) => {
  res.send("Update task");
};

const deleteTask = (req, res) => {
  res.send("Delete Task");
};

module.exports = {
  getTasks,
  getSingleTask,
  updateTask,
  deleteTask,
  createTask,
};
