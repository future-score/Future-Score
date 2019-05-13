const express = require('express');
const router  = express.Router();
const Axios = require('axios')

//match
router.get('/', (req, res, next) => {
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