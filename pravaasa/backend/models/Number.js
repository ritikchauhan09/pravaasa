const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    number: String
});

module.exports = mongoose.model('User',userSchema);