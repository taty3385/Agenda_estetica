const modelUser = require('../model/usuarios');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userController = {
    createUsuario: async (req, res) => {
        try {
            const { nombre, email, password, rol } = req.body;

            const hashedPassword = await bcrypt.hash(password, 10);
            const newUser = new modelUser({ nombre, email, password: hashedPassword, rol });
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
            res.status(200).json({ message: "Usuarios obtenidos correctamente", usuarios: user });
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
            const { nombre, email, password } = req.body;
            const hashedPassword = await bcrypt.hash(password, 10);
            const updatedUser = await modelUser.findByIdAndUpdate(id, { nombre, email, password: hashedPassword }, { new: true });
            if (!updatedUser) {
                return res.status(404).json({ message: "Usuario no encontrado" });
            }
            res.status(200).json({ message: "Usuario actualizado correctamente", updatedUser });
        } catch (error) {
            res.status(500).json({ message: "Error al actualizar el usuario", error });
        }
    },

    loginUser: async (req, res) => {
        try {
            const { email, password } = req.body;
            const user = await modelUser.findOne({ email });
            if (!user) {
                return res.status(404).json({ message: "Usuario no encontrado" });
            }
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                return res.status(401).json({ message: "Contraseña incorrecta" });
            }
            const token = jwt.sign({ id: user._id, email: user.email, rol: user.rol }, process.env.JWT_SECRET, { expiresIn: '1h' });
          res.cookie('token', token,
              { httpOnly: true, secure:false , sameSite: 'strict',maxAge: 60 * 60 * 1000 });
          res.status(200).json({ message: "Inicio de sesión exitoso", token, user });
        } catch (error) {
            res.status(500).json({ message: "Error al iniciar sesión", error });
        }
    }
};

module.exports = userController;

