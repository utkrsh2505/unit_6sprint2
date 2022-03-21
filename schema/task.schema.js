const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    title : String,
    status : String,
    subtask : {type : String}
})

const Task = mongoose.model("task1", taskSchema);

module.exports = Task;