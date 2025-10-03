const model = require('../modelo/materiaModel');

exports.listar = (req, res) => {
   model.getAll((err, materias) =>{
        if (err) return res.status(500).send("Erro no se pudo obtener las materias");
        res.render('index', { materias});
   });
};

exports.getById = (id, callback) => {
    model.getById(id, callback)
}

exports.crear = (req, res) => {
    const { nombre } = req.body;
    model.crear(nombre, (err, nuevaMateria) => {
        if (err) return res.status(500).send("No se pudo crear");
        res.redirect('/materias');
    });
} 

exports.editar = (req, res) =>{
    const { nombre } = req.body;
    const id = req.params.id;
    model.actualizar(id, nombre, (err)=>{
        if (err) return res.status(500).send("No se pudo editar");
        res.redirect('/materias');
    })
}

exports.eliminar = (req, res) => {
    const id = req.params.id;
    model.eliminar(id, (err) => {
        if (err) return res.status(500).send("No se pudo eliminar");
        res.redirect('/materias');
    })
}

exports.votar = (req, res) =>{
    const id = req.params.id;
    model.votar(id, (err) => {
        if (err) return res.status(500).send("No se pudo votar");
        res.redirect('/materias');
    })
}

exports.desvotar = (req, res) => {
    const id = req.params.id;
    model.desvotar(id, (err) =>{
         if (err) return res.status(500).send("No se pudo votar");
        res.redirect('/materias');
    })

}