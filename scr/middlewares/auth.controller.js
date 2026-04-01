const jwt = require("jsonwebtoken");
const usuarios = require("../data/usuarios");

const login = (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({
        message: "Email y password son obligatorios"
        });
    }

    const usuario = usuarios.find(
        (u) => u.email === email && u.password === password
    );

    if (!usuario) {
        return res.status(401).json({
        message: "Credenciales incorrectas"
        });
    }

    const token = jwt.sign(
        {
        id: usuario.id,
        email: usuario.email,
        nombre: usuario.nombre
        },
        process.env.JWT_SECRET,
        {
        expiresIn: process.env.JWT_EXPIRES
        }
    );

    return res.status(200).json({
        message: "Login exitoso",
        token
    });
};

module.exports = {
    login
};