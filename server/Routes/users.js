const express = require('express')
const router = require('express-promise-router')()
const passport = require('passport')
const passportConfig = require('../passport')

const usersController = require('../Controllers/users')
const { validateBody, schemas } = require('../helpers/routeHelpers')

router
  .route('/signup')
  .post(validateBody(schemas.authSchema), usersController.signUp)
router
  .route('/signin')
  .post(
    validateBody(schemas.authSchema),
    passport.authenticate('local', { session: false }),
    usersController.signIn
  )
router
  .route('/secret')
  .get(passport.authenticate('jwt', { session: false }), usersController.secret)

module.exports = router
