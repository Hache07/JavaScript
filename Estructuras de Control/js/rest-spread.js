//Parametro REST
function sumar(a, b, ...c) {
    let resultado = a + b;

    c.forEach(function (n) {
        resultado += n
    });

    return resultado;
}

console.log(sumar(1,2));
console.log(sumar(1,2,3));
console.log(sumar(1,2,3,4));
console.log(sumar(1,2,3,4,5));
console.log(sumar(1,2,3,4,5,6));
console.log(sumar(1,2,3,4,5,6,7));
console.log(sumar(1,2,3,4,5,6,7,8));



// Operador Spread
const numeros1 = [1,2,3,4,5],
      numeros2 = [6,7,8,9,0];

console.log(numeros1, numeros2);

let arr = [...numeros1, ...numeros2];

console.log(arr);
