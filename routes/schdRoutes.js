const express = require('express');
const router = express.Router();
const { showOneSchdMaintain, showAllSchdMaintain } = require('../controllers/schdController');
const {addScheduledMaintenance} = require("../controllers/addSchdMaintainance");


router.get('/schd-maintainance-data/:maintainance', showOneSchdMaintain);
router.get('/all-schd-maintainance/', showAllSchdMaintain);
router.post('/add-scheduled-maintenance', addScheduledMaintenance);

module.exports = router;