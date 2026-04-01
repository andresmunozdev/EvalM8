# Repositorio

https://github.com/andresmunozdev/EvalM8


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

1. Clonar o descargar el proyecto. (https://github.com/andresmunozdev/EvalM8.git) 
2. Abrir la carpeta en VS Code.
3. Instalar dependencias:

bash
npm install 

4. Reemplazar archivo .env.para.evaluacion por .env


## Endpoints públicos

La API cuenta con los siguientes endpoints públicos:

- `GET /acerca`
- `POST /login`

## Endpoints privados (se mencionan solo por ser para fines académicos)

La API cuenta con los siguientes endpoints privados:

Pacientes (Privado)
	•	GET /pacientes
	•	GET /pacientes/:id
	•	POST /pacientes
	•	PUT /pacientes/:id
	•	DELETE /pacientes/:id

Médicos (Privado)
	•	GET /medicos
	•	GET /medicos/:id
	•	POST /medicos
	•	PUT /medicos/:id
	•	DELETE /medicos/:id

Archivos (Privado)
	•	POST /archivos → subir archivos PDF
	•	GET /archivos → listar archivos subidos


