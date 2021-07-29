/*
Lo que hacen estos métodos es buscar cadenas y devolver un valor. Ya sea boolean, caracteres, posición del caracteres, cadenas, etc.
*/

 let cadena = `cadena de texto`;
 let cadena2 = ` cadena 2`;

 //concat() - junta dos o más cadenas y retorna una nueva. 

 /* Se tiene muchas maneras de concatenar. Una de ellas es esta: */

 let resultado = cadena.concat(' hola').concat(cadena2);
 document.write(resultado + `<br>`);

 //startsWith() o endsWidth() : si una cadena comienza o termina con los caracteres de la otra cadena devuelve true o false

 let cadena3 = `cadena 3`;
 let cadena4 = `cadena`;
 let cadena5 = `3`
 let resultado02 = cadena3.startsWith(cadena4);
 let resultado03 = cadena3.endsWith(cadena5);
 document.write(resultado02 + `<br>` + resultado03 + `<br>`);

 //includes() : si una cadena se encuentra dentro de otra cadena devuelve true o false

let resultado04 = cadena3.includes(cadena4);
document.write(resultado04 + `<br>`);
 
//indexOf() : cumple la misma función de identificar la palabra como includes(). Esta vez devuelve un tipo diferente de dato un int. Este int devuelve la posición en donde
// se encuentra la primera letra de la palabra encontrada. Si devuelve un -1 significa que no encontró el caracter.
let resultado05 = cadena.indexOf(cadena4);
document.write(resultado05 + `<br>`)

//lastIndexOf() : igual que indexOf(). La diferencia es que si existe más de una de la misma palabra a buscar escoge la última palabra.

let cadena6 = `DA DA DA DA DA DA DA DA`;
let cadena7 = `DA`;
let resultado06 = cadena6.lastIndexOf(cadena7);

document.write(resultado06 + `<br>`);

//Si se quiere coger la letra o la posición de uno de los caracteres lo que se debe hacer es lo siguiente:

document.write(cadena.indexOf('t') + `<br>`);
document.write(cadena[10] + `<br>`);

//padStart(,) - llena de caracteres las veces que se le especifica.

let cadena8 = `abc`;
document.write(cadena8.padStart(6,`a`) + `<br>`);

//padEnd(,) - lo mimos que padStart(,) solo que al final

document.write(cadena8.padEnd(6,'a')+'<br>');

//repeat() - repite una cadena de texto el número de veces que se le indique.

document.write(cadena.repeat(5) + '<br>');

/*
Estos son métodos que transforman a la cadena
*/

/*
.split(`,`) : convierte una cadena de texto en un array. Para esto la cadena de texto debe estar separado por lo que se indique en los parentesis. De esta manera lo convertirá 
en array respecto a lo que se indicó en los parentesis. En este caso se puso una coma. 
*/

let cadena9 = `Hola, como, estas?`;
let resultado07 = cadena9.split(',');
document.write(resultado07[1] + `<br>`);

let cadena10 = `Hola como estas?`;
let resultado08 = cadena10.split(' ');
document.write(resultado08[0] + '<br>');

/*
.substring(,) : se pone 2 numeros los cuales indicará los caracteres que se quiere que se muestre de una cadena de texto.
*/

let cadena11 = 'Hola como estas?';
let resultado09 = cadena11.substring(10,16);
document.write(resultado09 + `<br>`);

//.toLowerCase() : convierte una cadena en minúscula
//.toUpperCase() : convierte una cadena en mayuscula
//.toString() : convierte los elementos a String

let cadena12 = 1234;
// let resultado10 = cadena12;
let resultado10 = cadena12.toString();
document.write(resultado10 + '<br>');

//trim : elimina los espacios en blanco
/*
Cuando se quiere mostrar esto en el navegador no se muestra los espacios porque es HTML. Sin embargo, hay espacios a pesar que no se muestre. Se puede comprobar con 
cadena13[0]. Si se pone esto no se verá nada. Porque si hay espacios. Otra manera de hacerlo es con la propiedad .lenght. 
*/
let cadena13 = '  pedro  ';

//.length : muestra la cantidad de caracteres que hay en una cadenad de texto
document.write(cadena13.length + '<br>');

//Para remover los espacios al menos en el interprete se usa .trim(). 

let resultado11 = cadena13.trim();
document.write(resultado11.length);

//.trimEnd() : elimina los espacios del final

let resultado12 = cadena13 + `Hola bb`;
document.write(resultado12 + `<br>`);

