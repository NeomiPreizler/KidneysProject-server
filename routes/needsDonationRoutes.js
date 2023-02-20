const express = require('express');
const router = express.Router();
const verifyJWT=require('../middleware/verifyJWT')
const needDonationController = require('../controllers/needDonationController');
router.use(verifyJWT)
router.route('/')
    .get(needDonationController.getAllNeedDonation)
    .post(needDonationController.postNeedDonation)
    .put(needDonationController.updateNeedsDonater)//צריך לכתוב את הפונקציה 
    .delete(needDonationController.deleteOne)

router.get( '/:user_name', needDonationController.getByEmail)
module.exports = router







