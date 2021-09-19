const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const mongoose = require('mongoose')
const cookieParser = require("cookie-parser")
const usersRoutes = require('./Routes/users')
const keys = require('./config/keys')

mongoose.connect(keys.mongodb.dbUrl, () => {
  console.log('connected to db')
})

const app = express()

// middlewares
app.use(cookieParser())
app.use(cors({
  origin: 'http://localhost:4200',
  credentials: true
}))
app.use(morgan('dev'))
app.use(express.json())

// routes
app.use('/users', usersRoutes)

// start the server
const port = process.env.PORT || 3000
app.listen(port)
console.log(`server listnning on ${port}`)
