const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers');
const argv = yargs(hideBin(process.argv))
    .option('b',{
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'La base, es el numero de la tabla deseada ej: tabla del 5'
    })
    .option('l',{
        alias: 'list',
        type: 'boolean',
        demandOption: false,
        describe: 'Muestra en pantalla la lista de la tabla creada'
    })
    .option('h',{
        alias: 'hasta',
        type: 'number',
        demandOption: true,
        describe: 'Hasta, es el limite de donde termina la multiplicacion,\n ej: 5 x "100"'
    })
    .check((argv, opts) =>{
        if(isNaN(argv.b)){
            throw `La base: ${argv.b} no es un numero`
        }
        return true;
    })
    .argv



module.exports = argv;
