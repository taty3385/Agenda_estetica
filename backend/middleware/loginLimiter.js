const rateLimit = require('express-rate-limit');

// Limita a 5 intentos de login cada 15 minutos por IP
const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, 
  max: 5,
  message: "Demasiados intentos de login, intenta más tarde"
});

module.exports = { loginLimiter };