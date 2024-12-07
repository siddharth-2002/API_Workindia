const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminControllers');
const apiKeyMiddleware = require('../middleware/apiKeyMiddleware');

//const authMiddleware = require('../middleware/authMiddleware');



router.post('/addTrain', apiKeyMiddleware.verifyApiKey, adminController.addTrain);
router.put('/update-seats/:trainId', apiKeyMiddleware.verifyApiKey, adminController.updateTrainSeats);

module.exports = router;
