/*
Lo que hacen estos métodos es buscar cadenas y devolver un valor. Ya sea boolean, caracteres, posición del caracteres, cadenas, etc.
*/

document.write(`<b>CONCATENANDO CADENA DE TEXTO: </b><BR>`)
document.write(`<b>.concat(' ')</b><BR>`)
 let cadena = `cadena de texto`;
 let cadena2 = ` cadena 2`;

 //concat() - junta dos o más cadenas y retorna una nueva. 

 /* Se tiene muchas maneras de concatenar. Una de ellas es esta: */

 let resultado = cadena.concat(' hola').concat(cadena2);
 document.write(resultado + `<br><br>`);

 //startsWith() o endsWidth() : si una cadena comienza o termina con los caracteres de la otra cadena devuelve true o false

 document.write(`<b>.startsWith() y .endsWidth(): si una cadena comienza o termina con los caracteres de la otra cadena devuelve true o false</b><br>`)
 let cadena3 = `cadena 3`;
 let cadena4 = `cadena`;
 let cadena5 = `3`
 let resultado02 = cadena3.startsWith(cadena4);
 let resultado03 = cadena3.endsWith(cadena5);
 document.write(resultado02 + `<br>` + resultado03 + `<br><br>`);

 //includes() : si una cadena se encuentra dentro de otra cadena devuelve true o false

document.write(`<b>.includes(): si una cadena se encuentra dentro de otra cadena devuelve true o false</b><br>`) 
let resultado04 = cadena3.includes(cadena4);
document.write(resultado04 + `<br>`);
 
//indexOf() : cumple la misma función de identificar la palabra como includes(). Esta vez devuelve un tipo diferente de dato: un int. Este int devuelve la posición en donde
// se encuentra la primera letra de la palabra encontrada. Si devuelve un -1 significa que no encontró el caracter.
document.write(`<b>.indexOf(): cumple la misma función de identificar la palabra como includes(). Esta vez devuelve un tipo diferente de dato un int. Este int devuelve la 
posición en donde se encuentra la primera letra de la palabra encontrada. Si devuelve un -1 significa que no encontró el caracter.</b><br>`) 
let resultado05 = cadena.indexOf(cadena4);
document.write(resultado05 + `<br>`)

//lastIndexOf() : igual que indexOf(). La diferencia es que si existe más de una de la misma palabra a buscar escoge la última palabra.

document.write(`<b>.lastIndexOf(): igual que indexOf(). La diferencia es que si existe más de una de la misma palabra a buscar escoge la última palabra.</b><br>`) 
let cadena6 = `DA DA DA DA DA DA DA DA`;
let cadena7 = `DA`;
let resultado06 = cadena6.lastIndexOf(cadena7);

document.write(resultado06 + `<br>`);

//Si se quiere coger la letra o la posición de uno de los caracteres lo que se debe hacer es lo siguiente:
document.write(`<b>Si se quiere coger la letra o la posición de uno de los caracteres lo que se debe hacer es lo siguiente: cadena.indexOf('t'): </b><br>`) 
document.write(cadena.indexOf('t') + `<br>`);
document.write(`<b>cadena[10]: </b><br>`) 
document.write(cadena[10] + `<br>`);

//padStart(,) - llena de caracteres al inicio de la cadena las veces que se le especifica.

document.write(`<b>.padStart( , ): llena de caracteres al inicio de la cadena las veces que se le especifica </b><br>`) 
let cadena8 = `abc`;
document.write(cadena8.padStart(6,`a`) + `<br>`);

//padEnd(,) - lo mimos que padStart(,) solo que al final
document.write(`<b>.padEnd( , ): lo mismos que padStart(,) solo que al final</b><br>`) 
document.write(cadena8.padEnd(6,'a')+'<br>');

//repeat() - repite una cadena de texto el número de veces que se le indique.
document.write(`<b>.repeat(): repite una cadena de texto el número de veces que se le indique.</b><br>`) 
document.write(cadena.repeat(5) + '<br>');

/*
Estos son métodos que transforman a la cadena
*/

/*
.split(`,`) : convierte una cadena de texto en un array. Para esto la cadena de texto debe estar separado por lo que se indique en los parentesis. De esta manera lo convertirá 
en array respecto a lo que se indicó en los parentesis. En este caso se puso una coma. 
*/

document.write(`<b> .split(` , `): convierte una cadena de texto en un array. Para esto la cadena de texto debe estar separado por lo que se indique en los parentesis. De esta 
manera lo convertirá en array respecto a lo que se indicó en los parentesis. En este caso se puso una coma. </b><br>`);
let cadena9 = `Hola, como, estas?`;
let resultado07 = cadena9.split(',');
document.write(resultado07[1] + `<br>`);

let cadena10 = `Hola como estas?`;
let resultado08 = cadena10.split(' ');
document.write(resultado08[0] + '<br>');

/*
.substring(,) : se pone 2 numeros los cuales indicará los caracteres que se quiere que se muestre de una cadena de texto.
*/
document.write('<b> .substring(` , `): </b><br>')
let cadena11 = 'Hola como estas?';
let resultado09 = cadena11.substring(10,16);
document.write(resultado09 + `<br>`);

