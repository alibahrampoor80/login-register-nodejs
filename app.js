const express = require('express')
const {errorHandler, notFoundError} = require("./utils/error-handler");
const {allRoutes} = require("./router/index.routes");
const dotenv = require('dotenv')
require('./config/mongo.config')
const app = express()

dotenv.config()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(allRoutes)
app.use(errorHandler)
app.use(notFoundError)

app.listen(3500, () => {
    console.log('server is run')
})