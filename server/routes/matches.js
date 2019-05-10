const express = require('express');
const router  = express.Router();
const Axios = require('axios')

//matchDay
router.get('/matchday', (req, res, next) => {
  axios.get('https://api.football-data.org/v2/competitions/PL/matches?matchday')
  .then(matchDay=>{
    res.json(matchDay);
  })
  .catch((err)=>{
    console.log("Matchday not found");
  })
});

//match
router.get('/match', (req, res, next) => {
  axios
  .get('https://api.football-data.org/v2/matches/:id')
  .then(response => response.data)
  .then(matchDay=>{
    res.json(matchDay);
  })
  .catch((err)=>{
    console.log("Match not found");
  })
});

module.exports = router;