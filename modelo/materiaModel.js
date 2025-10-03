const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./materias.db');

db.run(`CREATE TABLE IF NOT EXISTS materias (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre TEXT NOT NULL,
    votos INTEGER DEFAULT 0
)`);

exports.getAll = (callback) => {
   db.all('SELECT * FROM materias ORDER BY votos DESC', [], (err, rows) =>{
    if (err) return callback(err);
    callback(null, rows);
   }); 
}

exports.getById = (id, callback) => {
    db.get('SELECT * FROM materias WHERE id = ?', [id], (err, row) =>{
       if (err) return callback(err);
        callback(null, row);
    });
};

exports.crear = (nombre, callback) => {
    db.run('INSERT INTO materias(nombre) VALUES(?)', [nombre], function(err){
        if (err) return callback(err);
        callback(null, {id: this.lastID, nombre, votos : 0});
    });
};

exports.actualizar = (id, nombre , callback) =>{
    db.run('UPDATE materias SET nombre = ? WHERE id = ?', [nombre, id], function(err){
        if (err) return callback(err);
        callback(null);
    });
};

exports.eliminar = (id, callback) => {
    db.run ('DELETE FROM materias WHERE id = ?', [id], function(err){
        if (err) return callback(err);
        callback(null);
    });
};

exports.votar = (id, callback) => {
    db.run ('UPDATE materias SET votos = votos + 1 WHERE id = ?', [id], function(err){
        if (err) return callback(err);
        callback(null);
    });
};

exports.desvotar = (id, callback) => {
    db.run('UPDATE materias SET votos = votos - 1 WHERE id = ?' , [id], function(err){
        if (err) return callback(err);
        callback(null);
    })
}