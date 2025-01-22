const express = require('express')
const http = require('http');
const dotenv = require("dotenv")
const cors = require("cors")
dotenv.config()


const routeV1 = require("./routes/index")


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
app.use(routeV1) 


module.exports = app
