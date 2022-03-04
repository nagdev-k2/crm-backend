const { isEmpty, isEqual } = require('lodash');
const { ObjectId } = require('mongodb');
const db = require('../config');

const Users = require('../models/users');
let status = 500;        

module.exports = {
  index: (req, res) => {
    Users.find()
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
      .catch((e) => {
        console.log('in error', e); 
      })
  },
  findUser: (req, res) => {
    const { email, password} = req.body;
    Users.find({email: email})
      .then((data) => {
        let result = {}
        if (!isEmpty(data)) {
          result = JSON.parse(JSON.stringify(data[0]))
          if (isEqual(result.password, password)) {
            status = 200;
          } else {
            status = 204;
            result = { msg: 'Incorrect Password' }
          }
        } else {
          status = 204;
          result = { msg: 'No Data Found.' }
        }
        res.send({
          status: status,
          data: result,
        })
      })
      .catch(() => {
        status = 500;
        result = { msg: 'Internal Server Error' }
        res.send({
          status: status,
          data: result,
        })
      })
  },
  createUser: (req, res) => {
    const {user} = req.body;
    console.log({...user});
    Users.create({
      name: user.name,
      email: user.email,
      dob: user.dob,
      location: user.location,
      company: user.company,
      role: user.role,
      profile: user.profile,
      status: user.status,
      title: user.title,
    })
      .then((data) => {
        res.send(data)
      })
  },
  deleteUser: (req, res) => {
    const { _id } = req.body;
    Users.deleteOne({_id: ObjectId(_id)})
      .then((data) => {
        res.send(data)
      })
  },
  updateUser: (req, res) => {
    const { user } = req.body;
    Users.updateOne({_id: ObjectId(user._id)}, {$set: user})
      .then((data) => {
        res.send(data)
      })
  }
}