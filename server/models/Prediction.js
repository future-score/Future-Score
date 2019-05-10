const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const PredictionSchema = new Schema({
    id: Number,
    status: String,
    homeTeam: {type: Schema.Types.ObjectId, ref: 'Team'},
    awayTeam: {type: Schema.Types.ObjectId, ref: 'Team'},
    homeTeam: {
        alfa: Number,
        beta: Number,
        gamma: Number,
        nn: Number,
        ro: Number
    },
    awayTeam: {
        alfa: Number,
        beta: Number,
        gamma: Number,
        nn: Number,
        ro: Number
    }
});

const Prediction = mongoose.model('Match', PredictionSchema);
module.exports = Prediction;