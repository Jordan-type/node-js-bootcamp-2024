// routes - private and public route 
// private - protected - RBAC - ROLE BASED ACCESS CONTRO - Admin, Guest, User, SuperAdmin, Teachers, and Students 
// public - anyone can access this routes 
const express = require('express');
const router = express.Router();

const { createUserController } = require("../controllers/users.controller")


// http methods
// GET - READ - Retrieve data from the server
// POST
router.post("/create/users", createUserController)


module.exports = router