const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./materias.db');

//Se crea la base de datos
db.run(`CREATE TABLE IF NOT EXISTS temas (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    titulo TEXT NOT NULL,
    link TEXT,
    votos INTEGER DEFAULT 0,
    materia_id INTEGER,
    FOREIGN KEY (materia_id) REFERENCES materias(id)
)`);

//Obtine todas las materias
exports.getAllByMateria = (materiaId, callback) => {
    db.all('SELECT * FROM temas WHERE materia_id = ? ORDER BY votos DESC', [materiaId], (err, rows) =>{
        if (err) return callback (err);
        callback(null,rows);
    })
}

//Obtiene por su id
exports.getById = (id, callback) =>{
    db.get('SELECT * FROM temas WHERE id = ? ', [id], (err,row) =>{
        if (err) return callback (err);
        callback(null,row);
    })
}

//Se crea nuevos temas
exports.crear = (titulo, link, materiaId, callback) => {
    db.run('INSERT INTO temas (titulo, link, votos, materia_id) VALUES (?, ?, 0, ?)', [titulo, link, materiaId],
        function (err) {
            if (err) return callback (err);
            callback(null, {id: this.lastID, titulo, votos:0 , materia_id: materiaId});
        }
    );
}

//Actualiza los temas
exports.actualizar = (id, titulo, callback) => {
    db.run('UPDATE temas SET titulo = ? WHERE id = ?', [titulo, id],
        function (err) {
            if (err) return callback (err);
            callback(null);
        }
    );
}

//Elimina los temas
exports.eliminar = (id, callback) => {
    db.run('DELETE FROM temas WHERE id = ?', [id], function(err){
        if (err) return callback (err);
        callback(null);
    });
}

//Vota los temas
exports.votar =(id, callback) => {
    db.run('UPDATE temas SET votos = votos + 1 WHERE id = ?', [id],
        function(err) {
            if (err) return callback(err);
            callback(null);
        }
    );

}

//Desvota los temas
exports.desvotar = (id, callback) =>{
    db.run('UPDATE temas SET votos = votos -1 WHERE id = ? AND votos > 0', [id], 
        function (err) {
            if (err) return callback(err);
            callback(null);
        }
    )
}