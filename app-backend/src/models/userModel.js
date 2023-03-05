const mongoose = require('mongoose');
const validator = require('validator')
const bcrypt = require('bcryptjs');
const userSchema = new mongoose.Schema({
    name: {
        required: [true,'please tell us your name'],
        type: String
    },
    email: {
        required: [true,'please tell us your email'],
        type: String,
        unique:true,
        lowercase:true,
        validate:[validator.isEmail,'please provide email']
    },
    photo:{
        type: String
    },
    password:{
        required: true,
        type: String,
        minlength:8,
        select:false
    },
    confirmpassword:{
        required: [true,'please confirm your password'],
        type: String,
        validate:{
            validator:function(el){
                return el === this.password 
            }
        }
    }
})

userSchema.pre('save',async function(next){
    if(!this.isModified('password ')) return next();
    this.password = await bcrypt.hash(this.password,12);
    this.confirmpassword = undefined;
    next();
});

module.exports = mongoose.model('User', userSchema)