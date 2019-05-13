const express = require('express');
const router  = express.Router();
const Matchday = require('../models/MatchDay')
const Match = require('../models/Match')

router.get('/:num', (req, res, next) => {
  let num = req.params.num;

  Matchday.find({matchday: num})
  .populate('matches')
  .then(matchday=>{
    res.json(matchday)
    console.log(matchday)
  })
  .catch((err)=>{
    console.log("Match not found");
  })
});

module.exports = router;