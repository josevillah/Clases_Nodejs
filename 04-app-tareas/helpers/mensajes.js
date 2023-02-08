import colors from 'colors';

const mostraMenu = () => {
    return new Promise(resolve =>{
        console.clear();
        console.log('=============================='.green)
        console.log('   Seleccione una opción'.green);
        console.log('==============================\n'.green)
    
        console.log(`${'1'.green}. Crear una tarea`)
        console.log(`${'2'.green}. Listar una tareas`)
        console.log(`${'3'.green}. Listar tareas Completadas`)
        console.log(`${'4'.green}. Listar tareas pendientes`)
        console.log(`${'5'.green}. Completar tarea(s)`)
        console.log(`${'6'.green}. Borrar Tarea`)
        console.log(`${'0'.green}. Salir\n`)
    
        const readLine = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
    
    
        readLine.question('Seleccione una opcion: ', (opt) => {
            readLine.close();
            resolve(opt);
        })
    });
}

const pausa = () =>{
    return new Promise(resolve => {
        const readLine = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
    
    
        readLine.question(`\nPresione ${'ENTER'.green} Para continuar\n`, (opcion) => {
            readLine.close();
            resolve();
        })
    })

}

export {
    pausa
}