import jwt from "jsonwebtoken";
import User from "../models/userModels.js";
import asyncHandler from "express-async-handler";
const protect = asyncHandler(async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.SECRET_KEY);
      
      req.user = await(User.findById(decoded.id).select('-password'))


      next();
    } catch (error) {
    
      res.status(401).send(error)
    }
  }
  if (!token) {
    res.status(401).send("Not Authorized, no token");
  }
});

const isAdmin = (req,res,next)=>{
  if(req.user && req.user.isAdmin){
    next()
  }
  else{
    res.json({
      "error":401,
      "message":"Not Authorized as an admin"
    })
  }
}
export {protect,isAdmin};
