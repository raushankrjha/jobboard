var User = require('./users.model');
var controller=require('./user.controller')
var express = require('express');
var router = express.Router();
// var user = new User({username:"Raushan",age:25,skills:["react","java","planet9"]})

router.get('/', controller.index);
router.post('/', controller.create);
router.put('/', controller.update);
router.delete('/', controller.delete);

module.exports = router;