//.toLowerCase() : convierte una cadena en minúscula
//.toUpperCase() : convierte una cadena en mayuscula
//.toString() : convierte los elementos a String

document.write('<b> .toLowerCase() : convierte una cadena en minúscula </b><br>')
document.write('<b> .toUpperCase() : convierte una cadena en mayuscula </b><br>')
document.write('<b> .toString() : convierte los elementos a String </b><br>')

//.toString() : convierte los datos en String
document.write('<b> .toString(): </b><br>')
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

//.length : muestra la cantidad de caracteres que hay en una cadena de texto
document.write('<b> .length: </b><br>')
document.write(cadena13.length + '<br>');

//Para remover los espacios al menos en el interprete se usa .trim(). 
document.write('<b> .trim(): </b><br>')
let resultado11 = cadena13.trim();
document.write(resultado11.length + `<br>`);

//.trimEnd() : elimina los espacios del final
//.trimStart() : elimina los espacios del principio
document.write('<b> .trimEnd(): elimina los espacios del final</b><br>')
document.write('<b> .trimStart(): elimina los espacios del principio</b><br>')

/*
Métodos de Arrays
*/

//---------------TRANSFORMADORES--------------------//

//.pop() : elimina el último elemento del array. Además que lo elimina nos muestra cual eliminó. 
document.write('<b> .pop(): </b><br>')
let nombres = [`Pedro`, `Maria`, `Jorge`];
document.write(nombres + `<br>`)
let resultado12 = nombres.pop();
document.write(resultado12 + `<br>`);
document.write(nombres + `<br>`);

//.shift() : elimina el primer elemento del array. Además que lo elimina nos muestra cual eliminó. 

document.write('<b> .shift(): </b><br>')
let nombres02 = [`Pedro`, `Maria`, `Jorge`];
document.write(nombres02 + `<br>`)
let resultado13 = nombres02.shift();
document.write(resultado13 + `<br>`);
document.write(nombres02 + `<br>`);

//.push() : agrega un elemento al array al final de la lista. Y lo que devuelve es la cantidad de elementos que ahora tiene el array

document.write('<b> .push(): </b><br>')
let nombres03 = [`Pedro`, `Maria`, `Jorge`];
document.write(nombres03 + `<br>`)
let resultado14 = nombres03.push("Juancito");
document.write(resultado14 + `<br>`);
document.write(nombres03 + `<br>`);

//.reverse() : invierte el orden de los elementos de un array

document.write('<b> .reverse(): </b><br>')
let nombres04 = [`Pedro`, `Maria`, `Jorge`];
document.write(nombres04 + `<br>`)
let resultado15 = nombres04.reverse();
document.write(resultado15 + `<br>`);
document.write(nombres04 + `<br>`);

//.unshift() : agrega uno o más elementos al inicio del array y devuelve la nueva longitud del array.

document.write('<b> .unshift(): </b><br>')
let numeros02 = [3, 4, 5];
document.write(numeros02 + `<br>`)
let resultado16 = numeros02.unshift(0,1,2);
document.write(resultado16 + `<br>`);
document.write(numeros02 + `<br>`);

//.sort() : ordena los elementos de un arreglo (array) localmente y devuelve el arreglo ordenado. Es decir, los coloca en el orden léxico gráfico. 

document.write('<b> .sort(): </b><br>')
let numeros03 = [3, 1, 6, 8, 2, 9, 12, 7];
document.write(numeros03 + `<br>`)
let resultado17 = numeros03.sort();
document.write(resultado17 + `<br>`);
document.write(numeros03 + `<br>`);

//.splice(start,delete,added) : desde la posición que se le indica elimina los que también se le indica y finalmente agrega los datos que se le indica. Devuelve los 
//elementos que se borró. Si se quiere añadir al final es con -1 en el start.

document.write('<b> .splice(): </b><br>')
let nombres05 = [`Pedro`, `Maria`, `Jorge`, `Juan`, `Melanie`, `Mauricio`];
document.write(nombres05 + `<br>`)
let resultado18 = nombres05.splice(3,3,`Valeria`,`Roberto`,`Timber`);
document.write(resultado18 + `<br>`);
document.write(nombres05 + `<br>`);

//Accesores---------------------------------------------------------------------------

document.write(`<br> <b>Métodos Accesores:</b> <br>`)

// .join() : convierte los arrays en una cadena de texto. Se puede utilizar tostring(). La diferencia es que se puede utilizar caracteres como "-" para poder separar las 
// palabras.

document.write('<b> .join(): </b><br>')
let nombres06 = [`Pedro`, `Maria`, `Jorge`, `Juan`, `Melanie`, `Mauricio`];
document.write(nombres06 + `<br>`)
let resultado19 = nombres06.join(' - ');
let resultado20 = nombres06.join(' <br>elemento: ')
document.write(resultado19 + `<br>`);
document.write(`elemento: ` + resultado20 + `<br>`);
// document.write(nombres06 + `<br>`);

