const mongoose = require('mongoose')

const Schema = mongoose.Schema

const UserSchema = new Schema({
    username: {type:String, required: true, maxLength: 20},
    password: {type:String, required: true},
    isMember: {type:Boolean, default:false},
    isAdmin: {type:Boolean, default: false}
})

module.exports = mongoose.model('User', UserSchema)
