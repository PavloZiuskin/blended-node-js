const express = require("express");
const {getTasks, getTaskById, createTask, updateTask, deleteTask }= require("../controllers/tasksControllers")
const router= express.Router();

router.get("/", getTasks);

router.get("/:id", getTaskById);
router.post("/", createTask);
router.patch("/:id", updateTask);
router.delete("/:id", deleteTask);

module.exports = {tasksRouter: router};