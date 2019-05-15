require('dotenv').config();

const mongoose = require("mongoose");
const express = require('express');
const router  = express.Router();
const axios = require("axios");

router.get('/:gamma/:alphahome/:betahome/:alphaaway/:betaaway/:nu1home/:nu2away/:ro', (req, res, next) => {

    axios.get(`https://future-score19.herokuapp.com/api/?gamma=${req.params.gamma}&alphahome=${req.params.alphahome}&betahome=${req.params.betahome}&alphaaway=${req.params.alphaaway}&betaaway=${req.params.betaaway}&nu1home=${req.params.nu1home}&nu2away=${req.params.nu2away}&ro=${req.params.ro}`)
    .then(response => {
        return res.json({
            message: response.data
        })
    })
    .catch((error) => {
        console.log("error")
    })
})

module.exports = router;