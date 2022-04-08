const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la base de la tabla de multiplicar'
    })
    .option('m', {
        alias: 'multiplo',
        type: 'number',
        default: 10,
        describe: 'El límite del multiplicando'
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'Muestra la tabla en consola'
    })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw 'La base tiene que ser un numero';
        }
        if (isNaN(argv.m)) {
            throw 'El multiplo tiene que ser un numero';
        }
        return true;
    })
    .argv;

module.exports = argv;