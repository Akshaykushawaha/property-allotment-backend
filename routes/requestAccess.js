const express = require('express');
const router = express.Router();
const { showAllAccess, showAccess } = require('../controllers/accessController');

router.get('/all-access', showAllAccess);
router.get('/access-data/:requestid', showAccess);

module.exports = router;