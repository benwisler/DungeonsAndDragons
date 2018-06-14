
var passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;
var db = require("../models");
var bCrypt = require('bcrypt-nodejs');
module.exports = function(passport, user) {
 
  var User = user;
  var LocalStrategy = require('passport-local').Strategy;
passport.serializeUser(function(user, done) {
 
  done(null, user.id);
// deserialize user 
passport.deserializeUser(function(id, done) {
 
  User.findById(id).then(function(user) {

      if (user) {

          done(null, user.get());

      } else {

          done(user.errors, null);

      }

  });

});
});

passport.use('local-signup', new LocalStrategy(
 
  {
      usernameField: 'email',
      passwordField: 'password',
      passReqToCallback: true // allows us to pass back the entire request to the callback

  },
  function(req, email, password, done) {
    var generateHash = function(password) {
      return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
  }; 


User.findOne({
  where: {
      email: email
  }
}).then(function(user) {

  if (user)

  {

      return done(null, false, {
          message: 'That email is already taken'
      });

  } else

  {

      var userPassword = generateHash(password);

      var data =

          {
              email: email,

              password: userPassword,

              firstname: req.body.firstname,

              lastname: req.body.lastname

          };


      User.create(data).then(function(newUser, created) {

          if (!newUser) {

              return done(null, false);

          }

          if (newUser) {

              return done(null, newUser);

          }

      });

  }

});
}
));
passport.use('local-signin', new LocalStrategy(
 
  {

      // by default, local strategy uses username and password, we will override with email

      usernameField: 'email',

      passwordField: 'password',

      passReqToCallback: true // allows us to pass back the entire request to the callback

  },


  function(req, email, password, done) {

      var User = user;

      var isValidPassword = function(userpass, password) {

          return bCrypt.compareSync(password, userpass);

      }

      User.findOne({
          where: {
              email: email
          }
      }).then(function(user) {

          if (!user) {

              return done(null, false, {
                  message: 'Email does not exist'
              });

          }

          if (!isValidPassword(user.password, password)) {

              return done(null, false, {
                  message: 'Incorrect password.'
              });

          }


          var userinfo = user.get();
          return done(null, userinfo);


      }).catch(function(err) {

          console.log("Error:", err);

          return done(null, false, {
              message: 'Something went wrong with your Signin'
          });

      });


  }

));
}
// // passport.use(new LocalStrategy(
// //   function(username, password, done) {
// //     db.User.findOne({ username: username }, function(err, dbUser) {
// //       if (err) { return done(err); }
// //       if (!dbUser) {
// //         return done(null, false, { message: 'Incorrect username.' });
// //       }
// //       if (!dbUser.validPassword(password)) {
// //         return done(null, false, { message: 'Incorrect password.' });
// //       }
// //       return done(null, dbUser);
// //     });
// //   }
// // ));

// // var passport = require("passport");
// // var LocalStrategy = require("passport-local").Strategy;
// // var db = require("../models");

// // passport.use(new LocalStrategy(
// //     function(username, password, done) {
// //       db.User.findOne({ username: username }, function (err, user) {
// //         if (err) { return done(err); }
// //         if (!user) {
// //           return done(null, false, { message: 'Incorrect username.' });
// //         }
// //         if (!user.validPassword(password)) {
// //           return done(null, false, { message: 'Incorrect password.' });
// //         }
// //         return done(null, user);
// //       });
// //     }
// //   ));

// // // In order to help keep authentication state across HTTP requests,
// // // Sequelize needs to serialize and deserialize the user
// // // Just consider this part boilerplate needed to make it all work
// passport.serializeUser(function(user, cb) {
//   cb(null, user);
// });

// passport.deserializeUser(function(obj, cb) {
//   cb(null, obj);
// });

// // // Exporting our configured passport
// module.exports = passport;