const express = require("express");
const connection = require('./Config/db.js')

const app = express();

const cors = require('cors'); // to avoid errors during frontend operations;
const TodoModel = require("./Model/Todo.Model.js");
app.use(cors()); 

app.use(express.json());  // middlewares app based express;  



app.get('/', async(req, res)=>{
    const result = await TodoModel.find({})
    res.send(result);
})

app.post('/post', async(req, res)=>{
  
    const body= req.body;
    const result = new TodoModel({task:body.task , isCompleted:body.isCompleted})
    await result.save();
    res.send({message: "Posted Successfully", result});
})

app.delete('/delete/:id', async(req, res)=>{
    const {id} = req.params;
    const result = await TodoModel.deleteOne({_id:id});
    res.send("Deleted Successfully")
})

app.patch('/patch/:id', async(req, res)=>{
    const {id}= req.params;
    const body = req.body;
    const result = await TodoModel.updateOne({_id:id}, body, {new:true})
    res.send({message:"Updated Success Fully", result});
})

app.listen(8080, async()=>{
    try {
        await connection;
        console.log("connected");
        
    } catch (error) {
        console.log(error)
    }

})



