const jwt = require('jsonwebtoken');
const { getUserId } = require('../services/user.service');
const { handleValidationError } = require('./errorHandler');

// Middleware to authenticate use
const authenticateRequest = async(req, res, next) => {
    // token - jwt - learn more before the next class
    let token = req.cookies.access_token || req.header('authorization'); 
    consol.log(token) // example of token - Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3RVc2VyIiwiaWQiOiIxMjM0NSIsImlhdCI6MTYyMzQwMjMxMiwiZXhwIjoxNjIzNDAyMzEyfQ.7
    // web3 sha256 - 256 characters example - 0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef
    if(!token) {
        return res.status(403).json({ message: 'Access denied. No token provided.' });  
    }

    try {
        const decoded = jwt.verify(token, 'your_jwt_secret');
        const user = await getUserId(decoded.sub); // userdata - username, Id etc...

        if (!user) {
            return res.status(401).json({ message: 'Invalid token. or Invalid User' });
        }

        req.user = user;
        next()
    } catch (error) {
        return res.status(401).json({ message: 'Invalid token.' });
    }
}

const isAuthenicated = (req, res, next) => {
    if (!req.user) {
        return res.status(401).json({ message: 'Unauthorized' }); // return 401 - Unauthorized
    }
    next();
}

module.exports = {
    authenticateRequest,
    isAuthenicated
}

