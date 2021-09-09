//Console - cofla05
/*
Se necesita saber si se aprobó o desaprobó las materias. 
Para aprobar necesita el 90% de asistencia.
El promedio por materia debe ser al menos 7 / 10
Debe tener al menos 75% de los trabajos prácticos entregados. 
*/

// const materias = {
//     fisica: [90, 6,3,'fisica'],
//     matematica: [84,8,2,'matematica'],
//     logica: [92,8,4,'logica'],
//     quimica: [96,8,4,'quimica'],
//     calculo: [91,6,3,'calculo'],
//     programacion: [79,7,4,'programacion'],
//     biologia: [75,9,2,'biologia'],
//     bbdd: [98,9,1,'bbdd'],
//     algebra: [100,10,4,'algebra']
// }

// const asistencia = () =>{
//     for(materia in materias){
//         let asistencias = materias[materia][0];
//         let promedio = materias[materia][1];
//         let trabajos = materias[materia][2];
//         // document.write(asistencias);
//         console.log(materias[materia][3]);

//         if(asistencias >= 90){                        
//             console.log(`%c Asistencia mayor al 90%`, "color:green");
//         }else{            
//             console.log('%c Desaprobado por faltas', "color:red");
//         }
//         if(promedio >= 7){
//             console.log(`%c Promedio mayor a 7`, "color:green");
//         }else{            
//             console.log('%c Desaprobado por promedio bajo', "color:red");
//         }
//         if(trabajos >= 3){
//             console.log(`%c Cantidad de trabajos entregados mayor al 75%`, "color:green");
//         }else{            
//             console.log('%c Desaprobado por falta de entrega de trabajos', "color:red");
//         }
//     }
// }

// asistencia();

/*
Organizar las actividades diariamente.
Utilizar la consola para organizar todo.
El tiempo por tarea no debe superar las 4 horas.
*/

let trabajo = "240 minutos de trabajo";
let descanso = "10 minutos de descanso";
let estudio = "100 minutos de estudio";
let tp = "100 minutos de hacer trabajos prácticos";
let homework = "30 minutos de homework";

for(let i=0; i<14;i++){
    if(i==0){
        console.group('Semana 1');
    }
    console.groupCollapsed(`Día ${i+1}`);
    console.log(trabajo);
    console.log(descanso);
    console.log(estudio);
    console.log(tp);
    console.log(homework);
    console.groupEnd();    
    if(i==6){
        console.groupEnd();
        console.group('Semana 2');
        
    }
}




