const model = require('../modelo/materiaModel');

exports.listar = (req, res) => {
    const materias = model.getAll();
    res.render ('index', {materias});
}

exports.getById = (id) => {
    return model.getById(id)
}

exports.crear = (req, res) => {
    const nuevo = model.crear(req.body);
    res.redirect('/')
} 

exports.editar = (req, res) =>{
    const actualizado = model.actualizar(req.params.id, req.body);
    if (!actualizado) return res.status(404).send('No se encontro');
    res.redirect('/');
}

exports.eliminar = (req, res) => {
    model.eliminar(req.params.id);
    res.redirect('/');
}

exports.votar = (req, res) =>{
    const votado = model.votar (req.params.id);
    if (!votado) return res.status(404).send('No se encontro');
    res.redirect('/');
}
