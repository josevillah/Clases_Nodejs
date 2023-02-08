const {crearArchivo} = require('./helpers/archivos');
const argv = require('./config/yargs');
var colors = require('colors');

console.clear();

crearArchivo(argv.b, argv.h, argv.l)
    .then(nombreArchivo => console.log(nombreArchivo.rainbow, 'Creado'))
    .catch(err => console.log(err));