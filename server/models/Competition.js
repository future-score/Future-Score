const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const CompetitionSchema = new Schema({
    id: Number,
    matchday: [{ type: Schema.Types.ObjectId, ref: 'MatchDay' }],
});

const Competition = mongoose.model('Competition', CompetitionSchema);
module.exports = Competition;