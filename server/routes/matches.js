const express = require('express');
const router  = express.Router();
const Axios = require('axios')

//matchDay
router.get('https://api.football-data.org/v2/competitions/:id/matches?matchday', (req, res, next) => {
  let id = req.params.id;

  matchDay.find({competition: {id}})
  .filter(
    {"matches": [
      {
        id,
        status,
        matchday,
        score: {
          winner,
          fulltime: {
            homeTeam,
            awayTeam
          }
        },
        homeTeam,
        awayTeam
      }
    ]}
  )
  .then(matchDay=>{
    res.json(matchDay);
  })
  .catch((err)=>{
    console.log("Matchday not found");
  })
});

//match
router.get('https://api.football-data.org/v2/matches/:id', (req, res, next) => {
  let id = req.params.id;

  match.find(id)
  .then(match=>{
    res.json(match);
  })
  .catch((err)=>{
    console.log("Match not found");
  })
});

module.exports = router;