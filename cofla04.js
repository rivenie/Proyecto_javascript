//Calcular potencias, raices cuadradas y cúbicas.
/*
class calculadora{
    constructor(){}

    potenciacion(num, exp){
        let numero = num;
        for(let i = 1;i < exp; i++){
            numero = numero * num;
        }
        return numero;
    }

    raizCuadrada(num){
        let numero = Math.sqrt(num);
        return numero;
    }

    raizCubica(num){
        let numero = Math.cbrt(num);
        return numero;
    }
}

const calcular = new calculadora();



alert('¿Que operación deseas hacer?');
let operacion = prompt("1. Potenciacion, 2. Raiz Cuadrara, 3. Raiz Cubica");

if(operacion == '1'){
    let numero1 = prompt('Número a exponenciar');
    let numero2 = prompt('Exponente');
    let resultado = calcular.potenciacion(numero1, numero2);
    alert(resultado);
    
}else if(operacion == '2'){
    let numero1 = prompt('Numero a sacar raíz');
    let resultado = calcular.raizCuadrada(numero1);
    alert(resultado);
}else if(operacion = '3'){
    let numero1 = prompt('Numero a sacar raíz');
    let resultado = calcular.raizCubica(numero1);
    alert(resultado);
}
*/

//Crear una función que al pasarle como parámetro la materia nos devuelva: *profesor asignado *el nombre de todos los alumnos.--------------------------------------------
//Crear una función que nos diga en cuantas clases está cofla.
//Nombrar las clases en las que está y los profesores de cada una.

// const obtenerInfoMaterias = (materia) => {
//     let materias = {
//         fisica: ['Rodriguez', 'Cofla', 'Matias', 'Brenda', 'Pepito', 'Clara'],
//         logica: ['Ramos', 'Cofla', 'Matias', 'Brenda', 'Pepito'],
//         literatura: ['Palomino', 'Cofla', 'Matias', 'Clara'],
//         quimica: ['Lamar', 'Brenda', 'Pepito', 'Clara']
//     }
//     if (materias[materia] !== undefined) {
//         return [materias[materia], materia];
//     } else if(materias[materia] == undefined){
//         return materias;
//     }
// }

// const mostrarInfoMaterias = (materia) => {
//     let tenerInfo = obtenerInfoMaterias(materia);

//     if (tenerInfo[1] !== undefined) {
//         let profesor = tenerInfo[0].shift().toUpperCase();
//         document.write(`Los alumnos de la materia de <b>${tenerInfo[1]}</b>: <span style=color:red;>${tenerInfo[0]}</span>. 
//         <b>Con el profesor <span style=color:blue;>${profesor}</span></b><br><br>`);
//     } else if(tenerInfo[0] == undefined){
//         document.write("La materia no existe. <br><br>");
//     }
// }

// const cantidadClasesCofla = (nombre) => {
//     let cantidadMatriculados = 0;
//     let cursosMatriculados = [];
//     let tenerInfo = obtenerInfoMaterias();    
//     for(info in tenerInfo){        
//         if(tenerInfo[info].includes(nombre)){
//             cantidadMatriculados++;
//             cursosMatriculados.push(info);
//         }
//     }
//     return `La cantidad de cursos en los que está cofla son ${cantidadMatriculados}. <br> Los cursos son: ${cursosMatriculados}`;
    
// }

// mostrarInfoMaterias('fisica');
// mostrarInfoMaterias('logica');
// mostrarInfoMaterias('literatura');
// mostrarInfoMaterias('quimica');

// let matriculados = cantidadClasesCofla('Cofla')
// document.write(matriculados);

/*
Crear una función para preguntarle a cofla en que materia se quiere inscribir.
Si ya hay 20 alumnos anotados en la materia negarle la inscripción.
Si hay menos de 20 alumnos inscribir a Cofla y añadirlo a la lista de alumnos.
*/

    let materias = {
        fisica: ['Rodriguez', 'Cofla', 'Matias', 'Brenda', 'Pepito', 'Clara'],
        logica: ['Ramos', 'Cofla', 'Matias', 'Brenda', 'Pepito'],
        literatura: ['Palomino', 'Cofla', 'Matias', 'Clara'],
        quimica: ['Lamar', 'Brenda', 'Pepito', 'Clara']
    }
  
        // document.write(materias['fisica'][4] + '<br>');            
        for(materia in materias){
            
            materias[materia].shift();
        }        
        

    const inscribir = (alumno, materia) =>{        
        let personas = materias[materia];        
        // let profesor = materias[materia][0];
        let alumnos = personas;        
        if(alumnos.length >= 20){
            document.write('Lo siento el curso está lleno.')
        }else{
            materias[materia].push(alumno);
            document.write(`¡Felicidades! Usted se ha inscrito al curso de <b style=color:red>${materia.toUpperCase()}</b>.<br>
            Los alumnos inscritos son: <b style=color:blue>${materias[materia]}</b>.<br>`)
            
        }

    }

    

    inscribir('José','fisica');
    inscribir('Maria','fisica');
    inscribir('Roberto','fisica');
    inscribir('Maritza','fisica');
    inscribir('Romero','fisica');
    inscribir('Homero','fisica');
    inscribir('Ambar','fisica');
    inscribir('Pedro','fisica');
    inscribir('Omar','fisica');
    inscribir('Valeria','fisica');
    inscribir('Isac','fisica');
    inscribir('Carlos','fisica');
    inscribir('Estefania','fisica');
    inscribir('Nona','fisica');
    inscribir('Sebastian','fisica');
    inscribir('Josefina','fisica');
    