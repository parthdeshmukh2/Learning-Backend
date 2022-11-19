const express= require('express');
const connection = require('./Config/db.js')
const Todo = require('./Routes/todo.Routes.js')

const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());



app.use('/todo', Todo);

app.listen(8080, async()=>{
    try {
        await connection;
        console.log("connected");
        
    } catch (error) {
        console.log(error)
    }
});
