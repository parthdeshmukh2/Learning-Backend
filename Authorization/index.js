const express = require('express');
const cors = require('cors');
const app = express();
const connection = require('./Config/db.js');
const Authentication = require("./Middleware/Authentication.js")

app.use(cors());
app.use(express.json());

const TodoController = require('./Routes/todo.Routes.js');
const UserController = require('./Routes/user.Routes.js');

app.use('/user', UserController);
app.use('/todo',Authentication, TodoController);


app.listen(8080, async()=>{
    try {
        await connection ;
        console.log("connected")
        
    } catch (error) {
        console.log(error);
        
    }
})