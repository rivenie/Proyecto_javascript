/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
PROBLEMA A:
Se compró una máquina que deja pasar solamente a los mayores de edad. 
El primero que entre despues de las 2 AM no paga.

PROBLEMA B:
Crear Mini-Sistema para registrar presentes (P) y Ausentes (A)
Pasados 30 días, mostrar la situación final del alumno (número total de P y A)
Como condicion se puede tener un Máximo de 10% de ausencias por semestre

PROBLEMA C:
Crear calculadora

*/

//Problema A:--------------------------------------------------------------------------------------

// let free = false;

// function maquinaMayorEdad(time){
//     let edad = prompt("Dime tu edad");
//     if(edad >= 18){
//         if (time >= 2 && time <= 7 && free == false) {
//             alert(`Puedes pasar gratis porque son las ${time} de la noche`);
//             free = true;
//         }else{
//             alert("Puedes pasar, pero debes pagar porque aún no son las 2 AM");
//         }
//     }else{
//         alert("Eres muy chico");
//     }
// }
//  maquinaMayorEdad(1);
//  maquinaMayorEdad(1.5);
//  maquinaMayorEdad(2);
//  maquinaMayorEdad(2.5);

// Problema B:--------------------------------------------------------------------------------------

let cantidad = prompt('¿Cuantos alumnos son?');
let alumnosTotales = [];

for(let i = 0; i<cantidad; i++){
        alumnosTotales[i] = [prompt('Nombre del alumno ' + (i+1)),0];
    }

const tomarAsistencia = (nombre,p) =>{
    let presencia = prompt(nombre);
    if(presencia == 'p' || presencia == 'P'){
        alumnosTotales[p][1]++;
    }
}

for(let i=0;i<30;i++){
    for(alumno in alumnosTotales){
        tomarAsistencia(alumnosTotales[alumno][0],alumno);
    }
}

for(alumno in alumnosTotales){
    let resultado = `${alumnosTotales[alumno][0]}: <br>
    ________________Presentes: <b> ${alumnosTotales[alumno][1]}</b> <br>
    ________________Ausentes: <b> ${30 - alumnosTotales[alumno][1]}</b>`;
    if(30 - alumnosTotales[alumno][1] > 18){
        resultado += "<b> REPROBADO POR INASISTENCIAS</b><br></br>"
    }else{
        resultado+="<br></br>"
    }
    document.write(resultado);
}

//Problema C--------------------------------------------------------------------------------

// const sumar = (num1,num2) =>{
//     return parseInt(num1) + parseInt(num2);
// }

// const restar = (num1,num2) =>{
//     return parseInt(num1) - parseInt(num2);
// }

// const multiplicar = (num1,num2) =>{
//     return parseInt(num1) * parseInt(num2);
// }

// const dividir = (num1,num2) =>{
//     return parseInt(num1)/parseInt(num2);
// }

// alert("¿Que operación vas a hacer?");

// let operacion = prompt(`1. Suma, 2. Resta, 3. Multiplicación, 4. División`)

// if(operacion == 1){
//     let num1 = prompt("Escribe el primer número");
//     let num2 = prompt("Escribe el segundo número");
//     let resultado = sumar(num1,num2);
//     alert(`El resultado es ${resultado}`);
// }else if(operacion == 2){
//     let num1 = prompt("Escribe el primer número");
//     let num2 = prompt("Escribe el segundo número");
//     let resultado = restar(num1,num2);
//     alert(`El resultado es ${resultado}`);
// }else if(operacion == 3){
//     let num1 = prompt("Escribe el primer número");
//     let num2 = prompt("Escribe el segundo número");
//     let resultado = multiplicar(num1,num2);
//     alert(`El resultado es ${resultado}`);
// }else if(operacion == 4){
//     let num1 = prompt("Escribe el primer número");
//     let num2 = prompt("Escribe el segundo número");
//     let resultado = dividir(num1,num2);
//     alert(`El resultado es ${resultado}`);
// }else alert(`No se reconoce la operación. Actualiza la página.`)


// PROBLEMA C:
// Crear calculadora

// const sumar = (num1,num2) => {
//     let resultado = num1 + num2
//     return resultado;
// }

// const restar = (num1,num2) => {
//     let resultado = num1 - num2
//     return resultado;
// }

// const multiplicar = (num1,num2) => {
//     let resultado = num1 * num2
//     return resultado;
// }

// const dividir = (num1,num2) => {
//     let resultado = num1 / num2
//     return resultado;
// }

// alert('Elige que operación vas a realizar');

// let operacion = prompt("1.Suma 2.Resta 3.Multiplicación 4.División")

// if(operacion == 1){
//     let num1 = parseInt(prompt('Elige el primer número'));
//     let num2 = parseInt(prompt('Elige el segundo número'));
//     resultado = sumar(num1, num2);
//     alert(`El resultado es: ${resultado}`);
// }else if(operacion == 2){
//     let num1 = parseInt(prompt('Elige el primer número'));
//     let num2 = parseInt(prompt('Elige el segundo número'));
//     resultado = restar(num1, num2);
//     alert(`El resultado es: ${resultado}`);
// } else if(operacion == 3){
//     let num1 = parseInt(prompt('Elige el primer número'));
//     let num2 = parseInt(prompt('Elige el segundo número'));
//     resultado = multiplicar(num1, num2);
//     alert(`El resultado es: ${resultado}`);
// }else if(operacion == 4){
//     let num1 = parseInt(prompt('Elige el primer número'));
//     let num2 = parseInt(prompt('Elige el segundo número'));
//     resultado = dividir(num1, num2);
//     alert(`El resultado es: ${resultado}`);
// }




