require('dotenv').config();

const mongoose = require("mongoose");
const express = require('express');
const router  = express.Router();
const axios = require("axios");

router.post('/', (req, res, next) => {
    const data = req.body.data
    axios.get(`http://yonrod.pythonanywhere.com/?gamma=${data[0]}&alfahome=${data[1]}&betahome=${data[2]}&alfaaway=${data[3]}&betaaway=${data[4]}&nu1home=${data[5]}&nu2away=${data[6]}&ro=${data[7]}`)
    .then(response => {
        res.json(response.data)
    })
    .catch((error) => {
        console.log("error")
    })
})

module.exports = router;