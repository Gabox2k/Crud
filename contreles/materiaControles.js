const model = require('../modelo/materiaModel')

exports.listar = (req, res) => {
    const materias = model.getAll()
    res.render ('index', {materias})
}

exports.apiListar = (req, res) => {
    res.json(model.getAll())
}

exports.crear = (req, res) => {
    res.json(model.getAll())
    res.json(nuevo)
} 

exports.eliminar = (req, res) => {
    model.remove(req.params.id)
    res.json({msg: 'Se elimino'})
}

exports.votar = (req, res) =>{
    const votado = model.votar (req.params.id)
    if (!votado) return res.status(404).json({ error : 'No se encontro'})
    res.json(votado)
}
