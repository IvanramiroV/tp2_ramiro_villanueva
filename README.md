# TP 02: Módulos, Asincronía y NPM - Catálogo de Juegos de Mesa

## Descripción
Desarrollo de una aplicación en Node.js que procesa de manera no bloqueante un listado de juegos de mesa en formato JSON, aplica transformaciones sobre los registros y genera un informe detallado en un archivo de texto dentro del directorio de salida.

## Instalación
Para restaurar las dependencias del proyecto definidas en los archivos de configuración, se ejecuta en la terminal:npm install
## Ejecución
Para poner en marcha la aplicación: npm start
Para validar la sintaxis de los scripts: npm run check
## Flujo asíncrono
La aplicación aprovecha la interfaz de promesas combinada con la sintaxis async/await para gestionar la lectura y escritura de archivos de forma eficiente. La función principal main controla el orden lógico de ejecución y centraliza la captura de errores mediante bloques try/catch.
## Preguntas 
## ¿Qué responsabilidad tiene cada módulo?

archivos.js: Se encarga exclusivamente de interactuar con el sistema operativo (leer el JSON y escribir el archivo resultante).

juegos.js: Concentra toda la lógica de negocio, procesando los datos y armando el diseño textual del informe.

index.js: Funciona como orquestador general, conectando los módulos anteriores, controlando los errores y mostrando el resultado en consola.

## ¿Qué diferencia existe entre exportar una función y ejecutarla?

Exportarla (module.exports = { funcion }) comparte su referencia lógica para que otro archivo pueda utilizarla cuando la necesite. Ejecutarla implica invocarla con paréntesis en el mismo instante (funcion()), lo que evalúa su código y exporta el valor devuelto en lugar de la función en sí.

## ¿Qué representa la promesa devuelta por fs.readFile?

Representa un compromiso de un valor futuro; indica que la lectura del archivo en el disco está en curso y que informará un éxito con el contenido o un rechazo si surge algún inconveniente.

## ¿Por qué await se utiliza dentro de una función async?

Porque await detiene la ejecución local de esa función hasta que la promesa termine de resolverse, y JavaScript exige que la función contenedora esté marcada explícitamente como async para permitir este comportamiento.

## ¿Qué errores pueden llegar al catch de main?

Fallas al intentar leer el archivo (por ejemplo, si no se encuentra o la ruta es incorrecta), problemas de sintaxis al convertir el texto con JSON.parse(), o restricciones de permisos al intentar guardar el archivo de salida.

## ¿Por qué se publican package.json y package-lock.json, pero no node_modules?

Porque los primeros son archivos de texto livianos que especifican la configuración exacta del proyecto, mientras que node_modules agrupa miles de archivos pesados que se pueden reconstruir localmente de forma automática ejecutando npm install.

## ¿Para qué se utiliza picocolors y por qué figura en dependencies?

Se usa para mejorar la interfaz visual en la terminal mediante colores. Pertenece a dependencies porque el programa hace uso de ella durante su funcionamiento habitual.