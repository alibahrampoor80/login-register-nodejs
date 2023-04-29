const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

function hashPassword(password) {
    const salt = bcrypt.genSaltSync(10)
    return bcrypt.hashSync(password, salt)
}

function comparePassword(password, hashed) {
    return bcrypt.compareSync(password, hashed)
}

function signToken(payload) {
    const secret = process.env.SECRET
    return jwt.sign(payload, secret)

}

function verifyToken(token) {
    return jwt.verify(token, process.env.SECRET)
}

module.exports = {
    hashPassword,
    comparePassword,
    signToken,
    verifyToken
}