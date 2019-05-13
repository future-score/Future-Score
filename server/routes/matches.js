const express = require('express');
const router  = express.Router();
const Match = require('../models/Match');

//match
router.get('/:id', (req, res, next) => {
  let id = req.params.id;

  Match.find({id: id})
  .populate('homeTeam')
  .populate('awayTeam')
  .then(match=>{
    res.json(match);
  })
  .catch((err)=>{
    console.log("Match not found");
  })
});

module.exports = router;