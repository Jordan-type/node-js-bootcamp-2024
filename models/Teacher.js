const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const teacherSchema =  new Schema({
    teacherName: { type: String, require: true},
    email: { type: String, required: true, unique: true},
    subject: { type: String, required: true} // you add a subject model
})


module.exports = mongoose.model("Teachers", teacherSchema)