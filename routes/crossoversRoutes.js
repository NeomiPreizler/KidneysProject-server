const express = require('express')
const router = express.Router()
const crossoversController = require('../controllers/crossoversController')
router.route('/')
    .get(crossoversController.getAllcrossovers);

router.get('/getCircle',crossoversController.getTheCircle);  
// .patch(donatersController.updateDonaters)
// .delete(donatersController.deleteDonaters)
// router.get('/:id', donatersController.getOneDonaters)
module.exports = router