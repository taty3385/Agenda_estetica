const adminModel = require("../models/administrador");

const adminController = {
  createAdmin: async (req, res) => {
    try {
      const { nombre, email, password } = req.body;
      const newAdmin = new adminModel({ nombre, email, password });
      await newAdmin.save();
      res
        .status(201)
        .json({ message: "Administrador agregado correctamente", newAdmin });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error al crear el administrador", error });
    }
  },

  getAdmins: async (req, res) => {
    try {
      const admins = await adminModel.find();
      res
        .status(200)
        .json({ message: "Administradores obtenidos correctamente", admins });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error al obtener los administradores", error });
    }
  },

  findAdminById: async (req, res) => {
    try {
      const { id } = req.params;
      const admin = await adminModel.findById(id);
      if (!admin) {
        return res.status(404).json({ message: "Administrador no encontrado" });
      }
      res.status(200).json({ message: "Administrador encontrado", admin });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error al obtener el administrador", error });
    }
  },
  deleteAdmin: async (req, res) => {
    try {
      const { id } = req.params;
      const deletedAdmin = await adminModel.findByIdAndDelete(id);
      if (!deletedAdmin) {
        return res.status(404).json({ message: "Administrador no encontrado" });
      }
      res
        .status(200)
        .json({
          message: "Administrador eliminado correctamente",
          deletedAdmin,
        });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error al eliminar el administrador", error });
    }
  },
};

module.exports = adminController;
