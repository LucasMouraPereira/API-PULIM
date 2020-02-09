const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PathSchema = new Schema({
    originname: {type: String, unique: true, required: true},
    destinyname: {type: String, unique: true, required: true},
    created: {type: Date, default: Date.now}
});

module.exports = mongoose.model('Path', PathSchema);