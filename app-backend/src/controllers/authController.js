const userModel = require('../models/userModel');
const jwt = require('jsonwebtoken');
const AppError = require('./../utils/appErrors')

console.log("inside the authcontroller>>>>>>>>>>>>>")

exports.signup =  async (req, res) => {
    console.log("inside the routes")
    const data = new userModel({
        name: req.body.name,
        email: req.body.email,
        photo:req.body.photo,
        password:req.body.password,
        confirmpassword:req.body.confirmpassword
    })
    try {
        const newUser = await data.save();
        const payload = { id: newUser._id };
        const secretKey = 'myultra-secure-myultralong-jwtsecret';
        const options = {expiresIn:'10d'};
        const token = jwt.sign(payload,secretKey,options)
        res.status(200).json(({
            status:'success',
            token,
            data:{
                user : newUser
            }
        }))
        console.log('newUser>>>>>',newUser)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
}

exports.login = async (req,res,next)=>{
    // const {email , password} = req.body;
    const email = req.body.email;
    console.log("email >>>>>>>>>",email)
    if(!email ){
       return res.send('erreo email pass');
    }


   const user = await userModel.findOne({email}).select('+password');
   console.log(user)
   const token = ''
   res.status(200).json({
    status:'success',
    token
})
}



