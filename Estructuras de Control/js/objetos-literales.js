let nombre = "Hector",
    apellido = "Ajumado",
    edad = 26;

const persona = {
    nombre: nombre,
    apellido: apellido,
    edad: edad,
    hablar: function() {
        console.log("Hola mundo.")
    }
}

console.log(persona);
persona.hablar();


// Objetos literales

const person = {
    nombre,
    apellido,
    edad,
    sexo: "Masculino",
    hablar() {
        console.log("Hola mundo como estan?")
    }
}

console.log(person);
person.hablar()