//siempre al inicio se deberan colocar todos los requires
//requireds
// const fs = require('fs');

//let base = 6;
// let data = '';
// for (let x = 1; x < 11; x++)
//     data += `${base} * ${x} = ${base*x}\n`;

// let dataBufer = new Uint8Array(Buffer.from(data));
// fs.writeFile(`tablas/tabla-${base}.txt`, dataBufer, (err) => {
//     if (err) throw err;
//     console.log(`El archivo tabla-${base}.txt ha sido creado!`);
// });

//console.log(module);
// const argv = require('yargs')
//     .command('listar', 'Imprime en consola la tabla de multiplicar', {
//         base: {
//             demand: true,
//             alias: 'b'
//         },
//         limite: {
//             alias: 'l',
//             default: 10
//         }
//     })
//     .command('crear', 'Genera un archivo con la tabla de multiplicar', {
//         base: {
//             demand: true,
//             alias: 'b'
//         },
//         limite: {
//             alias: 'l',
//             default: 10
//         }
//     })
//     .help()
//     .argv;
const argv = require('./config/yargs').argv;
const colors = require('colors/safe');
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
// const { array } = require('yargs');

//console.log(multiplicar);
//let base = '8';
//console.log(process.argv);
// let argv = process.argv;
// let parametro = argv[2];
// let base = parametro.split('=')[1];
//console.log(base);

// crearArchivo(base)
//     .then(archivo => console.log(`El archivo ${archivo}.txt ha sido creado!`))
//     .catch(err => console.log(err));


// let argv2 = process.argv;

// console.log(argv.base);
// console.log(argv2);

//console.log('Limite', argv.limite);

//console.log(argv);

let comando = argv._[0];
switch (comando) {
    case 'listar':
        // listarTabla(argv.base, argv.limite)
        //     .then(mostrarTabla => console.log(mostrarTabla))
        //     .catch(err => console.log(err));
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log("Archivo creado: ", colors.green(archivo)))
            .catch(err => console.log(err));
        break;
    default:
        console.log('Comando no reconocido');
        break;
}