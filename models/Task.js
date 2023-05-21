const { string } = require("joi");
const mongoose = require("mongoose");
const Schema = new mongoose.Schema({
    title: {
        type: String,
        required: true, 
    },
    completed: {
        type: Boolean,
        default: false, 
    }
},{versionKey: false, timestamps: true,});

const Task = mongoose.model("task", Schema);
module.exports = Task;