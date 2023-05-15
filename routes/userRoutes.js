const express = require('express');
const router = express.Router();
const verifyAdmin=require('../middleware/verifyJWT')
const userController = require('../controllers/userController');

router.route('/')
    .get([verifyAdmin],userController.getUserDB)//צריך לכתוב את הפונקציה 
   


module.exports = router