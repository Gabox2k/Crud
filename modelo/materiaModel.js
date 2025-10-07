const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./materias.db');

db.run(`CREATE TABLE IF NOT EXISTS materias (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre TEXT NOT NULL,
    votos INTEGER DEFAULT 0
)`);

//Obtener todas las materias
exports.getAll = (callback) => {
   db.all('SELECT * FROM materias ORDER BY votos DESC', [], (err, rows) =>{
    if (err) return callback(err);
    callback(null, rows);
   }); 
}

//Obtener por su id
exports.getById = (id, callback) => {
    db.get('SELECT * FROM materias WHERE id = ?', [id], (err, row) =>{
       if (err) return callback(err);
        callback(null, row);
    });
};

//Crea una nueva materia
exports.crear = (nombre, callback) => {
    db.run('INSERT INTO materias(nombre) VALUES(?)', [nombre], function(err){
        if (err) return callback(err);
        callback(null, this.lastID);
    });
};

//Actualiza la materia
exports.actualizar = (id, nombre , callback) =>{
    db.run('UPDATE materias SET nombre = ? WHERE id = ?', [nombre, id], function(err){
        if (err) return callback(err);
        callback(null);
    });
};

//Elimina la materia
exports.eliminar = (id, callback) => {
    db.run ('DELETE FROM materias WHERE id = ?', [id], function(err){
        if (err) return callback(err);
        callback(null);
    });
};

//Vota la materia
exports.votar = (id, callback) => {
    db.run ('UPDATE materias SET votos = votos + 1 WHERE id = ?', [id], function(err){
        if (err) return callback(err);
        callback(null);
    });
};

//Desvota la materia
exports.desvotar = (id, callback) => {
    db.run('UPDATE materias SET votos = votos - 1 WHERE id = ?' , [id], function(err){
        if (err) return callback(err);
        callback(null);
    })
}