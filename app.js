// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function agregarAmigo(){
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    //Validar nombres duplicados
    if (amigos.some(amigo => amigo.toLowerCase() === nombre.toLowerCase())) {
        alert("Ups! Ese nombre ya está en la lista.");
        return;
    }
    amigos.push(nombre);
    mostrarLista();
    input.value = "";
    input.focus();
}

function mostrarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    amigos.forEach( amigo => {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Agrega al menos un nombre antes de sortear!.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    let elegido = amigos[indiceAleatorio];

    document.getElementById("resultado").textContent = "🎉 El amigo secreto es: " + elegido + " 🎉";
}