const express = require('express');
const router = express.Router();
const { obtenerUsuarios, crearUsuario } = require('../controllers/usuario.controller');

router.get('/', obtenerUsuarios);
router.post('/', crearUsuario);

module.exports = router;
