const mongoose = require('mongoose')
const validator = require('validator');

const Schema = mongoose.Schema;

const adminSchema =  new Schema({
    email: { type: String, required: true, unique: true, lowercase: true, validate: [validator.isEmail, "Please provide a valid email"], },
    password: { type: String, required: true, minlength: 8, validate:[validator.isStrongPassword, ""] }, // validator.isStrongPassword
})

module.exports = mongoose.model("Admins", adminSchema)