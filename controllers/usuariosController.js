
const modelUser = require('../models/usuarios');

 const userController = {
    createUsuario: async (req, res) => {
        try {
            const { nombre, email, password } = req.body;
            const newUser = new modelUser({ nombre, email, password, rol });
            await newUser.save();
            res.status(201).json({ message: "usuario agregado correctamente", newUser });
        }
        catch (error) {
            res.status(500).json({ message: "Error al crear el usuario", error });
        }
    },
    getUser: async (req, res) => {
        try {
            const user = await modelUser.find();
            res.status(200).json({ message: "Usuarios obtenidos correctamente", usuarios });
        } catch (error) {
            res.status(500).json({ message: "Error al obtener los usuarios", error });
        }
    },
    findUserById: async (req, res) => {
        try {
            const { id } = req.params;
            const user = await modelUser.findById(id);
            if (!user) {
                return res.status(404).json({ message: "Usuario no encontrado" });
            }
            res.status(200).json({ message: "Usuario encontrado", user });
        } catch (error) {
            res.status(500).json({ message: "Error al obtener el usuario", error });
        }
    },

        deleteUser: async (req, res) => {
            try {
                const { id } = req.params;
                const deletedUser = await modelUser.findByIdAndDelete(id);
                if (!deletedUser) {
                    return res.status(404).json({ message: "Usuario no encontrado" });
                }
                res.status(200).json({ message: "Usuario eliminado correctamente", deletedUser });
            } catch (error) {
                res.status(500).json({ message: "Error al eliminar el usuario", error });
            }
    },

    editUser: async (req, res) => {
        try {
            const { id } = req.params;
            const { nombre, email, password, rol } = req.body;
            const updatedUser = await modelUser.findByIdAndUpdate(id, { nombre, email, password, rol }, { new: true });
            if (!updatedUser) {
                return res.status(404).json({ message: "Usuario no encontrado" });
            }
            res.status(200).json({ message: "Usuario actualizado correctamente", updatedUser });
        } catch (error) {
            res.status(500).json({ message: "Error al actualizar el usuario", error });
        }
    }
};

module.exports = userController;