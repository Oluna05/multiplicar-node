//requireds
const fs = require('fs');
const colors = require('colors');


let listarTabla = (base, limite = 10) => {

    console.log("==================================================".green);
    console.log(`=================Tabla de ${base}=================`.green);
    console.log("==================================================".green);


    for (let x = 1; x <= limite; x++)
        console.log(`${base} * ${x} = ${base*x}`);


    // return new Promise((res, rej) => {

    //     if (!Number(base)) {
    //         rej(`El valor introducido de base: '${base}' no es un número`);
    //         return;
    //     }

    //     if (!Number(limite)) {
    //         rej(`El valor introducido de limite: '${limite}' no es un número`);
    //         return;
    //     }

    //     let mensajeMostrar = '';
    //     for (var x = 1; x <= limite; x++)
    //         mensajeMostrar += `${base} * ${x} = ${base*x} \n`;

    //     res(mensajeMostrar);

    // });

}


let crearArchivo = (base, limite = 10) => {
    return new Promise((res, rej) => {

        if (!Number(base)) {
            rej(`El valor introducido '${base}' no es un número`);
            return;
        }

        let data = '';
        for (let x = 1; x <= limite; x++)
            data += `${base} * ${x} = ${base*x}\n`;

        let dataBufer = new Uint8Array(Buffer.from(data));
        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, dataBufer, (err) => {
            if (err) rej(err);
            else
                res(`tabla-${base}-al-${limite}.txt`);
        });
    });
}


module.exports = {
    crearArchivo,
    listarTabla
}