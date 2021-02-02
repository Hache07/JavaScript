const numeros = [1,2,3];

// Sin destructuración
let uno = numeros[0],
    dos = numeros[1],
    tres = numeros[2];

console.log(uno, dos, tres);

// Con destructuración
let [one, two, three] = numeros;

console.log(one, two, three);

let persona = {
    nombre: "Hector",
    apellido: "Ajumado",
    edad: "26"
}

let {edad, apellido, nombre} = persona;

console.log(nombre, edad, apellido);