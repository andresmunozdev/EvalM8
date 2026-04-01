const medicos = require("../data/medicos");

const getAllMedicos = (req, res) => {
    return res.status(200).json(medicos);
    };

    const getMedicoById = (req, res) => {
    const id = Number(req.params.id);

    const medico = medicos.find((m) => m.id === id);

    if (!medico) {
        return res.status(404).json({
        message: "Médico no encontrado"
        });
    }

    return res.status(200).json(medico);
    };

    const createMedico = (req, res) => {
    const { nombre, especialidad, rut } = req.body;

    if (!nombre || !especialidad || !rut) {
        return res.status(400).json({
        message: "Todos los campos son obligatorios"
        });
    }

    const nuevoMedico = {
        id: medicos.length > 0 ? medicos[medicos.length - 1].id + 1 : 1,
        nombre,
        especialidad,
        rut
    };

    medicos.push(nuevoMedico);

    return res.status(201).json({
        message: "Médico creado correctamente",
        medico: nuevoMedico
    });
    };

    const updateMedico = (req, res) => {
    const id = Number(req.params.id);
    const { nombre, especialidad, rut } = req.body;

    const medico = medicos.find((m) => m.id === id);

    if (!medico) {
        return res.status(404).json({
        message: "Médico no encontrado"
        });
    }

    if (!nombre || !especialidad || !rut) {
        return res.status(400).json({
        message: "Todos los campos son obligatorios"
        });
    }

    medico.nombre = nombre;
    medico.especialidad = especialidad;
    medico.rut = rut;

    return res.status(200).json({
        message: "Médico actualizado correctamente",
        medico
    });
    };

    const deleteMedico = (req, res) => {
    const id = Number(req.params.id);

    const index = medicos.findIndex((m) => m.id === id);

    if (index === -1) {
        return res.status(404).json({
        message: "Médico no encontrado"
        });
    }

    const medicoEliminado = medicos.splice(index, 1);

    return res.status(200).json({
        message: "Médico eliminado correctamente",
        medico: medicoEliminado[0]
    });
};

module.exports = {
    getAllMedicos,
    getMedicoById,
    createMedico,
    updateMedico,
    deleteMedico
};