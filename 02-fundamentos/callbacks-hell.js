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
    const empleado = empleados.find(e => e.id === id)
    if (empleado) {
        return empleado;
    }else{
        return `El empleado con el id ${id} no existe.`;
    }
};

const getSaladio = (id) => {
    const sueldo = sueldos.find(e => e.id === id)
    if (sueldo) {
        return sueldo;
    }else{
        return `El empleado con el id ${id} no existe.`;
    }
};

console.log(getEmpleados(1))

console.log(getSaladio(1))