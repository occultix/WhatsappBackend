var express = require('express');
var jwt = require('jsonwebtoken');
var router = express.Router();

var config = require('../config.json');

function createToken(username){
  var token = jwt.sign({"username":username}, config.secret)
  return {"token":"Bearer" + token};
}

router.post('/login', function(req, res, next){
  var username = req.body.username;
  var password = req.body.password;
  if(username==='admin' && password==='root'){
    res.json(createToken(username))
  }else{
    res.json({
      'message':'wrong username or password'
    })
  }
})

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({
    "data":"This is for json"
  })
});

module.exports = router;
