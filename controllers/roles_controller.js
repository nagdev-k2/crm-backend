const { isEmpty } = require('lodash');
const Roles = require('../models/roles');
const db = require('../config');

let status = 500;        

module.exports = {
  index: (req, res) => {
    Roles.find()
      .then((data) => {
        let result = {}
        if (!isEmpty(data)) {
          status = 200;
          result = data
        } else {
          status = 204;
          result = { msg: 'No Data Found.' }
        }
        res.send({
          status: status,
          data: result,
        })
      })
  },
}