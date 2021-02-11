const express = require('express')

const app = express()

app.use('/user', (req, res, next) => {
    res.send('<h1>Hi this is User</h1>')
})

app.use('/', (req, res, next) => {
    res.send('<h1>Home Directory</h1>')
})

app.listen(8080)