/* if - else */

let edad = 17;

if(edad > 17) {
    console.log(`Tienes ${edad} anios, por lo tanto eres mayo de edad.`);
} else {
    console.log(`Tienes ${edad} anios, por lo tanto eres menor de edad.`);
}


console.log("------ OPERADOR TERNARIO ------");

let result = (edad > 17)
    ? console.log(`Eres mayor de edad.`)
    : console.log(`Eres menor de edad.`);