const express = require('express');
const router = express.Router();
const rolesController = require('../controllers/roles_controller');

/* GET home page. */
router.get('/', rolesController.index);

module.exports = router;
