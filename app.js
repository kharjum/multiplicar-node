// requireds
// const fs = require('fs');
// const fs = require('express'); // Paquetes no nativos que se instalan
// const fs = require('./fs'); // Archivos desarrollados por nosotros
const argv = require('./config/yargs').argv;
const colors = require('colors/safe');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

// let base = '4';

// console.log(process.argv);
// let argv = process.argv;
// let parametro = argv[2];
// let base = parametro.split('=')[1];

// crearArchivo(base)
//     .then(archivo => console.log(`Archivo creado: ${archivo}`))
//     .catch(e => console.log(e));

// let argv2 = process.argv;

// console.log(argv.base);
// console.log('Limite', argv.limite);

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado:`, colors.green(archivo)))
            .catch(e => console.log(e));
        break;
    default:
        console.log('Comando no reconocido');
        break;
}