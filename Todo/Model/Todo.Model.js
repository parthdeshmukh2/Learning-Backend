const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    task:String,
    isCompleted:Boolean
})

const TodoModel = mongoose.model("Todo", userSchema);

module.exports = TodoModel;