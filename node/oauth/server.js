require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const connection = require('./src/db');

const passport = require('passport');
const TwitterStrategy = require('passport-twitter').Strategy;

const User = require('./src/model/user.model');
const session = require('cookie-session');

passport.serializeUser((user, done) => {
  done(null, user._id)
});

passport.deserializeUser(async (id, done) => {
  const user = await User.findById(id);
  done(null, user);
});

passport.use(
  new TwitterStrategy({
    consumerKey: process.env.TWITTER_API_KEY,
    consumerSecret: process.env.TWITTER_API_KEY_SECRET,
    callbackURL: '/auth/callback'
  }, async (token, tokenSecret, profile, done) => {
    const user = await User.findOne({ twitterId: profile._json.id_str });

    if(user) {
      return done(null, user)
    }

    const newUser = await User.create({
      name: profile._json.name,
      twitterId: profile._json.id_str
    });

    return done(null, newUser)
  })
);


const port = process.env.PORT || 8000;

const app = express();

app.use(express.json());
app.use(morgan('dev'));
app.use(session({
  secret: process.env.SECRET,
  maxAge: 1000 * 60 * 60 * 24 * 365,
}))
app.use(passport.initialize());
app.use(passport.session());

app.get('/auth/twitter', passport.authenticate('twitter'));

app.get('/auth/callback', passport.authenticate('twitter', {
  successRedirect: '/auth/success',
  failureRedirect: '/auth/failure'
}));

app.get('/auth/success', (req, res) => {
  res.sendStatus(200);
});

app.get('/auth/failure', (req, res) => {
  res.sendStatus(401);
});

app.get('/verify', (req, res) => {
  console.log(req.user);
  res.sendStatus(200)
});

app.get('/auth/logout', (req, res) => {
  req.session = null;
  res.redirect('/')
})

app.listen(port, () =>
  console.log(`Server listening on http://localhost:${port}`)
);
