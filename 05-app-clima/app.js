import * as dotenv from 'dotenv'
import {leerInput, inquirerMenu, pausa, listarLugares} from './helpers/inquirer.js';

import {Busquedas}  from './models/busquedas.js'
import colors from 'colors';

dotenv.config()


const main = async() =>{
    let opt;
    const busqueda = new Busquedas();

    do{
        opt = await inquirerMenu();
        
        switch(opt){
            case 1:
                const termino = await leerInput('Ciudad:');
                const lugares = await busqueda.ciudad(termino);
                const id = await listarLugares(lugares);
                if(id === '0') continue

                const miLugar = lugares.find(l => l.id === id);
                busqueda.agregarHistorial(miLugar.nombre)

                const clima = await busqueda.clima(miLugar.lat, miLugar.lng);

                console.clear();
                console.log('\nInformacion de la busqueda.\n'.green);
                console.log('Ciudad:',miLugar.nombre.green);
                console.log('Latitud:',miLugar.lat);
                console.log('Longitud:',miLugar.lng);
                console.log('Temperatura Actual:',clima.temp);
                console.log('Temperatura Mínima:',clima.temp_min);
                console.log('Temperatura Máxima:',clima.temp_max);
                console.log('El clima está: :',clima.desc.green);
            break;

            case 2:
                // console.log(busqueda.historialCapitalizado)
                busqueda.historialCapitalizado.forEach((lugar, i) =>{
                    const idx = `${i + 1}.`.green;
                    console.log(`${idx} ${lugar}`)
                })
            break;
        }

        if(opt !== 0) await pausa();

    }while(opt !== 0)
}

main();