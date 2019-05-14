require('dotenv').config();

const mongoose = require("mongoose");
const axios = require("axios");

router.post('/', (req, res, next) => {
    const [data] = req.body

axios.post('', data)
    .then(response => {
        return res.json(response.data)
    })
    .catch((error) => {
        console.log("error")
    })
})

module.exports = router;