require("dotenv").config();
const express = require("express");
const cors = require("cors");
const fileUpload = require("express-fileupload");

const authRoutes = require("./routes/auth.routes");
const pacienteRoutes = require("./routes/paciente.routes");
const medicoRoutes = require("./routes/medico.routes");
const archivoRoutes = require("./routes/archivo.routes");

const app = express();

app.use(cors());
app.use(express.json());

app.use(
    fileUpload({
        createParentPath: true
    })
);

app.get("/acerca", (req, res) => {
    return res.status(200).json({
        nombre: "API Clínica",
        version: "1.0.0",
        descripcion: "API REST para gestión de pacientes, médicos y exámenes en PDF",
        autor: "Andy"
    });
});

app.use(authRoutes);
app.use("/pacientes", pacienteRoutes);
app.use("/medicos", medicoRoutes);
app.use("/archivos", archivoRoutes);

app.use((req, res) => {
    return res.status(404).json({
        message: "Ruta no encontrada"
    });
});

module.exports = app;