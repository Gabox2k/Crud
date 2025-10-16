Requisitos
-Guardar el código principal en un archivo server.js o app.js.
-Instalar las siguientes dependencias: npm install express ejs sqlite3

Proyecto
Este proyecto es una aplicación web creada con Node.js y Express, que permite gestionar materias y sus temas.
Cada materia puede tener varios temas asociados, y tanto materias como temas pueden recibir votos para indicar popularidad.

Características
-Creación, edición y eliminación de materias.
-Cada materia puede tener varios temas relacionados.
-Posibilidad de votar o desvotar tanto materias como temas.
-Los datos se guardan en una base SQLite local.
-Interfaz construida con EJS para mostrar información dinámica.

Funcionalidades principales
-Ver todas las materias disponibles.
-Crear nuevas materias.
-Editar el nombre de una materia existente.
-Eliminar materias.
-Votar o quitar votos.

Temas
-Ver todos los temas asociados a una materia.
-Crear nuevos temas dentro de una materia.
-Editar o eliminar temas.
-Votar o quitar votos a los temas.

Flujo del programa
-El usuario ingresa a la página principal → /
-Es redirigido automáticamente a /materias.
-Desde /materias puede:
-Ver la lista de materias.
-Crear o editar una.
-Acceder a los temas de cada materia.
-Dentro de /materias/:materiaId/temas puede:
-Ver los temas de esa materia.
-Crear, editar, eliminar o votar temas.

Objetivo
-Desarrollar una aplicación web que implemente un sistema de gestión de materias y temas, donde los usuarios puedan:
-Administrar datos fácilmente desde una interfaz web.
-Guardar y recuperar información desde una base de datos local.
-Practicar el uso de Express, rutas, controladores, modelos y vistas (EJS) en un entorno completo de Node.js.