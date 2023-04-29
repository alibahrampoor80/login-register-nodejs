const {default: mongoose} = require('mongoose')


const userSchema = new mongoose.Schema({
    fullname: {type: String, required: true},
    email: {type: String, unique: true, required: true},
    password: {type: String, required: true},
    token: {type: String,}
}, {timestamps: true})
const userModel = mongoose.model('user', userSchema)
module.exports = {userModel}