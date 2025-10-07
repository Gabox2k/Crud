const model = require('../modelo/materiaModel');
const Tema = require('../modelo/temaModel');

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
    model.crear(nombre, (err, materiaId) => {
        if (err) return res.status(500).send("No se pudo crear");

        const  predeterminado = [{titulo: "Principiante", link:"https://youtu.be/nKPbfIU442g?si=4RAE8Zb9NXksvooX"},
                                 {titulo: "Intermedio", link:"https://youtu.be/1-qjMS6C960?si=KmYhou-oHA5uXVio"},
                                 {titulo:"Avanzado", link:"https://youtu.be/JOAqpdM36wI?si=ZFUAt5XTGfZf2CGU"}
        ];

        predeterminado.forEach((t) => {
            Tema.crear(t.titulo, t.link, materiaId, (err) =>{
                if (err) console.error("no se puede crear el tema", err);
            });
        });
         res.redirect("/");
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