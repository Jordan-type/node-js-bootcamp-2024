const express = require("express")
const routing = express.Router()

// v1 routes imports
const authRoutes = require("./auth.routes")
const usersRoutes = require("./users.route")
const teachersRoutes = require("./teachers.routes")


// main app routes
routing.use('/api/v1',authRoutes);
routing.use('/api/v1', usersRoutes)
routing.use('/api/v1', teachersRoutes)


// admin routes


module.exports = routing
