//Crea un programa que utilice console.log para mostrar un mensaje de bienvenida.

console.log("Bienvenida");

/*Crea una variable llamada "nombre" y asígnale tu nombre.
Luego, utiliza console.log para mostrar el mensaje "¡Hola, [tu nombre]!" en la consola del navegador.*/

let nombre = 'Diana';
console.log(`Hola ${nombre}`);

/*Crea una variable llamada "nombre" y asígnale tu nombre.
Luego, utiliza alert para mostrar el mensaje "¡Hola, [tu nombre]!".*/

let nombre1 = 'Diana';
alert(`¡Hola,${nombre}!`);

/* Utiliza prompt y haz la siguiente pregunta: ¿Cuál es el lenguaje de programación que más te gusta?.
Luego, almacena la respuesta en una variable y muestra la respuesta en la consola del navegador.
*/

let respuesta = prompt('¿Cual es el lenguaje de programacion que mas te gusta?');
alert(`${respuesta}`);

/*Crea una variable llamada "valor1" y otra llamada "valor2", asignándoles valores numéricos de tu elección.
Luego, realiza la suma de estos dos valores y almacena el resultado en una tercera variable llamada "resultado".
Utiliza console.log para mostrar el mensaje "La suma de [valor1] y [valor2] es igual a [resultado]." en la consola.
*/

let valor1 = 54;
let valor2 = 4;
let resultado = valor1 + valor2;
console.log(`La suma de ${valor1} y ${valor2} es igual a ${resultado}`);

/*Pide al usuario que ingrese su edad con prompt.
Con base en la edad ingresada, utiliza un if para verificar si la persona es mayor o menor de edad
y muestra un mensaje apropiado en la consola.
*/

let edad = prompt('Ingrese su edad');

if(edad >= 18){
    alert('Usted es mayor de Edad');
}else{
    alert('Usted es menor de Edad');
}

/*Crea una variable "numero" y solicita un valor con prompt.
Luego, verifica si es positivo, negativo o cero utilizando un if-else y muestra el mensaje correspondiente.
*/

let num = prompt('Ingrese un numero');

if(num > 0 ){
    alert('el numero es positivo');
}else if(num < 0){
    alert('El numero es negativo');
}else{
    alert('El numero es 0');
}

//Utiliza un bucle while para mostrar los números del 1 al 10 en la consola.

let numero = 1;

while(numero <= 10){
   console.log(numero);
   numero ++; 
}

//Utiliza Math.random para generar cualquier número aleatorio y muestra ese número en la consola.

let numerito = Math.random();
console.log(numerito);

//Utiliza Math.random para generar un número entero entre 1 y 10 y muestra ese número en la consola.
let num1 = Math.floor(Math.random()*10)+1;
console.log(num1);