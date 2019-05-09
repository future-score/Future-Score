const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const TeamSchema = new Schema({
    _id: String,
    teamId: Number,
    name: String,
    shortName: String,
    tla: String,
    crestUrl: String,
    venue: String,
    alpha: Number,
    beta: Number,
    nu1: Number,
    nu2: Number,
    ro: Number,
    gamma: Number,
});

const Team = mongoose.model('Match', TeamSchema);
module.exports = Team;