const express = require('express');
const router = express.Router();
const { showOneMaintain, showAllMaintain } = require('../controllers/mainController');

router.get('/all-maintainance', showAllMaintain);
router.get('/maintainance-data/:maintainance', showOneMaintain);

module.exports = router;