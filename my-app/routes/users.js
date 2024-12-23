var express = require('express');
var router = express.Router();
var dbs = require('../database/connect')


/* GET users listing. */
router.get('/',async function(req, res, next) {
  let cc =await dbs.run()
  let a = await cc.db('one').collection('names').find({}).toArray()
  console.log(a);
  res.send('respond with a resource');
});

module.exports = router;
