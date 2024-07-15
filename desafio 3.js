//Crea un contador que comience en 1 y vaya hasta 10 usando un bucle 'while'. Muestra cada número.

/*let contador = 0;

while(contador <=9){
    contador ++;
    alert(`El contador esta en: ${contador}`);
}*/

//Crea un contador que comience en 10 y vaya hasta 0 usando un bucle 'while'. Muestra cada número.

/*let contador = 11;

while (contador > 0){
    contador --;
    alert(`El contador esta en: ${contador}`);
}*/

/*Crea un programa de cuenta progresiva.
Pide un número y cuenta desde 0 hasta ese número utilizando un bucle 'while' en la consola del navegador */

let numeroIngresado = prompt('Ingrese un numero');
let contador = -1;
while(contador < numeroIngresado){
    contador++;
    alert(`cuenta progresiva: ${contador}`);
}