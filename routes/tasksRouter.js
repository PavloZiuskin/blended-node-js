const express = require("express");
const validateBody = require('../utils/validation/validateBody')
const {getTasks, getTaskById, createTask, updateTask, deleteTask }= require("../controllers/tasksControllers")
const router= express.Router();
const {createTaskValidationSchema, updateTaskValidationSchema}= require("../utils/validation/taskValidationSchemas")

router.get("/", getTasks);

router.get("/:id", getTaskById);
router.post("/",validateBody(createTaskValidationSchema), createTask);
router.patch("/:id",validateBody(updateTaskValidationSchema), updateTask);
router.delete("/:id", deleteTask);

module.exports = {tasksRouter: router};