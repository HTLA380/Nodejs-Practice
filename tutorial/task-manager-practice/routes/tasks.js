const express = require("express");
const router = express.Router();
const { getTasks, createTask, getSingleTask, updateTask, deleteTask } = require("../controller/tasks");

router.get("/", getTasks);
router.post("/", createTask);
router.get("/:id", getSingleTask);
router.patch("/:id", updateTask);
router.delete("/:id", deleteTask);

module.exports = router;
