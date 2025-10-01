const express = require('express');
const router = express.Router();
const materiaControles = require('../controles/materiaControles');


router.get('/', materiaControles.listar);


router.get('/crear', (req,res) => {
    res.render('form', { materia: null });
});


router.post('/nuevo', materiaControles.crear);


router.get('/editar/:id', (req,res) => {
    const id = req.params.id;
    materiaControles.getById(id, (err, materia) =>{
        if (err) return res.status(500).send("No se obtuvo la materia");
        res.render('form', {materia});
    });
});


router.post('/editar/:id', materiaControles.editar);


router.get('/eliminar/:id', materiaControles.eliminar);


router.get('/votar/:id', materiaControles.votar);

module.exports = router;
