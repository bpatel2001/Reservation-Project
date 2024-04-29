const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name: { type: String, required: true},
    id: {type: String, required: true},
    address: { type: String, required: true},
    duration: { type: String, required: true}

});

module.exports = mongoose.model('userDetails', userSchema)