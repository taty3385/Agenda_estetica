const express = require('express');
const router = express.Router();
const controllerCitas = require('../controllers/citas');
const controllerUsuarios = require('../controllers/usuariosController');
const controllerServicios = require('../controllers/serviciosController');
const  controllerAdmin  = require('../controllers/adminController');


// Rutas para citas
router.post('/citas', controllerCitas.createCita);
router.delete('/citas/:id', controllerCitas.cancelrCita);
router.get('/citas', controllerCitas.getCitas);

// Rutas para usuarios
router.post('/usuarios', controllerUsuarios.createUsuario);
router.post('/usuarios/login', controllerUsuarios.getUser);
router.get('/usuarios/:id', controllerUsuarios.findUserById);
router.delete('/usuarios/:id', controllerUsuarios.deleteUser);
router.put('/usuarios/:id', controllerUsuarios.editUser);


// Rutas para servicios

router.get('/servicios', controllerServicios.getAllServices);
router.post('/servicios', controllerServicios.createService);
router.delete('/servicios/:id', controllerServicios.deleteService);
router.put('/servicios/:id', controllerServicios.updateService);
router.get('/servicios/:id', controllerServicios.getServiceById);


// Rutas para admin
router.post('/admin/login', controllerAdmin.createAdmin);
router.get('/admin/usuarios', controllerAdmin.getAdmins);
router.get('/admin/citas', controllerAdmin.findAdminById);
router.delete('/admin/servicios', controllerAdmin.getAllServices);

