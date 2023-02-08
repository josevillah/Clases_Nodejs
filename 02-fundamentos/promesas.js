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

const id = 2;

// Esto es una manera de hacerlo
// getEmpleados(id)
//     .then(empleado => console.log(empleado))
//     .catch(err => console.log(err));

// getSaladio(id)
//     .then(salario => console.log(salario))
//     .catch(err => console.log(err));


// pero lo ideal es asi
let nombre;
getEmpleados(id)
    .then(empleado => {
        nombre = empleado
        return getSaladio(id)
    })
    .then(salario => console.log(`el empleado ${nombre} tiene un sueldo de: ${salario}`))
    .catch(err => console.log(err));