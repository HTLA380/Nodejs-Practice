const getTasks =
  ("/api/v1/tasks",
  (req, res) => {
    res.send("all the tasks");
  });

const createTask =
  ("/api/v1/tasks",
  (req, res) => {
    res.send("create a task");
  });

const getSingleTask =
  ("/api/v1/tasks/:id",
  (req, res) => {
    const { id } = req.params;
    res.send(id);
  });

const updateTask =
  ("/api/v1/tasks/:id",
  (req, res) => {
    res.send("update task");
  });

const deleteTask =
  ("/api/v1/tasks/:id",
  (req, res) => {
    res.send("delete task");
  });

module.exports = {
  getTasks,
  createTask,
  getSingleTask,
  updateTask,
  deleteTask,
};
