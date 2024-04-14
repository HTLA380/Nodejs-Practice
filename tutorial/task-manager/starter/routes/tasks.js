const express = require("express");
const { getTasks, getSingleTask, updateTask, deleteTask, createTask } = require("../controllers/tasks");
const router = express.Router();

router.route("/").get(getTasks).post(createTask);
router.route("/:id").get(getSingleTask).patch(updateTask).delete(deleteTask);

module.exports = router;
