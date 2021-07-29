//Operadores de Asignación---------------------------------------------

// let numeroAsig = 10;

// numeroAsig += 5;
// numeroAsig -= 8;
// numeroAsig *= 10;
// numeroAsig /= 10;
// numeroAsig %= 2;
// numeroAsig **= 5;

// document.write(numeroAsig);

//Operadores Aritméticos----------------------------------------------

// let numeroArit = 10;

// numeroArit--;

// resultado = numeroArit;

// document.write(resultado)

// let numeroArit02 = 5;

// resultado02 = numeroArit + numeroArit02;

// document.write(' ' + resultado02);

//Concatenación------------------------------------------------

// let valor1 = 5;
// let valor2 = 8;
// document.write("" + valor1 + valor2);

// let valor1 = "2";
// let valor2 = "5";
// document.write(valor1+valor2);

// let valor1 = '8';
// let valor2 = 7;
// document.write(valor1.concat(valor2));

// let valor1 = "7";
// let valor2 = "2";
// document.write(`El valor de la suma de: ${valor1 + " y " + valor2} es ${parseInt(valor1) + parseInt(valor2)}`);

//Operadores de comparación---------------------------------------------
// let numero1 = 5;
// let numero2 = 5;
// let numero3 = 6;

// document.write(numero1 == numero2);
// document.write(numero1 == numero3);

// if(numero1 == numero2){
//     document.write("Son iguales");
// }else if(numero1 > numero2){
//     document.write("El numero1 es mayor al numero2");
// }else if(numero1 < numero2){
//     document.write("El numero1 es menor al numero2")
// }

// if(numero1 != numero3){
//     document.write('Son diferentes');
// }

//Operadores lógicos---------------------------------------------------

// let valor1 = true;
// let valor2 = true;

// document.write(valor1 && valor2);
// document.write(valor1 || valor2);
// document.write(!valor1);

//Array--------------------------------------------------------

// let frutas = ['manzana','platano','pera', 'fresa'];
// document.write(frutas);
// document.write(frutas[2]);

//Array Asociativo-------------------------------------

// let nombres ={
//     nombre: 'José Antonio',
//     apellido: 'Palomino García',    
// }

// document.write(`Mi nombre es ${nombres['nombre']} y mi apellido es ${nombres['apellido']}`);

//Bucle While-------------------------------------------------

// let numero = 1;

// while(numero<7){
//     numero++;    
//     document.write(numero);
// }

//Do While-------------------------------------------------------

// let numero = 5;

// do{numero+=2;
//     document.write(' ', numero);}while(
//     numero<20    
// );

//BREAK------------------------------------------------------------

// let numero = 0;

// while(numero < 1000){
//     numero++
//     document.write(' ', numero);
//     if(numero==50){
//         break;
//     }
// }

// let numero02 = 0;

// forholi:
// do{numero02++;
// document.write(numero02 + ' ')
// break forholi;}while(
//     numero02<=20
//     );
    


//FOR--------------------------------------------------------

// for(let i=0;i<10;i++){
//     document.write(i);
// }

//CONTINUE-------------------------------------------------
// for(let i=0;i<=10;i++){
//     if(i==9){
//         continue;
//     }
//     document.write(' ', i);
// }

//FOR IN-------------------------------------------------------------

//Indices:
// let celulares=['samsung', 'LG', 'Apple', 'Xiaomi', 'Motorola'];
// for(celularesIndices in celulares){
//     document.write(' ', celularesIndices, '<br>');    
// }

// for(celularesIndices in celulares){
//     document.write(' ', celulares[celularesIndices], '<br>');
// }

//FOR OF-----------------------------------------------------------

// let i = ['a','b','c'];

// for(ival of i){
//     document.write(' ' + ival);
// }

//LABEL---------------------------------------------------------------

// let array1 = ['Samsung', 'LG', 'Xiaomi', 'Apple'];
// let array2 = ['Tv', array1, 'Audifonos'];

// forOver:
// for (let array in array2) {
//     if (array == 1) {
//         for (let array of array1) {
//             // continue o break;                 
//             document.write(array + ' ');
//         }
//     } else {
//         document.write(array + ' ');
//     }
// }

//Funciones----------------------------------------------------------
//Declaración y ejecución:

// function saludar(){
//     saludo = prompt('¿Como estas?');
//     if (saludo == "Bien") {
//         document.write('Me alegro');
//     }else{
//         document.write('Una pena');
//     }
// }

// saludar();

//Return:

// function saludar(){
//     alert('Hola');
//     return 'La función se ejecutó correctamente';
// }

// let confirmacion = saludar();
// document.write(confirmacion);

// function suma(sum1,sum2){    
//     let sum = sum1 + sum2;
//     document.write(sum)
//     document.write('<br>')
// }
// suma(10,20);

//Cuanto se usa FOR IN en un "array asociativo" en vez de poner el orden 0,1,2,3,4... se coloca el valor 

const object = {a: 1, b: 2, c: 3};

for (const property in object) {
  document.write(property);
}

// expected output:
// "a: 1"
// "b: 2"
// "c: 3"


