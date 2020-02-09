const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VisitSchema = new Schema({
    comment: {type: String},
    Date: {type: Date},
    Raiting:{type: Number, unique: true},
    price: {type: Number},
    created: {type: Date, default: Date.now}
});

module.exports = mongoose.model('Visit', VisitSchema);