const Tema = require('../modelo/temaModel');

//Lista para los temas por materia
exports.listarTemas = (req, res) =>{
    const materiaId = req.params.materiaId;
    Tema.getAllByMateria(materiaId, (err,temas) =>{
        if (err) return res.status(500).send("No se pudo tener los temas");
        res.render('temas/index', {temas, materiaId});
    });
}

//Crea nuevos temas
exports.formCrear = (req, res) => {
    const materiaId = req.params.materiaId;
    res.render('temas/crear', {materiaId});
}

//Se crea nuevos temas
exports.crear = (req,res) => {
    const {titulo, materiaId} = req.body;
    Tema.crear(titulo,materiaId, (err) =>{
        if (err) return res.status(500).send("No se pudo crear el tema");
        res.redirect(`/materias/${materiaId}/temas`);
    });
}

//Edita los temas
exports.formEditar = (req, res) => {
    const id = req.params.id;
    const materiaId = req.query.materiaId;
    Tema.getById(id, (err,tema)=>{
        if (err) return res.status(500).send("No se pudo editar");
        res.render('temas/form', {tema, materiaId});
    });
}

//Actualiza los temas
exports.actualizar= (req,res) => {
    const id = req.params.id;
    const {titulo, materiaId} = req.body;
    Tema.actualizar(id, titulo, (err)=>{
        if (err) return res.status(500).send("No se pudo actualiza");
        res.redirect(`/materias/${materiaId}/temas`);
    });
}

//elimina los temas
exports.eliminar = (req, res) =>{
    const id = req.params.id;
    const  materiaId = req.query.materiaId;
    Tema.eliminar(id,(err) =>{
        if (err) return res.status(500).send("No se pudo eliminar");
        res.redirect(`/materias/${materiaId}/temas`);
    });
}

//Vota los temas
exports.votar = (req, res) => {
    const id = req.params.id;
    const materiaId = req.query.materiaId;
    Tema.votar(id,(err)=>{
        if (err) return res.status(500).send("No se pudo votar");
        res.redirect(`/materias/${materiaId}/temas`);
    });
}

//desvota los temas
exports.desvotar = (req, res) => {
    const id = req.params.id;
    const materiaId = req.query.materiaId;
    Tema.desvotar(id, (err) => {
        if (err) return res.status(500).send("No se pudo desvotar");
        res.redirect(`/materias/${materiaId}/temas`);
    });
}