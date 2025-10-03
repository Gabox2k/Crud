const express = require('express');
const router = express.Router();
const temaControles = require('../controles/temaControles');
const { route } = require('./materiaRutas');

router.get('/materias/:materiaId/temas', temaControles.listarTemas);

router.get('/materias/:materiaId/temas/crear', (req, res) =>{
    const materiaId = req.params.materiaId;
    res.render('temas/form', { tema: null, materiaId});
});

router.post('/materias/:materiaId/temas/nuevo', temaControles.crear);

router.get('/temas/editar/:id', temaControles.formEditar);
router.post('/temas/editar/:id', temaControles.actualizar);

router.get('/temas/eliminar/:id', temaControles.eliminar);

router.get('/temas/votar/:id', temaControles.votar);
router.get('/temas/desvotar/:id', temaControles.desvotar);

module.exports = router;
