/*alert('Bienvenido al juego del número secreto');
let intento = prompt('Elige un número entre 1 y 10');

let numeroSecreto = 4;

console.log(intento  == numeroSecreto);
if (intento  == numeroSecreto) {
    alert('Acertaste');
} else {
    alert('El número secreto era ' + numeroSecreto + ', pero elegiste ' + intento);
} */

    /*const numero = prompt("Introduce un número:");

    if (numero != 0) {
      console.log("El número es positivo o negativo");
    } else {
      console.log("El número es cero");
    }*/

/*const numero = prompt("Introduce un número:");

if (numero > 0) {
  console.log("El número es positivo");
} else if (numero < 0) {
  console.log("El número es negativo");
} else {
  console.log("El número es cero");
}*/

//Pregunta al usuario qué día de la semana es. 
//Si la respuesta es "Sábado" o "Domingo", muestra "¡Buen fin de semana!". 
//De lo contrario, muestra "¡Buena semana!".
// === OPERADOR DE ESTRICTA IGUALDAD

let diaIngresado = prompt('¿que dia de la semana es?');

if (diaIngresado === 'sabado' || diaIngresado === 'domingo'){
    alert('¡Buen Fin De Semana!');
}else{
    alert('¡Buena Semana!');
}

//Verifica si un número ingresado por el usuario es positivo o negativo.
// Muestra una alerta informativa.

let numIngresado = prompt('Ingrese un numero');

if(numIngresado > 0){
  alert('El numero es positivo')
}else if(numIngresado < 0){
  alert('El numero es negativo')
}else{
  alert('El numero es 0')
}

//Crea un sistema de puntuación para un juego.
//Si la puntuación es mayor o igual a 100, muestra "¡Felicidades, has ganado!". 
//En caso contrario, muestra "Intentalo nuevamente para ganar.".

let puntuación = 100;
if (puntuación >= 100){
  console.log("¡Felicitaciones, has Ganado!");
}else {
  console.log('Intentalo nuevamente para ganar');
}

//Crea un mensaje que informe al usuario sobre el saldo de su cuenta,
//utilizando un template string para incluir el valor del saldo.

let saldoCuenta = 12000;

alert(`El saldo de su cuenta es de: ${saldoCuenta}`);

//Pide al usuario que ingrese su nombre mediante un prompt. 
//Luego, muestra una alerta de bienvenida usando ese nombre.

let nombre = prompt('¿Cual es su nombre?');
alert(`Bienvenida/o: ${nombre}`);