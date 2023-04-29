const {Router} = require('express')
const {authRoutes} = require("./auth.routers");
const {checkAuth} = require("../middleware/check-auth");
const {profileRoutes} = require("./profile.routes");

const router = Router()

router.use('/auth', authRoutes)
router.use('/user', checkAuth, profileRoutes)

module.exports = {allRoutes: router}