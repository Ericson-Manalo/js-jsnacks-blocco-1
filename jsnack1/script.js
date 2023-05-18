
/* Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti. */



// chiedo all'utente di inserire 10 numeri

let sum = 0;

for ( let i = 0; i<10; i++){


    const Numb = parseInt(prompt ('Insert a number'));

    sum += Numb;


}

console.log("La somma dei numeri inseriti è di ", sum);