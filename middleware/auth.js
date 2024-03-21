const jwt = require('jsonwebtoken');
const config = require('config');

exports.auth = (req, res, next) => {
    const token = req.header('x-auth-token');
    if (!token) {
        return res.status(401).json({ message: 'Access denied. No token provided'});
    }
    try {
        const decoded = jwt.verify(token, config.get('jwtPrivateKey'));
        req.user = decoded;
        next()
    }
    catch (err) {
        res.status(500).json({ message: 'Invalid token provided' });   
    }

}