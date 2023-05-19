/* Chiedi un numero di 4 cifre all’utente
e calcola la somma di tutte le cifre che compongono il numero. */


let numberOfFour = prompt('Inserisci un numero di 4 cifre');

if (!(numberOfFour > 999 && numberOfFour < 9999)){ 
    numberOfFour = prompt('Inserisci un numero di 4 cifre');
}

let sum = 0;

for ( let i = 0; i < numberOfFour.length; i++){
    sum += parseInt(numberOfFour.charAt(i)); 
}

console.log(sum); 