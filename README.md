# Agenda Estética - Backend 💅

[![Node.js](https://img.shields.io/badge/Node.js-18.x-green)]()
[![Express](https://img.shields.io/badge/Express.js-Backend-blue)]()
[![MongoDB](https://img.shields.io/badge/Database-MongoDB-green)]()
[![License](https://img.shields.io/badge/license-MIT-yellow)]()

## 📖 Tabla de Contenido
- [Descripción](#descripción)
- [Requisitos previos](#requisitos-previos)
- [Instalación](#instalación)
- [Variables de entorno](#variables-de-entorno)
- [Seguridad](#seguridad)
- [Pruebas](#pruebas)
- [Tabla de Endpoints](#tabla-de-endpoints)
- [Documentación de Endpoints](#documentación-de-endpoints)
- [Colección de Postman](#colección-de-postman)
- [Errores comunes](#errores-comunes)
- [Licencia](#licencia)
- [Autor y contacto](#autor-y-contacto)

---

## Descripción
API RESTful para gestión de servicios, usuarios, citas y administradores en una estética. Incluye autenticación, validación, rate limiting y seguridad.

---

## ✅ Requisitos previos
- Node.js v18+
- MongoDB Atlas o local
- Postman (para pruebas)
- Git instalado

---

## Instalación
1. Clona el repositorio:
   ```bash
   git clone git@github.com:taty3385/Agenda_estetica.git
   ```
2. Instala dependencias:
   ```bash
   npm install
   ```
3. Configura tu base de datos MongoDB en `.env` y `config/dataBase.js`.
4. Inicia el servidor:
   ```bash
   node index.js
   ```

---

## Variables de entorno
Crea un archivo `.env` en la raíz del proyecto con:
```
MONGO_URI=tu_uri_de_mongodb
JWT_SECRET=tu_secreto_jwt
PORT=4000
```

---

## Seguridad
- Contraseñas hasheadas con bcrypt
- Validación de datos en endpoints
- Rate limiting en login
- Rutas protegidas por roles (admin/usuario)

---

## Pruebas
- Usa Postman para probar todos los endpoints
- Exporta tu colección y súbela aquí

---

## Tabla de Endpoints

| Método | Ruta                  | Descripción                       |
|--------|----------------------|-----------------------------------|
| POST   | /api/usuarios        | Crear usuario                     |
| POST   | /api/usuarios/login  | Login de usuario                  |
| GET    | /api/usuarios        | Obtener todos los usuarios        |
| GET    | /api/usuarios/:id    | Obtener usuario por ID            |
| PUT    | /api/usuarios/:id    | Actualizar usuario                |
| DELETE | /api/usuarios/:id    | Eliminar usuario                  |
| POST   | /api/citas           | Crear cita                        |
| GET    | /api/citas           | Obtener todas las citas           |
| GET    | /api/citas/:id       | Obtener cita por ID               |
| PUT    | /api/citas/:id       | Actualizar cita                   |
| DELETE | /api/citas/:id       | Eliminar cita                     |
| POST   | /api/servicios       | Crear servicio                    |
| GET    | /api/servicios       | Obtener todos los servicios       |
| GET    | /api/servicios/:id   | Obtener servicio por ID           |
| PUT    | /api/servicios/:id   | Actualizar servicio               |
| DELETE | /api/servicios/:id   | Eliminar servicio                 |
| POST   | /api/admin/login     | Login de administrador            |
| GET    | /api/admin           | Obtener todos los administradores |
| GET    | /api/admin/:id       | Obtener administrador por ID      |
| DELETE | /api/admin/:id       | Eliminar administrador            |

---

## Documentación de Endpoints

### Usuarios

**Registrar usuario**  
`POST /api/usuarios/registrar`
Body:
```json
{
  "nombre": "Ana",
  "email": "ana@email.com",
  "password": "123456"
}
```
Respuesta:
```json
{
  "message": "Usuario creado correctamente",
  "usuario": {
    "_id": "...",
    "nombre": "Ana",
    "email": "ana@email.com"
  }
}
```

**Login usuario**  
`POST /api/usuarios/login`
Body:
```json
{
  "email": "ana@email.com",
  "password": "123456"
}
```
Respuesta:
```json
{
  "token": "jwt_token"
}
```

**Obtener todos los usuarios**  
`GET /api/usuarios`
Respuesta:
```json
[
  {
    "_id": "...",
    "nombre": "Ana",
    "email": "ana@email.com"
  },
  // ...otros usuarios
]
```

**Actualizar usuario**  
`PUT /api/usuarios/:id`
Body:
```json
{
  "nombre": "Ana Actualizada"
}
```

**Obtener usuario por ID**  
`GET /api/usuarios/:id`
Respuesta:
```json
{
  "_id": "id_usuario",
  "nombre": "tamara",
  "email": "taty661@gmail.com",
  "rol": "usuario"
}
```

**Actualizar usuario**  
`PUT /api/usuarios/:id`
Body:
```json
{
  "nombre": "Ana Actualizada"
}
```
Respuesta:
```json
{
  "message": "Usuario actualizado correctamente",
  "usuario": {
    "_id": "id_usuario",
    "nombre": "Ana Actualizada",
    "email": "ana@email.com"
  }
}
```

**Eliminar usuario**  
`DELETE /api/usuarios/:id`
```json
{
    "message": "Usuario eliminado correctamente",
    "deletedUser": {
        "_id": "68cdad6befdfb1b969d0478d",
        "nombre": "bianca",
        "email": "bianca@gmail.com",
        "rol": "usuario",
        
    }
}



```

### Servicios

**Obtener servicio por ID**  
`GET /api/servicios/:id`
Respuesta:
```json
{
  "_id": "id_servicio",
  "nombre": "Manicura",
  "descripcion": "Servicio de uñas",
  "precio": 500,
  "duracion": "60 min"
}
```

**Actualizar servicio**  
`PUT /api/servicios/:id`
Body:
```json
{
  "precio": 600
}
```
Respuesta:
```json
{
  "message": "Servicio actualizado correctamente",
  "servicio": {
    "_id": "id_servicio",
    "nombre": "Manicura",
    "descripcion": "Servicio de uñas",
    "precio": 600,
    "duracion": "60 min "
  }
}
```

**Eliminar servicio**  
`DELETE /api/servicios/:id`
```json
{
    "message": "Servicio eliminado correctamente",
    "deletedService": {
        "_id": "68d1a45706eb115902d8f37b",
        "nombre": "Tratamiento capilar nutritivo",
        "descripcion": "Hidratación profunda con mascarilla nutritiva y masaje capilar",
        "precio": 3000,
        "duracion": "40 min"
    }
}
```

**Crear servicio**  
`POST /api/servicios`
Body:
```json
{
  "nombre": "Masaje relajante",
  "descripcion": "Masaje de 60 minutos para relajar cuerpo y mente",
  "precio": 3500,
  "duracion": "60 min"
}
```
Respuesta:
```json
{
  "message": "Servicio creado correctamente",
  "servicio": {
    "_id": "id_servicio",
    "nombre": "Masaje relajante",
    "descripcion": "Masaje de 60 minutos para relajar cuerpo y mente",
    "precio": 3500,
    "duracion": "60 min"
  }
}
```

---


### Citas

**Crear cita**  
`POST /api/citas`
Body:
```json
{
  "fecha": "2011-05-10T03:00:00.000Z",
  "hora": "15:51",
  "servicio": "Corte de pelo",
  "cliente": "68cc6ce9d314d460440f9958",
  "telefono": "1128593429",
  
}
```
Respuesta:
```json
{
  "_id": "68dad52c81bedd8ddc98b872",
  "fecha": "2011-05-10T03:00:00.000Z",
  "hora": "15:51",
  "servicio": "Corte de pelo",
  "cliente": {
    "_id": "68cc6ce9d314d460440f9958",
    "nombre": "nicole",
    "email": "nicole@gmail.com"
  },
  "telefono": "1128593429",
  "estado": "pendiente",
  "__v": 0
}
```

**Obtener todas las citas**  
`GET /api/citas`
Respuesta:
```json
[
  {
  "message": "Citas obtenidas correctamente",
  "citas": [
    {
      "_id": "68cd9138cf15a64fc101a86f",
      "fecha": "2025-09-20T10:00:00.000Z",
      "hora": "14:22",
      "servicio": "Corte de pelo",
      "cliente": {
        "_id": "68cc6ce9d314d460440f9958",
        "nombre": "nicole",
        "email": "nicole@gmail.com"
      },
      "telefono": "1128593429",
      "estado": "pendiente",
      "__v": 0
    },
    // ...otras citas
  ]

```

**Eliminar cita**  
`DELETE /api/citas/:id`
Respuesta:
```json
{
  "message": "Cita eliminada correctamente"
}
```

---

### Administradores

**Login administrador**  
`POST /api/admin/login`
Body:
```json
{
  "email": "admin1@correo.com",
  "password": "123456"
}
```
Respuesta:
```json
{
    "message": "Inicio de sesión exitoso",
    "admin": {
        "_id": "68cd9c68d830341ae68bfbf3",
        "nombre": "admin1",
        "email": "admin1@correo.com",
        "rol": "admin",
        
    }
}
```

**Obtener administradores**  
`GET /api/admin`
Respuesta:
```json
{
  "message": "Administradores obtenidos correctamente",
  "admins": [
    {
      "_id": "68ed9c68d830341ae68bfbf3",
      "nombre": "admin1",
      "email": "admin1@correo.com",
      "rol": "admin",
     
    }
    // ...otros administradores
  ]
}
```

**Obtener administrador por ID**  
`GET /api/admin/:id`
Respuesta:
```json
{
  "message": "Administrador encontrado",
  "admin": {
    "_id": "68cd9c68d830341ae68bfbf3",
    "nombre": "admin1",
    "email": "admin1@correo.com",
    "rol": "admin"
  }
}
```

**Eliminar administrador**  
`DELETE /api/admin/:id`
Respuesta:
```json
{
  "message": "Administrador eliminado correctamente"
}
```

---

## Colección de Postman
Puedes descargar y usar la colección de Postman para probar los endpoints de la API:
[Descargar colección de Postman](./integrador%20agenda%20Estetica.postman_collection.json)

---

## Errores comunes
- **Token inválido o expirado:** Verifica que el token JWT esté vigente y correcto.
- **Usuario no encontrado:** El email ingresado no existe en la base de datos.
- **Contraseña incorrecta:** La contraseña no coincide con el usuario.
- **Acceso solo para administradores:** Intenta acceder a rutas protegidas sin el rol adecuado.

---

## Licencia
Este proyecto está bajo la licencia MIT.

---

## Autor y contacto
- Autor: Tamara Zarate
- Email: tatyy661@gmail.com
- GitHub: [taty3385](https://github.com/taty3385)

---





