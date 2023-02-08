import colors from 'colors';
import { Tarea } from './tarea.js';

class Tareas{
    _listado = {};

    get listadoArr(){
        const listado = [];
        Object.keys(this._listado).forEach( key => {
            const tarea = this._listado[key];
            listado.push(tarea);
        } )
        return listado;
    }

    constructor(){
        this._listado = {};
    }

    borrarTarea(id = ''){
        if(this._listado[id]){
            delete this._listado[id];
        }

    }

    cargarTareasArray(tareas = []){
        tareas.forEach(tarea => {
            this._listado[tarea.id] = tarea
        });
    }

    crearTarea(desc = ''){
        const tarea = new Tarea(desc);
        this._listado[tarea.id] = tarea;
    }

    listadoCompleto(){
        let contador = 1
        console.log()
        this.listadoArr.forEach(tarea =>{
            if(tarea.completadoEn !== null){
                console.log(`${colors.green(contador)}. ${tarea.desc} :: ${'Completada'.green}`)
                contador += 1;
            }else{
                console.log(`${colors.green(contador)}. ${tarea.desc} :: ${'Pendiente'.red}`)
                contador += 1;
            }
        });
    }

    listarTareasCompletadas(Completada = true){
        let contador = 1
        console.log()
        if(Completada == true){
            this.listadoArr.forEach(tarea =>{
                if(tarea.completadoEn !== null){
                    console.log(`${colors.green(contador)}. ${tarea.desc} :: ${tarea.completadoEn.green}`)
                    contador += 1;
                }
            });
        }else{
            this.listadoArr.forEach(tarea =>{
                if(tarea.completadoEn === null){
                    console.log(`${colors.green(contador)}. ${tarea.desc} :: ${'Pendiente'.red}`)
                    contador += 1;
                }
            });
        }

    }

    toggleCompletadas(ids = []){
        ids.forEach(id => {
            const tarea = this._listado[id];
            if(!tarea.completadoEn){
                tarea.completadoEn = new Date().toISOString();
            }
        });

        this.listadoArr.forEach(tarea => {
            if(!ids.includes(tarea.id)){
                this._listado[tarea.id].completadoEn = null;
            }
        });
    }

    
}

export { Tareas }