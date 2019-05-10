const express = require('express');
const router  = express.Router();
const User = require('../models/User')

//delete user
router.delete('user/delete/:id', (req, res, next) => {
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
router.put('user/update/:id' , (req, res, next) =>{
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