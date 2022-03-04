const { ObjectId } = require('mongodb');
const { isEmpty } = require('lodash');
const Companies = require('../models/companies');
const db = require('../config');

let status = 500;        

module.exports = {
  index: (req, res) => {
    Companies.find()
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
  findCompany: (req, res) => {
    const {id} = req.query;
    Companies.find({id: ObjectId(id)})
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
  createCompany: (req, res) => {
    const {company} = req.body;
    console.log(company);
    Companies.create({
      name: company.name,
      location: company.location,
      industry: company.industry,
      profile: company.profile,
    })
      .then((data) => {
        res.send(data)
      })
  },
  deleteCompany: (req, res) => {
    const { _id } = req.body;
    Companies.deleteOne({_id: ObjectId(_id)})
      .then((data) => {
        res.send(data)
      })
  },
  updateCompany: (req, res) => {
    const {company} = req.body;
    console.log('company ---> ', company);
    Companies.updateOne({_id: ObjectId(company._id)}, {$set: {
      name: company.name,
      location: company.location,
      industry: company.industry,
      profile: company.profile,
      status: company.status ? company.status : 'active',
    }})
      .then((data) => {
        res.send(data)
      })
  }
}