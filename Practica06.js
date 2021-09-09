//DOM (Document Object Model)
//Nodo: un nodo en el DOM es cualquier etiqueta del cuerpo, como un párrafo, el mismo body o incluso las etiquetas de una lista. 

//Tipos de nodo:
//Document: es el nodo raíz, a partir del cual derivan el resto de nodos.
//Element: nodos definidos por elementos html(p, h1, etc)
//Text: es el texto demtro de un node element.
//Attribute: los atributos de las etiquetas(style, src, etc). En Javascript no se verá como nodos sino información asociada al element node.

//Métodos de selección de elementos:

//document.getElementById() - selecciona un elemento por ID 

parrafo = document.getElementById("parrafo");
document.write(parrafo + " ELEMENTO PARRAFO DE HTML: <b>getElementById() </b><br>");

//document.getElementByTagName() - selecciona una lista/colección de elementos

coleccion = document.getElementsByTagName("p");
document.write(coleccion + " LISTA DE ELEMENTOS: <b>getElemetsByTagName() </b><br>");
document.write(coleccion[0] + " PRIMER ELEMENTO DE LA LISTA: <b>getElementsByTagName() </b><br>")

//document.querySelector() - devuelve el primer elemento que coincida con el grupo especificado de selectores

parrafo02 = document.querySelector(".parrafo");
idElement = document.querySelector("#parrafo"); //El getElementById() es más óptimo para hacer seleccionar una etiqueta id.
document.write(parrafo02 + " PRIMER ELEMENTO QUE COINCIDIÓ CON EL GRUPO ESPECIFICADO DE ETIQUETA CSS(p): <b>querySelector()</b><br>");
document.write(idElement + " PRIMER ELEMENTO QUE COINCIDIÓ CON EL GRUPO ESPECIFICADO DE ETIQUETA CSS(id): <b>querySelector()</b><br>");

//document.querySelectorAll() - devuelve todos los elementos
parrafo03 = document.querySelectorAll('.parrafo');
document.write(parrafo03 + " LISTA DE ELEMENTOS QUE COINCIDA CON LA ETIQUETA <B>querySelectorAll()</B><BR>");
document.write(parrafo03[0] + " PRIMER ELEMENTO DE LA LISTA DE ETIQUETAS <B>querySelectorAll()</B><BR>");

//Métodos para Definir, Obtener y Eliminar valores de atributos

//.setAttribute(,) : modifica/crea los atributos
let rango = document.querySelector('.rangoEtario');
// rango.setAttribute("type","text");
// rango.setAttribute("type","range");
rango.setAttribute("type","color");

//.getAttribute() : obtiene los atributos
let valorDelAtributoRango = rango.getAttribute("type");
document.write(valorDelAtributoRango + "<b> .getAttribute</b>");

//.removeAttribute() : remueve los atributos
rango.removeAttribute("type");

//Atributos Globales: son los atributos que contienen todos los elementos en común(todos los elementos html)

//contentEditable : indica que el texto puede ser modificado desde la web
titulo = document.querySelector(".titulo");
titulo.setAttribute("contentEditable","true");

//dir : tiene valores(ltr, rtl). Indica la dirección del elemento.

titulo.setAttribute("dir", "rtl");

//hidden : oculta el elemento

// titulo.setAttribute("hidden", "true");

//tittle: al pasar el mouse se pone un mensaje

titulo.setAttribute("tittle","Esto es un título");

//Atributos de Inputs

const inputNormal = document.querySelector(".input-normal");
document.write("<br>"+ inputNormal);

//.className : devuelve el nombre de la clase del input
document.write("<br>" + inputNormal.className + "<b> .className</b>");

//.value : devuelve el valor del input
document.write("<br>" + inputNormal.value + "<b> .value</b>");

//.type : puede modificar el type del input(numer, color, range)
document.write("<br>" + inputNormal.type + "<b> .type</b>");
inputNormal.type="number";
document.write("<br>" + inputNormal.type + "<b> .type</b>");

//.accept : determina que archivos puede aceptar los input de tipo file
const inputNormal02 = document.querySelector(".input-normal02");
inputNormal02.accept = "image/png";
// document.write("<br>" + (inputNormal02.accept = "image/png" + "<b> .accept"));

//.minLength : indica el mínimo de caracteres de un input
const inputNormal03 = document.querySelector(".input-normal03");
inputNormal03.minLength = 4;
inputNormal03.setAttribute("minlength","10");

//.placeholder : pone un valor dentro del input
inputNormal03.setAttribute("placeholder","Hola");

//.required : determina si es requerido o no
inputNormal03.required = " ";

//Atributos Style

const elemento = document.querySelector(".elemento");
elemento.style.color = "red";
elemento.style.backgroundColor = "yellow";

