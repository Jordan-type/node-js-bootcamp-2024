const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const urlSchema = new Schema({
    shortId: { type: String, required: true, unique: true, },
    redirectURL: {type: String, required: true, },
    visitHistory: [{
        timestamp: {
            type: Number
        }
    }],
},
{
    timestamps: true
})


const URL = mongoose.model('urls', urlSchema);

module.exports = URL;