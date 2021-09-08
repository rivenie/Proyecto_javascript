//POO-----------------------------------------------------------------------------------------------------------------
//La programación orientada a objetos es uno de los tantos paradigmas de programación. Un paradigma es una de las tantas formas que se tiene para crear soluciones.

//CLASE------------------------------------------------------------------------------------------------------------------

//Es como la receta. Una plantilla que se crea para que con esa plantilla se pueda crear objetos. Es como crear una fábrica de objetos.

//OBJETO----------------------------------------------------------------------------------------------------------------

//Los objetos son los resultados de las clases. 

//ATRIBUTO---------------------------------------------------------------------------------------------------------------

//Son las propiedades que tiene un objeto. 

//METODO------------------------------------------------------------------------------------

//Son las cosas que puede hacer el objeto.
//Los métodos son las acciones que se va a hacer. Los métodos se crean dentro de la clase. Básicamente un método es una función. Solamente que si está dentro de una clase
//es un método y si está fuera es una función. 

//CONSTRUCTOR-------------------------------------------------------------------------------------------------------------

//Es una particularidad que tienen las clases que es una función obligatoria. Cuando se crea una clase se debe crear un constructor que va a construir las propiedades del 
//objeto.  

//CUANDO SE FINALIZA TODO ESTO SE PUEDE DECIR QUE LA CLASE ESTÁ INSTANCIADA.

// class animal{
//     //this: se usa solamente cuando se está dentro de la clase. Fuera ya no funciona.
//     constructor(especie, edad, color){
//         this.especie = especie;
//         this.edad = edad;
//         this.color = color;
//         this.info = `Soy un ${this.especie}, tengo ${this.edad} años y soy de color ${this.color}`;
//     }

//     //METODO
//     //No es necesario el this. Y el const no está permitido aquí. Por lo que las funciones flecha si se van a inicializar no se puede usar el const. 

//     verInfo(){
//         document.write(this.info);
//     }    
// }

// //Se crea un objeto de la clase:
// const gato = new animal("gato", "3","negro");

// //De esta forma se accede a las propiedades del objeto:
// // document.write(gato.info);

// //Cuando se crea un método y se quiere acceder a éste. Se hace de la siguiente forma (con el objeto creado):
// gato.verInfo();

//ABSTRACCIÓN------------------------------------------------------------------------------------------------------------

//Cuando se habla de ABSTRACCIÓN es reducir lo más posible el objeto. Hacerlo lo más simple que se pueda. Es decir, tener lo más importante del objeto resumido.

//MODULARIDAD----------------------------------------------------------------------------------------------------------------

//Es resolver un problema grande separandolo por partes. 

//ENCAPSULAMIENTO------------------------------------------------------------------------------------------------------------

//Consiste en hacer que toda la data esten privados. Es decir, que el usuario no pueda acceder tan fácil. 

//POLIMORFISMO---------------------------------------------------------------------------------------------------------------

//Consiste en ver como un objeto se comporta de manera distinta ante el mismo método. Ej: Un gato va a caminar de una forma, un perro, una vaca, etc.. caminaran diferente.

// class animal{
//     constructor(especie,edad,color){
//         this.especie = especie;
//         this.edad = edad;
//         this.color = color;
//     }
//     ladrar(){
//         if(this.especie == 'perro' || this.especie == 'Perro'){
//             document.write('WAW <br>');
//         }else{
//             document.write('No puede ladrar porque es un ' + this.especie + '<br>');
//         }        
//     }
// }

// const perro = new animal('Perro','5','Negro');
// const gato = new animal('Gato','3','Gris');
// const pajaro = new animal('Pajaro','1','Blanco');

// perro.ladrar();
// gato.ladrar();
// pajaro.ladrar();

//CONCEPTOS QUE CAMBIAN EL CÓDIGO:-------------------------------------------------------------------------------------------

//HERENCIA-----------------------------------------------------------------------------------------------------------------------

//Es crear una clase que va a tomar todo lo que puede hacer la otra clase y las propiedades de esa clase, pero agregarle cosas nuevas. 
//Un objeto no puede tener el mismo nombre que una clase. 

// class animal{
//     constructor(especie, edad, color){
//         this.especie = especie;
//         this.edad = edad;
//         this.color = color;
//         this.Info = `El animal es de especie ${this.especie}. Tiene ${this.edad} años y es de color ${this.color} <br>`;
//     }

//     verInfo(){
//         document.write(this.Info)
//     }
// }

// class perro extends animal{
//     constructor(especie, edad, color, raza){
//         super(especie,edad,color);
//         this.raza = raza;
//     }

//     ladrar(){
//         alert("WAW!");
//     }    
// }

// const PERRO = new perro('perro', '5', 'Marrón', 'Pudul');

// PERRO.verInfo();
// PERRO.ladrar();


//MÉTODOS ESTÁTICOS----------------------------------------------------------------------------------------------------------------------
//Un método estático es aquel que no necesita que la clase se defina para poder ser creado. 
//Un método estático no necesita las propiedades. 

//MÉTODOS SETTERS Y GETTERS-----------------------------------------------------------------------------------------------------------
//El setter es un método, pero usualmente se lo toma como una propiedad. Por eso al llamarlo en vez de poner perrito.setRaza() se pone perrito.setRaza = ''.
//El setter es para colocar o cambiar un valor de una propiedad.
//El getter es obtener una propiedad o información de la clase.

