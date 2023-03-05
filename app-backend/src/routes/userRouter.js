const express = require('express');
// const Model = require('../models/userModel');
const userRouter = express.Router();
const newUser = require('../controllers/userController')
// const authController = require('../controllers/authController')

console.log("inside the user router")
//Post Method
userRouter.get('/alluser',newUser.getAllUsers)
// userRouter.post('/createUser',newUser.createNewUser)
// authRouter.post('/signup',authController.signup)
// authRouter.post('/login',authController.login)

module.exports = userRouter;