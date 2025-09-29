function adminOnly(req, res, next) {
  if (req.user && req.user.rol === 'admin') {
    next();
  } else {
    return res.status(403).json({ message: 'Acceso solo para administradores' });
  }
}

module.exports = adminOnly;
