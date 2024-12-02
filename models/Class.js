const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const classSchema =  new Schema({
    grade: {type: String, required: true}
})

module.exports = mongoose.model("Classes", classSchema)