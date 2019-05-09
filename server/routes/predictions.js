const express = require('express');
const router  = express.Router();
const Prediction = require('../models/Prediction')

//newPrediction
router.post('/prediction/new', (req, res, next) => {  
    const {predictionId, status, homeTeam, awayTeam} = req.body;
  
    const newPrediction = new Prediction({predictionId, status, homeTeam, awayTeam})
    newPrediction.save()
      .then(prediction => {
        res.json(prediction);
      })
      .catch((error) => {
        console.log(error);
      })
});
  
//delete prediction
router.delete('prediction/delete/:id', (req, res, next) => {
    let id = req.params.id;
      
    Prediction.findByIdAndRemove(id)
      .then(prediction=>{
        res.json(prediction);
      })
      .catch((err)=>{
        console.log(err);
      })
});
  
//update prediction
router.put('prediction/update/:id' , (req, res, next) =>{
    let id = req.params.id;
    const {predictionId, status, homeTeam, awayTeam} = req.body;
      
    Prediction.findByIdAndUpdate(id, req.body , {new: true})
      .then((prediction)=>{
        res.json(prediction);
      })
      .catch((err)=>{
        console.log(err);
      })
});