var mongoose = require('mongoose')

var modelschema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    age:{
        type: String,
        required: true
    }
    
})

module.exports = mongoose.model('exdemo', modelschema)

