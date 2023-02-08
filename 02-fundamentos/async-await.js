const empleados = [
    {
        id: 1,
        nombre: 'Jose'
    },
    {
        id: 2,
        nombre: 'Carlos'
    },
    {
        id: 3,
        nombre: 'Guelmi'
    }
];

const sueldos = [
    {
        id: 1,
        sueldo: 1000
    },
    {
        id: 2,
        sueldo: 3000
    }
];

const getEmpleados = (id) => {
    const promesa = new Promise( (resolve, reject) => {
        const empleado = empleados.find(e => e.id === id)?.nombre
        if(empleado){
            resolve(empleado)
        } else {
            reject(`Error no existe empleado con el id: ${id}`)
        }
    } );
    return promesa;
};

const getSaladio = (id) => {
    const promesa = new Promise( (resolve, reject) => {
        const sueldo = sueldos.find(e => e.id === id)?.sueldo
        if(sueldo){
            resolve(sueldo)
        } else {
            reject(`Error no existe empleado con el id: ${id}`)
        }
    } );
    return promesa;
}


const getInfoUsuario = async(id) =>{
    try {
        const persona = await getEmpleados(id)
        const sueldo = await getSaladio(id)
        return `El salario de ${ persona} es de: ${ sueldo }`;
    }catch(err){
        return err;
    }
}

const id = 5

getInfoUsuario(id)
    .then(msg => console.log(msg))
    .catch(err => console.log(err))
