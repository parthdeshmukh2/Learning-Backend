const express = require("express");
const userModel = require("../Models/user.model");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');

const UserController = express.Router();


UserController.post("/signup", async (req, res) => {
  const body = req.body;
  const {password} = req.body;
  await bcrypt.hash(password, 8, async (err, hash) => {
    if (err) {
        console.log(err);
      return res.send("Something Went Wrong");
    }
    const result =  new userModel({
      email: body.email,
      password: hash,
      name: body.name,
      lastName: body.lastName,
    });
   await result.save();
   return res.send({ mmessege: "Registered Successfully", result });
  });
});

UserController.post("/login", async (req, res) => {
  const { email } = req.body;
  const { password } = req.body;
  const userLogin = await userModel.findOne( { email });
  if(userLogin){
    const hashedPassword = userLogin.password
    await bcrypt.compare(password, hashedPassword, async(err, result) =>{
        if(err){
            return res.send("Wrong Email Or Password")
        }
       if(result){
            
        const token = jwt.sign({ email: userLogin.email , userId:userLogin._id, }, 'shhhhh');
        return res.send({messege:"Shradha jhad gai", userLogin, token});

        }
        
    });
  }
});

module.exports = UserController;
