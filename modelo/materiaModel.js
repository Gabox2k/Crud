let materias =[
    {id :1, descripcion : "Fisica", votos: 0},
    {id: 2, descripcion: "Ingles", votos:0}
];

function getAll(){
    return[...materias].sort((a,b) => b.votos - a.votos); 
}

function getById (id){
    return materias.find(m => m.id === Number(id));
}

function crear(data){
    const maxid = materias.length ? Math.max(...materias.map(a => a.id)) : 0;
    const nuevo = {id : maxid + 1, nombre: data.nombre, votos: 0};
    materias.push(nuevo);
    return nuevo;
}

function actualizar(id, data){
    const idx = materias.findIndex(m => m.id === Number(id));
    if (idx === -1) return null;
    materias[idx] = { ...materias[idx], nombre: data.nombre};
    return materias[idx];
}

function eliminar(id){
    materias = materias.filter(m => m.id !== Number(id));
}

function votar(id){
  const mat = getById(id);
  if (!mat) return null;
  mat.votos +=1;
  return mat;
}

module.exports = {getAll, getById, crear, actualizar, eliminar, votar};