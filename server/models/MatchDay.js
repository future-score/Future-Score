const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const MatchDaySchema = new Schema({
    id: Number,
    matchday: Number,
    matches: [{ type: Schema.Types.ObjectId, ref: 'Match' }]
});

const MatchDay = mongoose.model('MatchDay', MatchDaySchema);
module.exports = MatchDay;