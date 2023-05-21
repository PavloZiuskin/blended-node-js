const {
  getTaskService,
  getTaskByIdService,
  createTaskService,
  updateTaskByIdService,
  deleteTaskService,
} = require("../services/tasksServices");
const controllerWrapper = require("../utils/controllerWrapper");

const getTasks = controllerWrapper(async (req, res) => {
  const {page = 1, limit = 10, completed} = req.query;
  const tasks = await getTaskService(page, limit, completed);
  res.status(200).json(tasks);
});


const getTaskById = controllerWrapper(async (req, res) => {
    const { id } = req.params;
    const task = await getTaskByIdService(id);
    res.status(200).json(task);
});

const createTask = controllerWrapper(async (req, res) => {
  const body = req.body;
  const newTask = await createTaskService(body);
  return res.status(201).json(newTask);
});

const updateTask = controllerWrapper(async (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const updatedTask = await updateTaskByIdService(id, body);
  res.status(200).json(updatedTask);

});

const deleteTask = controllerWrapper(async (req, res) => {
  const { id } = req.params;
  const deletedTask = await deleteTaskService(id);
  res.status(204).json(deletedTask);
});

module.exports = {
  getTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
};
