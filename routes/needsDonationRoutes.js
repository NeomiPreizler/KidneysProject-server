const express = require('express');
const router = express.Router();

const needDonationController = require('../controllers/needDonationController');
router.use(verifyJWT)
router.route('/')
    .get(needDonationController.getAllNeedDonation)
    .post(needDonationController.postNeedDonation)
    // .put(needDonationController.updateNeedsDonater)
    // .delete(needDonationController.deleteOne)

router.get( '/:user_name', needDonationController.getByEmail)
// router.post('/medical',needDonationController.postMedical)
// router.post('/personal',needDonationController.postPersonal)

module.exports = router







