const {Router} = require('express')
const {getProfile} = require("../controllers/profile.controller");
const router = Router()

router.get('/profile',getProfile)


module.exports = {profileRoutes: router}