let numeros = [1,2,3,4,5,6,7,8,9,0];

console.info("------ BREAK ------");

for(let i = 0; i < numeros.length; i++) {
    if(i === 5) {
        break;
    }
    console.log(numeros[i])
}

console.info("------ CONTINUE ------");

for(let i = 0; i < numeros.length; i++) {
    if(i === 5) {
        continue;
    }
    console.log(numeros[i])
}