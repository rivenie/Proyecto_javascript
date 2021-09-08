//ARRAYS-------------------------------------------------------------------------------------------------------
//Los arrays ya no son un datos primitivo. Los Arrays son OBJETOS. En los ARRAYS se pueden guardar muchos datos. 
//La manera de usar un array es:
//arrays = [];
//Para poner elementos en los arrays se debe de colocar: arrays["elemento","elemento","elemento","elemento"] Ej:
/*pc = ["pcJose", "Intel Core i7", "16gb", "1TB"]; */
/*Finalmente, para mostrar todo el array se pone: document.write(pc). Y si se quiere mostrar */

//ARRAYS ASOCIATIVOS----------------------------------------------------------------------------------------------
//Los arrays asociativos se parecen a un formato llamado JSON. 
//Este formato en vez de asignar un número en las posiciones asigna un nombre. Ej:
/*
    pc = {
        nombre: "pcJose",
        procesador: "Intel Core i7",
        ram: "16gb",
        espacio: "1TB"
    }
*/

/*Ejercicio: 
pc = {
    nombre: "pcJose",
    procesador: "Inter Core i7",
    ram: "16GB",
    espacio: "1TB"
}

let frase = "El nombre de mi procesador es: " + pc["nombre"] + "<br> Mi procesador es: " + pc["procesador"] + 
"<br> Tengo una ram de: " + pc["ram"] + "<br> Y mi espacio es de: " + pc["espacio"];

document.write(frase); */

//BUCLES E ITERACIÓN-------------------------------------------------------------------------------------------------
//La diferencia entre un condicional y un bucle es que los bucles se repiten constantemente. 
//Lo que pasa con un bucle es: todavia se sigue cumpliendo la condición? si es así se vuelve a ejecutar hasta que se deje de cumplir
//WHILE: es un bucle que pregunta si una condición se esta cumpliendo y si lo hace se ejecuta una acción hasta que deje de ser true
/*Ej:
let numero = 0;
while (numero <= 6){
    numero++;
    document.write(numero);
} */

//DO WHILE: a diferencia de while el do while primero realiza la acción y luego pregunta si se cumple alguna condición.
//Aunque no se cumpla la condición el do while ejecutará la acción aunque sea 1 vez.
/* do{
 }while();*/

 //BREAK: hace que un bucle pare o termine. 
 //Ej:
 /*while(numero <= 1000){
     numero++;
     document.write(numero);
     if(numero == 10){
         break;
     }
     EJ:
     let numero = 0;

while(numero <= 1000){
     numero++;
     document.write(numero);
     if(numero == 10){
         break;
     }
 } 
 } */

//FOR: es un bucle determinado. Es decir, que hay bucles que no se les dice cuantas vueltan van a dar (como while) y otros que si
//como for. Por eso se les llama determinado. 
//El bucle for se compone de 3 partes: 
//declaramos
//inicializamos
//aumento-decremento
//condicionamos
//iteramos = hacer lo mismo varias veces:
//CONTINUE: si se quiere excluir un elemento del bucle se debe utilizar continue:
//EJ:
/*for(let i = 5; i <= 20; i++){
    if(i == 10){
        continue;
    }
    document.write(i)
} */

//FOR IN: es un bucle que muestra el indice/posición en la que se encuentra un arreglo. EJ:
/*animales = ["perro", "gato", "sapo"];
for(animal in animales){
    document.write(animal);
} 
Si se quiere mostrar los nombres de los arreglos se debe de colocar animales[animal]*/

// animales = ["perro", "gato", "sapo"];
// for(animal in animales){
//     document.write(animales[animal]+"<br>");
// }

//FOR OF: muestra el valor de los elementos del array.----------------------

// let array1 = [1,2,3,4,5];
// let array2 = [6,7,array1,8,9];

// for(array of array2){
//     document.write(array);
// }

//LABEL-----------------------------------------------------------------------------------------

//FUNCIONES--------------------------------------------------------------------------------------
//De esta manera se declara una funcion:
//Declaración de funcion:
// function nombreFuncion(){};
 
//Ejecución de una funcion:
// nombreFuncion();

//Return: El return es para devolver un valor. Para que al llamar/ejecutar la función el "nombreFuncion" se convierta en algo, en un tipo de dato. Usualmente cuando la función
//se ejecuta el "nombreFunción" no vale nada. Es solo un bloque que ejecuta la función. Para que ese bloque valga algo se debe utilizar el "return". 

//Además, luego de escribir "return" dentro de la función. Lo que esté escrito luego de el return ya no se va a ejecutar. Cuando se escrite "return" se termina la función.

//Ej:
// function saludar(){
//     return 'La función se ejecutó correctamente';
// }

// let confirmacion = saludar();

// document.write(confirmacion);

//PARAMETROS---------------------------------------------------------------------------------------------
//Parametros: Las funciones no son funciones sin los parámetros. 
//Los parámetros son variables que se declaran y crean en una función. Es una variable común que solo funciona dentro de la función.

//Ej:
// function suma(sum1,sum2){    
//     let sum = sum1 + sum2;
//     document.write(sum)
//     document.write('<br>')
// }
// suma(10,20);

//Los parámetros que estén dentro de los paréntesis "(sum1, sum2)" son valores que están siendo declarados. Y con el valor de abajo "(10,20)" se inicializa. 

//Return con Parametros:

// function sumando(num1, num2){
//     let res = num1 + num2;
//     return res;    
// }

// let variable = sumando(10,5);

// document.write(variable);

//Existen muchas maneras de crear funciones. La primera es la que ya se mostró. La otra es la siguiente:

// const saludar = function(nombre){
//     let frase = `Hola ${nombre}. ¿Como estáss?`;
//     document.write(frase);
// }

// saludar("Roberto");

//La otra manera es la función "Flecha":

// const saludar = (nombre)=>{
//     document.write(`Hola como estas ${nombre}`)
// }

// saludar("Tito");

