const express = require('express');
const router = express.Router();
const { showAllUser, showUser, updateUser } = require('../controllers/userController');

router.get('/all-users', showAllUser);
router.get('/user-data/:email', showUser);
router.post('/update-user', updateUser);

module.exports = router;