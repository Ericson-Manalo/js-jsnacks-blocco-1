/* In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa. */

const invitedList = ['Maria', 'Mario', 'Luigi', 'Sara'];

const userName = prompt ('Type your name to see if you are invited');

let amIInvited = false;

for (let i = 0; i < invitedList.length; i++){;

    if (invitedList[i] == userName){
        amIInvited = true;
    }
}

if(amIInvited){
    console.log('Hello You are invited!! Gatsby will wait for you!')
}else{
    console.log('I am sorry you are not in the list!')
}
