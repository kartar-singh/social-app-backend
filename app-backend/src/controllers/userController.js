// const user = require("../models/user");
const User = require('../models/userModel')

console.log("inside the userController >>>>>>>>>>>>>")

exports.createNewUser =  async (req, res) => {
    console.log("inside the userCOntroller r>>>>>>>>>>>>>")

    const data = new Model({
        name: req.body.name,
        age: req.body.age,
        phonenumber:req.body.phonenumber,
        country:req.body.country
    })

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
        console.log("data saves",dataToSave)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
}

// //Get all Method
exports.getAllUsers =  async (req, res,next) => {
    console.log("inside the getAllUsers >>>>>>>>>>>>>")
    try {
        const users = await User.find();
        res.status(200).json({
            status:'success',
            results:users.length,
            data:{
                users
            }
        })
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
}
