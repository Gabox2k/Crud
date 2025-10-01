const express = require('express');
const router = express.Router();
const materiaControles = require('../controles/materiaControles');

router.get('/', materiaControles.listar);
router.get('/nuevo', (req, res) => req.render('materias/form', {materia: null}));

router.post('/nuevo', materiaControles.crear);

router.get('/editar/:id', (req, res) => {
    const materia = materiaControles.getById(req.params.id);
    res.render('form', {materia});
})

router.post('/editar/:id', materiaControles.editar);

router.get('/eliminar/:id', materiaControles.eliminar);

router.get('/votar/:id', materiaControles.votar);

module.exports = router;