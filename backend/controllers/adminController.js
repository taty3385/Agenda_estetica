const adminModel = require("../model/administrador");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const adminController = {
  createAdmin: async (req, res) => {
    try {
      const { nombre, email, password, rol } = req.body;
      const hashedPassword = await bcrypt.hash(password, 10);
      const newAdmin = new adminModel({
        nombre,
        email,
        password: hashedPassword,
        rol,
      });
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
      res.status(200).json({
        message: "Administrador eliminado correctamente",
        deletedAdmin,
      });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error al eliminar el administrador", error });
    }
  },
  loginAdmin: async (req, res) => {
    try {
      const { email, password } = req.body;
      const admin = await adminModel.findOne({ email });
      if (!admin) {
        return res.status(404).json({ message: "Administrador no encontrado" });
      }
      const isMatch = await bcrypt.compare(password, admin.password);
      if (!isMatch) {
        return res.status(401).json({ message: "Contraseña incorrecta" });
      }
      const token = jwt.sign({ id: admin._id, email: admin.email, rol: admin.rol }, process.env.JWT_SECRET, { expiresIn: "1h" }
      );
      res.cookie("token", token, {
        httpOnly: true,
        secure: false, // true si usas HTTPS
        sameSite: "strict",
        maxAge: 60 * 60 * 1000,
      });
      res.status(200).json({ message: "Inicio de sesión exitoso", admin });
    } catch (error) {
      res.status(500).json({ message: "Error al iniciar sesión", error });
    }
  },
};

module.exports = adminController;
