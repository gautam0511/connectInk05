const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        default:""
    },
    phone:{
        type:String,
        default:""
    },profilePic:{
        type:String,
        default:""
    },addedOn:{
        type:Number,
        default:Date.now()
    }
})
module.exports  = mongoose.model('User',userSchema);