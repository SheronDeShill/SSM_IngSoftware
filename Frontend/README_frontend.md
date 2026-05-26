# SSM-ADM Frontend

Aplicacion web del sistema **StoreStockManager (SSM)** para el entorno de administrador. Desarrollada con Angular 21, provee la interfaz de usuario para autenticacion y gestion del sistema.

---

## Requisitos previos

| Herramienta | Version minima | Como verificar |
|-------------|---------------|----------------|
| Node.js | v20.x o superior | `node -v` |
| npm | v11.x o superior | `npm -v` |
| Angular CLI | v21.x o superior | `ng version` |

### Instalar Angular CLI

```bash
sudo npm install -g @angular/cli
```

---

## Dependencias

### Produccion

| Paquete | Version | Descripcion |
|---------|---------|-------------|
| @angular/common | ^21.2.0 | Modulo base de Angular |
| @angular/compiler | ^21.2.0 | Compilador de Angular |
| @angular/core | ^21.2.0 | Nucleo de Angular |
| @angular/forms | ^21.2.0 | Manejo de formularios |
| @angular/platform-browser | ^21.2.0 | Renderizado en el navegador |
| @angular/router | ^21.2.0 | Enrutamiento entre vistas |
| rxjs | ~7.8.0 | Programacion reactiva |
| tslib | ^2.3.0 | Libreria de utilidades TypeScript |

### Desarrollo

| Paquete | Version | Descripcion |
|---------|---------|-------------|
| @angular/build | ^21.2.4 | Herramientas de build de Angular |
| @angular/cli | ^21.2.4 | Interfaz de linea de comandos de Angular |
| @angular/compiler-cli | ^21.2.0 | Compilador para desarrollo |
| typescript | ~5.9.2 | Lenguaje de programacion |
| prettier | ^3.8.1 | Formateador de codigo |
| vitest | ^4.0.8 | Framework de pruebas |

> **Nota:** `ngx-socket-io` aparece en el package.json pero no se utiliza en este proyecto. Puede ser eliminado.

---

## Instalacion

```bash
# 1. Clonar o descargar el proyecto
cd frontend-ssm-adm

# 2. Instalar dependencias
npm install
```

---

## Variables de entorno

Los archivos de entorno se encuentran en `src/app/Enviroments/`:

**`env.ts`** (unico entorno por ahora):
```ts
export const environment = {
  production: false,
  apiUrl: 'http://192.168.50.21/ssm-adm/api',
};
```

> Cambia la `apiUrl` si el servidor tiene una IP diferente.

---

## Iniciar en modo desarrollo local

```bash
ng serve
```

Abre el navegador en `http://localhost:4200`

---

## Compilar y desplegar en el servidor

```bash
# Compilar
ng build --base-href /frontend-ssm-adm/

# Copiar al servidor web
sudo mkdir -p /var/www/ssm-adm
sudo cp -r dist/frontend-chat/browser/* /var/www/ssm-adm/
sudo chmod -R 755 /var/www/ssm-adm/
```

Una vez desplegado, accede desde:
```
http://192.168.50.21/frontend-ssm-adm/
```

---

## Estructura del proyecto

```
frontend-ssm-adm/
├── src/
│   ├── app/
│   │   ├── Enviroments/
│   │   │   └── env.ts             <- Variables de entorno
│   │   ├── login/
│   │   │   ├── login.ts           <- Componente de login
│   │   │   ├── login.html         <- Vista del login
│   │   │   └── login.css          <- Estilos del login
│   │   ├── register/
│   │   │   ├── register.ts        <- Componente de registro
│   │   │   ├── register.html      <- Vista del registro
│   │   │   └── register.css       <- Estilos del registro
│   │   ├── auth.ts                <- Servicio de autenticacion HTTP
│   │   └── app.routes.ts          <- Definicion de rutas
│   ├── styles.css                 <- Estilos globales
│   └── main.ts                    <- Punto de entrada
├── angular.json                   <- Configuracion de Angular
├── package.json
└── tsconfig.app.json
```

---

## Rutas de la aplicacion

| Ruta | Componente | Descripcion |
|------|-----------|-------------|
| /login | LoginComponent | Pantalla de inicio de sesion |
| /register | RegisterComponent | Pantalla de registro de usuario |
| / | — | Redirige a /login |

---

## Configuracion de Nginx (referencia)

Para servir el frontend correctamente en el servidor, agregar en la configuracion de Nginx:

```nginx
location /frontend-ssm-adm/ {
    alias /var/www/ssm-adm/;
    index index.html;
    try_files $uri $uri/ @frontend_ssm_adm;
}

location @frontend_ssm_adm {
    rewrite ^/frontend-ssm-adm/(.*)$ /frontend-ssm-adm/index.html last;
}
```

---

## Equipo

Proyecto desarrollado para la asignatura Ingenieria de Software — Universidad de Tarapaca, 2026.

Integrantes: Felipe | Ariel | Wilson
