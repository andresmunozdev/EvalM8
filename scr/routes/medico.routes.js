const express = require("express");
const router = express.Router();
const medicoController = require("../controllers/medico.controller");
const verificarToken = require("../middlewares/auth.middleware");

router.get("/", verificarToken, medicoController.getAllMedicos);
router.get("/:id", verificarToken, medicoController.getMedicoById);
router.post("/", verificarToken, medicoController.createMedico);
router.put("/:id", verificarToken, medicoController.updateMedico);
router.delete("/:id", verificarToken, medicoController.deleteMedico);

module.exports = router;