const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const companySchema = new Schema({
    name: {
        type: String,
        unique: true,
    },
    symbol: {
        type: String,
        unique: true
    }
});

exports.module = mongoose.model("Comapny", comapnySchema)