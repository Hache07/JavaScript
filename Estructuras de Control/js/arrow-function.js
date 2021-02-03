const saludar = () => console.log(`Hola`);
saludar();

const nombre = name => console.log(`Hola ${name}`);
nombre("Irma")

const sumar = (a, b) => a + b;

console.log(sumar(9,9));

const bloque = () => {
    console.log("Uno");
    console.log("Dos");
    console.log("Tres");
}

bloque();

const numeros = [1,2,3,4,5,6];

console.log(numeros);

numeros.forEach((elemento, index) => {
    console.log(`${elemento} esta enla posicion ${index}`);
})