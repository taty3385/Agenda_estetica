const express = require('express');
const router = express.Router();
const controllerCitas = require('../controllers/citas');
const controllerUsuarios = require('../controllers/usuariosController');
const controllerServicios = require('../controllers/serviciosController');
const controllerAdmin = require('../controllers/adminController');
const { loginLimiter } = require('../middleware/loginLimiter');
const { validateEmailAndPassword } = require('../middleware/middleware');
const authMiddleware = require('../middleware/authMiddleware');



router.post('/citas', authMiddleware, controllerCitas.createCita);
router.delete('/citas/:id', authMiddleware, controllerCitas.cancelrCita);
router.get('/citas', authMiddleware, controllerCitas.getCitas);


router.post('/usuarios', validateEmailAndPassword, controllerUsuarios.createUsuario);
router.post('/usuarios/login', loginLimiter, validateEmailAndPassword, controllerUsuarios.loginUser);
router.get('/usuarios/:id' ,authMiddleware, controllerUsuarios.findUserById);
router.get('/usuarios', authMiddleware, controllerUsuarios.getUser);
router.delete('/usuarios/:id', authMiddleware, controllerUsuarios.deleteUser);
router.put('/usuarios/:id', authMiddleware, controllerUsuarios.editUser);




router.get('/servicios', controllerServicios.getAllServices);
router.post('/servicios', authMiddleware, controllerServicios.createService);
router.delete('/servicios/:id', authMiddleware, controllerServicios.deleteService);
router.put('/servicios/:id', authMiddleware, controllerServicios.updateService);
router.get('/servicios/:id', authMiddleware, controllerServicios.getServiceById);


router.post('/admin/', authMiddleware, controllerAdmin.createAdmin);
router.get('/admin/', authMiddleware, controllerAdmin.getAdmins);
router.get('/admin/:id', authMiddleware, controllerAdmin.findAdminById);
router.delete('/admin/:id', authMiddleware, controllerAdmin.deleteAdmin);
router.post('/admin/login', loginLimiter, controllerAdmin.loginAdmin);

module.exports = router;