//Estructuras de control
//Tipos: Estructuras condicionales y estructuras ciclicas
//Estructuras condicionales:simples (solo una condición) -->if,dobles(si se cumple una  condición sino otra)-->else u operador ternario; múltiples (varias condiciones) else if, switch.
//EsEstructuras de repetición:declaración -->for, while o do...while(variación de sintaxis de while y el do..while se ejecuta al meno una vez,mientas que el while puede que nunca se ejecute)

//Calcular factorial de un número entero.

//validamos que lo que el usuario ingrese sea siempre un número
let numero;
let factorial = 1;
let factorial1 = 1;
do {
    const numeroString = prompt("Por favor ingrese un número entero"); 
    numero = parseInt(numeroString);
    console.log(typeof numero);

} while (Number.isNaN(numero)==true);



for (let i = 1; i <=numero; i++){
    factorial = factorial * i;
    console.log("contador: ", i);
    console.log("factorial", factorial);
}
 console.log("El factorial de", numero, "es igual a", factorial);

 for (let i  = numero; i>0; i--){
    factorial1 = factorial1 * i;
    console.log("contador decremento: ", i);
    console.log("factorial decremento", factorial1);
 }

 console.log("El factorial 2 de", numero, "es igual a", factorial1);

 //Ejercicios condicionales:programa para determinar culpabilidad

 