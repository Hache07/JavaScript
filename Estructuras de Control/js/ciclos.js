/* 
    while y do - while 
    while: se ejecuta siempre y cuando la condición se cumpla.
    do - while: se ejecuta almenos una ves las instrucciones que estan dentro del do.
*/

let contador = 0;

while(contador < 10) {
    //console.log("while "+contador);
    contador++;
}

do {
    //console.log("do while "+contador);
    contador++;
} while (contador < 10);

/* for */

// for(let i = 0; i < 10; i++) {
//     console.log(i);
// }

// let frutas = ["uva", "pera", "manzana", "fresa", "pomelo", "sandia"];

// for(let i = 0; i < frutas.length; i++) {
//     console.log(frutas[i]);
// }

/* 
    for in
    for-in: nos ayuda a recorrer las propiedades de un objeto. 
*/

const persona = {
    nombre: 'Hector',
    apellido: 'Ajumado',
    edad: 26
}

for(let propiedad in persona) { 
    console.log(`Key: ${propiedad}: ${persona[propiedad]}`)
}