const express = require('express');
const router  = express.Router();

//matchDay
router.get('v2/competitions/:code/matches?matchday=:num', (req, res, next) => {
  matchDay.find()
  .then(matchDay=>{
      res.json(matchDay);
    })
  .catch((err)=>{
    console.log(err);
  })
});

//match
router.get('v2/matches/:id', (req, res, next) => {
  match.find()
  .then(match=>{
      res.json(match);
  })
  .catch((err)=>{
    console.log(err);
  })

});

module.exports = router;