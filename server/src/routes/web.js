 const express = require('express')
 const { getHomePage } = require('../controllers/homeController');
 const router = express.Router();

 router.get('/v1',getHomePage)


 router.get('/v2', (req,res)=>{
  res.send("test v2 la la la")
 })


 module.exports = router