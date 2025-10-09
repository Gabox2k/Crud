const express = require('express');
const path = require('path');
const materiasRoutes = require('./rutas/materiaRutas');
const temaRutas = require('./rutas/temaRutas');

const app = express();
const PORT = 3000;

app.use(express.json());

//Lee los datos del formulario
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));

//Donde se encuentran las vistas
app.set('view engine' , 'ejs');
app.set ('views' , path.join(__dirname,'vista'));

//Rutas
app.use('/materias' , materiasRoutes);
app.use('/', temaRutas);

//Redirecciona a materias
app.get('/',(req, res) => res.redirect('/materias')); 
app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));

