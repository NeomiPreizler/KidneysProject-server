const express = require('express')
const router = express.Router()
const verifyJWT=require('../middleware/verifyJWT')
const veriryAdmin=require('../middleware/verifyAdmin');
const crossoversController = require('../controllers/crossoversController')
router.use(verifyJWT)
router.route('/')
    .get(crossoversController.getAllcrossovers);

router.get('/getCircle',[veriryAdmin],crossoversController.getTheCircle);  

module.exports = router