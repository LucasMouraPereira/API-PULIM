const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CategoriesSchema = new Schema({
    categoryname: {type: String, unique: true},
    created: {type: Date, default: Date.now}
});

module.exports = mongoose.model('Categories', CategoriesSchema);