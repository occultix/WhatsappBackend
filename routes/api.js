var express = require('express');
var router  = express.Router();

var user = require('../models/user')

router.get('/',(req, res) => {
  res.send('api listen')
})
router.get('/user',(req, res)=>{
  user.findAll().then(user =>{
    res.json(user)
  })
})
router.post('/user',(req, res)=>{
  const phone_number = req.body.phone_number
  const name = req.body.name
  const profile_picture_url = req.body.profile_picture_url
  user.create({
    phone_number: phone_number,
    name: name,
    profile_picture_url: profile_picture_url
  })
  .then(user =>{
    res.json(user)
  })
})

module.exports = router