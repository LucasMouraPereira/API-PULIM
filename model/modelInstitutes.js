const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const InstituteSchema = new Schema({
    institutename: {type: String, required: true},
    address: {type: String, required: true},
    number:{type: Number, required: true},
    cep: {type: String, required: true},
    cnpj:{type:String, unique: true, required: true},
    account:{type:String},
    image:{type:String},
    created: {type: Date, default: Date.now}
});

module.exports = mongoose.model('Institute', InstituteSchema);