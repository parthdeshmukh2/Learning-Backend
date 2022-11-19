const mongoose = require('mongoose');

const connection = mongoose.connect("mongodb+srv://parthdeshmukh99:ji83O4JSpIAVJWC7@cluster0.grvtf3q.mongodb.net/todo?retryWrites=true&w=majority");

module.exports = connection;
