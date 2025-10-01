const express = require('express');
const router = express.Router();
const materiaControles = require('../controles/materiaControles');

// Mostrar lista de materias
router.get('/', materiaControles.listar);

// Mostrar formulario para crear
router.get('/crear', (req,res) => {
    res.render('form', { materia: null });
});

// Procesar creación
router.post('/nuevo', materiaControles.crear);

// Mostrar formulario para editar
router.get('/editar/:id', (req,res) => {
    const materia = materiaControles.getById(req.params.id);
    res.render('form', { materia });
});

// Procesar edición
router.post('/editar/:id', materiaControles.editar);

// Eliminar
router.get('/eliminar/:id', materiaControles.eliminar);

// Votar
router.get('/votar/:id', materiaControles.votar);

module.exports = router;
