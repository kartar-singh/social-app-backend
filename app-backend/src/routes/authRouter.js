const express = require('express');
const Model = require('../models/userModel');
const authRouter = express.Router();
// const createUser = require('../controllers/userController')
const authController = require('../controllers/authController')

console.log("inside the auth router >>>>>>>")
//Post Method
authRouter.post('/signup',authController.signup)
authRouter.post('/login',authController.login)

// userRouter.post('/user',createUser.newUser)
// userRouter.post('/alluser',createUser.getAllUsers)

module.exports = authRouter;