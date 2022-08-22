const mongoose = require('mongoose')
const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Please add a email']
    },
    password: {
        type: String,
        required: [true, 'Please add a password']
    },
    isAdmin:{
        type:Boolean,
        default: false
    }
})
module.exports = mongoose.model('user', userSchema)