const mongoose = require('mongoose');

const userLogin = mongoose.Schema({
    email:String,
    password:String
});

const Login = mongoose.model("loginDetails", userLogin);

module.exports = Login;