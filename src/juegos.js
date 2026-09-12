function formatearJuego(juego, indice) {
  const estado = juego.disponible ? "Disponible" : "No disponible";
  const categoriasTexto = juego.categorias.join(", ");

  return `
${indice + 1}. Título: ${juego.titulo}
   Editorial y año: ${juego.editorial} (${juego.anio})
   Participantes: De ${juego.jugadoresMin} a ${juego.jugadoresMax} jugadores
   Categorías: ${categoriasTexto}
   Estado: ${estado}
---------------------------------------------`;
}

function crearInforme(juegos) {
  const lineas = juegos.map(formatearJuego);

  return `CATÁLOGO DE JUEGOS DE MESA
Cantidad de juegos: ${juegos.length}
${lineas.join("")}`;
}

module.exports = {
  crearInforme,
};