const deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneración',
    getNombre(){
        return `${this.nombre} ${this.apellido} ${this.poder}`
    }
}

// Asi se desestructura un objeto

const {nombre, apellido, poder, edad = 50} = deadpool

console.log(nombre,apellido,poder, edad)

function mostrarHeroe({nombre,apellido,poder, edad = 20}) {
    console.log(nombre,apellido,poder, edad)
}

mostrarHeroe(deadpool)


// Asi se desestructura un arreglo

const heroes = ['Deadpool', 'Superman', 'Batman']

const [h1, h2, h3] = heroes

console.log(h1,h2,h3)