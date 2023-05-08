const express = require('express')
const router = express.Router()
const donatersController = require('../controllers/donatersController')
const verifyJWT=require('../middleware/verifyJWT');
const veriryAdmin=require('../middleware/verifyAdmin')
router.use(verifyJWT);
router.route('/')
    .get([veriryAdmin],donatersController.getAllDonaters)
    .post(donatersController.postDonater)
    .put(donatersController.updateDonater)
    .delete(donatersController.deleteDonater)

router.route('/donator')
    .get(donatersController.getByUserId)

module.exports = router;