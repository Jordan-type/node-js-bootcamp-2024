const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const userSchema =  new Schema({
    username: {type: String, required: true},
    first_name: {type: String, required: true},
    last_name: {type: String, required: true},
    email: {type: String, required: true, unique: true}, // jordan@gmail.com add more validation - '@ .!'
    phone_number: {type: Number, required: true}, // country code such +254 checking - backend level or frontend - select code 
    county: {type: String, required: true},
    country: {type: String, required: true},
    password: {type: String, required: true}, // if you gonna be adding something like Login with Gmail you make not required
    role: {type: String, enum: ["user", "student", "teacher", "guest", "admin", "superAdmin"], default: "user"}
})


module.exports = mongoose.model("Users", userSchema)


