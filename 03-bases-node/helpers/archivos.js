const fs = require('fs');
var colors = require('colors');

const crearArchivo = (base, limite, listar) =>{
    const promesa = new Promise((resolve, reject) => {
        let salida = '';
        let colores = '';
        for(let i = 1; i <= limite; i++){
            if(i == limite){
                colores +=`\t\t${base} ${'x'.green} ${i} ${'='.green} ${base * i}`; 
                salida += `${base} x ${i} = ${base * i}`;
            }else{
                colores +=`\t\t${base} ${'x'.green} ${i} ${'='.green} ${base * i}\n`; 
                salida += `${base} x ${i} = ${base * i}\n`;
            }
        }
        if(salida){
            if(listar){
                console.log('\t***************************'.blue)
                console.log('\t***************************'.blue)
                console.log(`\t ${'Tabla del'.green} ${base} ${'hasta el:'.green} ${limite}`)
                console.log('\t***************************'.blue)
                console.log(colores)
                console.log('\t***************************'.blue)
                console.log('\t***************************'.blue)
            }
            fs.writeFileSync(`./salida/tabla del ${base}.txt`, salida)
            resolve(`\t  tabla del ${base}.txt`);
        }else{
            reject(`Error, no se pudo crear el archivo tabla del ${base}.txt`)
        }
    });
    return promesa;
}

module.exports = {
    crearArchivo
};