const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    number: { type: String, required: true }
});

module.exports = mongoose.model('User',userSchema);