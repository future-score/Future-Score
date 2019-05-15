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

// router.get(‘/’, (req, res, next) => {
//     axios.get(“http://yonrod.pythonanywhere.com/?gamma=0.4&alfahome=1“)
//     .then(data => {
//         res.json({data: data.data.split(“,”).map(d => d.trim())})
//       })
//     .catch((error) => {
//         console.log("error")
//     })
// })

// :gamma/:alfahome/:betahome/:alfaaway/:betaaway/:nu1home/:nu2away/:ro

module.exports = router;