const express = require('express');
const mongoose = require('mongoose');


const userSchema = mongoose.Schema({
    task:String,
    isCompleted:Boolean
});


const TodoModel = mongoose.model("todo", userSchema);

module.exports = TodoModel