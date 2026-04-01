# API Clínica M8

API REST desarrollada con **Node.js** y **Express** para la gestión de pacientes y médicos de una clínica, utilizando arreglos en memoria, autenticación con **JWT** y subida de archivos **PDF**.

## Descripción

Esta aplicación permite:

- iniciar sesión mediante login
- consultar información pública de la API
- gestionar pacientes con operaciones CRUD
- gestionar médicos con operaciones CRUD
- subir exámenes en formato PDF
- listar los archivos subidos al servidor
- proteger rutas privadas mediante token JWT

## Tecnologías utilizadas

- Node.js
- Express
- JWT (`jsonwebtoken`)
- dotenv
- cors
- express-fileupload

## Instalación

1. Clonar o descargar el proyecto.
2. Abrir la carpeta en VS Code.
3. Instalar dependencias:

bash
npm install 

4. Reemplazar archivo .env.para.evaluacion por .env