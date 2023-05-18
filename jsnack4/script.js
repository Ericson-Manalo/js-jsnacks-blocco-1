/* Chiedi un numero di 4 cifre all’utente
e calcola la somma di tutte le cifre che compongono il numero. */

const firstNum = parseInt(prompt ('Insert a number'));
const secondNum = parseInt(prompt ('Insert another number'));
const thirdNum = parseInt(prompt ('Insert another number'));
const fourthNum = parseInt(prompt ('Insert a last number'));

let result = firstNum.value + secondNum.value + thirdNum.value + fourthNum.value;
console.log(result);