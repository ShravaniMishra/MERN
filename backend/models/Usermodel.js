const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    firstName:String,
    lastName:String,
    email:{
        type:String,
        unique:true,
    },
    password:Number,
    confirmPassword:Number,
    image:String
})

const UserModel = mongoose.model('User',userSchema)

module.exports={
    UserModel
}