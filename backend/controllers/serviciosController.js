
const Service = require('../model/servicios');


const controllerServices = {
    getAllServices: async (req, res) => {
        try {
            const services = await Service.find();
            res.status(200).json({ message: "Servicios obtenidos correctamente", services });
        } catch (error) {
            res.status(500).json({ message: "Error al obtener los servicios", error });
        }
    },
    createService: async (req, res) => {
        try {
            const { nombre, descripcion, precio, duracion } = req.body;
            if (!nombre || !descripcion || !precio || !duracion) {
                return res.status(400).json({ message: 'Faltan datos obligatorios' });
            }
            const newService = new Service({ nombre, descripcion, precio, duracion });
            await newService.save();
            res.status(201).json({ message: "Servicio creado correctamente", newService });
        } catch (error) {
            res.status(500).json({ message: "Error al crear el servicio", error });
        }
    },
    deleteService: async (req, res) => {
        try {
            const { id } = req.params;
            const deletedService = await Service.findByIdAndDelete(id);
            if (!deletedService) {
                return res.status(404).json({ message: "Servicio no encontrado" });
            }
            res.status(200).json({ message: "Servicio eliminado correctamente", deletedService });
        } catch (error) {
            res.status(500).json({ message: "Error al eliminar el servicio", error });
        }
    },
    updateService: async (req, res) => {
        try {
            const { id } = req.params;
            const { nombre, descripcion, precio, duracion } = req.body;
            const updatedService = await Service.findByIdAndUpdate(id, { nombre, descripcion, precio, duracion }, { new: true });
            if (!updatedService) {
                return res.status(404).json({ message: "Servicio no encontrado" });
            }
            res.status(200).json({ message: "Servicio actualizado correctamente", updatedService });
        } catch (error) {
            res.status(500).json({ message: "Error al actualizar el servicio", error });
        }
    },
    getServiceById: async (req, res) => {
        try {
            const { id } = req.params;
            const service = await Service.findById(id);
            if (!service) {
                return res.status(404).json({ message: "Servicio no encontrado" });
            }
            res.status(200).json({ message: "Servicio encontrado", service });
        } catch (error) {
            res.status(500).json({ message: "Error al obtener el servicio", error });
        }
    },

    deleteService: async (req, res) => {
        try {
            const { id } = req.params;
            const deletedService = await Service.findByIdAndDelete(id);
            if (!deletedService) {
                return res.status(404).json({ message: "Servicio no encontrado" });
            }
            res.status(200).json({ message: "Servicio eliminado correctamente", deletedService });
        } catch (error) {
            res.status(500).json({ message: "Error al eliminar el servicio", error });
        }
    },

};

module.exports = controllerServices;