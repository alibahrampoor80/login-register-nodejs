const {default: mongoose} = require('mongoose')


const URL_DB = 'mongodb://127.0.0.1:27017/authorization-system'
mongoose.set('strictQuery', true)

mongoose.connect(URL_DB,{}).then(res => {
    console.log('db connected with mongoose')
}).catch(err => {
    console.log('error connection')
})

