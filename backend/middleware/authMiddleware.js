const jwt = require('jsonwebtoken');

function authMiddleware(req, res, next) {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({ message: 'No autorizado: token no encontrado' });
  }
  try {
  const decoded = jwt.verify(token, process.env.JWT_SECRET); 
  req.user = decoded;
  next();
  } catch (error) {
    return res.status(401).json({ message: 'Token inválido o expirado' });
  }
}

module.exports = authMiddleware;
