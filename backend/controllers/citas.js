
const modelCitas = require('../model/citas');

const controllerCitas = {
    createCita: async (req, res) => {
        try {
            const { fecha, servicio, telefono } = req.body;
            if (!fecha || !servicio || !telefono) {
                return res.status(400).json({ message: 'Faltan datos obligatorios' });
            }
            // Tomar el id del usuario autenticado
            const cliente = req.user.id;
            // Obtener hora actual en formato HH:mm
            const now = new Date();
            const hora = now.toTimeString().slice(0,5);
            const nuevaCita = new modelCitas({ cliente, fecha, servicio, hora, telefono });
            const savedCita = await nuevaCita.save();
            const citaConCliente = await modelCitas.findById(savedCita._id).populate('cliente', 'nombre email');
            res.status(201).json(citaConCliente);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    },
    cancelrCita: async (req, res) => {
        try {
            const { id } = req.params;
            const deletedCita = await modelCitas.findByIdAndDelete(id);
            if (!deletedCita) {
                return res.status(404).json({ message: 'Cita no encontrada' });
            }
            res.status(200).json({ message: 'Cita cancelada correctamente', deletedCita });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    getCitas: async (req, res) => {
        try {
            const citas = await modelCitas.find().populate('cliente', 'nombre email');
            res.status(200).json({ message: "Citas obtenidas correctamente", citas });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
};
module.exports = controllerCitas;