var express = require('express')
var route = express.Router()
var collect = require('./model')
var bodyparser = require('body-parser')

route.use(bodyparser.json())

route.use(bodyparser.urlencoded({ extended: true }))

route.get('/display', (req, res) =>{
    collect.find((err, contacts)=>{
        res.json(contacts)

    })
})

route.post('/add', (req, res) => {
    //.insertMany([{name: req.body.emp_name, age: req.body.emp_age}])
    var newcontact = new collect({
        
        name: req.body.emp_name,
        age: req.body.emp_age
    })
    newcontact.save((err, contacts) =>{
        if(err)
        {
            res.json({msg:'failed'})
        }
        else
        {
            res.json(contacts)
        }


    })
    
    

})

route.delete('/delete/:id', (req, res) =>{
    collect.remove({_id: req.param.id}, (err, result) =>{
        if(err)
        {
            res.json(err)
        }
        else
        {
            res.json(result)
        }

    })
})

module.exports = route