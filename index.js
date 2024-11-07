const express = require('express')
const dotenv = require("dotenv")
dotenv.config()


const app = express() 

const { connectDB } = require("./config/mongodb.config") // import db here
const userRoutes = require("./routes/users.route")
const authRoutes = require("./routes/auth.routes")

connectDB() // calling a function

// middlewares
// - functions that have access to the request object (req) and (res)
// - can be used to perform tasks before the request is processed by the route handler
// - modify request-response cycle - 
// - ending the request-response cycle'
// - calling the next middleware function in the stack

// types middlewares
// 1. Application level- ideal - tasks like logging, authentication, and error handling. -
// 2. Router-level - specific functionality
// 3. error handling - defined with four params (err, req, res, next)
// 4. built-in - managing sessions

// App-level example
const logRequest = (req, res, next) => {
    consol.log(`Request URL: ${req.url}`)
    next()
}






// Middleware to parse JSON bodies (important for POST and PUT requests)
app.use(express.json())

// versioning control - v1, v2 of the APIs
app.use("/api/v1/users", userRoutes) // using the routes from userRoutes.js file
app.use("/api/v1/auth", authRoutes) // using the routes from authRoutes.js file

// define the routes here too - plus create other models - like teachers, student models if possible add services, controllers and routes 


app.get("/error-test", function(req, res, next) {
    const error = new Error('some error')
    next(error)

}) 

// error handling
app.use((err, req, res, next) => {
    console.log(err)
    res.status(500).send({ message: "Internal Server Error" })
})





// http://localhost:3001
// http://localhost:3001/api/v1/users/create/users - for creating a new user
// http://localhost:3001/api/v1/users/all/users - to get all users
// http://localhost:3001/api/v1/users/delete/:userId/user - param - userId




app.use(logRequest)









const PORT = process.env.PORT || 3001;
app.listen(
    PORT, () => {
        console.log(`Server is running on port ${PORT}`)
})


