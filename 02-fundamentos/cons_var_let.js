// Crea la variable para un ambito global, con lo cual no es bueno en muchos aspectos
// var nombre = 'Wolverine';
// La forma correctamente para declarar la variable
let nombre = 'Wolverine';

if (true){
    // Crea otra variable que no reemplasa la que esta fuera del scope
    let nombre = 'Magneto';
    // Si quisiera asignarle un dato a la variable anterior no se ingresa la palabra let
    // nombre = 'Wolverine';
    console.log(nombre);
}

const ejemplo = 'Esta es una constante'

if (true){
    // Crea otra variable que no reemplasa la que esta fuera del scope
    const ejemplo = 'Esta es una constante';
}

console.log(nombre);
console.log(ejemplo);

/* Lo ideal es no usar nunca la plabra reservada var, siempre se utiliza la palabra const pero si van a cambiarle
el valor a la misma variable declarala como let
nota: las constantes son mas ligeras que las variables
*/