// class animal{
//     constructor(especie, edad, color){
//         this.especie = especie;
//         this.edad = edad;
//         this.color = color;
//         this.info = `El animal es un ${this.especie}. Tiene ${this.edad} años y es de color ${this.color}`;
//     }
//     darInfo(){
//         document.write(this.info + '<br>')
//     }    
// }

// class perro extends animal{
//     constructor(especie,edad,color,raza){
//         super(especie,edad,color);
        
//     }

//     static ladrar(){
//         alert('WAW');
//     }

//     set setRaza(razaR){
//         this.raza = razaR;
//     }

//     get getRaza(){
//         return this.raza;
//     }
// }

// perro.ladrar();
// const perrito = new perro('perro', 1, 'negro', 'Alemán');
// perrito.darInfo();
// perrito.setRaza = 'Doberman';
// document.write(perrito.raza);
// document.write('<br>' + perrito.getRaza);

/*
PROBLEMA A
Mostrarle las particularidades de los 3 celulares.
Cada uno debe tener color, peso, resolución de pantalla, cámara y memoria ram.
Debe poder prender, reiniciar, tomar fotos y grabar.

PROBLAMA B
Implementar todas estas cualidades en los celulares de alta gama dpmde temdrá una cámara extra, 
puede grabar superLento y puede hacer reconocimiento facial


PROBLEMA C
Crear un sistema para decidir que app descargar.
Debe contener la cantidad de descargas puntuación y peso.
Se deben poder instalar, abrir, cerrar y desinstalar.
*/


// class celular{ 
//     constructor(color, peso, resulucion_pantalla, camara, ram){
//         this.color = color;
//         this.peso = peso;
//         this.resulucion_pantalla = resulucion_pantalla;
//         this.camara = camara;
//         this.ram = ram;   
//         this.info = `El celular es de color ${this.color} con un peso de ${this.peso} con una resolución de ${this.resulucion_pantalla} con una cámara de ${this.camara}
//         y una ram de ${this.ram}`;
//         this.encendido = false;
//     }
//     presionarBotonEncedido() {
//         if(this.encendido == false){
//             alert('celular prendido');
//             this.encendido = true;
//         }else{
//             alert('celular apagado');
//             this.encendido = false;
//         }
//     }
//     reiniciar() {
//         if(this.encendido == true){
//             alert('celular reiniciado')            
//         }else{
//             alert('celular apagado')
//         }
//     }
//     tomar_fotos() {
//         alert(`se tomó foto en una resolución de ${this.camara}`);
//     }
//     grabar() {
//         alert(`se grabó en una resolución de ${this.camara}`);
//     }
//     get getInfoCelular(){
//         return this.info;
//     }
// }

// const celular1 = new celular('negro', '200g', '1080px', '1080 x 2340', '4GB')
// document.write(celular1.getInfoCelular + '<br>');

// const celular2 = new celular('blanco', '150g', '1440px', '1280 x 720', '8GB')
// document.write(celular2.getInfoCelular  + '<br>');

// const celular3 = new celular('azul', '300g', '1080px', '960 x 540', '16GB' )
// document.write(celular3.getInfoCelular + '<br>');

// celular1.presionarBotonEncedido();
// celular1.tomar_fotos();
// celular1.grabar();
// celular1.reiniciar();

// class celularAltaGama extends celular{
//     constructor(color, peso, resulucion_pantalla, camara, ram, camaraExtra){
//         super(color, peso, resulucion_pantalla, camara, ram);
//         this.camaraExtra = camaraExtra;
//     }
//     grabarSuperLento(){
//         document.write(`El celular grabó lento`);
//     }

//     reconocimientoFacial(){
//         document.write(`El celular reconoció la cara`);
//     }

//     get getInfoCelularAltaGama(){
//         return this.getInfoCelular + `. La cámara frontal tiene una resolución de ${this.camaraExtra}`;
//     }
// }

// const celular4 = new celularAltaGama('violeta', '150g', '1440px', '1920 x 1080', '16GB', '1280 x 720');
// document.write(celular4.getInfoCelularAltaGama + '<br>');

// class programa{
//     constructor(descargas, puntuacion, peso){
//         this.descargas = descargas;
//         this.puntuacion = puntuacion;
//         this.peso = peso;
//         this.infoApp = `La app tiene ${this.descargas} con una puntuación de ${this.puntuacion} con un peso de ${this.peso}`;
//         this.abierto = false;
//         this.instalado = false;
//     }

//     Instalar(){
//         if(this.instalado == false){
//             this.instalado = true;
//             alert('App Instalada Correctamente');
//         }   
//     }
//     Desinstalar(){
//         if(this.instalado == true){
//             this.instalado = false;
//             alert('App Desinstalada Correctamente');
//         }
//     }

//     Abrir(){
//         if(this.abierto == false && this.instalado == true){
//             this.abierto = true;
//             alert('App Abierta')
//         }
//     }

//     Cerrar(){
//         if(this.abierto == true && this.instalado == true){
//             this.abierto = false;
//             alert('App Cerrada');
//         }
//     }

//     get getInfoApp(){
//         return this.infoApp + '<br>';
//     }
// }

// const app1 = new programa(496, 3.8, `900mb`);
// document.write(app1.getInfoApp)
// app1.Instalar();
// // app1.Desinstalar();
// app1.Abrir();
// app1.Cerrar();
