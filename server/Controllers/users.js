const JWT = require('jsonwebtoken')
const User = require('../Models/User')
const jwtSecret = require('../config/keys')

const signToken = (user) => {
  return JWT.sign(
    {
      sub: user._id,
    },
    jwtSecret.secretString,
    { expiresIn: '1d' }
  )
}

module.exports = {
  signUp: async (req, res, next) => {
    const { email, password } = req.value.body

    // check if there is already a user with the same email
    const existantUser = await User.findOne({ email })
    if (existantUser) {
      return res.status(409).json({ error: 'email already in use' })
    }
    // if not, create a new user
    const newUser = new User({ email, password })
    await newUser.save()
    // generate token
    const token = signToken(newUser)
    // respond with token
    res.status(200).json({ token })
  },
  signIn: async (req, res, next) => {
    const token = signToken(req.user)
    res.status(200).json({ token })
  },
  secret: async (req, res, next) => {
    res.json({ secret: 'resource' })
  },
}
