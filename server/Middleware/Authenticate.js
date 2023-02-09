const jwt=require("jsonwebtoken");
const asyncHandler=require("express-async-handler");
const User = require("../models/User");
const auth=asyncHandler(async(req,res,next)=>{
    if(req.headers.authorization
        && req.headers.authorization.startsWith("Bearer")
        ){
            try {
                
                //Get token
                const token=req.headers.authorization.split(" ")[1];
               
                //decode and extract user id from it
                const decode=jwt.verify(token,process.env.SECRET_KEY);
                
                //find user and return it's data except password
                const findUser=await User.findById(decode.userid).select("-password");
               
                req.user=findUser;
                next();

            } catch (e) {
                throw new Error("UnAuthorized access");
            }
        }
        else{
            throw new Error("UnAuthorized access");
        }
})

module.exports=auth;
