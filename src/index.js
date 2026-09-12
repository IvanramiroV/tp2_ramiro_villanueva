const path = require("node:path");
const pc = require("picocolors");
const { leerJson, escribirTexto } = require("./archivos.js");
const { crearInforme } = require("./juegos.js");

const rutaDatos = path.join(__dirname, "..", "datos", "juegos.json");
const rutaSalida = path.join(__dirname, "..", "salida", "catalogo-juegos.txt");

async function main() {
  try {
    console.log(pc.cyan("Leyendo catálogo de juegos..."));
    const juegos = await leerJson(rutaDatos);

    const informe = crearInforme(juegos);

    console.log(pc.cyan("Generando archivo de salida..."));
    await escribirTexto(rutaSalida, informe);

    console.log(informe);
    console.log(pc.green(`¡Informe generado con éxito en: ${rutaSalida}`.trim()));
  } catch (error) {
    console.error(pc.red(`No se pudo generar el informe: ${error.message}`));
    process.exitCode = 1;
  }
}

main();