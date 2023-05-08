const {
  getTaskService,
  getTaskByIdService,
  createTaskService,
  updateTaskByIdService,
  deleteTaskService,
} = require("../services/tasksServices");

const getTasks = async (req, res, next) => {
  try {
    const tasks = await getTaskService();
    res.status(200).json(tasks);
  } catch (error) {
    next(error);
  }
};

const getTaskById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const task = await getTaskByIdService(id);
    res.status(200).json(task);
  } catch (error) {
    next(error);
  }
};

const createTask = async (req, res, next) => {
  try {
    const body = req.body;
    const newTask = await createTaskService(body);
    return res.status(201).json(newTask);
  } catch (error) {
    next(error);
  }
};

const updateTask = async (req, res, next) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const updatedTask = await updateTaskByIdService(id, body);
    res.status(200).json(updatedTask);
  } catch (error) {
    next(error);
  }
};

const deleteTask = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedTask = await deleteTaskService(id);
    res.status(204).json(deletedTask);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
};
