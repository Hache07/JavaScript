/* 
    Operadores aritmeticos + - * / % () 
*/

let a = 5+(5-10)*3;
let modulo = 5 % 2;

// console.log(a);
// console.log(`El modulo de la division 5/2 es: ${modulo}`);

/*
    Operadores relacionales < > <= >= = == === != !==
    = Un igual es asiganación de variables.
    == Dos iguales es comparación de valores.
    === Tres iguales (Comparación estricta) es comparación de valores y tipos de datos.
*/

/* console.log(8 > 9);
console.log(9 > 8);
console.log(8 >= 9);
console.log(9 >= 8);
console.log(7 > 7);
console.log(7 >= 7);

console.log(7 == 7);
console.log("7" == 7);
console.log(0 == false);

console.log(7 === 7);
console.log("7" === 7);
console.log(0 === false); */

/*
    Operadores de incremento y decremento
*/

let i = 1;
// i = i +3;
// i += 3;

// Operador unario
// i = i + 1;
//i++;
i--;

// console.log(i);

/*
    Operadores logicos
    ! - Not: Niega, es decir lo que es verddadero lo vuelve falso y viceversa.
    || - Or: Cuado tengo dos o mas condiciones, con que una se cumpla, es decir que sea verdadera, la salida sera verdadera.
    && - And: Cuando tengo dos omas condiciones, con que una no se cumpla, es decir que sea falsa, la salida sera falsa.
*/

console.log(!true);
console.log(!false);
console.log((9 === 9) || ("9" === 9));
console.log((9 === 9) && ("9" === 9));