// .slice() : parecido a substring()(elegiamos desde un caracter hasta otro de la cadena de texto), pero esta vez con elementos. 

document.write(`<b>.slice: </b> <br>`);
let nombres07 = [`Yolanda`, `Paulo`, `Jose`, `Brenda`];
document.write(nombres07 + `<br>`);
let resultado21 = nombres07.slice(1,2);
document.write(resultado21 + "<br>");
document.write("<b>Si se quiere mostrar todos: .slice(0)</b><br>")
let resultado22 = nombres07.slice(0);
document.write(resultado22 + '<br>');


//De Repetición---------------------------------------------------------------------------

/*
.filter() : es como un bucle. Recorre el array. Y en la primera vuelta se posiciona en el primer elemento del array. .filter() recibe como parámetro una función sin nombre. 
En este caso se está poniendo una función flecha y una función clásica.
*/

document.write("<b>filter()</b><br>")
let numeros04 = [1,2,3,4,5,6];
numeros04.filter(numero => document.write(numero));
document.write('<br>');
numeros04.filter(function(numero){
    document.write(numero)
})
document.write('<br>');

//Se puede hacer condicionales:
document.write("<b>Se puede hacer condicionales: </b><br>");
let frutas = ['manzana', 'plátano', 'pera', 'fresa', 'palta'];
resultadoFrutas = frutas.filter(fruta => (fruta.length > 5));
document.write(resultadoFrutas + '<br>');

//forEach() : es similar. Sin embargo, hay una diferencia. El forEach() no permite hacer condicionales.

//Objeto Math - Básico------------------------------------------------------------------------------------

//Métodos 
//sqrt() - Devuelve la raíz cuadrara de un número.
document.write('<b>Objeto Math - Básico </b><br>');
document.write('<b>sqrt</b><br>')
let numeroCuadrado = Math.sqrt(9);
document.write(numeroCuadrado + '<br>');

//cbrt(25) - Devuelve la raíz cúbica de un número.
document.write('<b>cbrt</b><br>')
let numeroCubico = Math.cbrt(27);
document.write(numeroCubico + '<br>');

//max - Devuelve el número máximo de lo que se indique.
document.write('<b>max</b><br>');
let numeroMaximo = Math.max(5,6,12,45,11,10,65,120,8);
document.write(numeroMaximo + '<br>');

//min - Devuelve el número mínimo de lo que se indique.
document.write('<b>min</b><br>');
let numeroMinimo = Math.min(12,45,11,2,6,54);
document.write(numeroMinimo + '<br>');

//random - Devuelve un número random pseudo-aleatorio entre 0 y 1.
document.write('<b>random</b><br>');
let numeroRandom = Math.random();
document.write(numeroRandom + '<br>');

//Si se quiere coger un número entre 1 - 100 random se hace lo siguiente:

document.write('<b>Número random entre 1 - 100:</b><br>');
let numeroRandom100 = Math.random()*100;
document.write(numeroRandom100 + "<br>");

//Si se quiere quitar los "decimales" existen 2 formas:
//La primera:
document.write("<b>Número sin decimales de 1 - 100</b>")
document.write("<br><b>Primera forma:</b>")
let numeroRandomNoDe = Math.random()*100;
numeroRandomNoDe = numeroRandomNoDe.toString();
num = numeroRandomNoDe[0] + numeroRandomNoDe[1];
if (numeroRandomNoDe[1] == '.') {
    num = numeroRandomNoDe[0];
}
document.write("<br>" + num + "<br>");

//La segunda Math.round():
document.write("<b>Segunda forma Math.round():</b><br>")
//.round - Devuelve el valor de un número redondeado al número entero más cercano.
let numeroRandomRound = Math.random()*100;
numeroRandomRound = Math.round(numeroRandomRound);
document.write(numeroRandomRound + "<br>");

/*Esta forma es la más adecuada. Sin embargo, no se tiene un range entre 0 - 100 sino que se tiene ese rango contando el 0 y 100. Si no se quiere incluir ni el 0 ni el 100.
Si se suma 1 al 0 y se resta 1 al 100 el problema con esto sería que las probabilidades que salga el 1 o el 99 es uno más que los demás lo cual es injusto. */

//Así que el método que se podría utilizar en este caso es .floor 
//.floor - Devuelve el valor de un número redondeado para abajo.

document.write("<b>Tercera forma Math.floor():</b><br>");
let numeroRandomFloor = Math.random()*100;
numeroRandomFloor = Math.floor(numeroRandomFloor);
document.write(numeroRandomFloor + "<br>");

/*Esta forma sería la más óptima. Sin embargo, si se deja así nomás ya no saldrá el 100 pero si el 0. Por lo que hay que hacerle algunas modificaciones. */
document.write("<b>Tercera forma modificada Math.floor():</b><br>");
let numeroRandomFloorMo = Math.random()*99;
numeroRandomFloorMo = Math.floor(numeroRandomFloorMo+1);
document.write(numeroRandomFloorMo);

//.trunc - Elimina los decimales.



