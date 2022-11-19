
const mongoose = require('mongoose');


const TodoSchema = mongoose.Schema({
    task:{require:true, type:String},
    userId:String,
    isCompleted:Boolean
})

const TodoModel = mongoose.model("todo", TodoSchema);

module.exports = TodoModel;