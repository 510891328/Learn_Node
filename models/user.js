const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        firstName: { type: String, required: true },
        lastName: { type: String, required: true }
    },

    watchList: {
        type: [
            {
                companyID:{
                    type: Schema.Types.ObjectId,
                    ref: "Company"
                },
                companyName: {type: String},
                symbol: {
                    type: String,
                    unique:true
                }
            }
        ],
        default: undefined
    }
});

exports.module = mongoose.model("User", userSchema)