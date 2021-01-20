document.getElementById("boton").onclick = function() {
    let salida = document.getElementById("numeroCiclos").value;
    
    let repeticiones = 0;

    while(repeticiones <= salida) {
        document.getElementById("resultado").innerHTML += `Eres un perdedor x ${repeticiones} </br>`;
        repeticiones++;
    }
}