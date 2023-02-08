import colors from 'colors';

import { 
    inquirerMenu, 
    pausa,
    leerInput,
    listadoTareasBorrar,
    confirmar,
    mostratlistadoCkechlist
} from './helpers/inquirer.js';

import { Tareas } from './models/tareas.js';

import { guardarDB, leerDB } from './helpers/guardarArchivo.js';


const main = async() =>{
    let opt = ''
    const tareas = new Tareas();
    const tareasDB = leerDB();

    if(tareasDB){
        tareas.cargarTareasArray(tareasDB);
    }
    
    do{

        opt = await inquirerMenu();
        
        switch(opt){
            case '1':
                const desc = await leerInput('Descricion:');
                tareas.crearTarea(desc);
            break;

            case '2':
                tareas.listadoCompleto();
            break;
            
            case '3':
                tareas.listarTareasCompletadas(true);
            break;
            
            case '4':
                tareas.listarTareasCompletadas(false);
            break;
            
            case '5':
                const ids = await mostratlistadoCkechlist(tareas.listadoArr);
                tareas.toggleCompletadas(ids);
            break;
            
            case '6':
                const id = await listadoTareasBorrar(tareas.listadoArr)
                if(id !== '0'){
                    const ok = await confirmar('¿Está seguro?')
                    if(ok){
                        tareas.borrarTarea(id)
                        console.log()
                        console.log('Tarea borrada')
                    }
                }
            break;
        }

        guardarDB(tareas.listadoArr);

        await pausa();

    }while(opt !== '0')


}

main();