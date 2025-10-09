const express = require('express');
const router = express.Router();
const materiaControles = require('../controles/materiaControles');

//Mostra todas las materias
router.get('/', materiaControles.listar);


//Mostar las nuevas materias creadas
router.get('/crear', (req,res) => {
    res.render('form', { materia: null });
});


//Guarda las nuevas materias
router.post('/nuevo', materiaControles.crear);


//Mostra la edicion de las materias
router.get('/editar/:id', (req,res) => {
    const id = req.params.id;
    materiaControles.getById(id, (err, materia) =>{
        if (err) return res.status(500).send("No se obtuvo la materia");
        res.render('form', {materia});
    });
});


//Edita las materias
router.post('/editar/:id', materiaControles.editar);

//Elimina las materias
router.get('/eliminar/:id', materiaControles.eliminar);

//Mostra el voto y el desvoto de las materias
router.get('/votar/:id', materiaControles.votar);
router.get('/desvotar/:id', materiaControles.desvotar);

module.exports = router;
