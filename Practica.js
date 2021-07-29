//VARIABLES----------------------------------------------------------------------------------------------------------------
//Las variables son un espacio que se guarda en memoria. Ejemplo del vaso: un vaso es una variable en el cual dentro se puede guardar 
//varias cosas. En js ese vaso es una variable que valdrá lo que se almacene dentro del vaso. Sin embargo, el contenido de ese vaso
//no siempre será papel. Sino que puede cambiar. 

//Los tipos de datos que se pueden almacenar dentro de las variables son String, number y boolean.

//Los casos especiales de datos son: UNDEFINED, NULL, NAN. Estos tipos de datos indica que la variable no esta definida o hay
//un error.

//UNDEFINED: cuando una variable no está definida
//NULL: cuando una variable tiene como valor vacío
//NAN: cuando se pretende hacer una operación con 2 valores que no son int

//Estos tipos de datos son "PRIMITIVOS". Porque ya vienen con el lenguaje y forman parte de js. Existen otro tipo de datos que
//son construidos en base a otros. 

//La variable se puede declarar, inicializar y modificar.

//Cuando se declara una variable se tiene 3 formas de hacerlo:
//var, let y const
//Actualmente se utiliza let porque let limita el alcance de la variable en el bloque(cuando se cierra y abre parentesis) en que se
//ejecuto. Es decir, es local.
//var es global.
//const hace que una variable tenga un valor de por vida y no puede cambiar su valor. Y solamente se puede declarar de esta 
//manera: const numero = 10;

//Scope: es el alcance de las variables.

//Hoisting: es el orden en el cual se ejecuta el código. 

//Prompt
//prompt("");
//Es una función que permite al usuario insertar un valor para que pueda ser almacenado en una variable a la cual se haya 
//almacenado la función prompt.
//El valor almacenado es esta función a pesar de haber ingresado un número. El prompt lo guardará como cadena de texto. 
//Si se quiere realizar operaciones con el prompt se debe de convertir a un entero.

//OPERADORES--------------------------------------------------------------------------------------------------------------

//Operadores de Asignación
//Asigna un valor al operando de la izquierda(se refiere al valor de la izquierda) basado en el valor del operando de la derecha
/*
    x = y
    x += y
    x -= y
    x *= y
    x /= y
    x %= y
    x **= y
*/

//Operadores Aritméticos
//Toman valores númericos (ya sean literales o variables) como sus operandos y retornan un valor numérico único. Es decir, toman
//sus operandos juntandolos para formar un nuevo valor.
/*

    +
    --
    /
    **
    ++
    *
    &
    -

*/

//Si se quiere restar un número con un operador aritmetico y se quiere asignar luego a una variable el resultado de esa resta. Lo
//que se debe hacer primero es restar el operando y luego asignarle a una variable:

/*let numero1 = 10;

numero1--;

resultado = numero1;

document.write(resultado)*/

//CONCATENACIÓN: es unir strings. Es decir, unir cadenas de texto. --------------------------------------------------------

//Para unir strings con números es convertir los numeros en strings poniendo "" al inicio de la asignación de valores:
/*let numero1 = 5;
let numero2 = 8;
resultado = "" + numero1 + numero2; */

//Otra forma de concatenar es al momento de asignar los valores a las variables. Los números se pongan dentro de un "":
/*let numero1 = "5";
let numero2 = "8";*/

//Otra forma es usando es CONCAT. Con el concat si o si una de las variables debe ser un string:
/*let numero1 = "5";
let numero2 =8;
resultado = numero1.concat(numero2); */

//Otra forma de concatenar son con los BACKTICKS(``) y la variable entre ${}. 

/*saludo = "José Antonio";
frase = `hola me llamo ${saludo}`;
document.write(frase);*/

//Los backticks también sirven para colocar dentro código html.

//Si se quiere crear una cadena de texto utilizando "" y se quiere volver a utilizar "" dentro de la cadena para que se muestre
//esas comillas dobles. No se puede hacer. Se debe utilizar comillas simples ''. Del mismo modo al revez.

//OPERADORES DE COMPARACIÓN-----------------------------------------------------------------------------------------------
//Comparan dos expresiones y devuelven un valor Boolean (true o false) que representa la relación de sus valores:
/*
    ==
    !=
    ===
    !==
    >=
    <>
    <=
*/

//OPERADORES LOGICOS---------------------------------------------------------------------------------------------------------
//Devuelven un resultado a partir que se cumpla o no una condición. Su resultado de booleano y sus operandos son valores lógidos
//o asimilables a ellos.

//&& AND
//|| OR
//! NOT

//Si se quiere convertir una expresión a los contrario de lo que és. Se coloca un ! delante de él:
//(!afirmación)
//Al comparar 2 datos booleanos con & y uno es false. La expresión se termina siendo false.
//Al comparar 2 datos booleanos con || y uno es false y el otro true. La expresión se termina siendo true.

//CAMEL CASE-----------------------------------------------------------------------------------------------------------------
//Este estilo es escribir las palabras con la primera palabra en minúscula y las demas en mayúscula:
//decimeAlgoPorFavor

//CONDICIONALES------------------------------------------------------------------------------------------------------------
//Si la condición es true se ejectuta el condicional. Al ser false no:
/*if(true/false){
    document.write();
}*/
//Si la condición no es true que se ejecute otra cosa:
/*else if(){

} */
//Y si todo lo anterior es false y se quiere ejecutar algo:
/*else{    
} */

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*Tres amigos tienen una cantidad de dinero y quieren comprarse un helado acorde al dinero que poseen. Se tiene helados de:
helado de agua: 60 c
helado de crema: s/1 
helado de crema con chispas: s/1.50
helado de 2 bolas: s/2.50
helado de pote: s/3.50
minipesiduri: s/5 

