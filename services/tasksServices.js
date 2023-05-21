const Task = require("../models/Task")
const HttpError = require("../utils/HttpError");

const getTaskService= async (page, limit, completed) => {
    const skip = ((page - 1) * limit);
    const filter = {};
    if(completed === "true"){
        filter.completed = true;
    } else if(completed === "false"){
        filter.completed = false
    }; 
    return await Task.find(filter).limit(limit).skip(skip);
};

const getTaskByIdService = async (id) => {
    const task = await Task.findById(id);
    if(!task){
        throw new HttpError(400 , "task created ")
    }
    return task;
};

const createTaskService = async (data) => {
    return await Task.create(data)
};

const updateTaskByIdService = async(id, data) => {
    
    let task = await Task.findByIdAndUpdate(id, data, {new: true});
    if (!task){
        throw new HttpError(400,"task not found");
    }
    return task;
};

const deleteTaskService = async (id) => {
    const removeTask = await Task.findByIdAndDelete(id);
    if (!removeTask) {
        throw new HttpError(404, "task not fond")
    }
    return id;
}


module.exports={
    getTaskService,
    getTaskByIdService,
    createTaskService,
    updateTaskByIdService,
    deleteTaskService,
}