
import generateToken  from "../utils/generateToken.js";
import User from "../models/userModels.js";
import asyncHandler from 'express-async-handler'

//@description: Auth users and get tokens
//@route: post/api/user/login
//@access: public

const authUser =  asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (user && (await user.matchPassword(password))) {
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        token: generateToken(user._id)
      });
    } else {
      res.json({
        error:400,
        message:"email or password invalid"
      });
    }
  } catch (error) {
    res.status(404).json(`message:${error.message}`);
  }
});


//@description: Register a new user
//@route: Post/api/users
//@access: public

const registerUser =  asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  const userExist = await User.findOne({email})

  if (userExist){
    res.json({
      error:400,
      message:"user already exists"
    })
  }

  const user = await User.create({
    name,
    email,
    password
  })

if(user){
  res.status(201).json({
    _id: user._id,
    name: user.name,
    email: user.email,
    isAdmin: user.isAdmin,
    token: generateToken(user._id),
  })
}
else{
  res.json({
    error:400,
    message:"Invalid user data"
  })
}

});


//@description: Get user profile
//@route: Get/api/users/profile
//@access: private

const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id)
  if(user){
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  }
  else{
    res.json({ error: 404, message: "User Not Found" });
  }
});


//@description: Get all users
//@route: Get/api/users
//@access: private/admin

const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find({})
  res.json(users)
});

//@description: Delete a user
//@route: Delete/api/users/:id
//@access: private/admin

const deleteUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id)
  if(user){
    await user.remove()
    res.json({"message":"user deleted"})
  }
  else{
    res.json({"error":404,
  "message":"user not found"})
  }
});

//@description: update user profile
//@route: put/api/users/profile
//@access: private

const updateUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id)
  if(user){
    user.name = req.body.name || user.name,
    user.email = req.body.email || user.email

    if(req.body.password){
      user.password = req.body.password
    }
    const updatedUser = await user.save()
    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      isAdmin: updatedUser.isAdmin,
      token: generateToken(updatedUser._id),
    });
  }
  else{
       res.json({ error: 404, message: "User Not Found" });
  
  }
});

//@description: Get user by id
//@route: Get/api/users/:id
//@access: private/admin

const getUserById = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id).select('-password')
  if(user){
    res.json({user})
  }
  else{
    res.json({"error":404,
  "message":"user not found"})
  }
});


//@description: update user 
//@route: put/api/users/:id
//@access: private/Admin

const updateUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id)
  if(user){
    user.name = req.body.name || user.name,
    user.email = req.body.email || user.email
    user.isAdmin=req.body.isAdmin ||user.isAdmin
   
    const updatedUser = await user.save()
    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      isAdmin: updatedUser.isAdmin,
    });
  }
  else{
    res.json({"error":404,
  "message":"User Not Found"})
  
  }
});

export { authUser , getUserProfile, getUsers ,registerUser, updateUserProfile, deleteUser,updateUser,getUserById};
