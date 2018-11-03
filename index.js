var express = require('express')
var app = express()
var port = 3000
var route = require('./route')
var mongoose = require('mongoose')
var bodyparser = require('body-parser')

app.use('/contacts', route)
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: true }))

mongoose.connect('mongodb://localhost:27017/samdb')


mongoose.connection.on('connected', () => {
    console.log('connected to mongodb @27017')
})

mongoose.connection.on('Error', (err) => {
    if(err)
    {
    console.log('Error to mongodb @27017'+err)
    }
})



app.listen(port, () => {
    console.log('Listening on port number'+port)
})