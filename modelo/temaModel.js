const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./materias.db');

db.run(`CREATE TABLE IF NOT EXISTS temas (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    titulo TEXT NOT NULL,
    descripcion TEXT,
    materia_id INTEGER,
    FOREIGN KEY (materia_id) REFERENCES materias(id)
)`);

exports.getAllByMateria = (materiaId, callback) => {
    db.all('SELECT * FROM temas WHERE materia_id = ? ', [materiaId], (err, rows) =>{
        if (err) return callback (err);
        callback(null,rows);
    })
}

exports.getById = (id, callback) =>{
    db.get('SELECT * FROM temas WHERE id = ? ', [id], (err,row) =>{
        if (err) return callback (err);
        callback(null,row);
    })
}

exports.crear = (titulo, descripcion, materiaId, callback) => {
    db.run('INSERT INTO temas (titulo, descripcion, materia_id) VALUES (?, ?, ?)', [titulo, descripcion, materiaId],
        function (err) {
            if (err) return callback (err);
            callback(null, {id: this.lastID, titulo, descripcion, materia_id: materiaId});
        }
    );
}

exports.actualizar = (id, titulo, descripcion, callback) => {
    db.run('UPDATE temas SET titulo = ?, descripcion = ? WHERE id = ?', [titulo, descripcion, id],
        function (err) {
            if (err) return callback (err);
            callback(null);
        }
    );
}

exports.eliminar = (id, callback) => {
    db.run('DELETE FROM temas WHERE id = ?', [id], function(err){
        if (err) return callback (err);
        callback(null);
    });
}