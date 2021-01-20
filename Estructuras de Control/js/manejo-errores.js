// try {
//     console.log("En el try se agrega el codigo a evaluar.")
// } catch (error) {
//     console.log("catch, captura cualquier error lanzado en el try.")
// } finally {
//     console.log("El bloque finally se ejecutara siempre al final de un bloque try-catch.")
// }

try {
    let numero = "k";
    if(isNaN(numero)) {
        throw new Error ("Debe ingresar un número por favor.")
    }
    console.log(`El resultado es: ${numero * numero}`);
} catch (error) {
    console.log(error)
}