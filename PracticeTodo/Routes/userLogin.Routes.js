const express = require('express')
const Login = require('../Models/Login.model.js');


const loginController = express.Router();

loginController.use(express.json());

loginController.post('/signup', async(req, res)=>{
    const body = req.body;
    const result = new Login({email:body.email, password:body.password});
    await result.save();
    res.send({messege:"Registered Successfully", result});
})

loginController.post('/login', async(req, res)=>{
    const body = req.body;
    const result = await Login.findOne({email:body.email})
    
    res.send({messege:"Login Successfully", result});
})