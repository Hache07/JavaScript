/* while y do - while 
    while: se ejecuta siempre y cuando la condición se cumpla.
    do - while: se ejecuta almenos una ves las instrucciones que estan dentro del do.
*/

let contador = 0;

while(contador < 10) {
    console.log("while "+contador);
    contador++;
}

do {
    console.log("do while "+contador);
    contador++;
} while (contador < 10);

