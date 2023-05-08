const fs = require("fs/promises");
const crypto = require("crypto");
const path = require("path");

// const tasksPath = path.join(__dirname, "db", "tasks.json");
const tasksPath = path.join(process.cwd(), "db", "tasks.json");

const getTaskService= async () => {
    const tasks = await fs.readFile(tasksPath);
    return JSON.parse(tasks);

};

const getTaskByIdService = async (id) => {
    const tasks = await getTaskService();
    return  tasks.find(task=> task.id===id);
};

const createTaskService = async (data) => {
    const tasks = await getTaskService();
    const newTask = {...data, id: crypto.randomUUID()};
    tasks.push(newTask);
    await fs.writeFile(tasksPath, JSON.stringify(tasks, null, 2));
    return newTask;
};

const updateTaskByIdService = async(id, data) => {
    const tasks = await getTaskService();
    let task = tasks.find(task=>task.id === id);
    if (!task){
        throw new Error("task not found");
    }
    task = { ...task, ...data};
    await fs.writeFile(tasksPath, JSON.stringify(tasks, null, 2));
    return task;
};

const deleteTaskService = async (id) => {
    const tasks = await getTaskService();
    const index = tasks.findIndex(task=> task.id === id);
    if(index === -1){
        throw new Error("task not found");
    }
    tasks.splice(index, 1);

    await fs.writeFile(tasksPath, JSON.stringify(tasks, null, 2));
    return id;
}


module.exports={
    getTaskService,
    getTaskByIdService,
    createTaskService,
    updateTaskByIdService,
    deleteTaskService,
}