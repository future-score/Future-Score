const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const PredictionSchema = new Schema({
    numberData: Array,
    match: {type: Schema.Types.ObjectId, ref: 'Match'},
});

const Prediction = mongoose.model('Prediction', PredictionSchema);
module.exports = Prediction;