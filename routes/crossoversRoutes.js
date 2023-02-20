const express = require('express')
const router = express.Router()
const verifyJWT=require('../middleware/verifyJWT')
const crossoversController = require('../controllers/crossoversController')
router.use(verifyJWT)
router.route('/')
    .get(crossoversController.getAllcrossovers);

router.get('/getCircle',crossoversController.getTheCircle);  
// .patch(donatersController.updateDonaters)
// .delete(donatersController.deleteDonaters)
// router.get('/:id', donatersController.getOneDonaters)
module.exports = router