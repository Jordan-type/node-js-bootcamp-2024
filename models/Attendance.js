const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const attendanceSchema =  new Schema({
    student: { type: mongoose.Schema.Types.ObjectId, ref: 'Students', required: true },
    status: { type: String, enum: ['Present', 'Absent', 'Absent with apology'], required: true }
})

module.exports = mongoose.model("Attendances", attendanceSchema)