Los tres amigos Roberto, Alberto y Hualter deben decir cuando dinero llevan para poder saber que helados se puede comprar cada 
amigo respecto a su dinero.*/

let dineroRoberto = prompt("¿Cuanto dinero tienes Roberto?");
let dineroAlberto = prompt("¿Cuanto dinero tienes Alberto?");
let dineroHualter = prompt("¿Cuanto dinero tienes Hualter?");

dineroRoberto = parseInt(dineroRoberto);
dineroAlberto = parseInt(dineroAlberto);
dineroHualter = parseInt(dineroHualter);

if(dineroRoberto >= 0.60 && dineroRoberto < 1){
    alert(`Roberto, te alcanza para un helado de agua porque tienes ${dineroRoberto}`);
    alert('Tu vuelto Roberto es de ' + (dineroRoberto - 0.6));
}else if(dineroRoberto >= 1 && dineroRoberto < 1.5){
    alert(`Roberto, te alcanza para un helado de crema porque tienes ${dineroRoberto}`);
    alert('Tu vuelto Roberto es de ' + (dineroRoberto - 1));
}else if(dineroRoberto >= 1.5 && dineroRoberto < 2.5){
    alert(`Roberto, te alcanza para un helado de crema con chispas porque tienes ${dineroRoberto}`);
    alert('Tu vuelto Roberto es de ' + (dineroRoberto - 1.5));
}else if(dineroRoberto >= 2.5 && dineroRoberto < 3.5){
    alert(`Roberto, te alcanza para un helado de 2 bolas porque tienes ${dineroRoberto}`);
    alert('Tu vuelto Roberto es de ' + (dineroRoberto - 2.5));
}else if(dineroRoberto >= 3.5 && dineroRoberto < 3.5){
    alert(`Roberto, te alcanza para un helado de pote porque tienes ${dineroRoberto}`);
    alert('Tu vuelto Roberto es de ' + (dineroRoberto - 3.5));
}else if(dineroRoberto >= 5){
    alert(`Roberto, te alcanza para un minipesiduri porque tienes ${dineroRoberto}`);
    alert('Tu vuelto Roberto es de ' + (dineroRoberto - 5));
}else{
    alert(`No te alcanza para nada porque tienes ${dineroRoberto}`);
}

if(dineroAlberto >= 0.60 && dineroAlberto < 1){
    alert(`Alberto, te alcanza para un helado de agua porque tienes ${dineroAlberto}`);
    alert('Tu vuelto Roberto es de ' + (dineroAlberto - 0.6));
}else if(dineroAlberto >= 1 && dineroAlberto < 1.5){
    alert(`Alberto, te alcanza para un helado de crema porque tienes ${dineroAlberto}`);
    alert('Tu vuelto Roberto es de ' + (dineroAlberto - 1));
}else if(`dineroAlberto >= 1.5 && dineroAlberto < 2.5`){
    alert(`Alberto, te alcanza para un helado de crema con chispas porque tienes ${dineroAlberto}`);
    alert('Tu vuelto Roberto es de ' + (dineroAlberto - 1.5));
}else if(dineroAlberto >= 2.5 && dineroAlberto < 3.5){
    alert(`Alberto, te alcanza para un helado de 2 bolas porque tienes ${dineroAlberto}`);
    alert('Tu vuelto Roberto es de ' + (dineroAlberto - 2.5));
}else if(dineroAlberto >= 3.5 && dineroAlberto < 5){
    alert(`Alberto, te alcanza para un helado de pote porque tienes ${dineroAlberto}`);
    alert('Tu vuelto Roberto es de ' + (dineroAlberto - 3.5));
}else if(dineroAlberto >= 5){
    alert(`Alberto, te alcanza para un minipesiduri porque tienes ${dineroAlberto}`);
    alert('Tu vuelto Roberto es de ' + (dineroAlberto - 5));
}else{
    alert(`No te alcanza para nada`);
}

if(dineroHualter >= 0.60 && dineroHualter < 1){
    alert(`Hualter, te alcanza para un helado de agua porque tienes ${dineroHualter}`);
    alert('Tu vuelto Roberto es de ' + (dineroHualter - 0.6));
}else if(dineroHualter >= 1 && dineroHualter < 1.5){
    alert(`Hualter, te alcanza para un helado de crema porque tienes ${dineroHualter}`);
    alert('Tu vuelto Roberto es de ' + (dineroHualter - 1));
}else if(dineroHualter >= 1.5 && dineroHualter < 2.5){
    alert(`Hualter, te alcanza para un helado de crema con chispas porque tienes ${dineroHualter}`);
    alert('Tu vuelto Roberto es de ' + (dineroHualter - 1.5));
}else if(dineroHualter >= 2.5 && dineroHualter < 3.5){
    alert(`Hualter, te alcanza para un helado de 2 bolas porque tienes ${dineroHualter}`);
    alert('Tu vuelto Roberto es de ' + (dineroHualter - 2.5));
}else if(dineroHualter >= 3.5 && dineroHualter < 5){
    alert(`Hualter, te alcanza para un helado de pote porque tienes ${dineroHualter}`);
    alert('Tu vuelto Roberto es de ' + (dineroHualter - 3.5));
}else if(dineroHualter >= 5){
    alert(`Hualter, te alcanza para un minipesiduri porque tienes ${dineroHualter}`);
    alert('Tu vuelto Roberto es de ' + (dineroHualter - 5));
}else{
    alert(`No te alcanza para nada porque tienes ${dineroHualter}`);
}





