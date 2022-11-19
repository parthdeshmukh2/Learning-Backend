const jwt = require('jsonwebtoken');

const authentication = async(req, res, next)=>{
const userToken = req.headers.token.split(" ")[1];
if(!userToken){
    return res.send("Login First");
}
else{
    const decoded = jwt.verify(userToken, 'shhhhh', (err, decoded)=>{
if(err) return res.send("You are not authorized");
 req.body.userId = decoded.userId;
next();
    });
}
}

module.exports = authentication;