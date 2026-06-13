# Proyecto SSM IngSoftware
Proyecto para Ingenieria de Software/ sistemas de informacion

DIAGRAMA (Link escalidraw):
https://excalidraw.com/#room=b3c264584a33a6712744,5dp9DEt77sifhOinvWR_NQ

# dependencias backend
npm install
npm install express mysql2 bcryptjs jsonwebtoken dotenv cors
npm install --save-dev nodemon
npm install cors

# dependencias frontend
npm install
npm install -g @angular/cli


# backend start
npm run dev

# frontend start
ng serve

.env.template
DB_HOST=localhost
DB_USER=tu_usuario_de_mysql
DB_PASSWORD=tu_contraseña_de_mysql
DB_NAME=nombre_de_la_base_de_datos
PORT=3002

env.ts.template:
export const environment = {
  production: false,
  apiUrl: 'http://localhost:3000/api', 
  socketUrl: 'http://localhost:3000',
  socketPath: '/socket.io'
};



para iniciar el sistema dev:
en backend (.env.dev): $env:NODE_ENV="production"; node server.js
en frontend(env.ts): ng serve
