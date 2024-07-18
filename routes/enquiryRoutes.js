const express = require('express');
const router = express.Router();
const { showAllEnquiry, showOneEnquiry } = require('../controllers/enquiryController');

router.get('/all-enquiry', showAllEnquiry);
router.get('/enquiry-data/:enquiry', showOneEnquiry);

module.exports = router;