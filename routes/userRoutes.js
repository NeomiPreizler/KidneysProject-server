const express = require('express');
const router = express.Router();
const verifyJWT=require('../middleware/verifyJWT')
const userController = require('../controllers/userController');
router.use(verifyJWT)
// router.route('/')
//     .put(userController.updateRole)//צריך לכתוב את הפונקציה 
   


module.exports = router