//Clases, classList y Metodos de classList
//.add : añade una clase
const clase = document.querySelector(".clase");
clase.classList.add("otraClase");

//.remove : remueve la clase
clase.classList.remove("otraClase");

//.item : devuelve la clase del índice especificado 
let val = clase.classList.item(1);
document.write("<br>" + val + "<b> .item(1)</b>");

//.contains : igual que item solo que devuelve true o false
let ver = clase.classList.contains("teclado");
document.write( '<br>' + ver + '<b> .contains</b>');

//.toggle : en caso que exista la clase la elimina y si no existe la agrega.

let toggle = clase.classList.toggle('teclado');
document.write("<br>" + toggle + "<b> .toggle()</b><br>");

//Se tiene un parámetro opcional que es para forzar. Si se pone ('teclado', true) en caso de que la tenga no la va a sacar si la tiene igual la deja. Si se pone
//('teclado', false) la va a sacar siempre y si no la tiene no la pone tampoco.  

//.replace : reemplaza una clase por otra

let replace = clase.classList.replace('mouse', 'tecladito');
document.write(replace + "<b> .replace(,)</b>")

//Creación de Elementos
const elementos = document.querySelector(".elementos");

//.textContent : devuelve el texto de cualquier nodo
let resultadoElemental = elementos.textContent;
document.write("<br>" + resultadoElemental + "<b> .textContent</b>");

//.innerText : devuelve el texto visible de un node element
let resultadoElemental02 = elementos.innerText;
document.write("<br>" + resultadoElemental02 + "<b> .innerText</b>")

//.innerHTML : devuelve el texto html completo si es que no está en el navegador. Si está en un alert si.
let resultado03 = elementos.innerHTML;
alert("<br>" + resultado03);

//.outerHTML : devuelve todo el contenido incluyendo las etiquetas exteriores. Si está en un alert.
let resultado04 = elementos.outerHTML;
alert("<br>" + resultado04);

//Creación de Elementos 
const contenedor = document.querySelector(".contenedor");
const item = document.createElement('LI');
console.log(item);

//Para insertar un objeto dentro del elemento: .appendChild()
//Para crear un texto de la nada
const objetoItem = document.createTextNode("Texto del Item");
item.appendChild(objetoItem);
contenedor.appendChild(item);

//Para no consumir muchos recursos al crear varios elementos
const fragmento = document.createDocumentFragment();
for (let i = 0; i < 20; i++) {    
    const item02 = document.createElement('LI');
    item02.innerHTML = "Texto del Item 02";
    fragmento.appendChild(item02);
}

contenedor.appendChild(fragmento);

//.firstChild()

const primerHijoContenedor = contenedor.firstChild;
console.log(primerHijoContenedor);

//Devuelve #text ya que está tomando el "espacio" como hijo, ya que el espacio también es un texto. 

//.firstElementChild : muestra el primer elemento hijo del contenedor

const primerElementoHijo = contenedor.firstElementChild;
console.log(primerElementoHijo);

//.lastElementChild : muestra el último elemento hijo del contenedor

const ultimoElementoHijo = contenedor.lastElementChild;
console.log(ultimoElementoHijo);

//.childNodes : devuelve todos los nodos hijos

const nodosDeHijos = contenedor.childNodes;
console.log(nodosDeHijos);

// .children : devuelve los hijos 

const todosLosHijos = contenedor.children;
console.log(todosLosHijos);
for(hijos of todosLosHijos){
    console.log(hijos);
}

// .replaceChild(,)

const parrafoo = document.createElement("P");
const h2_nuevo = document.createElement("H2");
h2_nuevo.innerHTML = "Holitas";

const h2_antiguo = document.querySelector(".h2")
contenedor.replaceChild(h2_nuevo,h2_antiguo);

// .removeChild()

contenedor.removeChild(h2_nuevo);
 
// .hasChildsNodes() : para saber si tiene hijos

let respuesta = contenedor.hasChildNodes();

if(respuesta){
    document.write("<br> El elemento tiene hijos")
}else{
    document.write("<br> El elemento no tiene hijos")
}

//Propiedades de parents (Padres)

//parentElement : muestra el elemento padre

const h4_nuevo = document.querySelector(".h4");
console.log(h4_nuevo.parentElement);

//Propiedades de Siblings (Hermanos)
//nextSibling : muestra el nodos hermano siguiente(en este caso muestra #text)
console.log(h4_nuevo.nextSibling);

//nextElementSibling : muestra el elemento hermano siguiente
console.log(h4_nuevo.nextElementSibling);

//previusElementSibling : muestra el elemento hermano anterior
const simple_parrafo = document.querySelector('.p');
console.log(simple_parrafo.previousElementSibling);



