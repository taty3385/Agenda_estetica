
const modelCitas = require('../models/citas');

const controllerCitas = {
    createCita: async (req, res) => {
        try {
            const { cliente, fecha, servicio } = req.body;
            if (!cliente || !fecha || !servicio) {
                return res.status(400).json({ message: 'Faltan datos obligatorios' });
            }
            const nuevaCita = new modelCitas({ cliente, fecha, servicio });
            const savedCita = await nuevaCita.save();
            res.status(201).json(savedCita);
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
            const citas = await modelCitas.find();
            res.status(200).json({ message: "Citas obtenidas correctamente", citas });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
};
module.exports = controllerCitas;