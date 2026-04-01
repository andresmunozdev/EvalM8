const pacientes = require("../data/pacientes");

const getAllPacientes = (req, res) => {
    return res.status(200).json(pacientes);
    };

    const getPacienteById = (req, res) => {
    const id = Number(req.params.id);

    const paciente = pacientes.find((p) => p.id === id);

    if (!paciente) {
        return res.status(404).json({
        message: "Paciente no encontrado"
        });
    }

    return res.status(200).json(paciente);
    };

    const createPaciente = (req, res) => {
    const { nombre, edad, rut, diagnostico } = req.body;

    if (!nombre || !edad || !rut || !diagnostico) {
        return res.status(400).json({
        message: "Todos los campos son obligatorios"
        });
    }

    if (typeof edad !== "number") {
        return res.status(400).json({
        message: "La edad debe ser numérica"
        });
    }

    const nuevoPaciente = {
        id: pacientes.length > 0 ? pacientes[pacientes.length - 1].id + 1 : 1,
        nombre,
        edad,
        rut,
        diagnostico
    };

    pacientes.push(nuevoPaciente);

    return res.status(201).json({
        message: "Paciente creado correctamente",
        paciente: nuevoPaciente
    });
    };

    const updatePaciente = (req, res) => {
    const id = Number(req.params.id);
    const { nombre, edad, rut, diagnostico } = req.body;

    const paciente = pacientes.find((p) => p.id === id);

    if (!paciente) {
        return res.status(404).json({
        message: "Paciente no encontrado"
        });
    }

    if (!nombre || !edad || !rut || !diagnostico) {
        return res.status(400).json({
        message: "Todos los campos son obligatorios"
        });
    }

    if (typeof edad !== "number") {
        return res.status(400).json({
        message: "La edad debe ser numérica"
        });
    }

    paciente.nombre = nombre;
    paciente.edad = edad;
    paciente.rut = rut;
    paciente.diagnostico = diagnostico;

    return res.status(200).json({
        message: "Paciente actualizado correctamente",
        paciente
    });
    };

    const deletePaciente = (req, res) => {
    const id = Number(req.params.id);

    const index = pacientes.findIndex((p) => p.id === id);

    if (index === -1) {
        return res.status(404).json({
        message: "Paciente no encontrado"
        });
    }

    const pacienteEliminado = pacientes.splice(index, 1);

    return res.status(200).json({
        message: "Paciente eliminado correctamente",
        paciente: pacienteEliminado[0]
    });
};

module.exports = {
    getAllPacientes,
    getPacienteById,
    createPaciente,
    updatePaciente,
    deletePaciente
};