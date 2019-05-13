const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MatchSchema = new Schema({
    id: Number,
    status: String,
    matchday: Number,
    score: [{
        winner: String,
        fulltime: {
            homeTeam: Number,
            awayTeam: Number,
        }
    }],
    homeTeam: { type: Schema.Types.ObjectId, ref: 'Team' },
    awayTeam: { type: Schema.Types.ObjectId, ref: 'Team' }
});

const Match = mongoose.model('Match', MatchSchema);
module.exports = Match;