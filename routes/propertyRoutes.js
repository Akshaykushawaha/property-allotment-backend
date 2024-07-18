const express = require('express');
const router = express.Router();
const { showProperty, showAllProperty } = require('../controllers/propertyController');


router.get('/all-property', showAllProperty);
router.get('/property-data/:propertyNumber', showProperty);

module.exports = router;