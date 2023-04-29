const {verifyToken} = require("../utils/auth.utils")
const {userModel} = require("../model/user.model");

async function checkAuth(req, res, next) {
    try {
        const authorization = req?.headers?.authorization
        const [bearer, token] = authorization?.split(' ')
        if (bearer && bearer.toLowerCase() === 'bearer') {
            if (token) {
                const verifyResult = verifyToken(token)
                const user = await userModel.findOne({email: verifyResult.email})
                req.isAuthenticated = !!user
                if (!user) throw {status: 401, message: "not found user account login again"}
                req.user = {
                    fullname: user.fullname,
                    email: user.email
                }
                return next()
            }
            throw {status: 401, message: "authorization failed please login again"}
        }
    } catch (err) {
        next(err)
    }
}

module.exports = {
    checkAuth
}