// Sfruttiamo le timing functions per fare il conto alla rovescia per la fine 
// di quest'anno! Che scadra' quindi a capodanno!

const giorniEl = document.querySelector('#giorni');
const oreEl = document.querySelector('#ore');
const minutiEl = document.querySelector('#minuti');
const secondiEl = document.querySelector('#secondi');

// Mi memorizzo la data che voglio raggiungere
let capodanno = new Date (2024,0,1,0,0,0,0);



const timer = setInterval (function() {
    // trovo la data di adesso
    let adesso = new Date();

    // trovo la differenza con adesso
    const dateDifference = capodanno.getTime() - adesso.getTime()

    

    secondiEl.innerHTML = Math.floor((dateDifference % (60  * 1000)) / 1000);
    minutiEl.innerHTML = Math.floor((dateDifference % (60 * 60 * 1000)) / (1000 * 60));
    oreEl.innerHTML = Math.floor((dateDifference % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60));
    giorniEl.innerHTML = Math.floor((dateDifference / (24 * 60 * 60 * 1000)));

  

    // scrivo e aggiorno in pagina il countdown
    if (dateDifference <= 0) {
        clearInterval(timer);
    }



}, 1000)