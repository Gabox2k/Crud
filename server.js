const express = require('express');
const path = require('path');
const materiasRoutes = require('./rutas/materiaRutas');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));


app.set('view engine' , 'ejs');
app.set ('views' , path.join(__dirname,'vista'));

app.use('/materias' , materiasRoutes);
app.get('/',(req, res) => res.redirect('/materias')); 
app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));

