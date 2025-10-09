const express = require('express');
const router = express.Router();
const temaControles = require('../controles/temaControles');

//Lista los temas por materia
router.get('/materias/:materiaId/temas', temaControles.listarTemas);

//Crea un formulario de nuevos temas
router.get('/materias/:materiaId/temas/crear', (req, res) =>{
    const materiaId = req.params.materiaId;
    res.render('temas/form', { tema: null, materiaId});
});

//Crea nuevos temas
router.post('/materias/:materiaId/temas/nuevo', temaControles.crear);

//Edita los temas
router.get('/temas/editar/:id', temaControles.formEditar);
router.post('/temas/editar/:id', temaControles.actualizar);

//Elimina los temas
router.get('/temas/eliminar/:id', temaControles.eliminar);

//Vota y desvota los temas
router.get('/temas/votar/:id', temaControles.votar);
router.get('/temas/desvotar/:id', temaControles.desvotar);

module.exports = router;
