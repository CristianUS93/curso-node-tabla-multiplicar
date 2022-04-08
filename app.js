const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');
require('colors');

console.clear();

//const [ , , arg3 = 'base=5'] = process.argv;
//const [ , base] = arg3.split('=');

crearArchivo(argv.b, argv.m, argv.l)
    .then( nombreArchivo => console.log(nombreArchivo.green, 'creado'.green) )
    .catch( err => console.log(err.red) );