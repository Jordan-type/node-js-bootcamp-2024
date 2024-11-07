const express = require('express');
const router = express.Router();

const jwt = require('jsonwebtoken');

// dummy data
const userToken = jwt.sign(
    { username: 'testUser', id: '12345', isAdmin: true }, // Payload data
    'your_jwt_secret', // hjhgjhgjh
    { expiresIn: '1h' } // Token expiration
)

console.log('Dummy Token:', userToken)

// router - level
// Middleware to authenticate use
function authenticateUser(req, res, next) {
    // token - jwt - learn more before the next class - jsonwebtoken
    const token = req.header('authorization')?.split(' ')[1]; 

    if(!token) {
        return res.status(403).json({ message: 'Access denied. No token provided.' });  
    }

    try {
        const decoded = jwt.verify(token, 'your_jwt_secret');
        req.user = decoded; // userdata - username, Id etc...
        next()
    } catch (error) {
        return res.status(401).json({ message: 'Invalid token.' });
    }
}

// const { registerController } = require("../controllers/users.controller")


// http methods
// GET - READ - Retrieve data from the server
// POST
// router.post("/signup-user", registerController)
// router.post("/signin-user", registerController) // login - response - user data - {first name, last } - 
// middleware - check user isAdmin if the user isAdmin then they access the route (only admin can create a new Student)


// protected routes
router.get("/protected", authenticateUser, (req, res) => { 
    res.json({ message: 'You have accessed a protected route!', user: req.user });
})


// add other routes here


module.exports = router