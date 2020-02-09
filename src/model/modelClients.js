const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const ClientSchema = new Schema({
    username: {type: String, required: true},
    email: {type: String, required: true, unique: true,lowercase: true},
    password: {type: String, required: true, select: false},
    created: {type: Date, default: Date.now}
});

ClientSchema.pre('save', function (next) {
    let client = this;
    if(!client.isModified('password')) return next();

    bcrypt.hash(client.password, 10, (err, encrypted) => {
        client.password = encrypted;
        return next();
    });
});

module.exports = mongoose.model('Client', ClientSchema);