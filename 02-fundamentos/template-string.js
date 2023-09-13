const nombre = 'Deadpool';
const real = 'Wade Winston';

// Esto es lo que comunmente se hace
const normal = nombre +' '+ real;
console.log(normal);

// pero, lo que si debe hacerse 
const normal2 = `${nombre} ${real}`;
console.log(normal2);