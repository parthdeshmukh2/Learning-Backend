const mongoose = require('mongoose');


const userSchema = mongoose.Schema({
    email:{required:true, type:String},
    password:String,
    name:String,
    lastName:String
});

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;