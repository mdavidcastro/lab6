/*const prompt = require('prompt-sync')({ sigint: true });*/
console.log("hello world");



let edad;
let esEstudiante=true;

let name = prompt('ingresa el nombre: ');
edad = prompt('ingresa la edad:')

console.log(name);

console.log("El nombre: "+name+"\nLa edad:"+edad+"\nEs estudiante: "+esEstudiante);

/*Recuerda que las comillas para concatenar la variable con $ son ` */
console.log(`¡Hola, ${name}!`);

let a=10;
let b=3;
let suma=a+b;
let resta=a-b;
let multiplicacion=a+b;
let division=a/b;


console.log(`\nLa suma de ${a} y ${b} es ${suma}`);
console.log(`\nLa resta de ${a} y ${b} es ${resta}`);
console.log(`\nLa multiplicacion de ${a} y ${b} es ${multiplicacion}`);
console.log(`\nLa division de ${a} y ${b} es ${division}`);

console.log(`\na es mayor que b ${a>b}`)
console.log(`\na es mayor o igual que b ${a>=b}`)
console.log(`\na es menor que b ${a<b}`);
console.log(`\na es menor o igual que b ${a<=b}`);
console.log(`\na es diferente de b ${a!=b}`);
console.log(`\na es igual a b ${a==b}`);

bienvenida = `bienvenido ${name}, vamos a determinar si puedes conducir o no.`
console.log(bienvenida);

let esMayorDeEdad = false;
let tieneLicencia = true;
let puedeConducir = esMayorDeEdad&&tieneLicencia;
console.log(`Verficacion de pruebas para conducir\nPuede conducir?:${puedeConducir}`)

let errorAlconducir = esMayorDeEdad || tieneLicencia;
console.log(`Puede conducir con errores?:${errorAlconducir}`)
