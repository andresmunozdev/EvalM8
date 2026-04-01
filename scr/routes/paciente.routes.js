const express = require("express");
const router = express.Router();
const pacienteController = require("../controllers/paciente.controller");
const verificarToken = require("../middlewares/auth.middleware");

router.get("/", verificarToken, pacienteController.getAllPacientes);
router.get("/:id", verificarToken, pacienteController.getPacienteById);
router.post("/", verificarToken, pacienteController.createPaciente);
router.put("/:id", verificarToken, pacienteController.updatePaciente);
router.delete("/:id", verificarToken, pacienteController.deletePaciente);

module.exports = router;