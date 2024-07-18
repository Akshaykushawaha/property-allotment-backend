// Import required modules
const express = require('express');
const router = express.Router();
const userController = require('../controllers/verifyController'); 

// Route for user verification
router.post('/verify-user', userController.verifyUser);

module.exports = router;
