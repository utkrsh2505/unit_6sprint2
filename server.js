const express = require("express");
const mongoose = require("mongoose");
const PORT = 8000;
 const DB_URL = "mongodb+srv://utk2505:786utkarsh@cluster0.jysel.mongodb.net/tasks?retryWrites=true&w=majority";
 const Task = require("./schema/task.schema")
 const app = express();
 app.use(express.json());

 const connect = ()=>{
     return mongoose.connect(DB_URL);
 }
 app.get("/tasks",async (req,res)=>{
     let tasks = await Task.find();
     res.json(tasks);

 })


 app.get("/tasks/:id",async(req,res)=>{
    let tasks = await Task.findById(req.params.id)
    res.json(tasks)
 })

 app.delete("/tasks/:id",async(req,res)=>{
     let tasks = await Task.findByIdAndDelete(req.params.id)
     res.json(tasks)
 })

 app.listen(PORT, async (req,res)=>{
try{
await connect();
console.log(`Running on port : ${PORT}`)
}
catch(e){
console.log(e.message);
}
 })