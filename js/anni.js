// Chiediamo all'utente la sua età e comunichiamo l'anno di nascita.

var etaStringa = prompt("Quanti anni hai?");
console.log(etaStringa);
var eta = parseInt(etaStringa);
console.log(eta);

var annoCorrente = 2021;
console.log(annoCorrente);

var annoNascita = annoCorrente - eta;
console.log(annoNascita);

document.getElementById('anni').innerHTML = eta;
document.getElementById('anno-nascita').innerHTML = annoNascita;