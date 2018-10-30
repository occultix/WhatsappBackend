var express = require('express');
var router  = express.Router();
var jwt     = require('jsonwebtoken');

var models = require('../models/index')
var key  = require('../config/key.json')

router.get('/',(req, res) => {
  res.send('api listen')
})
router.get('/user',(req, res)=>{
  models.user.findAll().then(user =>{
    res.json(user)
  })
})

router.post('/user',(req, res)=>{
  models.user.create(req.body)
  .then(user =>{
    res.json(user)
  })
})

router.post('/login',(req, res)=>{
  var phone_number = req.body.phone_number
  models.user.findOne({where :{phone_number}})
  .then(user =>{
    var token = jwt.sign({'phone_number': phone_number}, key.secret,{expiresIn: 60 * 60})
    if (user == null) {
      res.json('invalid data')
    } else{
      res.json((token))
    }
  })
})

module.exports = router