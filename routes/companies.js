var express = require('express');
var router = express.Router();
const companiesController = require('../controllers/companies_controller');

/* GET companies listing. */
router.get('/', companiesController.index);
router.get('/findcompany', companiesController.findCompany);
router.post('/createCompany', companiesController.createCompany);
router.post('/deleteCompany', companiesController.deleteCompany);
router.post('/updateCompany', companiesController.updateCompany);

module.exports = router;
