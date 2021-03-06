const express = require('express');
const router  = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/User');
const passport = require('passport');

const login = (req, user) => {
  return new Promise((resolve,reject) => {
    req.login(user, err => {
      
      
      
      if(err) {
        reject(new Error('Something went wrong'))
      }else{
        resolve(user);
      }
    })
  })
}


// SIGNUP
router.post('/signup', (req, res, next) => {

  const {username, password} = req.body;

  
  // Check for non empty user or password
  if (!username || !password){
    next(new Error('You must provide valid credentials'));
  }

  // Check if user exists in DB
  User.findOne({ username })
  .then( foundUser => {
    if (foundUser) throw new Error('Username already exists');

    const salt     = bcrypt.genSaltSync(10);
    const hashPass = bcrypt.hashSync(password, salt);

    return new User({
      username,
      password: hashPass
    }).save();
  })
  .then( savedUser => login(req, savedUser)) // Login the user using passport
  .then( user => res.json({status: 'signup & login successfully', user})) // Answer JSON
  .catch(e => next(e));
});

router.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, theUser, failureDetails) => {
    // Check for errors
    if (err) next(new Error('Something went wrong')); 
    if (!theUser) next(failureDetails)

    // Return user and logged in
    login(req, theUser).then(user => {
      console.log(user)
      return res.status(200).json(user)});

  })(req, res, next);
});


router.get('/currentuser', (req,res,next) => {
    if(req.isAuthenticated()){
      res.status(200).json(req.user);
    }else{
    res.status(500).json({
      error:'Not logged in'
    })
    // next(new Error('Not logged in'))
  }
})

//Hacer bien
// router.post('/:id', uploadCloud.single('profilePhoto'), (req, res, next) => {
//   let userPhoto = req.file.url;
//   const id = req.params.id
//   const {username, password, lang, country, description, genre, age, rate, travels } = req.body;
//   User.findByIdAndUpdate(id, {
//     userPhoto
//   }, { new: true })
//     .then(user => {
//       res.json(user)
//     })
//     .catch(error => {
//       console.log(error);
//     })
// })


// router.post(
//   "/miperfil/:id/edit",
//   uploadCloud.single("photo"),
//   (req, res, next) => {
//     const { username, email, password, phone, photo, rating } = req.body;
//     var usuario = req.user;
//     console.log("mi test ", imgPath);
//     if (req.file === undefined) {
//       var imgPath = usuario.imgPath;
//       var imgName = usuario.imgName;
//     } else {
//       var imgPath = req.file.url;
//       var imgName = req.file.originalname;
//     }

//     User.findOneAndUpdate(
//       { _id: req.params.id },
//       { username, email, phone, imgPath, imgName }
//     )
//       .then(celebrity => {
//         res.redirect("/auth/miperfil");
//       })
//       .catch(err => {
//         res.render("./error", err);
//       });
//   }
// );


router.get('/logout', (req,res) => {
  req.logout();
  res.status(200).json({message:'logged out'})
});


router.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
})

module.exports = router;