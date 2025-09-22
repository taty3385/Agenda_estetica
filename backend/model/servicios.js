const mongoose = require('mongoose');

const serviciosSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    precio: {
        type: Number,
        required: true
    },
    duracion: {
        type: String,
        required: true
    },
    dias: {
        type: [String]
    }
});

module.exports = mongoose.model('Servicios', serviciosSchema);
