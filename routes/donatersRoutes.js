const express = require('express')
const router = express.Router()
const donatersController = require('../controllers/donatersController')
const verifyJWT=require('../middleware/verifyJWT');
router.use(verifyJWT);
router.route('/')
    .get(donatersController.getAllDonaters)
    .post(donatersController.postDonater)
    .put(donatersController.updateDonater)
    .delete(donatersController.deleteDonater)

router.route('/donator')
    .get(donatersController.getByUserId)

module.exports = router;