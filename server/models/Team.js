const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const TeamSchema = new Schema({
    teamId: Number,
    name: String,
    tla: String,
    crestUrl: String,
    venue: String,
    alfa: Number,
    beta: Number,
    nu1: Number,
    nu2: Number,
    ro: Number,
    gamma: Number
});

const Team = mongoose.model('Team', TeamSchema);
module.exports = Team;