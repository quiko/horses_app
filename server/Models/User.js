const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const Schema = mongoose.Schema

// create schema
const userSchema = new Schema({
  email: {
    type: String,
    lowercase: true,
  },
  password: String,
})

// hashing and salting triggered by save
userSchema.pre('save', async function (next) {
  try {
    const salt = await bcrypt.genSalt(10)
    const haschedPassword = await bcrypt.hash(this.password, salt)
    this.password = haschedPassword
    next()
  } catch (error) {
    next(error)
  }
})
// to be used on the passport local strategy to verify password is correct
userSchema.methods.isValidPassword = async function (newPassword) {
  try {
    return await bcrypt.compare(newPassword, this.password)
  } catch (error) {
    throw new Error(error)
  }
}
// create model
const User = mongoose.model('user', userSchema)
// export model
module.exports = User
