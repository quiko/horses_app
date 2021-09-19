const passport = require("passport")
const JwtStrategy = require("passport-jwt").Strategy
const LocalStrategy = require("passport-local")
const jwtSecret = require("./config/keys")
const User = require("./Models/User")

const cookieExtractor = (req) => {
  let token = null;
  if (req && req.cookies) {
    token = req.cookies["access_token"]
  }
  return token;
};
// JSON WEB TOKENS STRATEGY
passport.use(
  new JwtStrategy(
    {
      jwtFromRequest: cookieExtractor,
      secretOrKey: jwtSecret.secretString,
    },
    async (jwt_payload, done) => {
      try {
        // Find the user specified in token
        const user = await User.findById(jwt_payload.sub)

        // If user doesn't exists, handle it
        if (!user) {
          return done(null, false)
        }
        // Otherwise, return the user
        done(null, user)
      } catch (error) {
        done(error, false)
      }
    }
  )
);
// LOCAL STRATEGY
passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
    },
    async (email, password, done) => {
      try {
        //find the user given the email
        const user = await User.findOne({ email });
        //if user not found handle it
        if (!user) {
          return done(null, false);
        }
        //check if the password is valid
        const Match = await user.isValidPassword(password);
        //if not handle it
        if (!Match) {
          return done(null, false);
        }
        //otherwise return user
        done(null, user);
      } catch (error) {
        done(error, false);
      }
    }
  )
);
