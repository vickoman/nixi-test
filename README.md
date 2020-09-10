## Nixi Test
Prueba tecnica para Nixi Creacion de API

El modelo es un TODO-LIST el modelo de entidades esta representado con el archivo entities.png

Necesitamos tener mongo instalado: y configurar las variables de entorno en la raiz del proyecto:

`
MONGO_URI=mongodb+srv://user:pas@host:port/nixi
JWT_SECRET=JWTSECRET
ENCRYPT_JWT_SECRET=JWTSECRET_ECNRYPT
JWT_EXPIRATION=3600
PORT=3000
`

Para ejecutar seria:

`npm install`
`npm run start:dev`

Que esta hecho:
[x] Pipeline CI/CD en buddy ver imagen buddy-deploy-pipeline.png
[x] Relacion en embebido de documentos User, Profile, List, Task
[x] Uso de Mongodb Atlas
[x] Uso de Heroku

Que no se hizo por falta de tiempo:
[x] Dockerizar la app
[x] Testear los servicios.

Saludos.
