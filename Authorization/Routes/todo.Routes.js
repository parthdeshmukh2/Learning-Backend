const express = require('express');
const TodoModel = require('../Models/todo.model.js');


const TodoController = express.Router();


TodoController.get('/', async(req, res)=>{
    const {userId} = req.body;
    const result = await TodoModel.find({userId});
    res.send(result);
})

TodoController.post('/post', async(req, res)=>{
    const body = req.body;
    const result = new TodoModel({task:body.task, isCompleted:body.isCompleted, userId:body.userId});
    await result.save();
    res.send({messege:"Posted Successfully", result});
})

TodoController.patch('/edit/:id', async(req, res)=>{
    const {id} = req.params;
    const body = req.body;
    const {userId} = req.body;
    const todos = await TodoModel.findOne({_id:id})
    if(todos.userId===userId){
        const result = await TodoModel.updateOne({_id:id}, body, {new:true});
        res.send("Updated Successfully");
    }
    else{
     res.send("Todo not Found");
    }
  
})

TodoController.delete('/delete/:id', async(req, res)=>{
    const {id}= req.params;
    const {userId} = req.body;
   const todos = await TodoModel.findOne({_id:id})
   if(todos.userId===userId){
    const reslut = await TodoModel.deleteOne({_id:id, });
    res.send("Deleted Successfully")
   }
   else{
    res.send("Todo not Found");
   }
 
})

module.exports = TodoController;