const mongoose = require("mongoose");
const MatchDay = require("../models/MatchDay");
const axios = require("axios");

mongoose
    //.connect('mongodb+srv://FS:ironhack@cluster0-ovrey.mongodb.net/test?retryWrites=true', {useNewUrlParser: true})
    .connect('mongodb://localhost:27017/Future-Score', { useNewUrlParser: true })
    .then(x => {
        console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
    })
    .catch(err => {
        console.error('Error connecting to mongo', err)
    });

    let matchDays = []

axios({
    url: 'https://api.football-data.org/v2/competitions/2014/matches?matchday',
    method: 'GET',
    headers: {
        'X-Auth-Token': "2a949c5cca1f4b1d8bcbe8fe8a118b8e"
    }
    })
    .then(response => {
        matchDays = response.data.matches.map(matchDay => {
            return {
                "id": matchDay.id,
                "matchday": matchDay.matchday
            }
        })
        Promise.resolve()
        .then(() => 
            MatchDay.create(matchDays)
                .then((data) => {
                    console.log(`${data} save`)
                })
                .catch((err) => { 
                    console.log(err) 
                })
        )
    })
    .catch(err => {
        console.error(err);
    });