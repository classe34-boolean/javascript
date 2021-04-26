// Chiediamo all'utente il suo nome e salutiamolo

var nomeUtente = prompt("Come ti chiami?");
console.log(nomeUtente);

document.getElementById("saluto").innerHTML = "Ciao " + nomeUtente;