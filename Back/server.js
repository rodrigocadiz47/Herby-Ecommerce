//no funciona express
const express = require("express");
const helmet = require("helmet");
const passport = require("passport");
const coockieParser = require("cookie-parser");
const session = require("express-session");
const cors = require("cors");
const routes = require("./routes");

const app = express();

app.use(helmet());

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(coockieParser());

app.use(session({ secret: "herby", resave: true, saveUninitialized: true }));

app.use(passport.initialize());
app.use(passport.session());

const { User } = require("./Models");
const LocalStrategy = require("passport-local").Strategy;

passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    (inputEmail, inputPassword, done) => {
      User.findOne({
        where: {
          email: inputEmail,
        },
      })
        .then((user) => {
          if (!user) {
            return done(null, false);
          }
          user.isValidPassword(inputPassword).then((bool) => {
            if (!bool) {
              return done(null, false);
            } else {
              return done(null, user);
            }
          });
        })
        .catch(done);
    }
  )
);

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  User.findByPk(id).then((user) => {
    done(null, user);
  });
});

app.use("/api", routes);

app.listen(3001, () => {
  console.log("server on port 3001");
});
