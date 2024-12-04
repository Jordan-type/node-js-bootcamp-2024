

// Middleware to authenticate use
function authenticateUser(req, res, next) {
    // token - jwt - learn more before the next class
    const token = req.header('authorization'); 

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


export default authenticateUser