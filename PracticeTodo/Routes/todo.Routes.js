const express = require('express');
const TodoModel = require('../Models/Todo.models.js');

const todo = express.Router();
todo.use(express.json());


todo.get('/', async(req, res)=>{
    const result = await TodoModel.find({});
    res.send(result);
 })
 
 
 todo.post('/post', async(req, res)=>{
     const body = req.body;
     const result = new TodoModel({task:body.task, isCompleted:body.isCompleted});
    await result.save();
     res.send({messege:"Posted Successfully", result});
 })
 
 todo.patch('/edit/:id', async(req, res)=>{
     const {id} = req.params;
     const body = req.body;
     const result = await TodoModel.updateOne({_id:id}, body, {new:true});
     res.send("Updated Successfully")
 })
 
 todo.delete('/delete/:id', async(req, res)=>{
     const {id} = req.params;;
     const result = await TodoModel.deleteOne({_id:id});
     res.send("Deleted Successfully");
 })

module.exports = todo;

