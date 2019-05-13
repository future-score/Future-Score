require('dotenv').config();

const mongoose = require("mongoose");
const axios = require("axios");
const Match = require("../models/Match");
const Team = require("../models/Team");
var matches = []

    mongoose
    //.connect('mongodb+srv://FS:ironhack@cluster0-ovrey.mongodb.net/test?retryWrites=true', {useNewUrlParser: true})
    .connect('mongodb://localhost:27017/Future-Score', { useNewUrlParser: true })
    .then(x => {
        console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
    })
    .catch(err => {
        console.error('Error connecting to mongo', err)
    });   

    axios({
    url: 'https://api.football-data.org/v2/competitions/2014/matches',
    method: 'GET',
    headers: {
        'X-Auth-Token': `${process.env.AuthTokenApi}`
        }
    })
    .then(res => {
        console.log("Respuesta")
        var promise = res.data.matches.map(match => {
            return Team.find({name: match.homeTeam.name})
            .then(teamHome => {
                var teamHome = teamHome[0]._id
                return Team.find({name: match.awayTeam.name})
                .then(teamAway => {
                   return {
                        "id": match.id,
                        "status": match.status,
                        "matchday": match.matchday,
                        "score": match.score,
                        "homeTeam": teamHome._id,
                        "awayTeam": teamAway[0]._id,
                    }
                })
            })
        })
        Promise.all(promise)
        .then((data)=>{
                Match.insertMany(data)
                .then((data) => {console.log("Guardado", data)})
                .catch((err) => { console.log(err) })
        })
    })
    .catch(err => {
        console.error(err);
    });