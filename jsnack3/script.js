/* Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,  se è dispari inseriscilo nell’array.*/

const arrayNum = [];

for (let i = 0; i < 6; i++){

    const numberChosen = parseInt(prompt('Insert a number'));

    if (numberChosen % 2 === 1 ){
        arrayNum.push(numberChosen);
        console.log(arrayNum[numberChosen]);
    }else{
        console.log('Non ci sono numeri dispari');
    }

}


