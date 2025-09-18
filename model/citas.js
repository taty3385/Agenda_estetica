const mongoose = require('mongoose');

const citasSchema = new mongoose.Schema({
    fecha: {type: Date, required: true},
    hora: {type: String, required: true},
    servicio: {type: String, required: true},
    cliente: {type: String, required: true},
    telefono: {type: String, required: true},
    estado: {type: String, enum: ['pendiente', 'confirmada', 'cancelada'], default: 'pendiente'}
})
    