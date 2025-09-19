// Middleware para validar email y password
const validateEmailAndPassword = (req, res, next) => {
    const { email, password } = req.body;
    if (!email || !email.includes('@')) {
        return res.status(400).json({ message: "El email debe ser válido y contener '@'" });
    }
    if (!password || !/^[0-9]{6}$/.test(password)) {
        return res.status(400).json({ message: "La contraseña debe tener exactamente 6 caracteres" });
    }
    next();
}

module.exports = { validateEmailAndPassword };

