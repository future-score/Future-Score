const mongoose = require("mongoose");
const Match = require("../models/Match");
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

    let matches = []

axios({
    url: 'https://api.football-data.org/v2/competitions/2014/matches',
    method: 'GET',
    headers: {
        'X-Auth-Token': "2a949c5cca1f4b1d8bcbe8fe8a118b8e"
    }
    })
    .then(response => {
        matches = response.data.matches.map(match => {
            return {
                "id": match.id,
                "status": match.status,
                "matchday": match.matchday,
                "score": match.score
            }
        })
    // .then(response => {
    //     scores = response.data.matches.score.map(score => {
    //         return {
    //             "winner": score.winner,
    //         }
    //     })
    // })
        Promise.resolve()
        .then(() => 
            Match.create(matches)
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