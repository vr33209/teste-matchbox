const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  birthdate: {
    type: String,
    required: false
  },
   type: {
    type: String,
    required: true
  },
  jwt: {
    type: String,
    required: false
  },
})

module.exports = mongoose.model('User', UserSchema)