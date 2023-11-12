var express = require('express');
var router = express.Router();
var query = require('../models/query')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// router.post('/adddata',async function(req, res, next) {
//   data = await query.create(req.body)
//   res.status(201).json({
//     status:'success',
//     data
//   })
// });


// limit
// router.get('/getdata',async function(req, res, next) {
//   data = await query.find().limit(2)
//   res.status(201).json({
//     status:'success',
//     data
//   })
// });



//  sorting

// router.get('/getdata',async function(req, res, next) {
//   data = await query.find().sort({name:1})
//   data = await query.find().sort({age:1 , name:1})
//   data = await query.find().sort({age:-1 , name:1})
//   res.status(201).json({
//     status:'success',
//     data
//   })
// });


// getdata to name params
// router.get('/getdata/:name',async function(req, res, next) {
//   data = await query.find({name : req.params.name})
//   res.status(201).json({
//     status:'success',
//     data
//   })
// });



// getdata to name body
// router.post('/getdata',async function(req, res, next) {
//   data = await query.findOne({name : req.body.name})
//   res.status(201).json({
//     status:'success',
//     data
//   })
// });


// projection

// router.get('/getdata',async function(req, res, next) {
//    data = await query.find({},{_id:0})
//   res.status(201).json({
//     status:'success',
//     data
//   })
// });



module.exports = router;
