const express = require("express");
const router = express.Router();
const archivoController = require("../controllers/archivo.controller");
const verificarToken = require("../middlewares/auth.middleware");

router.post("/", verificarToken, archivoController.subirArchivo);
router.get("/", verificarToken, archivoController.listarArchivos);

module.exports = router;