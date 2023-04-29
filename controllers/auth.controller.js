const {userModel} = require("../model/user.model");
const {hashPassword, comparePassword, signToken} = require("../utils/auth.utils");

async function register(req, res, next) {
    try {
        const {fullname, email, password} = req.body
        const user = await userModel.create({
            fullname, email, password: hashPassword(password)
        })
        res.send(user)
    } catch (err) {
        next(err)
    }
}

async function login(req, res, next) {
    try {
        const {email, password} = req.body
        const user = await userModel.findOne({email})
        if (!user) {
            throw {statusCode: 404, message: "not found user"}
        }

        if (comparePassword(password, user.password)) {
            const token = signToken({id: user._id, email: user.email})

            res.send({token, message: "login successfully"})
        } else {
            throw {status: 400, message: "email or password is incorrect"}
        }
    } catch (err) {
        next(err)
    }
}


module.exports = {register, login}