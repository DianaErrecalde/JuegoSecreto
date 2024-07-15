let numeroSecreto1 = Math.floor(Math.random()*10) +1;
let numeroDeUruario = 0;
let intentos = 1;
//let palabraVeces = 'Vez';

console.log(numeroSecreto1);

while (numeroDeUruario != numeroSecreto1){
//parseInt convierte nuestro string a numero.
let numeroDeUruario = parseInt(prompt("Me indicas un numero entre 1 y 10 por favor"));
console.log(numeroDeUruario);
//dentro del template string puedo usar variebles y tambien codigo, ejemplo el operador ternario
if (numeroDeUruario == numeroSecreto1){
    alert(`Acertaste,el número es: ${numeroDeUruario}. Lo Hiciste en ${intentos} ${intentos == 1 ? 'vez' : 'veces'}` );
}else {
    if(numeroDeUruario > numeroSecreto1){
        alert('El numero secreto es Menor');
    }else {
        alert('El numero secreto es Mayor');
    }
}
//incrementamos el contador cuando no acierta, cambiamos a una forma mas comun de hacer contadores.
//intentos = intentos + 1;
intentos ++;
//palabraVeces = 'veces';
if(intentos > 3){
    alert('Llegaste al numero maximo de intentos');
    break;
}
//Math.Random , funcion que devuleve un numero de coma flotante pseudo-aleatorio
//Math.random() * 10; ----> Lo multiplico por el rango de numero que le estamos pidiendo al usuario que es de 1 a 10.
//esto nos dara un numero inmenso decimal.Para eso utilizaremos otra funcion

//Math.floor(Math.random()*10) +1;
//esto no dara un numero entre 1 y 9.9999, nunca llegaria al 10; para eso, le sumamos 1.
}


