const express = require('express');
const router = express.Router();
const { showAllrelease, showrelease } = require('../controllers/releaseController');

router.get('/all-release', showAllrelease);
router.get('/release-data/:requestid', showrelease);

module.exports = router;