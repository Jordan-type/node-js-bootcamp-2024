// routes - private and public route 
// private - protected - RBAC - ROLE BASED ACCESS CONTROL - Admin, Guest, User, SuperAdmin, Teachers, and Students 
// public - anyone can access this routes 
const express = require('express');
const router = express.Router();

const { createUserProfile, getUserProfile, getUsersProfiles, updateUserProfile, deleteUserProfile } = require("../../controllers/users.controller")
const { authenticateRequest, } = require("../../middleware/auth.middleware")


// http methods
// GET - READ - Retrieve data from the server
// POST
router.post("/create/users", authenticateRequest, createUserProfile)
router.get("/get/users/:email", authenticateRequest, getUserProfile)
router.get("/get/all/users", authenticateRequest, getUsersProfiles)
router.put("/update/users/:email", authenticateRequest, updateUserProfile)
router.delete("/delete/users/:email", authenticateRequest, deleteUserProfile) 

module.exports = router