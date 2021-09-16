const mongoose = require('mongoose')
const Schema = mongoose.Schema

// create schema
const userSchema = new Schema({
  email: {
    type: String,
    lowercase: true,
  },
  password: String,
})
// create model
const User = mongoose.model('user', userSchema)
// export model
module.exports = User
