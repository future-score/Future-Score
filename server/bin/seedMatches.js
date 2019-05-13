require('dotenv').config();

const mongoose = require("mongoose");
const Match = require("../models/Match");
const Team = require("../models/Team");
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

    var matches = []

    axios({
    url: 'https://api.football-data.org/v2/competitions/2014/matches',
    method: 'GET',
    headers: {
        'X-Auth-Token': `${process.env.AuthTokenApi}`
        }
    })
    .then(res => {
        res.data.matches.forEach(match => {
            Team.find({name: match.homeTeam.name})
            .select('_id')
            .then(teamHome => {
                var teamHome = teamHome[0]._id
                Team.find({name: match.awayTeam.name})
                .select('_id')
                .then(teamAway => {
                    matches.push(
                    {
                        "id": match.id,
                        "status": match.status,
                        "matchday": match.matchday,
                        "score": match.score,
                        "homeTeam": teamHome,
                        "awayTeam": teamAway[0]._id,
                    })
                    //console.log(matches)
        Promise.resolve()
        .then(() => 
            Match.create(match)
                .then((data) => {
                 console.log(`${data} save`)
                })
                .catch((err) => { 
                    console.log(err) 
                })
            )
        })
        })
    })
})
    .catch(err => {
        console.error(err);
    });