const fs = require('fs');
const colors = require('colors');

const crearArchivo = async (base = 5, multiplo = 10 , listar = false) => {

    try {

        let salida = '';
        let consola = '';

        for (let i = 1; i <= multiplo; i++) {
            salida += `${colors.red(base)} ${'x'.cyan} ${colors.red(i)} ${'='.cyan} ${colors.yellow(base * i)} \n`;
            consola += `${base} x ${i} = ${base*i} \n`;
        }

        if (listar) {
            console.log('============================='.rainbow);
            console.log('        Tabla del '.rainbow, colors.magenta(base));
            console.log('============================='.rainbow);

            console.log(salida);
        }

        let nombreArchivo = `./salida/tabla-${base}.txt`;

        fs.writeFileSync(nombreArchivo, consola);

        return nombreArchivo;

    } catch (err) {
        throw err;
    }
};


module.exports = {
    crearArchivo
};