# SSM-ADM Backend

Servidor backend del sistema **StoreStockManager (SSM)** para el entorno de administrador. Desarrollado con Node.js y Express, provee una API REST para autenticación de usuarios con roles.

---

## Requisitos previos

| Herramienta | Version minima | Como verificar |
|-------------|---------------|----------------|
| Node.js | v20.x o superior | `node -v` |
| npm | v10.x o superior | `npm -v` |
| MySQL | 8.x | `mysql --version` |

---

## Dependencias

### Produccion

| Paquete | Version | Descripcion |
|---------|---------|-------------|
| express | ^5.2.1 | Framework web para Node.js |
| mysql2 | ^3.20.0 | Conector MySQL para Node.js |
| bcryptjs | ^3.0.3 | Encriptacion de contrasenas |
| jsonwebtoken | ^9.0.3 | Autenticacion mediante tokens JWT |
| dotenv | ^17.4.1 | Gestion de variables de entorno |
| cors | ^2.8.6 | Manejo de politicas de origen cruzado |

### Desarrollo

| Paquete | Version | Descripcion |
|---------|---------|-------------|
| nodemon | ^3.1.14 | Reinicio automatico del servidor al guardar cambios |

> **Nota:** `socket.io` aparece en el package.json pero no se utiliza en este proyecto. Puede ser eliminado.

---

## Instalacion

```bash
# 1. Clonar o descargar el proyecto
cd backend-ssm-adm

# 2. Instalar dependencias
npm install

# 3. Crear el archivo .env en la raiz del proyecto
```

---

## Variables de entorno (.env)

Crea un archivo `.env` en la raiz del proyecto con el siguiente contenido:

```env
PORT=3002
DB_HOST=localhost
DB_USER=ssm_adm
DB_PASSWORD=ssm_adm_2026
DB_NAME=ssm_adm
JWT_SECRET=ssm_adm_secret_2026
```

| Variable | Descripcion |
|----------|-------------|
| PORT | Puerto donde corre el servidor |
| DB_HOST | Host de la base de datos MySQL |
| DB_USER | Usuario de MySQL |
| DB_PASSWORD | Contrasena de MySQL |
| DB_NAME | Nombre de la base de datos |
| JWT_SECRET | Clave secreta para firmar los tokens JWT |

---

## Base de datos

Ejecuta el siguiente script SQL para crear la base de datos y las tablas necesarias:

```sql
CREATE DATABASE ssm_adm;
USE ssm_adm;

CREATE TABLE usuarios (
  idusuario INT AUTO_INCREMENT,
  nombre_usuario VARCHAR(50) NOT NULL UNIQUE,
  email VARCHAR(100) NOT NULL UNIQUE,
  contrasena VARCHAR(255) NOT NULL,
  rol ENUM('administrador', 'vendedor') NOT NULL DEFAULT 'vendedor',
  fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY(idusuario)
);

CREATE TABLE productos (
  idproducto INT AUTO_INCREMENT,
  nombre VARCHAR(100) NOT NULL UNIQUE,
  precio DECIMAL(10,2) NOT NULL,
  stock INT NOT NULL DEFAULT 0,
  stock_minimo INT NOT NULL DEFAULT 0,
  categoria VARCHAR(50),
  activo TINYINT(1) DEFAULT 1,
  PRIMARY KEY(idproducto)
);
```

---

## Iniciar el servidor

```bash
# Modo desarrollo (con nodemon)
npm run dev

# Modo produccion
npm start
```

---

## Rutas disponibles

| Metodo | Ruta | Descripcion | Autenticacion |
|--------|------|-------------|---------------|
| POST | /api/auth/register | Registrar nuevo usuario | No |
| POST | /api/auth/login | Iniciar sesion | No |

### Ejemplo de registro

```json
POST /api/auth/register
{
  "nombre_usuario": "Felipe",
  "email": "felipe@ssm.cl",
  "contrasena": "123456",
  "rol": "administrador"
}
```

### Ejemplo de login

```json
POST /api/auth/login
{
  "email": "felipe@ssm.cl",
  "contrasena": "123456"
}
```

### Respuesta del login

```json
{
  "message": "Login exitoso",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "id": 1,
  "nombre": "Felipe",
  "rol": "administrador"
}
```

---

## Estructura del proyecto

```
backend-ssm-adm/
├── src/
│   ├── config/
│   │   └── db.js              <- Conexion a MySQL
│   ├── controllers/
│   │   └── auth.controller.js <- Logica de login y register
│   ├── models/
│   │   └── auth.model.js      <- Consultas a la base de datos
│   └── routes/
│       └── auth.routes.js     <- Definicion de rutas
├── .env                       <- Variables de entorno (no subir a Git)
├── .gitignore
├── package.json
└── server.js                  <- Punto de entrada del servidor
```

---

## Equipo

Proyecto desarrollado para la asignatura Ingenieria de Software — Universidad de Tarapaca, 2026.

Integrantes: Felipe | Ariel | Wilson
