/* if - else */

// let edad = 17;

// if(edad > 17) {
//     console.log(`Tienes ${edad} anios, por lo tanto eres mayo de edad.`);
// } else {
//     console.log(`Tienes ${edad} anios, por lo tanto eres menor de edad.`);
// }


// console.log("------ OPERADOR TERNARIO ------");

// let result = (edad > 17)
//     ? console.log(`Eres mayor de edad.`)
//     : console.log(`Eres menor de edad.`);

/* if - else if - else (if anidados)*/

// let hora = 19;

// if(hora > 0 && hora < 6) {
//     console.log(`Son las ${hora} déjame dormir por favor.`);
// } else if(hora > 5 && hora < 12) {
//     console.log('Buenos días.');
// } else if(hora >= 12 && hora < 19) {
//     console.log('Buenas tardes.');
// } else {
//     console.log('Buenas noches.');
// }

// console.log('------ OPERADOR TERNARIO ------');

// let result = (hora > 0 && hora < 6)
//     ? `Son las ${hora} déjame dormir por favor.`
//     : (hora > 5 && hora < 12)
//         ? 'Buenos días.'
//         : (hora >= 12 && hora < 19)
//             ? 'Buenas tardes.'
//             : 'Buenas noches.';

// console.log(result);

/* Operador ternario (condicion) ? sentencia_1 : sentencia_2 */

console.log('------ OPERADOR TERNARIO ------');

let edad = 25;
let eresMayor = (edad >= 18) ? 'Eres mayor de edad.' : 'Eres menor de edad.';

console.log(eresMayor);