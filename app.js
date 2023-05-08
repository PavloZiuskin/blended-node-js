const express = require("express");
const {tasksRouter} = require("./routes/tasksRouter");
const {globalErrorHandler} = require("./middlewares/globalErrorHandler")
const app = express();
app.use(express.json());
app.use("/tasks", tasksRouter);
app.use(globalErrorHandler);

module.exports = app;