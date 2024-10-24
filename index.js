const express = require('express')
const dotenv = require("dotenv")
dotenv.config()


const app = express() 

const { connectDB } = require("./config/mongodb.config") // import db here

const userRoutes = require("./routes/users.route")



connectDB() // calling a function


// Middleware to parse JSON bodies (important for POST and PUT requests)
app.use(express.json())

// versioning control - v1, v2 of the APIs
app.use("/api/v1/users", userRoutes) // using the routes from userRoutes.js file


app.get("/", function(req, res) {
    res.send("Hello World!");
}) 


// http://localhost:3001
// http://localhost:3001/api/v1/users/create/users - for creating a new user
// http://localhost:3001/api/v1/users/all/users - to get all users
// http://localhost:3001/api/v1/users/delete/:userId/user - param - userId




const PORT = process.env.PORT || 3001;
app.listen(
    PORT, () => {
        console.log(`Server is running on port ${PORT}`)
})


