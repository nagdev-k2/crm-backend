var express = require('express');
var router = express.Router();
const usersController = require('../controllers/users_controller');

/* GET users listing. */
router.get('/', usersController.index);
router.post('/findUser', usersController.findUser);
router.post('/createUser', usersController.createUser);
router.post('/deleteUser', usersController.deleteUser);
router.post('/updateUser', usersController.updateUser);

module.exports = router;
