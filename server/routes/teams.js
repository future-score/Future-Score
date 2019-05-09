const express = require('express');
const router  = express.Router();
const Team = require('../models/Team');

//teams - DB
router.get('/team/:id', (req, res, next) => {
    team.findById()
    .then(team=>{
        res.json(team);
    })
    .catch((err)=>{
      console.log(err);
    })
  });
  
//homeTeam - DB
router.get('/hometeam/:id', (req, res, next) => {
    homeTeam.findById()
    .then(homeTeam=>{
        res.json(homeTeam);
    })
    .catch((err)=>{
      console.log(err);
    })
  });
  
//awayTeam - DB
router.get('/awayteam/:id', (req, res, next) => {
    awayTeam.findById()
    .then(awayTeam=>{
        res.json(awayTeam);
    })
    .catch((err)=>{
      console.log(err);
    })
});

//create teams - DB
router.post('/new', (req, res, next) => {  
  const {
    _id,
    teamId,
    name,
    shortName,
    tla,
    crestUrl,
    venue,
    alpha,
    beta,
    nu1,
    nu2,
    ro,
    gamma
  } = req.body;

  const newTeam = new Team({
    _id, 
    teamId, 
    name, 
    shortName, 
    tla, 
    crestUrl,
    venue,
    alpha,
    beta,
    nu1,
    nu2,
    ro,
    gamma
  })

  newTeam.save()
    .then(team => {
      res.json(team);
    })
    .catch((error) => {
      console.log(error);
    })
});

module.export = router;