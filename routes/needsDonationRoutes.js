const express = require('express');
const router = express.Router();
const verifyJWT = require('../middleware/verifyJWT')
const veriryAdmin=require('../middleware/verifyAdmin')
const needDonationController = require('../controllers/needDonationController');
router.use(verifyJWT)
router.route('/')
    .get([veriryAdmin],needDonationController.getAllNeedDonation)
    .post(needDonationController.postNeedsDonation)
    .put(needDonationController.updateNeedsDonater)//צריך לכתוב את הפונקציה 
    .delete(needDonationController.deleteOne)

router.route('/needDonation')
    .get(needDonationController.getByUserId)


module.exports = router







