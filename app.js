const express = require('express')
const http = require('http');
const dotenv = require("dotenv")
const cors = require("cors")
dotenv.config()


const userRoutes = require("./routes/users.route")
const authRoutes = require("./routes/auth.routes")

const { handleValidationError, errorHandler } = require("./middleware/errorHandler")

const app = express()

app.use(express)
app.use( 
    cors({
        origin: [process.env.FRONTEND_URL],
        methods: ["GET", "POST", "PUT", "DELETE"], 
    }) 
);

// error handling 
app.use((err, req, res, next) => {
    errorHandler(err, req, res, next);
});

// Middleware to parse JSON bodies (important for POST and PUT requests)
app.use(express.json()) 
app.use(express.urlencoded({extended: true}));

// versioning control - v1, v2 of the APIs
app.use("/api/v1/users", userRoutes) // using the routes from userRoutes.js file
app.use("/api/v1/auth", authRoutes) // using the routes from authRoutes.js file


module.exports = app
