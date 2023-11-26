// Sfruttiamo le timing functions per fare il conto alla rovescia per la fine 
// di quest'anno! Che scadra' quindi a capodanno!

const giorniEl = document.querySelector('#giorni');
const oreEl = document.querySelector('#ore');
const minutiEl = document.querySelector('#minuti');
const secondiEl = document.querySelector('#ore');

// Mi memorizzo la data che voglio raggiungere
let capodanno = new Date (2024,0,1,0,0,0,0);

// trovo la data di adesso
let adesso = new Date();

// trovo la differenza con adesso
const dateDifference = capodanno.getTime() - adesso.getTime()

console.log(dateDifference)

const secondi = Math.floor(dateDifference % (60  * 1000)) / 1000;
const minuti = Math.floor(dateDifference % (60 * 60 * 1000)) / (1000 * 60);
const ore = Math.floor(dateDifference % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60);
const giorni = Math.floor(dateDifference / (24 * 60 * 60 * 1000));

console.log(secondi)
console.log(minuti)
console.log(ore)
console.log(giorni)

// scrivo e aggiorno in pagina il countdown