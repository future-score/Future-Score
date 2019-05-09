const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const TeamSchema = new Schema({
    name: String,
    alfa: Number,
    beta: Number,
    nu1: Number,
    nu2: Number,
    ro: Number,
    gamma: Number,
});

const Team = mongoose.model('Match', TeamSchema);
module.exports = Team;