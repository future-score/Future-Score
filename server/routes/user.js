const express = require('express');
const router  = express.Router();
const User = require('../models/User')

//user
router.get('/', (req, res, next) => {
  if(req.isAuthenticated()){
    User.findById({_id: req.user._id})
    .populate({path: 'predictions', populate: {path : 'matches'}})
    .then(user=>{
      // console.log(user)
      res.json(user);
    })
    .catch((err)=>{
      console.log(err);
    })
  }else{
    res.json({mensaje:"no user"})
  }
  
  
//   User.findById({_id: id})
//     .populate({path: 'predictions', populate: {path : 'matches'}})
//     .then(user=>{
//       res.json(user.data);
//     })
//     .catch((err)=>{
//       console.log(err);
//     })
});

//delete user
router.delete('/delete/:id', (req, res, next) => {
    let id = req.params.id;
      
    User.findByIdAndRemove(id)
      .then(user=>{
        res.json(user);
      })
      .catch((err)=>{
        console.log(err);
      })
});
  
//update user
router.put('/update/:id' , (req, res, next) =>{
    let id = req.params.id;
    const {username, email} = req.body;
      
    User.findByIdAndUpdate(id, req.body , {new: true})
      .then((user)=>{
        res.json(user);
      })
      .catch((err)=>{
        console.log(err);
      })
});

module.exports = router;