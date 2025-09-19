const mongoose = require('mongoose');

const administradorSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    rol: {
        type: String,
        enum: ['admin', 'usuario'],
        default: 'admin'
    }
});

module.exports = mongoose.model('Administradores', administradorSchema);
