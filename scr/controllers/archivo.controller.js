const fs = require("fs");
const path = require("path");

const subirArchivo = (req, res) => {
    if (!req.files || !req.files.archivo) {
        return res.status(400).json({
        message: "Debe enviar un archivo PDF"
        });
    }

    const archivo = req.files.archivo;

    const extension = path.extname(archivo.name).toLowerCase();

    if (extension !== ".pdf" || archivo.mimetype !== "application/pdf") {
        return res.status(400).json({
        message: "Solo se permiten archivos PDF"
        });
    }

    const nombreFinal = Date.now() + "_" + archivo.name;
    const rutaDestino = path.join(__dirname, "..", "uploads", nombreFinal);

    archivo.mv(rutaDestino, (error) => {
        if (error) {
        return res.status(500).json({
            message: "Error al subir el archivo"
        });
        }

        return res.status(201).json({
        message: "Archivo subido correctamente",
        archivo: nombreFinal
        });
    });
    };

    const listarArchivos = (req, res) => {
    const rutaUploads = path.join(__dirname, "..", "uploads");

    fs.readdir(rutaUploads, (error, archivos) => {
        if (error) {
        return res.status(500).json({
            message: "Error al listar archivos"
        });
        }

        return res.status(200).json({
        archivos
        });
    });
};

module.exports = {
    subirArchivo,
    listarArchivos
};