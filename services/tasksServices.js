const fs = require("fs/promises");
const path = require("path");

// const tasksPath = path.join(__dirname, "db", "tasks.json");
const tasksPath = path.join(process.cwd(), "db", "tasks.json");

const getTaskService= async ()=>{
    const tasks = await fs.readFile(tasksPath);
    return JSON.parse(tasks);

}

const getTaskByIdService = async (id)=>{
    const tasks = await getTaskService();
    return  tasks.find(task=> task.id===id);
}


module.exports={
    getTaskService,
    getTaskByIdService,
}